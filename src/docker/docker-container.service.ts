import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import type {
  ContainerIdParam,
  ContainerListQuery,
  ContainerLogsQuery,
  ContainerWaitQuery,
  ContainerCreateBody,
  ContainerResizeBody,
  ContainerListResponse,
  ContainerCreateResponse,
  ContainerInspectResponse,
  ContainerLogsResponse,
  ContainerWaitResponse,
  ContainerResizeResponse,
  ContainerStartResponse,
  ContainerStopResponse,
  ContainerRestartResponse,
  ContainerKillResponse,
  ContainerRemoveResponse,
} from './api-types/docker-containers.dto';

@Injectable()
export class DockerContainersService {
  constructor(private readonly http: HttpService) { }

  async listContainers(
    query?: ContainerListQuery,
  ): Promise<ContainerListResponse> {
    const res = await lastValueFrom(
      this.http.get<ContainerListResponse>('/containers/json', {
        params: query,
      }),
    );
    return res.data;
  }

  async createContainer(
    body: ContainerCreateBody,
    query?: unknown,
  ): Promise<ContainerCreateResponse> {
    const res = await lastValueFrom(
      this.http.post<ContainerCreateResponse>('/containers/create', body, {
        params: query,
      }),
    );
    return res.data;
  }

  async inspectContainer(
    path: ContainerIdParam,
    query?: unknown,
  ): Promise<ContainerInspectResponse> {
    const res = await lastValueFrom(
      this.http.get<ContainerInspectResponse>(`/containers/${path.id}/json`, {
        params: query,
      }),
    );
    return res.data;
  }

  async getContainerLogs(
    path: ContainerIdParam,
    query: ContainerLogsQuery,
  ): Promise<ContainerLogsResponse> {
    const res = await lastValueFrom(
      this.http.get(`/containers/${path.id}/logs`, {
        params: query,
        responseType: 'text',
      }),
    );
    return res.data;
  }

  async waitContainer(
    path: ContainerIdParam,
    query?: ContainerWaitQuery,
  ): Promise<ContainerWaitResponse> {
    const res = await lastValueFrom(
      this.http.post<ContainerWaitResponse>(`/containers/${path.id}/wait`, null, {
        params: query,
      }),
    );
    return res.data;
  }

  async resizeContainer(
    path: ContainerIdParam,
    body: ContainerResizeBody,
  ): Promise<ContainerResizeResponse> {
    await lastValueFrom(
      this.http.post(`/containers/${path.id}/resize`, body),
    );
  }

  async startContainer(path: ContainerIdParam): Promise<ContainerStartResponse> {
    await lastValueFrom(this.http.post(`/containers/${path.id}/start`, null));
  }

  async stopContainer(path: ContainerIdParam): Promise<ContainerStopResponse> {
    await lastValueFrom(this.http.post(`/containers/${path.id}/stop`, null));
  }

  async restartContainer(
    path: ContainerIdParam,
  ): Promise<ContainerRestartResponse> {
    await lastValueFrom(this.http.post(`/containers/${path.id}/restart`, null));
  }

  async killContainer(path: ContainerIdParam): Promise<ContainerKillResponse> {
    await lastValueFrom(this.http.post(`/containers/${path.id}/kill`, null));
  }

  async removeContainer(
    path: ContainerIdParam,
  ): Promise<ContainerRemoveResponse> {
    await lastValueFrom(this.http.delete(`/containers/${path.id}`));
  }
}
