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
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { DockerContainersService } from './docker-container.service';
import { ContainerListQueryDto, ContainerCreateDto, ContainerIdParamDto, ContainerLogsQueryDto, ContainerResizeQueryDto, ContainerRenameQueryDto, ContainerUpdateDto, ContainerStartDto, ContainerStopQueryDto, ContainerRestartQueryDto, ContainerKillQueryDto, ContainerAttachQueryDto, ContainerStatsQueryDto, ContainerCreateResponseDto, ContainerInspectResponseDto, ContainerLogsResponseDto, ContainerSummaryDto, ContainerWaitResponseDto } from './api-types/docker-containers.dto';

@ApiTags('containers')
@Controller('containers')
export class DockerContainersController {
  constructor(private readonly docker: DockerContainersService) { }

  @Get()
  @ApiOkResponse({ type: [ContainerSummaryDto] })
  listContainers(@Query() query?: ContainerListQueryDto) {
    return this.docker.listContainers(query);
  }

  @Post('create')
  @ApiCreatedResponse({ type: ContainerCreateResponseDto })
  createContainer(@Body() body: ContainerCreateDto) {
    return this.docker.createContainer(body);
  }

  @Get(':id/json')
  @ApiOkResponse({ type: ContainerInspectResponseDto })
  inspectContainer(@Param() { id }: ContainerIdParamDto) {
    return this.docker.inspectContainer(id);
  }

  @Get(':id/logs')
  @ApiOkResponse({ type: ContainerLogsResponseDto, description: 'Raw log output' })
  getContainerLogs(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerLogsQueryDto,
  ) {
    return this.docker.getContainerLogs(id, query);
  }

  @Post(':id/wait')
  @ApiOkResponse({ type: ContainerWaitResponseDto })
  async waitContainer(
    @Param() { id }: ContainerIdParamDto,
  ) {
    return this.docker.waitContainer(id);
  }


  @Post(':id/resize')
  @HttpCode(204)
  resizeContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerResizeQueryDto,
  ) {
    return this.docker.resizeContainer(id, query);
  }

  @Post(':id/rename')
  @HttpCode(204)
  renameContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerRenameQueryDto,
  ) {
    return this.docker.renameContainer(id, query);
  }

  @Post(':id/update')
  @HttpCode(200)
  updateContainer(
    @Param() { id }: ContainerIdParamDto,
    @Body() body: ContainerUpdateDto,
  ) {
    return this.docker.updateContainer(id, body);
  }

  @Post(':id/start')
  @HttpCode(204)
  startContainer(
    @Param() { id }: ContainerIdParamDto,
    @Body() body?: ContainerStartDto,
  ) {
    return this.docker.startContainer(id, body);
  }

  @Post(':id/stop')
  @HttpCode(204)
  stopContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerStopQueryDto,
  ) {
    return this.docker.stopContainer(id, query);
  }

  @Post(':id/restart')
  @HttpCode(204)
  restartContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerRestartQueryDto,
  ) {
    return this.docker.restartContainer(id, query);
  }

  @Post(':id/kill')
  @HttpCode(204)
  killContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerKillQueryDto,
  ) {
    return this.docker.killContainer(id, query);
  }

  @Post(':id/attach')
  @ApiOkResponse({ type: String, description: 'Attach to container stream' })
  attachContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerAttachQueryDto,
  ) {
    return this.docker.attachContainer(id, query);
  }

  @Get(':id/stats')
  @ApiOkResponse({ type: String, description: 'Streaming stats (raw)' })
  statsContainer(
    @Param() { id }: ContainerIdParamDto,
    @Query() query: ContainerStatsQueryDto,
  ) {
    return this.docker.statsContainer(id, query);
  }

  @Delete(':id')
  @HttpCode(204)
  removeContainer(@Param() { id }: ContainerIdParamDto) {
    return this.docker.removeContainer(id);
  }
}
