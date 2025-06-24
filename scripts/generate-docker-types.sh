#!/bin/bash

set -e

OUTPUT_FILE="src/docker/api-types/docker-api-types.ts"
JS_SCRIPT="scripts/convert-openapi-to-typescript.js"

echo "➡️ Génération des types TypeScript depuis la spec Docker..."
node $JS_SCRIPT

echo "✅ Génération terminée. Tu peux maintenant importer les types depuis '$OUTPUT_FILE'."
