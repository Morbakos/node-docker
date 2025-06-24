import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import type {
  ContainerListQueryDto,
  ContainerLogsQueryDto,
  ContainerResizeQueryDto,
  ContainerRenameQueryDto,
  ContainerUpdateDto,
  ContainerStartDto,
  ContainerStopQueryDto,
  ContainerRestartQueryDto,
  ContainerKillQueryDto,
  ContainerAttachQueryDto,
  ContainerStatsQueryDto,
  ContainerWaitResponseDto,
} from './api-types/docker-containers.dto';

@Injectable()
export class DockerContainersService {
  constructor(private readonly http: HttpService) { }

  async listContainers(query?: ContainerListQueryDto) {
    const res = await lastValueFrom(this.http.get('/containers/json', { params: query }));
    return res.data;
  }

  async createContainer(body: any) {
    const res = await lastValueFrom(this.http.post('/containers/create', body));
    return res.data;
  }

  async inspectContainer(id: string) {
    const res = await lastValueFrom(this.http.get(`/containers/${id}/json`));
    return res.data;
  }

  async getContainerLogs(id: string, query: ContainerLogsQueryDto) {
    const res = await lastValueFrom(this.http.get(`/containers/${id}/logs`, {
      params: query,
      responseType: 'text',
    }));
    return res.data;
  }

  async waitContainer(id: string): Promise<ContainerWaitResponseDto> {
    const res = await lastValueFrom(
      this.http.post<ContainerWaitResponseDto>(`/containers/${id}/wait`),
    );
    return res.data;
  }


  async resizeContainer(id: string, query: ContainerResizeQueryDto) {
    await lastValueFrom(this.http.post(`/containers/${id}/resize`, null, { params: query }));
  }

  async renameContainer(id: string, query: ContainerRenameQueryDto) {
    await lastValueFrom(this.http.post(`/containers/${id}/rename`, null, { params: query }));
  }

  async updateContainer(id: string, body: ContainerUpdateDto) {
    const res = await lastValueFrom(this.http.post(`/containers/${id}/update`, body));
    return res.data;
  }

  async startContainer(id: string, body?: ContainerStartDto) {
    await lastValueFrom(this.http.post(`/containers/${id}/start`, body));
  }

  async stopContainer(id: string, query: ContainerStopQueryDto) {
    await lastValueFrom(this.http.post(`/containers/${id}/stop`, null, { params: query }));
  }

  async restartContainer(id: string, query: ContainerRestartQueryDto) {
    await lastValueFrom(this.http.post(`/containers/${id}/restart`, null, { params: query }));
  }

  async killContainer(id: string, query: ContainerKillQueryDto) {
    await lastValueFrom(this.http.post(`/containers/${id}/kill`, null, { params: query }));
  }

  async attachContainer(id: string, query: ContainerAttachQueryDto) {
    const res = await lastValueFrom(this.http.post(`/containers/${id}/attach`, null, { params: query }));
    return res.data;
  }

  async statsContainer(id: string, query: ContainerStatsQueryDto) {
    const res = await lastValueFrom(this.http.get(`/containers/${id}/stats`, { params: query }));
    return res.data;
  }

  async removeContainer(id: string) {
    await lastValueFrom(this.http.delete(`/containers/${id}`));
  }
}
