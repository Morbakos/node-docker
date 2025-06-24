const fs = require('fs/promises');
const path = require('path');
// const fetch = require('node-fetch');
const swagger2openapi = require('swagger2openapi');
// const openapiTS = require('openapi-typescript');
const { default: openapiTS, astToString } = require('openapi-typescript')
const yaml = require('js-yaml');

const SPEC_URL = 'https://raw.githubusercontent.com/moby/moby/master/api/swagger.yaml';
const OUTPUT_DIR = path.resolve('src/docker/api-types');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'docker-api-types.ts');

async function main() {
    console.log('➡️ Téléchargement de la spec Docker Swagger 2.0...');
    const res = await fetch(SPEC_URL);
    if (!res.ok) throw new Error(`Erreur téléchargement spec: ${res.statusText}`);
    const swaggerText = await res.text();

    await fs.writeFile(path.resolve("scripts", `dockerapi_spec_${new Date().toLocaleDateString().replaceAll(":", "-").replaceAll("/", "-")}.yml`), swaggerText, { "encoding": "utf-8", flag: "a+" })

    // const swaggerText = await fs.readFile("./scripts/dockerapi_spec.yml", { encoding: "utf-8" })

    console.log('➡️ Conversion Swagger 2.0 vers OpenAPI 3.0...');
    const swaggerObj = yaml.load(swaggerText);
    const { openapi: openapiNodeObject } = await swagger2openapi.convertObj(swaggerObj, {
        patch: true,
        warnOnly: true
    });

    const openapi = JSON.parse(JSON.stringify(openapiNodeObject));

    console.log('➡️ Génération des interfaces TypeScript...');

    const ast = await openapiTS(openapi, {
        exportType: true,
        immutable: true,
        propertiesRequiredByDefault: true,
        rootTypes: true
    })
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.writeFile(OUTPUT_FILE, astToString(ast), 'utf-8');

    console.log(`✅ Interfaces générées dans ${OUTPUT_FILE}`);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
