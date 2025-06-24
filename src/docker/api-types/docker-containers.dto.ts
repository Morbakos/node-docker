import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Shared DTO: Container ID path param
 */
export class ContainerIdParamDto {
    @ApiProperty({ description: 'Container ID or name' })
    id: string;
}

/**
 * GET /containers/json
 * List containers
 */
export class ContainerListQueryDto {
    @ApiPropertyOptional({ description: 'Show all containers (default shows only running)' })
    all?: boolean;

    @ApiPropertyOptional({ description: 'Return containers created before this container ID' })
    before?: string;

    @ApiPropertyOptional({ description: 'Filters encoded as JSON object string' })
    filters?: string;

    @ApiPropertyOptional({ description: 'Limit number of results' })
    limit?: number;

    @ApiPropertyOptional({ description: 'Show containers created since this ID' })
    since?: string;

    @ApiPropertyOptional({ description: 'Show size information' })
    size?: boolean;
}

/**
 * POST /containers/create
 * Create a container
 */
export class ContainerCreateDto {
    @ApiProperty({ description: 'The image name to use' })
    Image: string;

    @ApiPropertyOptional({ description: 'Command to run', type: [String] })
    Cmd?: string[];

    @ApiPropertyOptional({ description: 'Environment variables', type: [String] })
    Env?: string[];

    @ApiPropertyOptional({ description: 'Container working directory' })
    WorkingDir?: string;

    @ApiPropertyOptional({ description: 'Container hostname' })
    Hostname?: string;

    @ApiPropertyOptional({ description: 'Name of the container' })
    name?: string;

    @ApiPropertyOptional({ description: 'Host config (partial)' })
    HostConfig?: Record<string, any>;

    @ApiPropertyOptional({ description: 'Networking config (partial)' })
    NetworkingConfig?: Record<string, any>;
}

/**
 * GET /containers/{id}/logs
 * Get container logs
 */
export class ContainerLogsQueryDto {
    @ApiPropertyOptional()
    stdout?: boolean;

    @ApiPropertyOptional()
    stderr?: boolean;

    @ApiPropertyOptional()
    since?: number;

    @ApiPropertyOptional()
    until?: number;

    @ApiPropertyOptional()
    timestamps?: boolean;

    @ApiPropertyOptional()
    tail?: string;

    @ApiPropertyOptional()
    follow?: boolean;
}

/**
 * POST /containers/{id}/resize
 * Resize a container TTY
 */
export class ContainerResizeQueryDto {
    @ApiPropertyOptional()
    h?: number;

    @ApiPropertyOptional()
    w?: number;
}

/**
 * POST /containers/{id}/rename
 * Rename a container
 */
export class ContainerRenameQueryDto {
    @ApiProperty()
    name: string;
}

/**
 * POST /containers/{id}/update
 * Update a container
 */
export class ContainerUpdateDto {
    @ApiPropertyOptional()
    Memory?: number;

    @ApiPropertyOptional()
    MemorySwap?: number;

    @ApiPropertyOptional()
    CpuShares?: number;

    @ApiPropertyOptional()
    CpuPeriod?: number;

    @ApiPropertyOptional()
    CpuQuota?: number;

    @ApiPropertyOptional()
    CpusetCpus?: string;
}

/**
 * POST /containers/{id}/start
 * Start a container
 */
export class ContainerStartDto {
    @ApiPropertyOptional()
    DetachKeys?: string;
}

/**
 * POST /containers/{id}/stop
 * Stop a container
 */
export class ContainerStopQueryDto {
    @ApiPropertyOptional()
    t?: number;
}

/**
 * POST /containers/{id}/restart
 * Restart a container
 */
export class ContainerRestartQueryDto {
    @ApiPropertyOptional()
    t?: number;
}

/**
 * POST /containers/{id}/kill
 * Kill a container
 */
export class ContainerKillQueryDto {
    @ApiPropertyOptional({ description: 'Signal to send (default: SIGKILL)' })
    signal?: string;
}

/**
 * POST /containers/{id}/attach
 * Attach to a container
 */
export class ContainerAttachQueryDto {
    @ApiPropertyOptional()
    stream?: boolean;

    @ApiPropertyOptional()
    stdout?: boolean;

    @ApiPropertyOptional()
    stderr?: boolean;

    @ApiPropertyOptional()
    stdin?: boolean;

    @ApiPropertyOptional()
    logs?: boolean;
}

/**
 * GET /containers/{id}/stats
 * Get container stats based on resource usage
 */
export class ContainerStatsQueryDto {
    @ApiPropertyOptional()
    stream?: boolean;

    @ApiPropertyOptional()
    one_shot?: boolean;
}

/**
 * Response DTO: container summary in list
 * https://docs.docker.com/engine/api/v1.41/#operation/ContainerList
 */
export class ContainerSummaryDto {
    @ApiProperty()
    Id: string;

    @ApiProperty()
    Names: string[];

    @ApiProperty()
    Image: string;

    @ApiProperty()
    ImageID: string;

    @ApiProperty()
    Command: string;

    @ApiProperty()
    Created: number;

    @ApiProperty()
    Ports: any[];

    @ApiProperty()
    Labels: Record<string, string>;

    @ApiProperty()
    State: string;

    @ApiProperty()
    Status: string;

    @ApiPropertyOptional()
    HostConfig?: { NetworkMode: string };

    @ApiPropertyOptional()
    NetworkSettings?: Record<string, any>;

    @ApiPropertyOptional()
    Mounts?: any[];
}

/**
 * GET /containers/json
 * List Containers Response
 */
export class ContainerListResponseDto {
    @ApiProperty({ type: [ContainerSummaryDto] })
    containers: ContainerSummaryDto[];
}

/**
 * Response DTO: create container
 * @see POST /containers/create
 */
export class ContainerCreateResponseDto {
    @ApiProperty()
    Id: string;

    @ApiPropertyOptional({ type: [String] })
    Warnings?: string[];
}

/**
 * Response DTO: inspect container
 * @see GET /containers/{id}/json
 */
export class ContainerInspectResponseDto {
    @ApiProperty()
    Id: string;

    @ApiProperty()
    Created: string;

    @ApiProperty()
    Path: string;

    @ApiProperty({ type: [String] })
    Args: string[];

    @ApiProperty()
    State: any;

    @ApiProperty()
    Image: string;

    @ApiProperty()
    Name: string;

    @ApiProperty()
    RestartCount: number;

    @ApiProperty()
    Mounts: any[];

    @ApiProperty()
    Config: Record<string, any>;

    @ApiProperty()
    NetworkSettings: Record<string, any>;

    // Et d'autres champs selon le schéma complet...
}

/**
 * GET /containers/{id}/logs
 * Response as raw text
 */
export class ContainerLogsResponseDto {
    @ApiProperty({ description: 'Raw log stream', type: String })
    logs: string;
}

/**
 * POST /containers/{id}/wait
 * Wait container response
 */
export class ContainerWaitResponseDto {
    @ApiProperty()
    StatusCode: number;

    @ApiPropertyOptional()
    Error?: { Message: string };
}
