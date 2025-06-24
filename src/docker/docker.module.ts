import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DockerContainersService } from './docker-container.service';
import { DockerContainersController } from './docker.controller';
import { Agent as HttpAgent } from 'http';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost',
      httpAgent: new HttpAgent({
        // socketPath est valide, même si TS ne le voit pas correctement
        // Cast explicite requis pour compatibilité Node 22 + TS
        ...({ socketPath: '/var/run/docker.sock' } as unknown as ConstructorParameters<typeof HttpAgent>[0]),
      }),
    }),
  ],
  controllers: [DockerContainersController],
  providers: [DockerContainersService],
})
export class DockerModule { }
