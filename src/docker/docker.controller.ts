import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
} from '@nestjs/common';
import { DockerContainersService } from './docker-container.service';
import type {
  ContainerCreateBody,
  ContainerListQuery,
  ContainerLogsQuery,
  ContainerResizeBody,
  ContainerWaitQuery,
} from './api-types/docker-containers.dto';

@Controller('containers')
export class DockerContainersController {
  constructor(private readonly docker: DockerContainersService) { }

  @Get()
  async listContainers(@Query() query?: ContainerListQuery) {
    return this.docker.listContainers(query);
  }

  @Post('create')
  async createContainer(
    @Body() body: ContainerCreateBody,
  ) {
    return this.docker.createContainer(body);
  }

  @Get(':id/json')
  async inspectContainer(@Param('id') id: string) {
    return this.docker.inspectContainer({ id });
  }

  @Get(':id/logs')
  async getContainerLogs(
    @Param('id') id: string,
    @Query() query: ContainerLogsQuery,
  ) {
    return this.docker.getContainerLogs({ id }, query);
  }

  @Post(':id/wait')
  async waitContainer(
    @Param('id') id: string,
    @Query() query?: ContainerWaitQuery,
  ) {
    return this.docker.waitContainer({ id }, query);
  }

  @Post(':id/resize')
  async resizeContainer(
    @Param('id') id: string,
    @Body() body: ContainerResizeBody,
  ) {
    return this.docker.resizeContainer({ id }, body);
  }

  @Post(':id/start')
  @HttpCode(204)
  async startContainer(@Param('id') id: string) {
    return this.docker.startContainer({ id });
  }

  @Post(':id/stop')
  @HttpCode(204)
  async stopContainer(@Param('id') id: string) {
    return this.docker.stopContainer({ id });
  }

  @Post(':id/restart')
  @HttpCode(204)
  async restartContainer(@Param('id') id: string) {
    return this.docker.restartContainer({ id });
  }

  @Post(':id/kill')
  @HttpCode(204)
  async killContainer(@Param('id') id: string) {
    return this.docker.killContainer({ id });
  }

  @Delete(':id')
  @HttpCode(204)
  async removeContainer(@Param('id') id: string) {
    return this.docker.removeContainer({ id });
  }
}
