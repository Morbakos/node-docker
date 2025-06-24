import type { operations } from './docker-api-types';

// Path params
export interface ContainerIdParam { id: string }

// Query params
export type ContainerListQuery = NonNullable<
    operations['ContainerList']['parameters']['query']
>;
export type ContainerLogsQuery = NonNullable<
    operations['ContainerLogs']['parameters']['query']
>;
export type ContainerWaitQuery = NonNullable<
    operations['ContainerWait']['parameters']['query']
>;

// Request bodies
export type ContainerCreateBody = NonNullable<
    operations['ContainerCreate']['requestBody']
>['content']['application/json'];
export type ContainerResizeBody = NonNullable<
    operations['ContainerResize']['requestBody']
>['content']['application/json'];

// Response types
export type ContainerListResponse = NonNullable<
    operations['ContainerList']['responses'][200]
>['content']['application/json'];
export type ContainerCreateResponse = NonNullable<
    operations['ContainerCreate']['responses'][201]
>['content']['application/json'];
export type ContainerInspectResponse = NonNullable<
    operations['ContainerInspect']['responses'][200]
>['content']['application/json'];
export type ContainerLogsResponse = string;
export type ContainerWaitResponse = NonNullable<
    operations['ContainerWait']['responses'][200]
>['content']['application/json'];
export type ContainerResizeResponse = void;
export type ContainerStartResponse = void;
export type ContainerStopResponse = void;
export type ContainerRestartResponse = void;
export type ContainerKillResponse = void;
export type ContainerRemoveResponse = void;
