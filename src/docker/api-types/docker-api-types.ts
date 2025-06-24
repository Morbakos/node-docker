export type paths = {
    readonly "/containers/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List containers
         * @description Returns a list of containers. For details on the format, see the
         *     [inspect endpoint](#operation/ContainerInspect).
         *
         *     Note that it uses a different, smaller representation of a container
         *     than inspecting a single container. For example, the list of linked
         *     containers is not propagated .
         *
         */
        readonly get: operations["ContainerList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a container */
        readonly post: operations["ContainerCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Inspect a container
         * @description Return low-level information about a container.
         */
        readonly get: operations["ContainerInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/top": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List processes running inside a container
         * @description On Unix systems, this is done by running the `ps` command. This endpoint
         *     is not supported on Windows.
         *
         */
        readonly get: operations["ContainerTop"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/logs": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get container logs
         * @description Get `stdout` and `stderr` logs from a container.
         *
         *     Note: This endpoint works only for containers with the `json-file` or
         *     `journald` logging driver.
         *
         */
        readonly get: operations["ContainerLogs"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/changes": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get changes on a container’s filesystem
         * @description Returns which files in a container's filesystem have been added, deleted,
         *     or modified. The `Kind` of modification can be one of:
         *
         *     - `0`: Modified ("C")
         *     - `1`: Added ("A")
         *     - `2`: Deleted ("D")
         *
         */
        readonly get: operations["ContainerChanges"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/export": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Export a container
         * @description Export the contents of a container as a tarball.
         */
        readonly get: operations["ContainerExport"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/stats": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get container stats based on resource usage
         * @description This endpoint returns a live stream of a container’s resource usage
         *     statistics.
         *
         *     The `precpu_stats` is the CPU statistic of the *previous* read, and is
         *     used to calculate the CPU usage percentage. It is not an exact copy
         *     of the `cpu_stats` field.
         *
         *     If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is
         *     nil then for compatibility with older daemons the length of the
         *     corresponding `cpu_usage.percpu_usage` array should be used.
         *
         *     On a cgroup v2 host, the following fields are not set
         *     * `blkio_stats`: all fields other than `io_service_bytes_recursive`
         *     * `cpu_stats`: `cpu_usage.percpu_usage`
         *     * `memory_stats`: `max_usage` and `failcnt`
         *     Also, `memory_stats.stats` fields are incompatible with cgroup v1.
         *
         *     To calculate the values shown by the `stats` command of the docker cli tool
         *     the following formulas can be used:
         *     * used_memory = `memory_stats.usage - memory_stats.stats.cache`
         *     * available_memory = `memory_stats.limit`
         *     * Memory usage % = `(used_memory / available_memory) * 100.0`
         *     * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage`
         *     * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage`
         *     * number_cpus = `length(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus`
         *     * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0`
         *
         */
        readonly get: operations["ContainerStats"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/resize": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Resize a container TTY
         * @description Resize the TTY for a container.
         */
        readonly post: operations["ContainerResize"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/start": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Start a container */
        readonly post: operations["ContainerStart"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/stop": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Stop a container */
        readonly post: operations["ContainerStop"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/restart": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Restart a container */
        readonly post: operations["ContainerRestart"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/kill": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Kill a container
         * @description Send a POSIX signal to a container, defaulting to killing to the
         *     container.
         *
         */
        readonly post: operations["ContainerKill"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/update": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Update a container
         * @description Change various configuration options of a container without having to
         *     recreate it.
         *
         */
        readonly post: operations["ContainerUpdate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/rename": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Rename a container */
        readonly post: operations["ContainerRename"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/pause": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Pause a container
         * @description Use the freezer cgroup to suspend all processes in a container.
         *
         *     Traditionally, when suspending a process the `SIGSTOP` signal is used,
         *     which is observable by the process being suspended. With the freezer
         *     cgroup the process is unaware, and unable to capture, that it is being
         *     suspended, and subsequently resumed.
         *
         */
        readonly post: operations["ContainerPause"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/unpause": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Unpause a container
         * @description Resume a container which has been paused.
         */
        readonly post: operations["ContainerUnpause"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/attach": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Attach to a container
         * @description Attach to a container to read its output or send it input. You can attach
         *     to the same container multiple times and you can reattach to containers
         *     that have been detached.
         *
         *     Either the `stream` or `logs` parameter must be `true` for this endpoint
         *     to do anything.
         *
         *     See the [documentation for the `docker attach` command](https://docs.docker.com/engine/reference/commandline/attach/)
         *     for more details.
         *
         *     ### Hijacking
         *
         *     This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`,
         *     and `stderr` on the same socket.
         *
         *     This is the response from the daemon for an attach request:
         *
         *     ```
         *     HTTP/1.1 200 OK
         *     Content-Type: application/vnd.docker.raw-stream
         *
         *     [STREAM]
         *     ```
         *
         *     After the headers and two new lines, the TCP connection can now be used
         *     for raw, bidirectional communication between the client and server.
         *
         *     To hint potential proxies about connection hijacking, the Docker client
         *     can also optionally send connection upgrade headers.
         *
         *     For example, the client sends this request to upgrade the connection:
         *
         *     ```
         *     POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1
         *     Upgrade: tcp
         *     Connection: Upgrade
         *     ```
         *
         *     The Docker daemon will respond with a `101 UPGRADED` response, and will
         *     similarly follow with the raw stream:
         *
         *     ```
         *     HTTP/1.1 101 UPGRADED
         *     Content-Type: application/vnd.docker.raw-stream
         *     Connection: Upgrade
         *     Upgrade: tcp
         *
         *     [STREAM]
         *     ```
         *
         *     ### Stream format
         *
         *     When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate),
         *     the HTTP Content-Type header is set to application/vnd.docker.multiplexed-stream
         *     and the stream over the hijacked connected is multiplexed to separate out
         *     `stdout` and `stderr`. The stream consists of a series of frames, each
         *     containing a header and a payload.
         *
         *     The header contains the information which the stream writes (`stdout` or
         *     `stderr`). It also contains the size of the associated frame encoded in
         *     the last four bytes (`uint32`).
         *
         *     It is encoded on the first eight bytes like this:
         *
         *     ```go
         *     header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4}
         *     ```
         *
         *     `STREAM_TYPE` can be:
         *
         *     - 0: `stdin` (is written on `stdout`)
         *     - 1: `stdout`
         *     - 2: `stderr`
         *
         *     `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size
         *     encoded as big endian.
         *
         *     Following the header is the payload, which is the specified number of
         *     bytes of `STREAM_TYPE`.
         *
         *     The simplest way to implement this protocol is the following:
         *
         *     1. Read 8 bytes.
         *     2. Choose `stdout` or `stderr` depending on the first byte.
         *     3. Extract the frame size from the last four bytes.
         *     4. Read the extracted size and output it on the correct output.
         *     5. Goto 1.
         *
         *     ### Stream format when using a TTY
         *
         *     When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate),
         *     the stream is not multiplexed. The data exchanged over the hijacked
         *     connection is simply the raw data from the process PTY and client's
         *     `stdin`.
         *
         */
        readonly post: operations["ContainerAttach"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/attach/ws": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Attach to a container via a websocket */
        readonly get: operations["ContainerAttachWebsocket"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/wait": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Wait for a container
         * @description Block until a container stops, then returns the exit code.
         */
        readonly post: operations["ContainerWait"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /** Remove a container */
        readonly delete: operations["ContainerDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/archive": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get an archive of a filesystem resource in a container
         * @description Get a tar archive of a resource in the filesystem of container id.
         */
        readonly get: operations["ContainerArchive"];
        /**
         * Extract an archive of files or folders to a directory in a container
         * @description Upload a tar archive to be extracted to a path in the filesystem of container id.
         *     `path` parameter is asserted to be a directory. If it exists as a file, 400 error
         *     will be returned with message "not a directory".
         *
         */
        readonly put: operations["PutContainerArchive"];
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        /**
         * Get information about files in a container
         * @description A response header `X-Docker-Container-Path-Stat` is returned, containing
         *     a base64 - encoded JSON object with some filesystem header information
         *     about the path.
         *
         */
        readonly head: operations["ContainerArchiveInfo"];
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/prune": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Delete stopped containers */
        readonly post: operations["ContainerPrune"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List Images
         * @description Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
         */
        readonly get: operations["ImageList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/build": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Build an image
         * @description Build an image from a tar archive with a `Dockerfile` in it.
         *
         *     The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).
         *
         *     The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.
         *
         *     The build is canceled if the client drops the connection by quitting or being killed.
         *
         */
        readonly post: operations["ImageBuild"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/build/prune": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Delete builder cache */
        readonly post: operations["BuildPrune"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Create an image
         * @description Pull or import an image.
         */
        readonly post: operations["ImageCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/{name}/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Inspect an image
         * @description Return low-level information about an image.
         */
        readonly get: operations["ImageInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/{name}/history": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get the history of an image
         * @description Return parent layers of an image.
         */
        readonly get: operations["ImageHistory"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/{name}/push": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Push an image
         * @description Push an image to a registry.
         *
         *     If you wish to push an image on to a private registry, that image must
         *     already have a tag which references the registry. For example,
         *     `registry.example.com/myimage:latest`.
         *
         *     The push is cancelled if the HTTP connection is closed.
         *
         */
        readonly post: operations["ImagePush"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/{name}/tag": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Tag an image
         * @description Tag an image so that it becomes part of a repository.
         */
        readonly post: operations["ImageTag"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/{name}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /**
         * Remove an image
         * @description Remove an image, along with any untagged parent images that were
         *     referenced by that image.
         *
         *     Images can't be removed if they have descendant images, are being
         *     used by a running container or are being used by a build.
         *
         */
        readonly delete: operations["ImageDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/search": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Search images
         * @description Search for an image on Docker Hub.
         */
        readonly get: operations["ImageSearch"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/prune": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Delete unused images */
        readonly post: operations["ImagePrune"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/auth": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Check auth configuration
         * @description Validate credentials for a registry and, if available, get an identity
         *     token for accessing the registry without password.
         *
         */
        readonly post: operations["SystemAuth"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/info": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Get system information */
        readonly get: operations["SystemInfo"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/version": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get version
         * @description Returns the version of Docker that is running and various information about the system that Docker is running on.
         */
        readonly get: operations["SystemVersion"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/_ping": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Ping
         * @description This is a dummy endpoint you can use to test if the server is accessible.
         */
        readonly get: operations["SystemPing"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        /**
         * Ping
         * @description This is a dummy endpoint you can use to test if the server is accessible.
         */
        readonly head: operations["SystemPingHead"];
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/commit": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a new image from a container */
        readonly post: operations["ImageCommit"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/events": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Monitor events
         * @description Stream real-time events from the server.
         *
         *     Various objects within Docker report events when something happens to them.
         *
         *     Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`
         *
         *     Images report these events: `create`, `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`
         *
         *     Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`
         *
         *     Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`
         *
         *     The Docker daemon reports these events: `reload`
         *
         *     Services report these events: `create`, `update`, and `remove`
         *
         *     Nodes report these events: `create`, `update`, and `remove`
         *
         *     Secrets report these events: `create`, `update`, and `remove`
         *
         *     Configs report these events: `create`, `update`, and `remove`
         *
         *     The Builder reports `prune` events
         *
         */
        readonly get: operations["SystemEvents"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/system/df": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Get data usage information */
        readonly get: operations["SystemDataUsage"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/{name}/get": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Export an image
         * @description Get a tarball containing all images and metadata for a repository.
         *
         *     If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.
         *
         *     ### Image tarball format
         *
         *     An image tarball contains [Content as defined in the OCI Image Layout Specification](https://github.com/opencontainers/image-spec/blob/v1.1.1/image-layout.md#content).
         *
         *     Additionally, includes the manifest.json file associated with a backwards compatible docker save format.
         *
         *     If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.
         *
         *     ```json
         *     {
         *       "hello-world": {
         *         "latest": "565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1"
         *       }
         *     }
         *     ```
         *
         */
        readonly get: operations["ImageGet"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/get": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Export several images
         * @description Get a tarball containing all images and metadata for several image
         *     repositories.
         *
         *     For each value of the `names` parameter: if it is a specific name and
         *     tag (e.g. `ubuntu:latest`), then only that image (and its parents) are
         *     returned; if it is an image ID, similarly only that image (and its parents)
         *     are returned and there would be no names referenced in the 'repositories'
         *     file for this image ID.
         *
         *     For details on the format, see the [export image endpoint](#operation/ImageGet).
         *
         */
        readonly get: operations["ImageGetAll"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/images/load": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Import images
         * @description Load a set of images and tags into a repository.
         *
         *     For details on the format, see the [export image endpoint](#operation/ImageGet).
         *
         */
        readonly post: operations["ImageLoad"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/containers/{id}/exec": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Create an exec instance
         * @description Run a command inside a running container.
         */
        readonly post: operations["ContainerExec"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/exec/{id}/start": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Start an exec instance
         * @description Starts a previously set up exec instance. If detach is true, this endpoint
         *     returns immediately after starting the command. Otherwise, it sets up an
         *     interactive session with the command.
         *
         */
        readonly post: operations["ExecStart"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/exec/{id}/resize": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Resize an exec instance
         * @description Resize the TTY session used by an exec instance. This endpoint only works
         *     if `tty` was specified as part of creating and starting the exec instance.
         *
         */
        readonly post: operations["ExecResize"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/exec/{id}/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Inspect an exec instance
         * @description Return low-level information about an exec instance.
         */
        readonly get: operations["ExecInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/volumes": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** List volumes */
        readonly get: operations["VolumeList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/volumes/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a volume */
        readonly post: operations["VolumeCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/volumes/{name}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a volume */
        readonly get: operations["VolumeInspect"];
        /** "Update a volume. Valid only for Swarm cluster volumes"
         *      */
        readonly put: operations["VolumeUpdate"];
        readonly post?: never;
        /**
         * Remove a volume
         * @description Instruct the driver to remove the volume.
         */
        readonly delete: operations["VolumeDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/volumes/prune": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Delete unused volumes */
        readonly post: operations["VolumePrune"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/networks": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List networks
         * @description Returns a list of networks. For details on the format, see the
         *     [network inspect endpoint](#operation/NetworkInspect).
         *
         *     Note that it uses a different, smaller representation of a network than
         *     inspecting a single network. For example, the list of containers attached
         *     to the network is not propagated in API versions 1.28 and up.
         *
         */
        readonly get: operations["NetworkList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/networks/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a network */
        readonly get: operations["NetworkInspect"];
        readonly put?: never;
        readonly post?: never;
        /** Remove a network */
        readonly delete: operations["NetworkDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/networks/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a network */
        readonly post: operations["NetworkCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/networks/{id}/connect": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Connect a container to a network
         * @description The network must be either a local-scoped network or a swarm-scoped network with the `attachable` option set. A network cannot be re-attached to a running container
         */
        readonly post: operations["NetworkConnect"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/networks/{id}/disconnect": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Disconnect a container from a network */
        readonly post: operations["NetworkDisconnect"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/networks/prune": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Delete unused networks */
        readonly post: operations["NetworkPrune"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * List plugins
         * @description Returns information about installed plugins.
         */
        readonly get: operations["PluginList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/privileges": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Get plugin privileges */
        readonly get: operations["GetPluginPrivileges"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/pull": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Install a plugin
         * @description Pulls and installs a plugin. After the plugin is installed, it can be
         *     enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable).
         *
         */
        readonly post: operations["PluginPull"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a plugin */
        readonly get: operations["PluginInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /** Remove a plugin */
        readonly delete: operations["PluginDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}/enable": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Enable a plugin */
        readonly post: operations["PluginEnable"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}/disable": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Disable a plugin */
        readonly post: operations["PluginDisable"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}/upgrade": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Upgrade a plugin */
        readonly post: operations["PluginUpgrade"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a plugin */
        readonly post: operations["PluginCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}/push": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Push a plugin
         * @description Push a plugin to the registry.
         *
         */
        readonly post: operations["PluginPush"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/plugins/{name}/set": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Configure a plugin */
        readonly post: operations["PluginSet"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/nodes": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** List nodes */
        readonly get: operations["NodeList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/nodes/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a node */
        readonly get: operations["NodeInspect"];
        readonly put?: never;
        readonly post?: never;
        /** Delete a node */
        readonly delete: operations["NodeDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/nodes/{id}/update": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Update a node */
        readonly post: operations["NodeUpdate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect swarm */
        readonly get: operations["SwarmInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm/init": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Initialize a new swarm */
        readonly post: operations["SwarmInit"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm/join": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Join an existing swarm */
        readonly post: operations["SwarmJoin"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm/leave": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Leave a swarm */
        readonly post: operations["SwarmLeave"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm/update": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Update a swarm */
        readonly post: operations["SwarmUpdate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm/unlockkey": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Get the unlock key */
        readonly get: operations["SwarmUnlockkey"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/swarm/unlock": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Unlock a locked manager */
        readonly post: operations["SwarmUnlock"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/services": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** List services */
        readonly get: operations["ServiceList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/services/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a service */
        readonly post: operations["ServiceCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/services/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a service */
        readonly get: operations["ServiceInspect"];
        readonly put?: never;
        readonly post?: never;
        /** Delete a service */
        readonly delete: operations["ServiceDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/services/{id}/update": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Update a service */
        readonly post: operations["ServiceUpdate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/services/{id}/logs": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get service logs
         * @description Get `stdout` and `stderr` logs from a service. See also
         *     [`/containers/{id}/logs`](#operation/ContainerLogs).
         *
         *     **Note**: This endpoint works only for services with the `local`,
         *     `json-file` or `journald` logging drivers.
         *
         */
        readonly get: operations["ServiceLogs"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/tasks": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** List tasks */
        readonly get: operations["TaskList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/tasks/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a task */
        readonly get: operations["TaskInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/tasks/{id}/logs": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get task logs
         * @description Get `stdout` and `stderr` logs from a task.
         *     See also [`/containers/{id}/logs`](#operation/ContainerLogs).
         *
         *     **Note**: This endpoint works only for services with the `local`,
         *     `json-file` or `journald` logging drivers.
         *
         */
        readonly get: operations["TaskLogs"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/secrets": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** List secrets */
        readonly get: operations["SecretList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/secrets/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a secret */
        readonly post: operations["SecretCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/secrets/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a secret */
        readonly get: operations["SecretInspect"];
        readonly put?: never;
        readonly post?: never;
        /** Delete a secret */
        readonly delete: operations["SecretDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/secrets/{id}/update": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Update a Secret */
        readonly post: operations["SecretUpdate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/configs": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** List configs */
        readonly get: operations["ConfigList"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/configs/create": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Create a config */
        readonly post: operations["ConfigCreate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/configs/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Inspect a config */
        readonly get: operations["ConfigInspect"];
        readonly put?: never;
        readonly post?: never;
        /** Delete a config */
        readonly delete: operations["ConfigDelete"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/configs/{id}/update": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** Update a Config */
        readonly post: operations["ConfigUpdate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/distribution/{name}/json": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Get image information from the registry
         * @description Return image digest and platform information by contacting the registry.
         *
         */
        readonly get: operations["DistributionInspect"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/session": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Initialize interactive session
         * @description Start a new interactive session with a server. Session allows server to
         *     call back to the client for advanced capabilities.
         *
         *     ### Hijacking
         *
         *     This endpoint hijacks the HTTP connection to HTTP2 transport that allows
         *     the client to expose gPRC services on that connection.
         *
         *     For example, the client sends this request to upgrade the connection:
         *
         *     ```
         *     POST /session HTTP/1.1
         *     Upgrade: h2c
         *     Connection: Upgrade
         *     ```
         *
         *     The Docker daemon responds with a `101 UPGRADED` response follow with
         *     the raw stream:
         *
         *     ```
         *     HTTP/1.1 101 UPGRADED
         *     Connection: Upgrade
         *     Upgrade: h2c
         *     ```
         *
         */
        readonly post: operations["Session"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /**
         * @description An open port on a container
         * @example {
         *       "PrivatePort": 8080,
         *       "PublicPort": 80,
         *       "Type": "tcp"
         *     }
         */
        readonly Port: {
            /**
             * Format: ip-address
             * @description Host IP address that the container's port is mapped to
             */
            readonly IP?: string;
            /**
             * Format: uint16
             * @description Port on the container
             */
            readonly PrivatePort: number;
            /**
             * Format: uint16
             * @description Port exposed on the host
             */
            readonly PublicPort?: number;
            /** @enum {string} */
            readonly Type: "tcp" | "udp" | "sctp";
        };
        /** @description MountPoint represents a mount point configuration inside the container.
         *     This is used for reporting the mountpoints in use by a container.
         *      */
        readonly MountPoint: {
            /**
             * @description The mount type:
             *
             *     - `bind` a mount of a file or directory from the host into the container.
             *     - `volume` a docker volume with the given `Name`.
             *     - `image` a docker image
             *     - `tmpfs` a `tmpfs`.
             *     - `npipe` a named pipe from the host into the container.
             *     - `cluster` a Swarm cluster volume
             *
             * @example volume
             * @enum {string}
             */
            readonly Type: "bind" | "volume" | "image" | "tmpfs" | "npipe" | "cluster";
            /**
             * @description Name is the name reference to the underlying data defined by `Source`
             *     e.g., the volume name.
             *
             * @example myvolume
             */
            readonly Name: string;
            /**
             * @description Source location of the mount.
             *
             *     For volumes, this contains the storage location of the volume (within
             *     `/var/lib/docker/volumes/`). For bind-mounts, and `npipe`, this contains
             *     the source (host) part of the bind-mount. For `tmpfs` mount points, this
             *     field is empty.
             *
             * @example /var/lib/docker/volumes/myvolume/_data
             */
            readonly Source: string;
            /**
             * @description Destination is the path relative to the container root (`/`) where
             *     the `Source` is mounted inside the container.
             *
             * @example /usr/share/nginx/html/
             */
            readonly Destination: string;
            /**
             * @description Driver is the volume driver used to create the volume (if it is a volume).
             *
             * @example local
             */
            readonly Driver: string;
            /**
             * @description Mode is a comma separated list of options supplied by the user when
             *     creating the bind/volume mount.
             *
             *     The default is platform-specific (`"z"` on Linux, empty on Windows).
             *
             * @example z
             */
            readonly Mode: string;
            /**
             * @description Whether the mount is mounted writable (read-write).
             *
             * @example true
             */
            readonly RW: boolean;
            /**
             * @description Propagation describes how mounts are propagated from the host into the
             *     mount point, and vice-versa. Refer to the [Linux kernel documentation](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt)
             *     for details. This field is not used on Windows.
             *
             * @example
             */
            readonly Propagation: string;
        };
        /**
         * @description A device mapping between the host and container
         * @example {
         *       "PathOnHost": "/dev/deviceName",
         *       "PathInContainer": "/dev/deviceName",
         *       "CgroupPermissions": "mrw"
         *     }
         */
        readonly DeviceMapping: {
            readonly PathOnHost: string;
            readonly PathInContainer: string;
            readonly CgroupPermissions: string;
        };
        /** @description A request for devices to be sent to device drivers */
        readonly DeviceRequest: {
            /** @example nvidia */
            readonly Driver: string;
            /** @example -1 */
            readonly Count: number;
            /** @example [
             *       "0",
             *       "1",
             *       "GPU-fef8089b-4820-abfc-e83e-94318197576e"
             *     ] */
            readonly DeviceIDs: readonly string[];
            /**
             * @description A list of capabilities; an OR list of AND lists of capabilities.
             *
             * @example [
             *       [
             *         "gpu",
             *         "nvidia",
             *         "compute"
             *       ]
             *     ]
             */
            readonly Capabilities: readonly (readonly string[])[];
            /** @description Driver-specific options, specified as a key/value pairs. These options
             *     are passed directly to the driver.
             *      */
            readonly Options: {
                readonly [key: string]: string;
            };
        };
        readonly ThrottleDevice: {
            /** @description Device path */
            readonly Path: string;
            /**
             * Format: int64
             * @description Rate
             */
            readonly Rate: number;
        };
        readonly Mount: {
            /** @description Container path. */
            readonly Target: string;
            /** @description Mount source (e.g. a volume name, a host path). */
            readonly Source: string;
            /**
             * @description The mount type. Available types:
             *
             *     - `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container.
             *     - `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed.
             *     - `image` Mounts an image.
             *     - `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs.
             *     - `npipe` Mounts a named pipe from the host into the container. Must exist prior to creating the container.
             *     - `cluster` a Swarm cluster volume
             *
             * @enum {string}
             */
            readonly Type: "bind" | "volume" | "image" | "tmpfs" | "npipe" | "cluster";
            /** @description Whether the mount should be read-only. */
            readonly ReadOnly: boolean;
            /** @description The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`. */
            readonly Consistency: string;
            /** @description Optional configuration for the `bind` type. */
            readonly BindOptions: {
                /**
                 * @description A propagation mode with the value `[r]private`, `[r]shared`, or `[r]slave`.
                 * @enum {string}
                 */
                readonly Propagation: "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave";
                /**
                 * @description Disable recursive bind mount.
                 * @default false
                 */
                readonly NonRecursive: boolean;
                /**
                 * @description Create mount point on host if missing
                 * @default false
                 */
                readonly CreateMountpoint: boolean;
                /**
                 * @description Make the mount non-recursively read-only, but still leave the mount recursive
                 *     (unless NonRecursive is set to `true` in conjunction).
                 *
                 *     Added in v1.44, before that version all read-only mounts were
                 *     non-recursive by default. To match the previous behaviour this
                 *     will default to `true` for clients on versions prior to v1.44.
                 *
                 * @default false
                 */
                readonly ReadOnlyNonRecursive: boolean;
                /**
                 * @description Raise an error if the mount cannot be made recursively read-only.
                 * @default false
                 */
                readonly ReadOnlyForceRecursive: boolean;
            };
            /** @description Optional configuration for the `volume` type. */
            readonly VolumeOptions: {
                /**
                 * @description Populate volume with data from the target.
                 * @default false
                 */
                readonly NoCopy: boolean;
                /** @description User-defined key/value metadata. */
                readonly Labels: {
                    readonly [key: string]: string;
                };
                /** @description Map of driver specific options */
                readonly DriverConfig: {
                    /** @description Name of the driver to use to create the volume. */
                    readonly Name: string;
                    /** @description key/value map of driver specific options. */
                    readonly Options: {
                        readonly [key: string]: string;
                    };
                };
                /**
                 * @description Source path inside the volume. Must be relative without any back traversals.
                 * @example dir-inside-volume/subdirectory
                 */
                readonly Subpath: string;
            };
            /** @description Optional configuration for the `image` type. */
            readonly ImageOptions: {
                /**
                 * @description Source path inside the image. Must be relative without any back traversals.
                 * @example dir-inside-image/subdirectory
                 */
                readonly Subpath: string;
            };
            /** @description Optional configuration for the `tmpfs` type. */
            readonly TmpfsOptions: {
                /**
                 * Format: int64
                 * @description The size for the tmpfs mount in bytes.
                 */
                readonly SizeBytes: number;
                /** @description The permission mode for the tmpfs mount in an integer. */
                readonly Mode: number;
                /**
                 * @description The options to be passed to the tmpfs mount. An array of arrays.
                 *     Flag options should be provided as 1-length arrays. Other types
                 *     should be provided as as 2-length arrays, where the first item is
                 *     the key and the second the value.
                 *
                 * @example [
                 *       [
                 *         "noexec"
                 *       ]
                 *     ]
                 */
                readonly Options: readonly (readonly string[])[];
            };
        };
        /** @description The behavior to apply when the container exits. The default is not to
         *     restart.
         *
         *     An ever increasing delay (double the previous delay, starting at 100ms) is
         *     added before each restart to prevent flooding the server.
         *      */
        readonly RestartPolicy: {
            /**
             * @description - Empty string means not to restart
             *     - `no` Do not automatically restart
             *     - `always` Always restart
             *     - `unless-stopped` Restart always except when the user has manually stopped the container
             *     - `on-failure` Restart only when the container exit code is non-zero
             *
             * @enum {string}
             */
            readonly Name: "" | "no" | "always" | "unless-stopped" | "on-failure";
            /** @description If `on-failure` is used, the number of times to retry before giving up.
             *      */
            readonly MaximumRetryCount: number;
        };
        /** @description A container's resources (cgroups config, ulimits, etc) */
        readonly Resources: {
            /** @description An integer value representing this container's relative CPU weight
             *     versus other containers.
             *      */
            readonly CpuShares: number;
            /**
             * Format: int64
             * @description Memory limit in bytes.
             * @default 0
             */
            readonly Memory: number;
            /** @description Path to `cgroups` under which the container's `cgroup` is created. If
             *     the path is not absolute, the path is considered to be relative to the
             *     `cgroups` path of the init process. Cgroups are created if they do not
             *     already exist.
             *      */
            readonly CgroupParent: string;
            /** @description Block IO weight (relative weight). */
            readonly BlkioWeight: number;
            /** @description Block IO weight (relative device weight) in the form:
             *
             *     ```
             *     [{"Path": "device_path", "Weight": weight}]
             *     ```
             *      */
            readonly BlkioWeightDevice: readonly {
                readonly Path: string;
                readonly Weight: number;
            }[];
            /** @description Limit read rate (bytes per second) from a device, in the form:
             *
             *     ```
             *     [{"Path": "device_path", "Rate": rate}]
             *     ```
             *      */
            readonly BlkioDeviceReadBps: readonly components["schemas"]["ThrottleDevice"][];
            /** @description Limit write rate (bytes per second) to a device, in the form:
             *
             *     ```
             *     [{"Path": "device_path", "Rate": rate}]
             *     ```
             *      */
            readonly BlkioDeviceWriteBps: readonly components["schemas"]["ThrottleDevice"][];
            /** @description Limit read rate (IO per second) from a device, in the form:
             *
             *     ```
             *     [{"Path": "device_path", "Rate": rate}]
             *     ```
             *      */
            readonly BlkioDeviceReadIOps: readonly components["schemas"]["ThrottleDevice"][];
            /** @description Limit write rate (IO per second) to a device, in the form:
             *
             *     ```
             *     [{"Path": "device_path", "Rate": rate}]
             *     ```
             *      */
            readonly BlkioDeviceWriteIOps: readonly components["schemas"]["ThrottleDevice"][];
            /**
             * Format: int64
             * @description The length of a CPU period in microseconds.
             */
            readonly CpuPeriod: number;
            /**
             * Format: int64
             * @description Microseconds of CPU time that the container can get in a CPU period.
             *
             */
            readonly CpuQuota: number;
            /**
             * Format: int64
             * @description The length of a CPU real-time period in microseconds. Set to 0 to
             *     allocate no time allocated to real-time tasks.
             *
             */
            readonly CpuRealtimePeriod: number;
            /**
             * Format: int64
             * @description The length of a CPU real-time runtime in microseconds. Set to 0 to
             *     allocate no time allocated to real-time tasks.
             *
             */
            readonly CpuRealtimeRuntime: number;
            /**
             * @description CPUs in which to allow execution (e.g., `0-3`, `0,1`).
             *
             * @example 0-3
             */
            readonly CpusetCpus: string;
            /** @description Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only
             *     effective on NUMA systems.
             *      */
            readonly CpusetMems: string;
            /** @description A list of devices to add to the container. */
            readonly Devices: readonly components["schemas"]["DeviceMapping"][];
            /** @description a list of cgroup rules to apply to the container */
            readonly DeviceCgroupRules: readonly string[];
            /** @description A list of requests for devices to be sent to device drivers.
             *      */
            readonly DeviceRequests: readonly components["schemas"]["DeviceRequest"][];
            /**
             * Format: int64
             * @description Hard limit for kernel TCP buffer memory (in bytes). Depending on the
             *     OCI runtime in use, this option may be ignored. It is no longer supported
             *     by the default (runc) runtime.
             *
             *     This field is omitted when empty.
             *
             */
            readonly KernelMemoryTCP: number;
            /**
             * Format: int64
             * @description Memory soft limit in bytes.
             */
            readonly MemoryReservation: number;
            /**
             * Format: int64
             * @description Total memory limit (memory + swap). Set as `-1` to enable unlimited
             *     swap.
             *
             */
            readonly MemorySwap: number;
            /**
             * Format: int64
             * @description Tune a container's memory swappiness behavior. Accepts an integer
             *     between 0 and 100.
             *
             */
            readonly MemorySwappiness: number;
            /**
             * Format: int64
             * @description CPU quota in units of 10<sup>-9</sup> CPUs.
             */
            readonly NanoCpus: number;
            /** @description Disable OOM Killer for the container. */
            readonly OomKillDisable: boolean;
            /** @description Run an init inside the container that forwards signals and reaps
             *     processes. This field is omitted if empty, and the default (as
             *     configured on the daemon) is used.
             *      */
            readonly Init: boolean | null;
            /**
             * Format: int64
             * @description Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null`
             *     to not change.
             *
             */
            readonly PidsLimit: number | null;
            /** @description A list of resource limits to set in the container. For example:
             *
             *     ```
             *     {"Name": "nofile", "Soft": 1024, "Hard": 2048}
             *     ```
             *      */
            readonly Ulimits: readonly {
                /** @description Name of ulimit */
                readonly Name: string;
                /** @description Soft limit */
                readonly Soft: number;
                /** @description Hard limit */
                readonly Hard: number;
            }[];
            /**
             * Format: int64
             * @description The number of usable CPUs (Windows only).
             *
             *     On Windows Server containers, the processor resource controls are
             *     mutually exclusive. The order of precedence is `CPUCount` first, then
             *     `CPUShares`, and `CPUPercent` last.
             *
             */
            readonly CpuCount: number;
            /**
             * Format: int64
             * @description The usable percentage of the available CPUs (Windows only).
             *
             *     On Windows Server containers, the processor resource controls are
             *     mutually exclusive. The order of precedence is `CPUCount` first, then
             *     `CPUShares`, and `CPUPercent` last.
             *
             */
            readonly CpuPercent: number;
            /**
             * Format: int64
             * @description Maximum IOps for the container system drive (Windows only)
             */
            readonly IOMaximumIOps: number;
            /**
             * Format: int64
             * @description Maximum IO in bytes per second for the container system drive
             *     (Windows only).
             *
             */
            readonly IOMaximumBandwidth: number;
        };
        /** @description An object describing a limit on resources which can be requested by a task.
         *      */
        readonly Limit: {
            /**
             * Format: int64
             * @example 4000000000
             */
            readonly NanoCPUs: number;
            /**
             * Format: int64
             * @example 8272408576
             */
            readonly MemoryBytes: number;
            /**
             * Format: int64
             * @description Limits the maximum number of PIDs in the container. Set `0` for unlimited.
             *
             * @default 0
             * @example 100
             */
            readonly Pids: number;
        };
        /** @description An object describing the resources which can be advertised by a node and
         *     requested by a task.
         *      */
        readonly ResourceObject: {
            /**
             * Format: int64
             * @example 4000000000
             */
            readonly NanoCPUs: number;
            /**
             * Format: int64
             * @example 8272408576
             */
            readonly MemoryBytes: number;
            readonly GenericResources: components["schemas"]["GenericResources"];
        };
        /**
         * @description User-defined resources can be either Integer resources (e.g, `SSD=3`) or
         *     String resources (e.g, `GPU=UUID1`).
         *
         * @example [
         *       {
         *         "DiscreteResourceSpec": {
         *           "Kind": "SSD",
         *           "Value": 3
         *         }
         *       },
         *       {
         *         "NamedResourceSpec": {
         *           "Kind": "GPU",
         *           "Value": "UUID1"
         *         }
         *       },
         *       {
         *         "NamedResourceSpec": {
         *           "Kind": "GPU",
         *           "Value": "UUID2"
         *         }
         *       }
         *     ]
         */
        readonly GenericResources: readonly {
            readonly NamedResourceSpec: {
                readonly Kind: string;
                readonly Value: string;
            };
            readonly DiscreteResourceSpec: {
                readonly Kind: string;
                /** Format: int64 */
                readonly Value: number;
            };
        }[];
        /** @description A test to perform to check that the container is healthy. */
        readonly HealthConfig: {
            /** @description The test to perform. Possible values are:
             *
             *     - `[]` inherit healthcheck from image or parent image
             *     - `["NONE"]` disable healthcheck
             *     - `["CMD", args...]` exec arguments directly
             *     - `["CMD-SHELL", command]` run command with system's default shell
             *      */
            readonly Test: readonly string[];
            /**
             * Format: int64
             * @description The time to wait between checks in nanoseconds. It should be 0 or at
             *     least 1000000 (1 ms). 0 means inherit.
             *
             */
            readonly Interval: number;
            /**
             * Format: int64
             * @description The time to wait before considering the check to have hung. It should
             *     be 0 or at least 1000000 (1 ms). 0 means inherit.
             *
             */
            readonly Timeout: number;
            /** @description The number of consecutive failures needed to consider a container as
             *     unhealthy. 0 means inherit.
             *      */
            readonly Retries: number;
            /**
             * Format: int64
             * @description Start period for the container to initialize before starting
             *     health-retries countdown in nanoseconds. It should be 0 or at least
             *     1000000 (1 ms). 0 means inherit.
             *
             */
            readonly StartPeriod: number;
            /**
             * Format: int64
             * @description The time to wait between checks in nanoseconds during the start period.
             *     It should be 0 or at least 1000000 (1 ms). 0 means inherit.
             *
             */
            readonly StartInterval: number;
        };
        /** @description Health stores information about the container's healthcheck results.
         *      */
        readonly Health: {
            /**
             * @description Status is one of `none`, `starting`, `healthy` or `unhealthy`
             *
             *     - "none"      Indicates there is no healthcheck
             *     - "starting"  Starting indicates that the container is not yet ready
             *     - "healthy"   Healthy indicates that the container is running correctly
             *     - "unhealthy" Unhealthy indicates that the container has a problem
             *
             * @example healthy
             * @enum {string}
             */
            readonly Status: "none" | "starting" | "healthy" | "unhealthy";
            /**
             * @description FailingStreak is the number of consecutive failures
             * @example 0
             */
            readonly FailingStreak: number;
            /** @description Log contains the last few results (oldest first)
             *      */
            readonly Log: readonly components["schemas"]["HealthcheckResult"][];
        } | null;
        /** @description HealthcheckResult stores information about a single run of a healthcheck probe
         *      */
        readonly HealthcheckResult: {
            /**
             * Format: date-time
             * @description Date and time at which this check started in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2020-01-04T10:44:24.496525531Z
             */
            readonly Start: string;
            /**
             * Format: dateTime
             * @description Date and time at which this check ended in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2020-01-04T10:45:21.364524523Z
             */
            readonly End: string;
            /**
             * @description ExitCode meanings:
             *
             *     - `0` healthy
             *     - `1` unhealthy
             *     - `2` reserved (considered unhealthy)
             *     - other values: error running probe
             *
             * @example 0
             */
            readonly ExitCode: number;
            /** @description Output from last check */
            readonly Output: string;
        } | null;
        /** @description Container configuration that depends on the host we are running on */
        readonly HostConfig: components["schemas"]["Resources"] & {
            /** @description A list of volume bindings for this container. Each volume binding
             *     is a string in one of these forms:
             *
             *     - `host-src:container-dest[:options]` to bind-mount a host path
             *       into the container. Both `host-src`, and `container-dest` must
             *       be an _absolute_ path.
             *     - `volume-name:container-dest[:options]` to bind-mount a volume
             *       managed by a volume driver into the container. `container-dest`
             *       must be an _absolute_ path.
             *
             *     `options` is an optional, comma-delimited list of:
             *
             *     - `nocopy` disables automatic copying of data from the container
             *       path to the volume. The `nocopy` flag only applies to named volumes.
             *     - `[ro|rw]` mounts a volume read-only or read-write, respectively.
             *       If omitted or set to `rw`, volumes are mounted read-write.
             *     - `[z|Z]` applies SELinux labels to allow or deny multiple containers
             *       to read and write to the same volume.
             *         - `z`: a _shared_ content label is applied to the content. This
             *           label indicates that multiple containers can share the volume
             *           content, for both reading and writing.
             *         - `Z`: a _private unshared_ label is applied to the content.
             *           This label indicates that only the current container can use
             *           a private volume. Labeling systems such as SELinux require
             *           proper labels to be placed on volume content that is mounted
             *           into a container. Without a label, the security system can
             *           prevent a container's processes from using the content. By
             *           default, the labels set by the host operating system are not
             *           modified.
             *     - `[[r]shared|[r]slave|[r]private]` specifies mount
             *       [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).
             *       This only applies to bind-mounted volumes, not internal volumes
             *       or named volumes. Mount propagation requires the source mount
             *       point (the location where the source directory is mounted in the
             *       host operating system) to have the correct propagation properties.
             *       For shared volumes, the source mount point must be set to `shared`.
             *       For slave volumes, the mount must be set to either `shared` or
             *       `slave`.
             *      */
            readonly Binds?: readonly string[];
            /**
             * @description Path to a file where the container ID is written
             * @example
             */
            readonly ContainerIDFile?: string;
            /** @description The logging configuration for this container */
            readonly LogConfig?: {
                /**
                 * @description Name of the logging driver used for the container or "none"
                 *     if logging is disabled.
                 * @enum {string}
                 */
                readonly Type: "local" | "json-file" | "syslog" | "journald" | "gelf" | "fluentd" | "awslogs" | "splunk" | "etwlogs" | "none";
                /**
                 * @description Driver-specific configuration options for the logging driver.
                 * @example {
                 *       "max-file": "5",
                 *       "max-size": "10m"
                 *     }
                 */
                readonly Config: {
                    readonly [key: string]: string;
                };
            };
            /** @description Network mode to use for this container. Supported standard values
             *     are: `bridge`, `host`, `none`, and `container:<name|id>`. Any
             *     other value is taken as a custom network's name to which this
             *     container should connect to.
             *      */
            readonly NetworkMode?: string;
            readonly PortBindings?: components["schemas"]["PortMap"];
            readonly RestartPolicy?: components["schemas"]["RestartPolicy"];
            /** @description Automatically remove the container when the container's process
             *     exits. This has no effect if `RestartPolicy` is set.
             *      */
            readonly AutoRemove?: boolean;
            /** @description Driver that this container uses to mount volumes. */
            readonly VolumeDriver?: string;
            /** @description A list of volumes to inherit from another container, specified in
             *     the form `<container name>[:<ro|rw>]`.
             *      */
            readonly VolumesFrom?: readonly string[];
            /** @description Specification for mounts to be added to the container.
             *      */
            readonly Mounts?: readonly components["schemas"]["Mount"][];
            /**
             * @description Initial console size, as an `[height, width]` array.
             *
             * @example [
             *       80,
             *       64
             *     ]
             */
            readonly ConsoleSize?: readonly number[] | null;
            /** @description Arbitrary non-identifying metadata attached to container and
             *     provided to the runtime when the container is started.
             *      */
            readonly Annotations?: {
                readonly [key: string]: string;
            };
            /** @description A list of kernel capabilities to add to the container. Conflicts
             *     with option 'Capabilities'.
             *      */
            readonly CapAdd?: readonly string[];
            /** @description A list of kernel capabilities to drop from the container. Conflicts
             *     with option 'Capabilities'.
             *      */
            readonly CapDrop?: readonly string[];
            /**
             * @description cgroup namespace mode for the container. Possible values are:
             *
             *     - `"private"`: the container runs in its own private cgroup namespace
             *     - `"host"`: use the host system's cgroup namespace
             *
             *     If not specified, the daemon default is used, which can either be `"private"`
             *     or `"host"`, depending on daemon version, kernel support and configuration.
             *
             * @enum {string}
             */
            readonly CgroupnsMode?: "private" | "host";
            /** @description A list of DNS servers for the container to use. */
            readonly Dns?: readonly string[];
            /** @description A list of DNS options. */
            readonly DnsOptions?: readonly string[];
            /** @description A list of DNS search domains. */
            readonly DnsSearch?: readonly string[];
            /** @description A list of hostnames/IP mappings to add to the container's `/etc/hosts`
             *     file. Specified in the form `["hostname:IP"]`.
             *      */
            readonly ExtraHosts?: readonly string[];
            /** @description A list of additional groups that the container process will run as.
             *      */
            readonly GroupAdd?: readonly string[];
            /** @description IPC sharing mode for the container. Possible values are:
             *
             *     - `"none"`: own private IPC namespace, with /dev/shm not mounted
             *     - `"private"`: own private IPC namespace
             *     - `"shareable"`: own private IPC namespace, with a possibility to share it with other containers
             *     - `"container:<name|id>"`: join another (shareable) container's IPC namespace
             *     - `"host"`: use the host system's IPC namespace
             *
             *     If not specified, daemon default is used, which can either be `"private"`
             *     or `"shareable"`, depending on daemon version and configuration.
             *      */
            readonly IpcMode?: string;
            /** @description Cgroup to use for the container. */
            readonly Cgroup?: string;
            /** @description A list of links for the container in the form `container_name:alias`.
             *      */
            readonly Links?: readonly string[];
            /**
             * @description An integer value containing the score given to the container in
             *     order to tune OOM killer preferences.
             *
             * @example 500
             */
            readonly OomScoreAdj?: number;
            /** @description Set the PID (Process) Namespace mode for the container. It can be
             *     either:
             *
             *     - `"container:<name|id>"`: joins another container's PID namespace
             *     - `"host"`: use the host's PID namespace inside the container
             *      */
            readonly PidMode?: string;
            /** @description Gives the container full access to the host. */
            readonly Privileged?: boolean;
            /** @description Allocates an ephemeral host port for all of a container's
             *     exposed ports.
             *
             *     Ports are de-allocated when the container stops and allocated when
             *     the container starts. The allocated port might be changed when
             *     restarting the container.
             *
             *     The port is selected from the ephemeral port range that depends on
             *     the kernel. For example, on Linux the range is defined by
             *     `/proc/sys/net/ipv4/ip_local_port_range`.
             *      */
            readonly PublishAllPorts?: boolean;
            /** @description Mount the container's root filesystem as read only. */
            readonly ReadonlyRootfs?: boolean;
            /** @description A list of string values to customize labels for MLS systems, such
             *     as SELinux.
             *      */
            readonly SecurityOpt?: readonly string[];
            /** @description Storage driver options for this container, in the form `{"size": "120G"}`.
             *      */
            readonly StorageOpt?: {
                readonly [key: string]: string;
            };
            /** @description A map of container directories which should be replaced by tmpfs
             *     mounts, and their corresponding mount options. For example:
             *
             *     ```
             *     { "/run": "rw,noexec,nosuid,size=65536k" }
             *     ```
             *      */
            readonly Tmpfs?: {
                readonly [key: string]: string;
            };
            /** @description UTS namespace to use for the container. */
            readonly UTSMode?: string;
            /** @description Sets the usernamespace mode for the container when usernamespace
             *     remapping option is enabled.
             *      */
            readonly UsernsMode?: string;
            /**
             * Format: int64
             * @description Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.
             *
             */
            readonly ShmSize?: number;
            /**
             * @description A list of kernel parameters (sysctls) to set in the container.
             *
             *     This field is omitted if not set.
             * @example {
             *       "net.ipv4.ip_forward": "1"
             *     }
             */
            readonly Sysctls?: {
                readonly [key: string]: string;
            } | null;
            /** @description Runtime to use with this container. */
            readonly Runtime?: string | null;
            /**
             * @description Isolation technology of the container. (Windows only)
             *
             * @enum {string}
             */
            readonly Isolation?: "default" | "process" | "hyperv" | "";
            /**
             * @description The list of paths to be masked inside the container (this overrides
             *     the default set of paths).
             *
             * @example [
             *       "/proc/asound",
             *       "/proc/acpi",
             *       "/proc/kcore",
             *       "/proc/keys",
             *       "/proc/latency_stats",
             *       "/proc/timer_list",
             *       "/proc/timer_stats",
             *       "/proc/sched_debug",
             *       "/proc/scsi",
             *       "/sys/firmware",
             *       "/sys/devices/virtual/powercap"
             *     ]
             */
            readonly MaskedPaths?: readonly string[];
            /**
             * @description The list of paths to be set as read-only inside the container
             *     (this overrides the default set of paths).
             *
             * @example [
             *       "/proc/bus",
             *       "/proc/fs",
             *       "/proc/irq",
             *       "/proc/sys",
             *       "/proc/sysrq-trigger"
             *     ]
             */
            readonly ReadonlyPaths?: readonly string[];
        };
        /** @description Configuration for a container that is portable between hosts.
         *      */
        readonly ContainerConfig: {
            /**
             * @description The hostname to use for the container, as a valid RFC 1123 hostname.
             *
             * @example 439f4e91bd1d
             */
            readonly Hostname: string;
            /** @description The domain name to use for the container.
             *      */
            readonly Domainname: string;
            /**
             * @description Commands run as this user inside the container. If omitted, commands
             *     run as the user specified in the image the container was started from.
             *
             *     Can be either user-name or UID, and optional group-name or GID,
             *     separated by a colon (`<user-name|UID>[<:group-name|GID>]`).
             * @example 123:456
             */
            readonly User: string;
            /**
             * @description Whether to attach to `stdin`.
             * @default false
             */
            readonly AttachStdin: boolean;
            /**
             * @description Whether to attach to `stdout`.
             * @default true
             */
            readonly AttachStdout: boolean;
            /**
             * @description Whether to attach to `stderr`.
             * @default true
             */
            readonly AttachStderr: boolean;
            /**
             * @description An object mapping ports to an empty object in the form:
             *
             *     `{"<port>/<tcp|udp|sctp>": {}}`
             *
             * @example {
             *       "80/tcp": {},
             *       "443/tcp": {}
             *     }
             */
            readonly ExposedPorts: {
                readonly [key: string]: unknown;
            } | null;
            /**
             * @description Attach standard streams to a TTY, including `stdin` if it is not closed.
             *
             * @default false
             */
            readonly Tty: boolean;
            /**
             * @description Open `stdin`
             * @default false
             */
            readonly OpenStdin: boolean;
            /**
             * @description Close `stdin` after one attached client disconnects
             * @default false
             */
            readonly StdinOnce: boolean;
            /**
             * @description A list of environment variables to set inside the container in the
             *     form `["VAR=value", ...]`. A variable without `=` is removed from the
             *     environment, rather than to have an empty value.
             *
             * @example [
             *       "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
             *     ]
             */
            readonly Env: readonly string[];
            /**
             * @description Command to run specified as a string or an array of strings.
             *
             * @example [
             *       "/bin/sh"
             *     ]
             */
            readonly Cmd: readonly string[];
            readonly Healthcheck: components["schemas"]["HealthConfig"];
            /**
             * @description Command is already escaped (Windows only)
             * @default false
             * @example false
             */
            readonly ArgsEscaped: boolean | null;
            /**
             * @description The name (or reference) of the image to use when creating the container,
             *     or which was used when the container was created.
             *
             * @example example-image:1.0
             */
            readonly Image: string;
            /** @description An object mapping mount point paths inside the container to empty
             *     objects.
             *      */
            readonly Volumes: {
                readonly [key: string]: unknown;
            };
            /**
             * @description The working directory for commands to run in.
             * @example /public/
             */
            readonly WorkingDir: string;
            /**
             * @description The entry point for the container as a string or an array of strings.
             *
             *     If the array consists of exactly one empty string (`[""]`) then the
             *     entry point is reset to system default (i.e., the entry point used by
             *     docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).
             *
             * @example []
             */
            readonly Entrypoint: readonly string[];
            /** @description Disable networking for the container. */
            readonly NetworkDisabled: boolean | null;
            /** @description MAC address of the container.
             *
             *     Deprecated: this field is deprecated in API v1.44 and up. Use EndpointSettings.MacAddress instead.
             *      */
            readonly MacAddress: string | null;
            /**
             * @description `ONBUILD` metadata that were defined in the image's `Dockerfile`.
             *
             * @example []
             */
            readonly OnBuild: readonly string[] | null;
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description Signal to stop a container as a string or unsigned integer.
             *
             * @example SIGTERM
             */
            readonly StopSignal: string | null;
            /**
             * @description Timeout to stop a container in seconds.
             * @default 10
             */
            readonly StopTimeout: number | null;
            /**
             * @description Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
             *
             * @example [
             *       "/bin/sh",
             *       "-c"
             *     ]
             */
            readonly Shell: readonly string[] | null;
        };
        /**
         * @description Configuration of the image. These fields are used as defaults
         *     when starting a container from the image.
         *
         * @example {
         *       "User": "web:web",
         *       "ExposedPorts": {
         *         "80/tcp": {},
         *         "443/tcp": {}
         *       },
         *       "Env": [
         *         "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
         *       ],
         *       "Cmd": [
         *         "/bin/sh"
         *       ],
         *       "Healthcheck": {
         *         "Test": [
         *           "string"
         *         ],
         *         "Interval": 0,
         *         "Timeout": 0,
         *         "Retries": 0,
         *         "StartPeriod": 0,
         *         "StartInterval": 0
         *       },
         *       "ArgsEscaped": true,
         *       "Volumes": {
         *         "/app/data": {},
         *         "/app/config": {}
         *       },
         *       "WorkingDir": "/public/",
         *       "Entrypoint": [],
         *       "OnBuild": [],
         *       "Labels": {
         *         "com.example.some-label": "some-value",
         *         "com.example.some-other-label": "some-other-value"
         *       },
         *       "StopSignal": "SIGTERM",
         *       "Shell": [
         *         "/bin/sh",
         *         "-c"
         *       ]
         *     }
         */
        readonly ImageConfig: {
            /**
             * @description The user that commands are run as inside the container.
             * @example web:web
             */
            readonly User: string;
            /**
             * @description An object mapping ports to an empty object in the form:
             *
             *     `{"<port>/<tcp|udp|sctp>": {}}`
             *
             * @example {
             *       "80/tcp": {},
             *       "443/tcp": {}
             *     }
             */
            readonly ExposedPorts: {
                readonly [key: string]: unknown;
            } | null;
            /**
             * @description A list of environment variables to set inside the container in the
             *     form `["VAR=value", ...]`. A variable without `=` is removed from the
             *     environment, rather than to have an empty value.
             *
             * @example [
             *       "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
             *     ]
             */
            readonly Env: readonly string[];
            /**
             * @description Command to run specified as a string or an array of strings.
             *
             * @example [
             *       "/bin/sh"
             *     ]
             */
            readonly Cmd: readonly string[];
            readonly Healthcheck: components["schemas"]["HealthConfig"];
            /**
             * @description Command is already escaped (Windows only)
             * @default false
             * @example false
             */
            readonly ArgsEscaped: boolean | null;
            /**
             * @description An object mapping mount point paths inside the container to empty
             *     objects.
             *
             * @example {
             *       "/app/data": {},
             *       "/app/config": {}
             *     }
             */
            readonly Volumes: {
                readonly [key: string]: unknown;
            };
            /**
             * @description The working directory for commands to run in.
             * @example /public/
             */
            readonly WorkingDir: string;
            /**
             * @description The entry point for the container as a string or an array of strings.
             *
             *     If the array consists of exactly one empty string (`[""]`) then the
             *     entry point is reset to system default (i.e., the entry point used by
             *     docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).
             *
             * @example []
             */
            readonly Entrypoint: readonly string[];
            /**
             * @description `ONBUILD` metadata that were defined in the image's `Dockerfile`.
             *
             * @example []
             */
            readonly OnBuild: readonly string[] | null;
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description Signal to stop a container as a string or unsigned integer.
             *
             * @example SIGTERM
             */
            readonly StopSignal: string | null;
            /**
             * @description Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.
             *
             * @example [
             *       "/bin/sh",
             *       "-c"
             *     ]
             */
            readonly Shell: readonly string[] | null;
        };
        /**
         * @description NetworkingConfig represents the container's networking configuration for
         *     each of its interfaces.
         *     It is used for the networking configs specified in the `docker create`
         *     and `docker network connect` commands.
         *
         * @example {
         *       "EndpointsConfig": {
         *         "isolated_nw": {
         *           "IPAMConfig": {
         *             "IPv4Address": "172.20.30.33",
         *             "IPv6Address": "2001:db8:abcd::3033",
         *             "LinkLocalIPs": [
         *               "169.254.34.68",
         *               "fe80::3468"
         *             ]
         *           },
         *           "MacAddress": "02:42:ac:12:05:02",
         *           "Links": [
         *             "container_1",
         *             "container_2"
         *           ],
         *           "Aliases": [
         *             "server_x",
         *             "server_y"
         *           ]
         *         },
         *         "database_nw": {}
         *       }
         *     }
         */
        readonly NetworkingConfig: {
            /** @description A mapping of network name to endpoint configuration for that network.
             *     The endpoint configuration can be left empty to connect to that
             *     network with no particular endpoint configuration.
             *      */
            readonly EndpointsConfig: {
                readonly [key: string]: components["schemas"]["EndpointSettings"];
            };
        };
        /** @description NetworkSettings exposes the network settings in the API */
        readonly NetworkSettings: {
            /**
             * @description Name of the default bridge interface when dockerd's --bridge flag is set.
             *
             * @example docker0
             */
            readonly Bridge: string;
            /**
             * @description SandboxID uniquely represents a container's network stack.
             * @example 9d12daf2c33f5959c8bf90aa513e4f65b561738661003029ec84830cd503a0c3
             */
            readonly SandboxID: string;
            /**
             * @description Indicates if hairpin NAT should be enabled on the virtual interface.
             *
             *     Deprecated: This field is never set and will be removed in a future release.
             *
             * @example false
             */
            readonly HairpinMode: boolean;
            /**
             * @description IPv6 unicast address using the link-local prefix.
             *
             *     Deprecated: This field is never set and will be removed in a future release.
             *
             * @example
             */
            readonly LinkLocalIPv6Address: string;
            /**
             * @description Prefix length of the IPv6 unicast address.
             *
             *     Deprecated: This field is never set and will be removed in a future release.
             *
             * @example
             */
            readonly LinkLocalIPv6PrefixLen: number;
            readonly Ports: components["schemas"]["PortMap"];
            /**
             * @description SandboxKey is the full path of the netns handle
             * @example /var/run/docker/netns/8ab54b426c38
             */
            readonly SandboxKey: string;
            /** @description Deprecated: This field is never set and will be removed in a future release. */
            readonly SecondaryIPAddresses: readonly components["schemas"]["Address"][] | null;
            /** @description Deprecated: This field is never set and will be removed in a future release. */
            readonly SecondaryIPv6Addresses: readonly components["schemas"]["Address"][] | null;
            /**
             * @description EndpointID uniquely represents a service endpoint in a Sandbox.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example b88f5b905aabf2893f3cbc4ee42d1ea7980bbc0a92e2c8922b1e1795298afb0b
             */
            readonly EndpointID: string;
            /**
             * @description Gateway address for the default "bridge" network.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 172.17.0.1
             */
            readonly Gateway: string;
            /**
             * @description Global IPv6 address for the default "bridge" network.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 2001:db8::5689
             */
            readonly GlobalIPv6Address: string;
            /**
             * @description Mask length of the global IPv6 address.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 64
             */
            readonly GlobalIPv6PrefixLen: number;
            /**
             * @description IPv4 address for the default "bridge" network.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 172.17.0.4
             */
            readonly IPAddress: string;
            /**
             * @description Mask length of the IPv4 address.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 16
             */
            readonly IPPrefixLen: number;
            /**
             * @description IPv6 gateway address for this network.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 2001:db8:2::100
             */
            readonly IPv6Gateway: string;
            /**
             * @description MAC address for the container on the default "bridge" network.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: This field is only propagated when attached to the
             *     > default "bridge" network. Use the information from the "bridge"
             *     > network inside the `Networks` map instead, which contains the same
             *     > information. This field was deprecated in Docker 1.9 and is scheduled
             *     > to be removed in Docker 17.12.0
             *
             * @example 02:42:ac:11:00:04
             */
            readonly MacAddress: string;
            /** @description Information about all networks that the container is connected to.
             *      */
            readonly Networks: {
                readonly [key: string]: components["schemas"]["EndpointSettings"];
            };
        };
        /** @description Address represents an IPv4 or IPv6 IP address. */
        readonly Address: {
            /** @description IP address. */
            readonly Addr: string;
            /** @description Mask length of the IP address. */
            readonly PrefixLen: number;
        };
        /**
         * @description PortMap describes the mapping of container ports to host ports, using the
         *     container's port-number and protocol as key in the format `<port>/<protocol>`,
         *     for example, `80/udp`.
         *
         *     If a container's port is mapped for multiple protocols, separate entries
         *     are added to the mapping table.
         *
         * @example {
         *       "443/tcp": [
         *         {
         *           "HostIp": "127.0.0.1",
         *           "HostPort": "4443"
         *         }
         *       ],
         *       "80/tcp": [
         *         {
         *           "HostIp": "0.0.0.0",
         *           "HostPort": "80"
         *         },
         *         {
         *           "HostIp": "0.0.0.0",
         *           "HostPort": "8080"
         *         }
         *       ],
         *       "80/udp": [
         *         {
         *           "HostIp": "0.0.0.0",
         *           "HostPort": "80"
         *         }
         *       ],
         *       "53/udp": [
         *         {
         *           "HostIp": "0.0.0.0",
         *           "HostPort": "53"
         *         }
         *       ],
         *       "2377/tcp": null
         *     }
         */
        readonly PortMap: {
            readonly [key: string]: readonly components["schemas"]["PortBinding"][] | null;
        };
        /** @description PortBinding represents a binding between a host IP address and a host
         *     port.
         *      */
        readonly PortBinding: {
            /**
             * @description Host IP address that the container's port is mapped to.
             * @example 127.0.0.1
             */
            readonly HostIp: string;
            /**
             * @description Host port number that the container's port is mapped to.
             * @example 4443
             */
            readonly HostPort: string;
        };
        /** @description Information about the storage driver used to store the container's and
         *     image's filesystem.
         *      */
        readonly DriverData: {
            /**
             * @description Name of the storage driver.
             * @example overlay2
             */
            readonly Name: string;
            /**
             * @description Low-level storage metadata, provided as key/value pairs.
             *
             *     This information is driver-specific, and depends on the storage-driver
             *     in use, and should be used for informational purposes only.
             *
             * @example {
             *       "MergedDir": "/var/lib/docker/overlay2/ef749362d13333e65fc95c572eb525abbe0052e16e086cb64bc3b98ae9aa6d74/merged",
             *       "UpperDir": "/var/lib/docker/overlay2/ef749362d13333e65fc95c572eb525abbe0052e16e086cb64bc3b98ae9aa6d74/diff",
             *       "WorkDir": "/var/lib/docker/overlay2/ef749362d13333e65fc95c572eb525abbe0052e16e086cb64bc3b98ae9aa6d74/work"
             *     }
             */
            readonly Data: {
                readonly [key: string]: string;
            };
        };
        /** @description Change in the container's filesystem.
         *      */
        readonly FilesystemChange: {
            /** @description Path to file or directory that has changed.
             *      */
            readonly Path: string;
            readonly Kind: components["schemas"]["ChangeType"];
        };
        /**
         * Format: uint8
         * @description Kind of change
         *
         *     Can be one of:
         *
         *     - `0`: Modified ("C")
         *     - `1`: Added ("A")
         *     - `2`: Deleted ("D")
         *
         * @enum {integer}
         */
        readonly ChangeType: 0 | 1 | 2;
        /** @description Information about an image in the local image cache.
         *      */
        readonly ImageInspect: {
            /**
             * @description ID is the content-addressable ID of an image.
             *
             *     This identifier is a content-addressable digest calculated from the
             *     image's configuration (which includes the digests of layers used by
             *     the image).
             *
             *     Note that this digest differs from the `RepoDigests` below, which
             *     holds digests of image manifests that reference the image.
             *
             * @example sha256:ec3f0931a6e6b6855d76b2d7b0be30e81860baccd891b2e243280bf1cd8ad710
             */
            readonly Id: string;
            readonly Descriptor: components["schemas"]["OCIDescriptor"];
            /** @description Manifests is a list of image manifests available in this image. It
             *     provides a more detailed view of the platform-specific image manifests or
             *     other image-attached data like build attestations.
             *
             *     Only available if the daemon provides a multi-platform image store
             *     and the `manifests` option is set in the inspect request.
             *
             *     WARNING: This is experimental and may change at any time without any backward
             *     compatibility.
             *      */
            readonly Manifests: readonly components["schemas"]["ImageManifestSummary"][] | null;
            /**
             * @description List of image names/tags in the local image cache that reference this
             *     image.
             *
             *     Multiple image tags can refer to the same image, and this list may be
             *     empty if no tags reference the image, in which case the image is
             *     "untagged", in which case it can still be referenced by its ID.
             *
             * @example [
             *       "example:1.0",
             *       "example:latest",
             *       "example:stable",
             *       "internal.registry.example.com:5000/example:1.0"
             *     ]
             */
            readonly RepoTags: readonly string[];
            /**
             * @description List of content-addressable digests of locally available image manifests
             *     that the image is referenced from. Multiple manifests can refer to the
             *     same image.
             *
             *     These digests are usually only available if the image was either pulled
             *     from a registry, or if the image was pushed to a registry, which is when
             *     the manifest is generated and its digest calculated.
             *
             * @example [
             *       "example@sha256:afcc7f1ac1b49db317a7196c902e61c6c3c4607d63599ee1a82d702d249a0ccb",
             *       "internal.registry.example.com:5000/example@sha256:b69959407d21e8a062e0416bf13405bb2b71ed7a84dde4158ebafacfa06f5578"
             *     ]
             */
            readonly RepoDigests: readonly string[];
            /**
             * @description ID of the parent image.
             *
             *     Depending on how the image was created, this field may be empty and
             *     is only set for images that were built/created locally. This field
             *     is empty if the image was pulled from an image registry.
             *
             * @example
             */
            readonly Parent: string;
            /**
             * @description Optional message that was set when committing or importing the image.
             *
             * @example
             */
            readonly Comment: string;
            /**
             * Format: dateTime
             * @description Date and time at which the image was created, formatted in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             *     This information is only available if present in the image,
             *     and omitted otherwise.
             *
             * @example 2022-02-04T21:20:12.497794809Z
             */
            readonly Created: string | null;
            /**
             * @description The version of Docker that was used to build the image.
             *
             *     Depending on how the image was created, this field may be empty.
             *
             * @example 27.0.1
             */
            readonly DockerVersion: string;
            /**
             * @description Name of the author that was specified when committing the image, or as
             *     specified through MAINTAINER (deprecated) in the Dockerfile.
             *
             * @example
             */
            readonly Author: string;
            readonly Config: components["schemas"]["ImageConfig"];
            /**
             * @description Hardware CPU architecture that the image runs on.
             *
             * @example arm
             */
            readonly Architecture: string;
            /**
             * @description CPU architecture variant (presently ARM-only).
             *
             * @example v7
             */
            readonly Variant: string | null;
            /**
             * @description Operating System the image is built to run on.
             *
             * @example linux
             */
            readonly Os: string;
            /**
             * @description Operating System version the image is built to run on (especially
             *     for Windows).
             *
             * @example
             */
            readonly OsVersion: string | null;
            /**
             * Format: int64
             * @description Total size of the image including all layers it is composed of.
             *
             * @example 1239828
             */
            readonly Size: number;
            /**
             * Format: int64
             * @description Total size of the image including all layers it is composed of.
             *
             *     Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
             *
             * @example 1239828
             */
            readonly VirtualSize: number;
            readonly GraphDriver: components["schemas"]["DriverData"];
            /** @description Information about the image's RootFS, including the layer IDs.
             *      */
            readonly RootFS: {
                /** @example layers */
                readonly Type: string;
                /** @example [
                 *       "sha256:1834950e52ce4d5a88a1bbd131c537f4d0e56d10ff0dd69e66be3b7dfa9df7e6",
                 *       "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef"
                 *     ] */
                readonly Layers?: readonly string[];
            };
            /** @description Additional metadata of the image in the local cache. This information
             *     is local to the daemon, and not part of the image itself.
             *      */
            readonly Metadata: {
                /**
                 * Format: dateTime
                 * @description Date and time at which the image was last tagged in
                 *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
                 *
                 *     This information is only available if the image was tagged locally,
                 *     and omitted otherwise.
                 *
                 * @example 2022-02-28T14:40:02.623929178Z
                 */
                readonly LastTagTime: string | null;
            };
        };
        readonly ImageSummary: {
            /**
             * @description ID is the content-addressable ID of an image.
             *
             *     This identifier is a content-addressable digest calculated from the
             *     image's configuration (which includes the digests of layers used by
             *     the image).
             *
             *     Note that this digest differs from the `RepoDigests` below, which
             *     holds digests of image manifests that reference the image.
             *
             * @example sha256:ec3f0931a6e6b6855d76b2d7b0be30e81860baccd891b2e243280bf1cd8ad710
             */
            readonly Id: string;
            /**
             * @description ID of the parent image.
             *
             *     Depending on how the image was created, this field may be empty and
             *     is only set for images that were built/created locally. This field
             *     is empty if the image was pulled from an image registry.
             *
             * @example
             */
            readonly ParentId: string;
            /**
             * @description List of image names/tags in the local image cache that reference this
             *     image.
             *
             *     Multiple image tags can refer to the same image, and this list may be
             *     empty if no tags reference the image, in which case the image is
             *     "untagged", in which case it can still be referenced by its ID.
             *
             * @example [
             *       "example:1.0",
             *       "example:latest",
             *       "example:stable",
             *       "internal.registry.example.com:5000/example:1.0"
             *     ]
             */
            readonly RepoTags: readonly string[];
            /**
             * @description List of content-addressable digests of locally available image manifests
             *     that the image is referenced from. Multiple manifests can refer to the
             *     same image.
             *
             *     These digests are usually only available if the image was either pulled
             *     from a registry, or if the image was pushed to a registry, which is when
             *     the manifest is generated and its digest calculated.
             *
             * @example [
             *       "example@sha256:afcc7f1ac1b49db317a7196c902e61c6c3c4607d63599ee1a82d702d249a0ccb",
             *       "internal.registry.example.com:5000/example@sha256:b69959407d21e8a062e0416bf13405bb2b71ed7a84dde4158ebafacfa06f5578"
             *     ]
             */
            readonly RepoDigests: readonly string[];
            /**
             * @description Date and time at which the image was created as a Unix timestamp
             *     (number of seconds since EPOCH).
             *
             * @example 1644009612
             */
            readonly Created: number;
            /**
             * Format: int64
             * @description Total size of the image including all layers it is composed of.
             *
             * @example 172064416
             */
            readonly Size: number;
            /**
             * Format: int64
             * @description Total size of image layers that are shared between this image and other
             *     images.
             *
             *     This size is not calculated by default. `-1` indicates that the value
             *     has not been set / calculated.
             *
             * @example 1239828
             */
            readonly SharedSize: number;
            /**
             * Format: int64
             * @description Total size of the image including all layers it is composed of.
             *
             *     Deprecated: this field is omitted in API v1.44, but kept for backward compatibility. Use Size instead.
             * @example 172064416
             */
            readonly VirtualSize?: number;
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description Number of containers using this image. Includes both stopped and running
             *     containers.
             *
             *     `-1` indicates that the value has not been set / calculated.
             *
             * @example 2
             */
            readonly Containers: number;
            /** @description Manifests is a list of manifests available in this image.
             *     It provides a more detailed view of the platform-specific image manifests
             *     or other image-attached data like build attestations.
             *
             *     WARNING: This is experimental and may change at any time without any backward
             *     compatibility.
             *      */
            readonly Manifests?: readonly components["schemas"]["ImageManifestSummary"][];
            readonly Descriptor?: components["schemas"]["OCIDescriptor"];
        };
        /** @example {
         *       "username": "hannibal",
         *       "password": "xxxx",
         *       "serveraddress": "https://index.docker.io/v1/"
         *     } */
        readonly AuthConfig: {
            readonly username: string;
            readonly password: string;
            readonly email: string;
            readonly serveraddress: string;
        };
        readonly ProcessConfig: {
            readonly privileged: boolean;
            readonly user: string;
            readonly tty: boolean;
            readonly entrypoint: string;
            readonly arguments: readonly string[];
        };
        readonly Volume: {
            /**
             * @description Name of the volume.
             * @example tardis
             */
            readonly Name: string;
            /**
             * @description Name of the volume driver used by the volume.
             * @example custom
             */
            readonly Driver: string;
            /**
             * @description Mount path of the volume on the host.
             * @example /var/lib/docker/volumes/tardis
             */
            readonly Mountpoint: string;
            /**
             * Format: dateTime
             * @description Date/Time the volume was created.
             * @example 2016-06-07T20:31:11.853781916Z
             */
            readonly CreatedAt?: string;
            /**
             * @description Low-level details about the volume, provided by the volume driver.
             *     Details are returned as a map with key/value pairs:
             *     `{"key":"value","key2":"value2"}`.
             *
             *     The `Status` field is optional, and is omitted if the volume driver
             *     does not support this feature.
             *
             * @example {
             *       "hello": "world"
             *     }
             */
            readonly Status?: {
                readonly [key: string]: Record<string, never>;
            };
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description The level at which the volume exists. Either `global` for cluster-wide,
             *     or `local` for machine level.
             *
             * @default local
             * @example local
             * @enum {string}
             */
            readonly Scope: "local" | "global";
            readonly ClusterVolume?: components["schemas"]["ClusterVolume"];
            /**
             * @description The driver specific options used when creating the volume.
             *
             * @example {
             *       "device": "tmpfs",
             *       "o": "size=100m,uid=1000",
             *       "type": "tmpfs"
             *     }
             */
            readonly Options: {
                readonly [key: string]: string;
            };
            /** @description Usage details about the volume. This information is used by the
             *     `GET /system/df` endpoint, and omitted in other endpoints.
             *      */
            readonly UsageData?: {
                /**
                 * Format: int64
                 * @description Amount of disk space used by the volume (in bytes). This information
                 *     is only available for volumes created with the `"local"` volume
                 *     driver. For volumes created with other volume drivers, this field
                 *     is set to `-1` ("not available")
                 *
                 * @default -1
                 */
                readonly Size: number;
                /**
                 * Format: int64
                 * @description The number of containers referencing this volume. This field
                 *     is set to `-1` if the reference-count is not available.
                 *
                 * @default -1
                 */
                readonly RefCount: number;
            } | null;
        };
        /**
         * VolumeConfig
         * @description Volume configuration
         */
        readonly VolumeCreateOptions: {
            /**
             * @description The new volume's name. If not specified, Docker generates a name.
             *
             * @example tardis
             */
            readonly Name: string;
            /**
             * @description Name of the volume driver to use.
             * @default local
             * @example custom
             */
            readonly Driver: string;
            /**
             * @description A mapping of driver options and values. These options are
             *     passed directly to the driver and are driver specific.
             *
             * @example {
             *       "device": "tmpfs",
             *       "o": "size=100m,uid=1000",
             *       "type": "tmpfs"
             *     }
             */
            readonly DriverOpts: {
                readonly [key: string]: string;
            };
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            readonly ClusterVolumeSpec: components["schemas"]["ClusterVolumeSpec"];
        };
        /**
         * VolumeListResponse
         * @description Volume list response
         */
        readonly VolumeListResponse: {
            /** @description List of volumes */
            readonly Volumes: readonly components["schemas"]["Volume"][];
            /**
             * @description Warnings that occurred when fetching the list of volumes.
             *
             * @example []
             */
            readonly Warnings: readonly string[];
        };
        readonly Network: {
            /**
             * @description Name of the network.
             *
             * @example my_network
             */
            readonly Name: string;
            /**
             * @description ID that uniquely identifies a network on a single machine.
             *
             * @example 7d86d31b1478e7cca9ebed7e73aa0fdeec46c5ca29497431d3007d2d9e15ed99
             */
            readonly Id: string;
            /**
             * Format: dateTime
             * @description Date and time at which the network was created in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2016-10-19T04:33:30.360899459Z
             */
            readonly Created: string;
            /**
             * @description The level at which the network exists (e.g. `swarm` for cluster-wide
             *     or `local` for machine level)
             *
             * @example local
             */
            readonly Scope: string;
            /**
             * @description The name of the driver used to create the network (e.g. `bridge`,
             *     `overlay`).
             *
             * @example overlay
             */
            readonly Driver: string;
            /**
             * @description Whether the network was created with IPv4 enabled.
             *
             * @example true
             */
            readonly EnableIPv4: boolean;
            /**
             * @description Whether the network was created with IPv6 enabled.
             *
             * @example false
             */
            readonly EnableIPv6: boolean;
            readonly IPAM: components["schemas"]["IPAM"];
            /**
             * @description Whether the network is created to only allow internal networking
             *     connectivity.
             *
             * @default false
             * @example false
             */
            readonly Internal: boolean;
            /**
             * @description Whether a global / swarm scope network is manually attachable by regular
             *     containers from workers in swarm mode.
             *
             * @default false
             * @example false
             */
            readonly Attachable: boolean;
            /**
             * @description Whether the network is providing the routing-mesh for the swarm cluster.
             *
             * @default false
             * @example false
             */
            readonly Ingress: boolean;
            readonly ConfigFrom: components["schemas"]["ConfigReference"];
            /**
             * @description Whether the network is a config-only network. Config-only networks are
             *     placeholder networks for network configurations to be used by other
             *     networks. Config-only networks cannot be used directly to run containers
             *     or services.
             *
             * @default false
             */
            readonly ConfigOnly: boolean;
            /**
             * @description Contains endpoints attached to the network.
             *
             * @example {
             *       "19a4d5d687db25203351ed79d478946f861258f018fe384f229f2efa4b23513c": {
             *         "Name": "test",
             *         "EndpointID": "628cadb8bcb92de107b2a1e516cbffe463e321f548feb37697cce00ad694f21a",
             *         "MacAddress": "02:42:ac:13:00:02",
             *         "IPv4Address": "172.19.0.2/16",
             *         "IPv6Address": ""
             *       }
             *     }
             */
            readonly Containers: {
                readonly [key: string]: components["schemas"]["NetworkContainer"];
            };
            /**
             * @description Network-specific options uses when creating the network.
             *
             * @example {
             *       "com.docker.network.bridge.default_bridge": "true",
             *       "com.docker.network.bridge.enable_icc": "true",
             *       "com.docker.network.bridge.enable_ip_masquerade": "true",
             *       "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
             *       "com.docker.network.bridge.name": "docker0",
             *       "com.docker.network.driver.mtu": "1500"
             *     }
             */
            readonly Options: {
                readonly [key: string]: string;
            };
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /** @description List of peer nodes for an overlay network. This field is only present
             *     for overlay networks, and omitted for other network types.
             *      */
            readonly Peers: readonly components["schemas"]["PeerInfo"][] | null;
        };
        /** @description The config-only network source to provide the configuration for
         *     this network.
         *      */
        readonly ConfigReference: {
            /**
             * @description The name of the config-only network that provides the network's
             *     configuration. The specified network must be an existing config-only
             *     network. Only network names are allowed, not network IDs.
             *
             * @example config_only_network_01
             */
            readonly Network: string;
        };
        readonly IPAM: {
            /**
             * @description Name of the IPAM driver to use.
             * @default default
             * @example default
             */
            readonly Driver: string;
            /** @description List of IPAM configuration options, specified as a map:
             *
             *     ```
             *     {"Subnet": <CIDR>, "IPRange": <CIDR>, "Gateway": <IP address>, "AuxAddress": <device_name:IP address>}
             *     ```
             *      */
            readonly Config: readonly components["schemas"]["IPAMConfig"][];
            /**
             * @description Driver-specific options, specified as a map.
             * @example {
             *       "foo": "bar"
             *     }
             */
            readonly Options: {
                readonly [key: string]: string;
            };
        };
        readonly IPAMConfig: {
            /** @example 172.20.0.0/16 */
            readonly Subnet: string;
            /** @example 172.20.10.0/24 */
            readonly IPRange: string;
            /** @example 172.20.10.11 */
            readonly Gateway: string;
            readonly AuxiliaryAddresses: {
                readonly [key: string]: string;
            };
        };
        readonly NetworkContainer: {
            /** @example container_1 */
            readonly Name: string;
            /** @example 628cadb8bcb92de107b2a1e516cbffe463e321f548feb37697cce00ad694f21a */
            readonly EndpointID: string;
            /** @example 02:42:ac:13:00:02 */
            readonly MacAddress: string;
            /** @example 172.19.0.2/16 */
            readonly IPv4Address: string;
            /** @example  */
            readonly IPv6Address: string;
        };
        /** @description PeerInfo represents one peer of an overlay network.
         *      */
        readonly PeerInfo: {
            /**
             * @description ID of the peer-node in the Swarm cluster.
             * @example 6869d7c1732b
             */
            readonly Name: string;
            /**
             * @description IP-address of the peer-node in the Swarm cluster.
             * @example 10.133.77.91
             */
            readonly IP: string;
        };
        /**
         * NetworkCreateResponse
         * @description OK response to NetworkCreate operation
         */
        readonly NetworkCreateResponse: {
            /**
             * @description The ID of the created network.
             * @example b5c4fc71e8022147cd25de22b22173de4e3b170134117172eb595cb91b4e7e5d
             */
            readonly Id: string;
            /**
             * @description Warnings encountered when creating the container
             * @example
             */
            readonly Warning: string;
        };
        readonly BuildInfo: {
            readonly id: string;
            readonly stream: string;
            /** @description errors encountered during the operation.
             *
             *
             *     > **Deprecated**: This field is deprecated since API v1.4, and will be omitted in a future API version. Use the information in errorDetail instead. */
            readonly error: string | null;
            readonly errorDetail: components["schemas"]["ErrorDetail"];
            readonly status: string;
            /** @description Progress is a pre-formatted presentation of progressDetail.
             *
             *
             *     > **Deprecated**: This field is deprecated since API v1.8, and will be omitted in a future API version. Use the information in progressDetail instead. */
            readonly progress: string | null;
            readonly progressDetail: components["schemas"]["ProgressDetail"];
            readonly aux: components["schemas"]["ImageID"];
        };
        /** @description BuildCache contains information about a build cache record.
         *      */
        readonly BuildCache: {
            /**
             * @description Unique ID of the build cache record.
             *
             * @example ndlpt0hhvkqcdfkputsk4cq9c
             */
            readonly ID: string;
            /**
             * @description ID of the parent build cache record.
             *
             *     > **Deprecated**: This field is deprecated, and omitted if empty.
             *
             * @example
             */
            readonly Parent: string | null;
            /**
             * @description List of parent build cache record IDs.
             *
             * @example [
             *       "hw53o5aio51xtltp5xjp8v7fx"
             *     ]
             */
            readonly Parents: readonly string[] | null;
            /**
             * @description Cache record type.
             *
             * @example regular
             * @enum {string}
             */
            readonly Type: "internal" | "frontend" | "source.local" | "source.git.checkout" | "exec.cachemount" | "regular";
            /**
             * @description Description of the build-step that produced the build cache.
             *
             * @example mount / from exec /bin/sh -c echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
             */
            readonly Description: string;
            /**
             * @description Indicates if the build cache is in use.
             *
             * @example false
             */
            readonly InUse: boolean;
            /**
             * @description Indicates if the build cache is shared.
             *
             * @example true
             */
            readonly Shared: boolean;
            /**
             * @description Amount of disk space used by the build cache (in bytes).
             *
             * @example 51
             */
            readonly Size: number;
            /**
             * Format: dateTime
             * @description Date and time at which the build cache was created in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2016-08-18T10:44:24.496525531Z
             */
            readonly CreatedAt: string;
            /**
             * Format: dateTime
             * @description Date and time at which the build cache was last used in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2017-08-09T07:09:37.632105588Z
             */
            readonly LastUsedAt: string | null;
            /** @example 26 */
            readonly UsageCount: number;
        };
        /**
         * @description Image ID or Digest
         * @example {
         *       "ID": "sha256:85f05633ddc1c50679be2b16a0479ab6f7637f8884e0cfe0f4d20e1ebb3d6e7c"
         *     }
         */
        readonly ImageID: {
            readonly ID: string;
        };
        readonly CreateImageInfo: {
            readonly id: string;
            /** @description errors encountered during the operation.
             *
             *
             *     > **Deprecated**: This field is deprecated since API v1.4, and will be omitted in a future API version. Use the information in errorDetail instead. */
            readonly error: string | null;
            readonly errorDetail: components["schemas"]["ErrorDetail"];
            readonly status: string;
            /** @description Progress is a pre-formatted presentation of progressDetail.
             *
             *
             *     > **Deprecated**: This field is deprecated since API v1.8, and will be omitted in a future API version. Use the information in progressDetail instead. */
            readonly progress: string | null;
            readonly progressDetail: components["schemas"]["ProgressDetail"];
        };
        readonly PushImageInfo: {
            /** @description errors encountered during the operation.
             *
             *
             *     > **Deprecated**: This field is deprecated since API v1.4, and will be omitted in a future API version. Use the information in errorDetail instead. */
            readonly error: string | null;
            readonly errorDetail: components["schemas"]["ErrorDetail"];
            readonly status: string;
            /** @description Progress is a pre-formatted presentation of progressDetail.
             *
             *
             *     > **Deprecated**: This field is deprecated since API v1.8, and will be omitted in a future API version. Use the information in progressDetail instead. */
            readonly progress: string | null;
            readonly progressDetail: components["schemas"]["ProgressDetail"];
        };
        /** @description DeviceInfo represents a device that can be used by a container.
         *      */
        readonly DeviceInfo: {
            /**
             * @description The origin device driver.
             *
             * @example cdi
             */
            readonly Source: string;
            /**
             * @description The unique identifier for the device within its source driver.
             *     For CDI devices, this would be an FQDN like "vendor.com/gpu=0".
             *
             * @example vendor.com/gpu=0
             */
            readonly ID: string;
        };
        readonly ErrorDetail: {
            readonly code: number;
            readonly message: string;
        };
        readonly ProgressDetail: {
            readonly current: number;
            readonly total: number;
        };
        /**
         * @description Represents an error.
         * @example {
         *       "message": "Something went wrong."
         *     }
         */
        readonly ErrorResponse: {
            /** @description The error message. */
            readonly message: string;
        };
        /** @description Response to an API call that returns just an Id */
        readonly IDResponse: {
            /** @description The id of the newly created object. */
            readonly Id: string;
        };
        /** @description Configuration for a network endpoint. */
        readonly EndpointSettings: {
            readonly IPAMConfig: components["schemas"]["EndpointIPAMConfig"];
            /** @example [
             *       "container_1",
             *       "container_2"
             *     ] */
            readonly Links: readonly string[];
            /**
             * @description MAC address for the endpoint on this network. The network driver might ignore this parameter.
             *
             * @example 02:42:ac:11:00:04
             */
            readonly MacAddress: string;
            /** @example [
             *       "server_x",
             *       "server_y"
             *     ] */
            readonly Aliases: readonly string[];
            /**
             * @description DriverOpts is a mapping of driver options and values. These options
             *     are passed directly to the driver and are driver specific.
             *
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly DriverOpts: {
                readonly [key: string]: string;
            } | null;
            /**
             * @description This property determines which endpoint will provide the default
             *     gateway for a container. The endpoint with the highest priority will
             *     be used. If multiple endpoints have the same priority, endpoints are
             *     lexicographically sorted based on their network name, and the one
             *     that sorts first is picked.
             *
             * @example [
             *       10
             *     ]
             */
            readonly GwPriority: number;
            /**
             * @description Unique ID of the network.
             *
             * @example 08754567f1f40222263eab4102e1c733ae697e8e354aa9cd6e18d7402835292a
             */
            readonly NetworkID: string;
            /**
             * @description Unique ID for the service endpoint in a Sandbox.
             *
             * @example b88f5b905aabf2893f3cbc4ee42d1ea7980bbc0a92e2c8922b1e1795298afb0b
             */
            readonly EndpointID: string;
            /**
             * @description Gateway address for this network.
             *
             * @example 172.17.0.1
             */
            readonly Gateway: string;
            /**
             * @description IPv4 address.
             *
             * @example 172.17.0.4
             */
            readonly IPAddress: string;
            /**
             * @description Mask length of the IPv4 address.
             *
             * @example 16
             */
            readonly IPPrefixLen: number;
            /**
             * @description IPv6 gateway address.
             *
             * @example 2001:db8:2::100
             */
            readonly IPv6Gateway: string;
            /**
             * @description Global IPv6 address.
             *
             * @example 2001:db8::5689
             */
            readonly GlobalIPv6Address: string;
            /**
             * Format: int64
             * @description Mask length of the global IPv6 address.
             *
             * @example 64
             */
            readonly GlobalIPv6PrefixLen: number;
            /**
             * @description List of all DNS names an endpoint has on a specific network. This
             *     list is based on the container name, network aliases, container short
             *     ID, and hostname.
             *
             *     These DNS names are non-fully qualified but can contain several dots.
             *     You can get fully qualified DNS names by appending `.<network-name>`.
             *     For instance, if container name is `my.ctr` and the network is named
             *     `testnet`, `DNSNames` will contain `my.ctr` and the FQDN will be
             *     `my.ctr.testnet`.
             *
             * @example [
             *       "foobar",
             *       "server_x",
             *       "server_y",
             *       "my.ctr"
             *     ]
             */
            readonly DNSNames: readonly string[];
        };
        /** @description EndpointIPAMConfig represents an endpoint's IPAM configuration.
         *      */
        readonly EndpointIPAMConfig: {
            /** @example 172.20.30.33 */
            readonly IPv4Address: string;
            /** @example 2001:db8:abcd::3033 */
            readonly IPv6Address: string;
            /** @example [
             *       "169.254.34.68",
             *       "fe80::3468"
             *     ] */
            readonly LinkLocalIPs: readonly string[];
        } | null;
        readonly PluginMount: {
            /** @example some-mount */
            readonly Name: string;
            /** @example This is a mount that's used by the plugin. */
            readonly Description: string;
            readonly Settable: readonly string[];
            /** @example /var/lib/docker/plugins/ */
            readonly Source: string;
            /** @example /mnt/state */
            readonly Destination: string;
            /** @example bind */
            readonly Type: string;
            /** @example [
             *       "rbind",
             *       "rw"
             *     ] */
            readonly Options: readonly string[];
        };
        readonly PluginDevice: {
            readonly Name: string;
            readonly Description: string;
            readonly Settable: readonly string[];
            /** @example /dev/fuse */
            readonly Path: string;
        };
        readonly PluginEnv: {
            readonly Name: string;
            readonly Description: string;
            readonly Settable: readonly string[];
            readonly Value: string;
        };
        readonly PluginInterfaceType: {
            readonly Prefix: string;
            readonly Capability: string;
            readonly Version: string;
        };
        /** @description Describes a permission the user has to accept upon installing
         *     the plugin.
         *      */
        readonly PluginPrivilege: {
            /** @example network */
            readonly Name: string;
            readonly Description: string;
            /** @example [
             *       "host"
             *     ] */
            readonly Value: readonly string[];
        };
        /** @description A plugin for the Engine API */
        readonly Plugin: {
            /** @example 5724e2c8652da337ab2eedd19fc6fc0ec908e4bd907c7421bf6a8dfc70c4c078 */
            readonly Id?: string;
            /** @example tiborvass/sample-volume-plugin */
            readonly Name: string;
            /**
             * @description True if the plugin is running. False if the plugin is not running, only installed.
             * @example true
             */
            readonly Enabled: boolean;
            /** @description Settings that can be modified by users. */
            readonly Settings: {
                readonly Mounts: readonly components["schemas"]["PluginMount"][];
                /** @example [
                 *       "DEBUG=0"
                 *     ] */
                readonly Env: readonly string[];
                readonly Args: readonly string[];
                readonly Devices: readonly components["schemas"]["PluginDevice"][];
            };
            /**
             * @description plugin remote reference used to push/pull the plugin
             * @example localhost:5000/tiborvass/sample-volume-plugin:latest
             */
            readonly PluginReference?: string;
            /** @description The config of a plugin. */
            readonly Config: {
                /**
                 * @description Docker Version used to create the plugin
                 * @example 17.06.0-ce
                 */
                readonly DockerVersion?: string;
                /** @example A sample volume plugin for Docker */
                readonly Description: string;
                /** @example https://docs.docker.com/engine/extend/plugins/ */
                readonly Documentation: string;
                /** @description The interface between Docker and the plugin */
                readonly Interface: {
                    /** @example [
                     *       "docker.volumedriver/1.0"
                     *     ] */
                    readonly Types: readonly components["schemas"]["PluginInterfaceType"][];
                    /** @example plugins.sock */
                    readonly Socket: string;
                    /**
                     * @description Protocol to use for clients connecting to the plugin.
                     * @example some.protocol/v1.0
                     * @enum {string}
                     */
                    readonly ProtocolScheme?: "" | "moby.plugins.http/v1";
                };
                /** @example [
                 *       "/usr/bin/sample-volume-plugin",
                 *       "/data"
                 *     ] */
                readonly Entrypoint: readonly string[];
                /** @example /bin/ */
                readonly WorkDir: string;
                readonly User?: {
                    /**
                     * Format: uint32
                     * @example 1000
                     */
                    readonly UID: number;
                    /**
                     * Format: uint32
                     * @example 1000
                     */
                    readonly GID: number;
                };
                readonly Network: {
                    /** @example host */
                    readonly Type: string;
                };
                readonly Linux: {
                    /** @example [
                     *       "CAP_SYS_ADMIN",
                     *       "CAP_SYSLOG"
                     *     ] */
                    readonly Capabilities: readonly string[];
                    /** @example false */
                    readonly AllowAllDevices: boolean;
                    readonly Devices: readonly components["schemas"]["PluginDevice"][];
                };
                /** @example /mnt/volumes */
                readonly PropagatedMount: string;
                /** @example false */
                readonly IpcHost: boolean;
                /** @example false */
                readonly PidHost: boolean;
                readonly Mounts: readonly components["schemas"]["PluginMount"][];
                /** @example [
                 *       {
                 *         "Name": "DEBUG",
                 *         "Description": "If set, prints debug messages",
                 *         "Settable": null,
                 *         "Value": "0"
                 *       }
                 *     ] */
                readonly Env: readonly components["schemas"]["PluginEnv"][];
                readonly Args: {
                    /** @example args */
                    readonly Name: string;
                    /** @example command line arguments */
                    readonly Description: string;
                    readonly Settable: readonly string[];
                    readonly Value: readonly string[];
                };
                readonly rootfs?: {
                    /** @example layers */
                    readonly type: string;
                    /** @example [
                     *       "sha256:675532206fbf3030b8458f88d6e26d4eb1577688a25efec97154c94e8b6b4887",
                     *       "sha256:e216a057b1cb1efc11f8a268f37ef62083e70b1b38323ba252e25ac88904a7e8"
                     *     ] */
                    readonly diff_ids: readonly string[];
                };
            };
        };
        /** @description The version number of the object such as node, service, etc. This is needed
         *     to avoid conflicting writes. The client must send the version number along
         *     with the modified specification when updating these objects.
         *
         *     This approach ensures safe concurrency and determinism in that the change
         *     on the object may not be applied if the version number has changed from the
         *     last read. In other words, if two update requests specify the same base
         *     version, only one of the requests can succeed. As a result, two separate
         *     update requests that happen at the same time will not unintentionally
         *     overwrite each other.
         *      */
        readonly ObjectVersion: {
            /**
             * Format: uint64
             * @example 373531
             */
            readonly Index: number;
        };
        /** @example {
         *       "Availability": "active",
         *       "Name": "node-name",
         *       "Role": "manager",
         *       "Labels": {
         *         "foo": "bar"
         *       }
         *     } */
        readonly NodeSpec: {
            /**
             * @description Name for the node.
             * @example my-node
             */
            readonly Name: string;
            /** @description User-defined key/value metadata. */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description Role of the node.
             * @example manager
             * @enum {string}
             */
            readonly Role: "worker" | "manager";
            /**
             * @description Availability of the node.
             * @example active
             * @enum {string}
             */
            readonly Availability: "active" | "pause" | "drain";
        };
        readonly Node: {
            /** @example 24ifsmvkjbyhk */
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /**
             * Format: dateTime
             * @description Date and time at which the node was added to the swarm in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2016-08-18T10:44:24.496525531Z
             */
            readonly CreatedAt: string;
            /**
             * Format: dateTime
             * @description Date and time at which the node was last updated in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2017-08-09T07:09:37.632105588Z
             */
            readonly UpdatedAt: string;
            readonly Spec: components["schemas"]["NodeSpec"];
            readonly Description: components["schemas"]["NodeDescription"];
            readonly Status: components["schemas"]["NodeStatus"];
            readonly ManagerStatus: components["schemas"]["ManagerStatus"];
        };
        /** @description NodeDescription encapsulates the properties of the Node as reported by the
         *     agent.
         *      */
        readonly NodeDescription: {
            /** @example bf3067039e47 */
            readonly Hostname: string;
            readonly Platform: components["schemas"]["Platform"];
            readonly Resources: components["schemas"]["ResourceObject"];
            readonly Engine: components["schemas"]["EngineDescription"];
            readonly TLSInfo: components["schemas"]["TLSInfo"];
        };
        /** @description Platform represents the platform (Arch/OS).
         *      */
        readonly Platform: {
            /**
             * @description Architecture represents the hardware architecture (for example,
             *     `x86_64`).
             *
             * @example x86_64
             */
            readonly Architecture: string;
            /**
             * @description OS represents the Operating System (for example, `linux` or `windows`).
             *
             * @example linux
             */
            readonly OS: string;
        };
        /** @description EngineDescription provides information about an engine. */
        readonly EngineDescription: {
            /** @example 17.06.0 */
            readonly EngineVersion: string;
            /** @example {
             *       "foo": "bar"
             *     } */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /** @example [
             *       {
             *         "Type": "Log",
             *         "Name": "awslogs"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "fluentd"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "gcplogs"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "gelf"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "journald"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "json-file"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "splunk"
             *       },
             *       {
             *         "Type": "Log",
             *         "Name": "syslog"
             *       },
             *       {
             *         "Type": "Network",
             *         "Name": "bridge"
             *       },
             *       {
             *         "Type": "Network",
             *         "Name": "host"
             *       },
             *       {
             *         "Type": "Network",
             *         "Name": "ipvlan"
             *       },
             *       {
             *         "Type": "Network",
             *         "Name": "macvlan"
             *       },
             *       {
             *         "Type": "Network",
             *         "Name": "null"
             *       },
             *       {
             *         "Type": "Network",
             *         "Name": "overlay"
             *       },
             *       {
             *         "Type": "Volume",
             *         "Name": "local"
             *       },
             *       {
             *         "Type": "Volume",
             *         "Name": "localhost:5000/vieux/sshfs:latest"
             *       },
             *       {
             *         "Type": "Volume",
             *         "Name": "vieux/sshfs:latest"
             *       }
             *     ] */
            readonly Plugins: readonly {
                readonly Type: string;
                readonly Name: string;
            }[];
        };
        /**
         * @description Information about the issuer of leaf TLS certificates and the trusted root
         *     CA certificate.
         *
         * @example {
         *       "TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUbYqrLSOSQHoxD8CwG6Bi2PJi9c8wCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMTcwNDI0MjE0MzAwWhcNMzcwNDE5MjE0\nMzAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABJk/VyMPYdaqDXJb/VXh5n/1Yuv7iNrxV3Qb3l06XD46seovcDWs3IZNV1lf\n3Skyr0ofcchipoiHkXBODojJydSjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBRUXxuRcnFjDfR/RIAUQab8ZV/n4jAKBggqhkjO\nPQQDAgNIADBFAiAy+JTe6Uc3KyLCMiqGl2GyWGQqQDEcO3/YG36x7om65AIhAJvz\npxv6zFeVEkAEEkqIYi0omA9+CjanB/6Bz4n1uw8H\n-----END CERTIFICATE-----\n",
         *       "CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
         *       "CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmT9XIw9h1qoNclv9VeHmf/Vi6/uI2vFXdBveXTpcPjqx6i9wNazchk1XWV/dKTKvSh9xyGKmiIeRcE4OiMnJ1A=="
         *     }
         */
        readonly TLSInfo: {
            /** @description The root CA certificate(s) that are used to validate leaf TLS
             *     certificates.
             *      */
            readonly TrustRoot: string;
            /** @description The base64-url-safe-encoded raw subject bytes of the issuer. */
            readonly CertIssuerSubject: string;
            /** @description The base64-url-safe-encoded raw public key bytes of the issuer.
             *      */
            readonly CertIssuerPublicKey: string;
        };
        /** @description NodeStatus represents the status of a node.
         *
         *     It provides the current status of the node, as seen by the manager.
         *      */
        readonly NodeStatus: {
            readonly State: components["schemas"]["NodeState"];
            /** @example  */
            readonly Message: string;
            /**
             * @description IP address of the node.
             * @example 172.17.0.2
             */
            readonly Addr: string;
        };
        /**
         * @description NodeState represents the state of a node.
         * @example ready
         * @enum {string}
         */
        readonly NodeState: "unknown" | "down" | "ready" | "disconnected";
        /** @description ManagerStatus represents the status of a manager.
         *
         *     It provides the current status of a node's manager component, if the node
         *     is a manager.
         *      */
        readonly ManagerStatus: {
            /**
             * @default false
             * @example true
             */
            readonly Leader: boolean;
            readonly Reachability: components["schemas"]["Reachability"];
            /**
             * @description The IP address and port at which the manager is reachable.
             *
             * @example 10.0.0.46:2377
             */
            readonly Addr: string;
        } | null;
        /**
         * @description Reachability represents the reachability of a node.
         * @example reachable
         * @enum {string}
         */
        readonly Reachability: "unknown" | "unreachable" | "reachable";
        /** @description User modifiable swarm configuration. */
        readonly SwarmSpec: {
            /**
             * @description Name of the swarm.
             * @example default
             */
            readonly Name: string;
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.corp.type": "production",
             *       "com.example.corp.department": "engineering"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /** @description Orchestration configuration. */
            readonly Orchestration: {
                /**
                 * Format: int64
                 * @description The number of historic tasks to keep per instance or node. If
                 *     negative, never remove completed or failed tasks.
                 *
                 * @example 10
                 */
                readonly TaskHistoryRetentionLimit: number;
            } | null;
            /** @description Raft configuration. */
            readonly Raft: {
                /**
                 * Format: uint64
                 * @description The number of log entries between snapshots.
                 * @example 10000
                 */
                readonly SnapshotInterval: number;
                /**
                 * Format: uint64
                 * @description The number of snapshots to keep beyond the current snapshot.
                 *
                 */
                readonly KeepOldSnapshots: number;
                /**
                 * Format: uint64
                 * @description The number of log entries to keep around to sync up slow followers
                 *     after a snapshot is created.
                 *
                 * @example 500
                 */
                readonly LogEntriesForSlowFollowers: number;
                /**
                 * @description The number of ticks that a follower will wait for a message from
                 *     the leader before becoming a candidate and starting an election.
                 *     `ElectionTick` must be greater than `HeartbeatTick`.
                 *
                 *     A tick currently defaults to one second, so these translate
                 *     directly to seconds currently, but this is NOT guaranteed.
                 *
                 * @example 3
                 */
                readonly ElectionTick: number;
                /**
                 * @description The number of ticks between heartbeats. Every HeartbeatTick ticks,
                 *     the leader will send a heartbeat to the followers.
                 *
                 *     A tick currently defaults to one second, so these translate
                 *     directly to seconds currently, but this is NOT guaranteed.
                 *
                 * @example 1
                 */
                readonly HeartbeatTick: number;
            };
            /** @description Dispatcher configuration. */
            readonly Dispatcher: {
                /**
                 * Format: int64
                 * @description The delay for an agent to send a heartbeat to the dispatcher.
                 *
                 * @example 5000000000
                 */
                readonly HeartbeatPeriod: number;
            } | null;
            /** @description CA configuration. */
            readonly CAConfig: {
                /**
                 * Format: int64
                 * @description The duration node certificates are issued for.
                 * @example 7776000000000000
                 */
                readonly NodeCertExpiry: number;
                /** @description Configuration for forwarding signing requests to an external
                 *     certificate authority.
                 *      */
                readonly ExternalCAs: readonly {
                    /**
                     * @description Protocol for communication with the external CA (currently
                     *     only `cfssl` is supported).
                     *
                     * @default cfssl
                     * @enum {string}
                     */
                    readonly Protocol: "cfssl";
                    /** @description URL where certificate signing requests should be sent.
                     *      */
                    readonly URL: string;
                    /** @description An object with key/value pairs that are interpreted as
                     *     protocol-specific options for the external CA driver.
                     *      */
                    readonly Options: {
                        readonly [key: string]: string;
                    };
                    /** @description The root CA certificate (in PEM format) this external CA uses
                     *     to issue TLS certificates (assumed to be to the current swarm
                     *     root CA certificate if not provided).
                     *      */
                    readonly CACert: string;
                }[];
                /** @description The desired signing CA certificate for all swarm node TLS leaf
                 *     certificates, in PEM format.
                 *      */
                readonly SigningCACert: string;
                /** @description The desired signing CA key for all swarm node TLS leaf certificates,
                 *     in PEM format.
                 *      */
                readonly SigningCAKey: string;
                /**
                 * Format: uint64
                 * @description An integer whose purpose is to force swarm to generate a new
                 *     signing CA certificate and key, if none have been specified in
                 *     `SigningCACert` and `SigningCAKey`
                 *
                 */
                readonly ForceRotate: number;
            } | null;
            /** @description Parameters related to encryption-at-rest. */
            readonly EncryptionConfig: {
                /**
                 * @description If set, generate a key and use it to lock data stored on the
                 *     managers.
                 *
                 * @example false
                 */
                readonly AutoLockManagers: boolean;
            };
            /** @description Defaults for creating tasks in this cluster. */
            readonly TaskDefaults: {
                /** @description The log driver to use for tasks created in the orchestrator if
                 *     unspecified by a service.
                 *
                 *     Updating this value only affects new tasks. Existing tasks continue
                 *     to use their previously configured log driver until recreated.
                 *      */
                readonly LogDriver: {
                    /**
                     * @description The log driver to use as a default for new tasks.
                     *
                     * @example json-file
                     */
                    readonly Name: string;
                    /**
                     * @description Driver-specific options for the selected log driver, specified
                     *     as key/value pairs.
                     *
                     * @example {
                     *       "max-file": "10",
                     *       "max-size": "100m"
                     *     }
                     */
                    readonly Options: {
                        readonly [key: string]: string;
                    };
                };
            };
        };
        /** @description ClusterInfo represents information about the swarm as is returned by the
         *     "/info" endpoint. Join-tokens are not included.
         *      */
        readonly ClusterInfo: {
            /**
             * @description The ID of the swarm.
             * @example abajmipo7b4xz5ip2nrla6b11
             */
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /**
             * Format: dateTime
             * @description Date and time at which the swarm was initialised in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2016-08-18T10:44:24.496525531Z
             */
            readonly CreatedAt: string;
            /**
             * Format: dateTime
             * @description Date and time at which the swarm was last updated in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             *
             * @example 2017-08-09T07:09:37.632105588Z
             */
            readonly UpdatedAt: string;
            readonly Spec: components["schemas"]["SwarmSpec"];
            readonly TLSInfo: components["schemas"]["TLSInfo"];
            /**
             * @description Whether there is currently a root CA rotation in progress for the swarm
             *
             * @example false
             */
            readonly RootRotationInProgress: boolean;
            /**
             * Format: uint32
             * @description DataPathPort specifies the data path port number for data traffic.
             *     Acceptable port range is 1024 to 49151.
             *     If no port is set or is set to 0, the default port (4789) is used.
             *
             * @default 4789
             * @example 4789
             */
            readonly DataPathPort: number;
            /** @description Default Address Pool specifies default subnet pools for global scope
             *     networks.
             *      */
            readonly DefaultAddrPool: readonly string[];
            /**
             * Format: uint32
             * @description SubnetSize specifies the subnet size of the networks created from the
             *     default subnet pool.
             *
             * @default 24
             * @example 24
             */
            readonly SubnetSize: number;
        } | null;
        /** @description JoinTokens contains the tokens workers and managers need to join the swarm.
         *      */
        readonly JoinTokens: {
            /**
             * @description The token workers can use to join the swarm.
             *
             * @example SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-1awxwuwd3z9j1z3puu7rcgdbx
             */
            readonly Worker: string;
            /**
             * @description The token managers can use to join the swarm.
             *
             * @example SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-7p73s1dx5in4tatdymyhg9hu2
             */
            readonly Manager: string;
        };
        readonly Swarm: components["schemas"]["ClusterInfo"] & {
            readonly JoinTokens?: components["schemas"]["JoinTokens"];
        };
        /** @description User modifiable task configuration. */
        readonly TaskSpec: {
            /** @description Plugin spec for the service.  *(Experimental release only.)*
             *
             *     <p><br /></p>
             *
             *     > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
             *     > mutually exclusive. PluginSpec is only used when the Runtime field
             *     > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
             *     > field is set to `attachment`.
             *      */
            readonly PluginSpec: {
                /** @description The name or 'alias' to use for the plugin. */
                readonly Name: string;
                /** @description The plugin image reference to use. */
                readonly Remote: string;
                /** @description Disable the plugin once scheduled. */
                readonly Disabled: boolean;
                readonly PluginPrivilege: readonly components["schemas"]["PluginPrivilege"][];
            };
            /** @description Container spec for the service.
             *
             *     <p><br /></p>
             *
             *     > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
             *     > mutually exclusive. PluginSpec is only used when the Runtime field
             *     > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
             *     > field is set to `attachment`.
             *      */
            readonly ContainerSpec: {
                /** @description The image name to use for the container */
                readonly Image: string;
                /** @description User-defined key/value data. */
                readonly Labels: {
                    readonly [key: string]: string;
                };
                /** @description The command to be run in the image. */
                readonly Command: readonly string[];
                /** @description Arguments to the command. */
                readonly Args: readonly string[];
                /** @description The hostname to use for the container, as a valid
                 *     [RFC 1123](https://tools.ietf.org/html/rfc1123) hostname.
                 *      */
                readonly Hostname: string;
                /** @description A list of environment variables in the form `VAR=value`.
                 *      */
                readonly Env: readonly string[];
                /** @description The working directory for commands to run in. */
                readonly Dir: string;
                /** @description The user inside the container. */
                readonly User: string;
                /** @description A list of additional groups that the container process will run as.
                 *      */
                readonly Groups: readonly string[];
                /** @description Security options for the container */
                readonly Privileges: {
                    /** @description CredentialSpec for managed service account (Windows only) */
                    readonly CredentialSpec: {
                        /**
                         * @description Load credential spec from a Swarm Config with the given ID.
                         *     The specified config must also be present in the Configs
                         *     field with the Runtime property set.
                         *
                         *     <p><br /></p>
                         *
                         *
                         *     > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
                         *     > and `CredentialSpec.Config` are mutually exclusive.
                         *
                         * @example 0bt9dmxjvjiqermk6xrop3ekq
                         */
                        readonly Config: string;
                        /**
                         * @description Load credential spec from this file. The file is read by
                         *     the daemon, and must be present in the `CredentialSpecs`
                         *     subdirectory in the docker data directory, which defaults
                         *     to `C:\ProgramData\Docker\` on Windows.
                         *
                         *     For example, specifying `spec.json` loads
                         *     `C:\ProgramData\Docker\CredentialSpecs\spec.json`.
                         *
                         *     <p><br /></p>
                         *
                         *     > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
                         *     > and `CredentialSpec.Config` are mutually exclusive.
                         *
                         * @example spec.json
                         */
                        readonly File: string;
                        /** @description Load credential spec from this value in the Windows
                         *     registry. The specified registry value must be located in:
                         *
                         *     `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Containers\CredentialSpecs`
                         *
                         *     <p><br /></p>
                         *
                         *
                         *     > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`,
                         *     > and `CredentialSpec.Config` are mutually exclusive.
                         *      */
                        readonly Registry: string;
                    };
                    /** @description SELinux labels of the container */
                    readonly SELinuxContext: {
                        /** @description Disable SELinux */
                        readonly Disable: boolean;
                        /** @description SELinux user label */
                        readonly User: string;
                        /** @description SELinux role label */
                        readonly Role: string;
                        /** @description SELinux type label */
                        readonly Type: string;
                        /** @description SELinux level label */
                        readonly Level: string;
                    };
                    /** @description Options for configuring seccomp on the container */
                    readonly Seccomp: {
                        /** @enum {string} */
                        readonly Mode: "default" | "unconfined" | "custom";
                        /** @description The custom seccomp profile as a json object */
                        readonly Profile: string;
                    };
                    /** @description Options for configuring AppArmor on the container */
                    readonly AppArmor: {
                        /** @enum {string} */
                        readonly Mode: "default" | "disabled";
                    };
                    /** @description Configuration of the no_new_privs bit in the container */
                    readonly NoNewPrivileges: boolean;
                };
                /** @description Whether a pseudo-TTY should be allocated. */
                readonly TTY: boolean;
                /** @description Open `stdin` */
                readonly OpenStdin: boolean;
                /** @description Mount the container's root filesystem as read only. */
                readonly ReadOnly: boolean;
                /** @description Specification for mounts to be added to containers created as part
                 *     of the service.
                 *      */
                readonly Mounts: readonly components["schemas"]["Mount"][];
                /** @description Signal to stop the container. */
                readonly StopSignal: string;
                /**
                 * Format: int64
                 * @description Amount of time to wait for the container to terminate before
                 *     forcefully killing it.
                 *
                 */
                readonly StopGracePeriod: number;
                readonly HealthCheck: components["schemas"]["HealthConfig"];
                /** @description A list of hostname/IP mappings to add to the container's `hosts`
                 *     file. The format of extra hosts is specified in the
                 *     [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html)
                 *     man page:
                 *
                 *         IP_address canonical_hostname [aliases...]
                 *      */
                readonly Hosts: readonly string[];
                /** @description Specification for DNS related configurations in resolver configuration
                 *     file (`resolv.conf`).
                 *      */
                readonly DNSConfig: {
                    /** @description The IP addresses of the name servers. */
                    readonly Nameservers: readonly string[];
                    /** @description A search list for host-name lookup. */
                    readonly Search: readonly string[];
                    /** @description A list of internal resolver variables to be modified (e.g.,
                     *     `debug`, `ndots:3`, etc.).
                     *      */
                    readonly Options: readonly string[];
                };
                /** @description Secrets contains references to zero or more secrets that will be
                 *     exposed to the service.
                 *      */
                readonly Secrets: readonly {
                    /** @description File represents a specific target that is backed by a file.
                     *      */
                    readonly File: {
                        /** @description Name represents the final filename in the filesystem.
                         *      */
                        readonly Name: string;
                        /** @description UID represents the file UID. */
                        readonly UID: string;
                        /** @description GID represents the file GID. */
                        readonly GID: string;
                        /**
                         * Format: uint32
                         * @description Mode represents the FileMode of the file.
                         */
                        readonly Mode: number;
                    };
                    /** @description SecretID represents the ID of the specific secret that we're
                     *     referencing.
                     *      */
                    readonly SecretID: string;
                    /** @description SecretName is the name of the secret that this references,
                     *     but this is just provided for lookup/display purposes. The
                     *     secret in the reference will be identified by its ID.
                     *      */
                    readonly SecretName: string;
                }[];
                /**
                 * Format: int64
                 * @description An integer value containing the score given to the container in
                 *     order to tune OOM killer preferences.
                 *
                 * @example 0
                 */
                readonly OomScoreAdj: number;
                /** @description Configs contains references to zero or more configs that will be
                 *     exposed to the service.
                 *      */
                readonly Configs: readonly {
                    /** @description File represents a specific target that is backed by a file.
                     *
                     *     <p><br /><p>
                     *
                     *     > **Note**: `Configs.File` and `Configs.Runtime` are mutually exclusive
                     *      */
                    readonly File: {
                        /** @description Name represents the final filename in the filesystem.
                         *      */
                        readonly Name: string;
                        /** @description UID represents the file UID. */
                        readonly UID: string;
                        /** @description GID represents the file GID. */
                        readonly GID: string;
                        /**
                         * Format: uint32
                         * @description Mode represents the FileMode of the file.
                         */
                        readonly Mode: number;
                    };
                    /** @description Runtime represents a target that is not mounted into the
                     *     container but is used by the task
                     *
                     *     <p><br /><p>
                     *
                     *     > **Note**: `Configs.File` and `Configs.Runtime` are mutually
                     *     > exclusive
                     *      */
                    readonly Runtime: Record<string, never>;
                    /** @description ConfigID represents the ID of the specific config that we're
                     *     referencing.
                     *      */
                    readonly ConfigID: string;
                    /** @description ConfigName is the name of the config that this references,
                     *     but this is just provided for lookup/display purposes. The
                     *     config in the reference will be identified by its ID.
                     *      */
                    readonly ConfigName: string;
                }[];
                /**
                 * @description Isolation technology of the containers running the service.
                 *     (Windows only)
                 *
                 * @enum {string}
                 */
                readonly Isolation: "default" | "process" | "hyperv" | "";
                /** @description Run an init inside the container that forwards signals and reaps
                 *     processes. This field is omitted if empty, and the default (as
                 *     configured on the daemon) is used.
                 *      */
                readonly Init: boolean | null;
                /** @description Set kernel namedspaced parameters (sysctls) in the container.
                 *     The Sysctls option on services accepts the same sysctls as the
                 *     are supported on containers. Note that while the same sysctls are
                 *     supported, no guarantees or checks are made about their
                 *     suitability for a clustered environment, and it's up to the user
                 *     to determine whether a given sysctl will work properly in a
                 *     Service.
                 *      */
                readonly Sysctls: {
                    readonly [key: string]: string;
                };
                /**
                 * @description A list of kernel capabilities to add to the default set
                 *     for the container.
                 *
                 * @example [
                 *       "CAP_NET_RAW",
                 *       "CAP_SYS_ADMIN",
                 *       "CAP_SYS_CHROOT",
                 *       "CAP_SYSLOG"
                 *     ]
                 */
                readonly CapabilityAdd: readonly string[];
                /**
                 * @description A list of kernel capabilities to drop from the default set
                 *     for the container.
                 *
                 * @example [
                 *       "CAP_NET_RAW"
                 *     ]
                 */
                readonly CapabilityDrop: readonly string[];
                /** @description A list of resource limits to set in the container. For example: `{"Name": "nofile", "Soft": 1024, "Hard": 2048}`"
                 *      */
                readonly Ulimits: readonly {
                    /** @description Name of ulimit */
                    readonly Name: string;
                    /** @description Soft limit */
                    readonly Soft: number;
                    /** @description Hard limit */
                    readonly Hard: number;
                }[];
            };
            /** @description Read-only spec type for non-swarm containers attached to swarm overlay
             *     networks.
             *
             *     <p><br /></p>
             *
             *     > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are
             *     > mutually exclusive. PluginSpec is only used when the Runtime field
             *     > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime
             *     > field is set to `attachment`.
             *      */
            readonly NetworkAttachmentSpec: {
                /** @description ID of the container represented by this task */
                readonly ContainerID: string;
            };
            /** @description Resource requirements which apply to each individual container created
             *     as part of the service.
             *      */
            readonly Resources: {
                readonly Limits: components["schemas"]["Limit"];
                readonly Reservations: components["schemas"]["ResourceObject"];
            };
            /** @description Specification for the restart policy which applies to containers
             *     created as part of this service.
             *      */
            readonly RestartPolicy: {
                /**
                 * @description Condition for restart.
                 * @enum {string}
                 */
                readonly Condition: "none" | "on-failure" | "any";
                /**
                 * Format: int64
                 * @description Delay between restart attempts.
                 */
                readonly Delay: number;
                /**
                 * Format: int64
                 * @description Maximum attempts to restart a given container before giving up
                 *     (default value is 0, which is ignored).
                 *
                 * @default 0
                 */
                readonly MaxAttempts: number;
                /**
                 * Format: int64
                 * @description Windows is the time window used to evaluate the restart policy
                 *     (default value is 0, which is unbounded).
                 *
                 * @default 0
                 */
                readonly Window: number;
            };
            readonly Placement: {
                /**
                 * @description An array of constraint expressions to limit the set of nodes where
                 *     a task can be scheduled. Constraint expressions can either use a
                 *     _match_ (`==`) or _exclude_ (`!=`) rule. Multiple constraints find
                 *     nodes that satisfy every expression (AND match). Constraints can
                 *     match node or Docker Engine labels as follows:
                 *
                 *     node attribute       | matches                        | example
                 *     ---------------------|--------------------------------|-----------------------------------------------
                 *     `node.id`            | Node ID                        | `node.id==2ivku8v2gvtg4`
                 *     `node.hostname`      | Node hostname                  | `node.hostname!=node-2`
                 *     `node.role`          | Node role (`manager`/`worker`) | `node.role==manager`
                 *     `node.platform.os`   | Node operating system          | `node.platform.os==windows`
                 *     `node.platform.arch` | Node architecture              | `node.platform.arch==x86_64`
                 *     `node.labels`        | User-defined node labels       | `node.labels.security==high`
                 *     `engine.labels`      | Docker Engine's labels         | `engine.labels.operatingsystem==ubuntu-24.04`
                 *
                 *     `engine.labels` apply to Docker Engine labels like operating system,
                 *     drivers, etc. Swarm administrators add `node.labels` for operational
                 *     purposes by using the [`node update endpoint`](#operation/NodeUpdate).
                 *
                 * @example [
                 *       "node.hostname!=node3.corp.example.com",
                 *       "node.role!=manager",
                 *       "node.labels.type==production",
                 *       "node.platform.os==linux",
                 *       "node.platform.arch==x86_64"
                 *     ]
                 */
                readonly Constraints: readonly string[];
                /**
                 * @description Preferences provide a way to make the scheduler aware of factors
                 *     such as topology. They are provided in order from highest to
                 *     lowest precedence.
                 *
                 * @example [
                 *       {
                 *         "Spread": {
                 *           "SpreadDescriptor": "node.labels.datacenter"
                 *         }
                 *       },
                 *       {
                 *         "Spread": {
                 *           "SpreadDescriptor": "node.labels.rack"
                 *         }
                 *       }
                 *     ]
                 */
                readonly Preferences: readonly {
                    readonly Spread: {
                        /** @description label descriptor, such as `engine.labels.az`.
                         *      */
                        readonly SpreadDescriptor: string;
                    };
                }[];
                /**
                 * Format: int64
                 * @description Maximum number of replicas for per node (default value is 0, which
                 *     is unlimited)
                 *
                 * @default 0
                 */
                readonly MaxReplicas: number;
                /** @description Platforms stores all the platforms that the service's image can
                 *     run on. This field is used in the platform filter for scheduling.
                 *     If empty, then the platform filter is off, meaning there are no
                 *     scheduling restrictions.
                 *      */
                readonly Platforms: readonly components["schemas"]["Platform"][];
            };
            /** @description A counter that triggers an update even if no relevant parameters have
             *     been changed.
             *      */
            readonly ForceUpdate: number;
            /** @description Runtime is the type of runtime specified for the task executor.
             *      */
            readonly Runtime: string;
            /** @description Specifies which networks the service should attach to. */
            readonly Networks: readonly components["schemas"]["NetworkAttachmentConfig"][];
            /** @description Specifies the log driver to use for tasks created from this spec. If
             *     not present, the default one for the swarm will be used, finally
             *     falling back to the engine default if not specified.
             *      */
            readonly LogDriver: {
                readonly Name: string;
                readonly Options: {
                    readonly [key: string]: string;
                };
            };
        };
        /** @enum {string} */
        readonly TaskState: "new" | "allocated" | "pending" | "assigned" | "accepted" | "preparing" | "ready" | "starting" | "running" | "complete" | "shutdown" | "failed" | "rejected" | "remove" | "orphaned";
        /** @description represents the status of a container. */
        readonly ContainerStatus: {
            readonly ContainerID: string;
            readonly PID: number;
            readonly ExitCode: number;
        };
        /** @description represents the port status of a task's host ports whose service has published host ports */
        readonly PortStatus: {
            readonly Ports: readonly components["schemas"]["EndpointPortConfig"][];
        };
        /** @description represents the status of a task. */
        readonly TaskStatus: {
            /** Format: dateTime */
            readonly Timestamp: string;
            readonly State: components["schemas"]["TaskState"];
            readonly Message: string;
            readonly Err: string;
            readonly ContainerStatus: components["schemas"]["ContainerStatus"];
            readonly PortStatus: components["schemas"]["PortStatus"];
        };
        /** @example {
         *       "ID": "0kzzo1i0y4jz6027t0k7aezc7",
         *       "Version": {
         *         "Index": 71
         *       },
         *       "CreatedAt": "2016-06-07T21:07:31.171892745Z",
         *       "UpdatedAt": "2016-06-07T21:07:31.376370513Z",
         *       "Spec": {
         *         "ContainerSpec": {
         *           "Image": "redis"
         *         },
         *         "Resources": {
         *           "Limits": {},
         *           "Reservations": {}
         *         },
         *         "RestartPolicy": {
         *           "Condition": "any",
         *           "MaxAttempts": 0
         *         },
         *         "Placement": {}
         *       },
         *       "ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz",
         *       "Slot": 1,
         *       "NodeID": "60gvrl6tm78dmak4yl7srz94v",
         *       "Status": {
         *         "Timestamp": "2016-06-07T21:07:31.290032978Z",
         *         "State": "running",
         *         "Message": "started",
         *         "ContainerStatus": {
         *           "ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",
         *           "PID": 677
         *         }
         *       },
         *       "DesiredState": "running",
         *       "NetworksAttachments": [
         *         {
         *           "Network": {
         *             "ID": "4qvuz4ko70xaltuqbt8956gd1",
         *             "Version": {
         *               "Index": 18
         *             },
         *             "CreatedAt": "2016-06-07T20:31:11.912919752Z",
         *             "UpdatedAt": "2016-06-07T21:07:29.955277358Z",
         *             "Spec": {
         *               "Name": "ingress",
         *               "Labels": {
         *                 "com.docker.swarm.internal": "true"
         *               },
         *               "DriverConfiguration": {},
         *               "IPAMOptions": {
         *                 "Driver": {},
         *                 "Configs": [
         *                   {
         *                     "Subnet": "10.255.0.0/16",
         *                     "Gateway": "10.255.0.1"
         *                   }
         *                 ]
         *               }
         *             },
         *             "DriverState": {
         *               "Name": "overlay",
         *               "Options": {
         *                 "com.docker.network.driver.overlay.vxlanid_list": "256"
         *               }
         *             },
         *             "IPAMOptions": {
         *               "Driver": {
         *                 "Name": "default"
         *               },
         *               "Configs": [
         *                 {
         *                   "Subnet": "10.255.0.0/16",
         *                   "Gateway": "10.255.0.1"
         *                 }
         *               ]
         *             }
         *           },
         *           "Addresses": [
         *             "10.255.0.10/16"
         *           ]
         *         }
         *       ],
         *       "AssignedGenericResources": [
         *         {
         *           "DiscreteResourceSpec": {
         *             "Kind": "SSD",
         *             "Value": 3
         *           }
         *         },
         *         {
         *           "NamedResourceSpec": {
         *             "Kind": "GPU",
         *             "Value": "UUID1"
         *           }
         *         },
         *         {
         *           "NamedResourceSpec": {
         *             "Kind": "GPU",
         *             "Value": "UUID2"
         *           }
         *         }
         *       ]
         *     } */
        readonly Task: {
            /** @description The ID of the task. */
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /** Format: dateTime */
            readonly CreatedAt: string;
            /** Format: dateTime */
            readonly UpdatedAt: string;
            /** @description Name of the task. */
            readonly Name: string;
            /** @description User-defined key/value metadata. */
            readonly Labels: {
                readonly [key: string]: string;
            };
            readonly Spec: components["schemas"]["TaskSpec"];
            /** @description The ID of the service this task is part of. */
            readonly ServiceID: string;
            readonly Slot: number;
            /** @description The ID of the node that this task is on. */
            readonly NodeID: string;
            readonly AssignedGenericResources: components["schemas"]["GenericResources"];
            readonly Status: components["schemas"]["TaskStatus"];
            readonly DesiredState: components["schemas"]["TaskState"];
            readonly JobIteration: components["schemas"]["ObjectVersion"];
        };
        /** @description User modifiable configuration for a service. */
        readonly ServiceSpec: {
            /** @description Name of the service. */
            readonly Name: string;
            /** @description User-defined key/value metadata. */
            readonly Labels: {
                readonly [key: string]: string;
            };
            readonly TaskTemplate: components["schemas"]["TaskSpec"];
            /** @description Scheduling mode for the service. */
            readonly Mode: {
                readonly Replicated: {
                    /** Format: int64 */
                    readonly Replicas: number;
                };
                readonly Global: Record<string, never>;
                /** @description The mode used for services with a finite number of tasks that run
                 *     to a completed state.
                 *      */
                readonly ReplicatedJob: {
                    /**
                     * Format: int64
                     * @description The maximum number of replicas to run simultaneously.
                     *
                     * @default 1
                     */
                    readonly MaxConcurrent: number;
                    /**
                     * Format: int64
                     * @description The total number of replicas desired to reach the Completed
                     *     state. If unset, will default to the value of `MaxConcurrent`
                     *
                     */
                    readonly TotalCompletions: number;
                };
                /** @description The mode used for services which run a task to the completed state
                 *     on each valid node.
                 *      */
                readonly GlobalJob: Record<string, never>;
            };
            /** @description Specification for the update strategy of the service. */
            readonly UpdateConfig: {
                /**
                 * Format: int64
                 * @description Maximum number of tasks to be updated in one iteration (0 means
                 *     unlimited parallelism).
                 *
                 */
                readonly Parallelism: number;
                /**
                 * Format: int64
                 * @description Amount of time between updates, in nanoseconds.
                 */
                readonly Delay: number;
                /**
                 * @description Action to take if an updated task fails to run, or stops running
                 *     during the update.
                 *
                 * @enum {string}
                 */
                readonly FailureAction: "continue" | "pause" | "rollback";
                /**
                 * Format: int64
                 * @description Amount of time to monitor each updated task for failures, in
                 *     nanoseconds.
                 *
                 */
                readonly Monitor: number;
                /**
                 * @description The fraction of tasks that may fail during an update before the
                 *     failure action is invoked, specified as a floating point number
                 *     between 0 and 1.
                 *
                 * @default 0
                 */
                readonly MaxFailureRatio: number;
                /**
                 * @description The order of operations when rolling out an updated task. Either
                 *     the old task is shut down before the new task is started, or the
                 *     new task is started before the old task is shut down.
                 *
                 * @enum {string}
                 */
                readonly Order: "stop-first" | "start-first";
            };
            /** @description Specification for the rollback strategy of the service. */
            readonly RollbackConfig: {
                /**
                 * Format: int64
                 * @description Maximum number of tasks to be rolled back in one iteration (0 means
                 *     unlimited parallelism).
                 *
                 */
                readonly Parallelism: number;
                /**
                 * Format: int64
                 * @description Amount of time between rollback iterations, in nanoseconds.
                 *
                 */
                readonly Delay: number;
                /**
                 * @description Action to take if an rolled back task fails to run, or stops
                 *     running during the rollback.
                 *
                 * @enum {string}
                 */
                readonly FailureAction: "continue" | "pause";
                /**
                 * Format: int64
                 * @description Amount of time to monitor each rolled back task for failures, in
                 *     nanoseconds.
                 *
                 */
                readonly Monitor: number;
                /**
                 * @description The fraction of tasks that may fail during a rollback before the
                 *     failure action is invoked, specified as a floating point number
                 *     between 0 and 1.
                 *
                 * @default 0
                 */
                readonly MaxFailureRatio: number;
                /**
                 * @description The order of operations when rolling back a task. Either the old
                 *     task is shut down before the new task is started, or the new task
                 *     is started before the old task is shut down.
                 *
                 * @enum {string}
                 */
                readonly Order: "stop-first" | "start-first";
            };
            /** @description Specifies which networks the service should attach to.
             *
             *     Deprecated: This field is deprecated since v1.44. The Networks field in TaskSpec should be used instead.
             *      */
            readonly Networks: readonly components["schemas"]["NetworkAttachmentConfig"][];
            readonly EndpointSpec: components["schemas"]["EndpointSpec"];
        };
        readonly EndpointPortConfig: {
            readonly Name: string;
            /** @enum {string} */
            readonly Protocol: "tcp" | "udp" | "sctp";
            /** @description The port inside the container. */
            readonly TargetPort: number;
            /** @description The port on the swarm hosts. */
            readonly PublishedPort: number;
            /**
             * @description The mode in which port is published.
             *
             *     <p><br /></p>
             *
             *     - "ingress" makes the target port accessible on every node,
             *       regardless of whether there is a task for the service running on
             *       that node or not.
             *     - "host" bypasses the routing mesh and publish the port directly on
             *       the swarm node where that service is running.
             *
             * @default ingress
             * @example ingress
             * @enum {string}
             */
            readonly PublishMode: "ingress" | "host";
        };
        /** @description Properties that can be configured to access and load balance a service. */
        readonly EndpointSpec: {
            /**
             * @description The mode of resolution to use for internal load balancing between tasks.
             *
             * @default vip
             * @enum {string}
             */
            readonly Mode: "vip" | "dnsrr";
            /** @description List of exposed ports that this service is accessible on from the
             *     outside. Ports can only be provided if `vip` resolution mode is used.
             *      */
            readonly Ports: readonly components["schemas"]["EndpointPortConfig"][];
        };
        /** @example {
         *       "ID": "9mnpnzenvg8p8tdbtq4wvbkcz",
         *       "Version": {
         *         "Index": 19
         *       },
         *       "CreatedAt": "2016-06-07T21:05:51.880065305Z",
         *       "UpdatedAt": "2016-06-07T21:07:29.962229872Z",
         *       "Spec": {
         *         "Name": "hopeful_cori",
         *         "TaskTemplate": {
         *           "ContainerSpec": {
         *             "Image": "redis"
         *           },
         *           "Resources": {
         *             "Limits": {},
         *             "Reservations": {}
         *           },
         *           "RestartPolicy": {
         *             "Condition": "any",
         *             "MaxAttempts": 0
         *           },
         *           "Placement": {},
         *           "ForceUpdate": 0
         *         },
         *         "Mode": {
         *           "Replicated": {
         *             "Replicas": 1
         *           }
         *         },
         *         "UpdateConfig": {
         *           "Parallelism": 1,
         *           "Delay": 1000000000,
         *           "FailureAction": "pause",
         *           "Monitor": 15000000000,
         *           "MaxFailureRatio": 0.15
         *         },
         *         "RollbackConfig": {
         *           "Parallelism": 1,
         *           "Delay": 1000000000,
         *           "FailureAction": "pause",
         *           "Monitor": 15000000000,
         *           "MaxFailureRatio": 0.15
         *         },
         *         "EndpointSpec": {
         *           "Mode": "vip",
         *           "Ports": [
         *             {
         *               "Protocol": "tcp",
         *               "TargetPort": 6379,
         *               "PublishedPort": 30001
         *             }
         *           ]
         *         }
         *       },
         *       "Endpoint": {
         *         "Spec": {
         *           "Mode": "vip",
         *           "Ports": [
         *             {
         *               "Protocol": "tcp",
         *               "TargetPort": 6379,
         *               "PublishedPort": 30001
         *             }
         *           ]
         *         },
         *         "Ports": [
         *           {
         *             "Protocol": "tcp",
         *             "TargetPort": 6379,
         *             "PublishedPort": 30001
         *           }
         *         ],
         *         "VirtualIPs": [
         *           {
         *             "NetworkID": "4qvuz4ko70xaltuqbt8956gd1",
         *             "Addr": "10.255.0.2/16"
         *           },
         *           {
         *             "NetworkID": "4qvuz4ko70xaltuqbt8956gd1",
         *             "Addr": "10.255.0.3/16"
         *           }
         *         ]
         *       }
         *     } */
        readonly Service: {
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /** Format: dateTime */
            readonly CreatedAt: string;
            /** Format: dateTime */
            readonly UpdatedAt: string;
            readonly Spec: components["schemas"]["ServiceSpec"];
            readonly Endpoint: {
                readonly Spec: components["schemas"]["EndpointSpec"];
                readonly Ports: readonly components["schemas"]["EndpointPortConfig"][];
                readonly VirtualIPs: readonly {
                    readonly NetworkID: string;
                    readonly Addr: string;
                }[];
            };
            /** @description The status of a service update. */
            readonly UpdateStatus: {
                /** @enum {string} */
                readonly State: "updating" | "paused" | "completed";
                /** Format: dateTime */
                readonly StartedAt: string;
                /** Format: dateTime */
                readonly CompletedAt: string;
                readonly Message: string;
            };
            /** @description The status of the service's tasks. Provided only when requested as
             *     part of a ServiceList operation.
             *      */
            readonly ServiceStatus: {
                /**
                 * Format: uint64
                 * @description The number of tasks for the service currently in the Running state.
                 *
                 * @example 7
                 */
                readonly RunningTasks: number;
                /**
                 * Format: uint64
                 * @description The number of tasks for the service desired to be running.
                 *     For replicated services, this is the replica count from the
                 *     service spec. For global services, this is computed by taking
                 *     count of all tasks for the service with a Desired State other
                 *     than Shutdown.
                 *
                 * @example 10
                 */
                readonly DesiredTasks: number;
                /**
                 * Format: uint64
                 * @description The number of tasks for a job that are in the Completed state.
                 *     This field must be cross-referenced with the service type, as the
                 *     value of 0 may mean the service is not in a job mode, or it may
                 *     mean the job-mode service has no tasks yet Completed.
                 *
                 */
                readonly CompletedTasks: number;
            };
            /** @description The status of the service when it is in one of ReplicatedJob or
             *     GlobalJob modes. Absent on Replicated and Global mode services. The
             *     JobIteration is an ObjectVersion, but unlike the Service's version,
             *     does not need to be sent with an update request.
             *      */
            readonly JobStatus: {
                readonly JobIteration: components["schemas"]["ObjectVersion"];
                /**
                 * Format: dateTime
                 * @description The last time, as observed by the server, that this job was
                 *     started.
                 *
                 */
                readonly LastExecution: string;
            };
        };
        readonly ImageDeleteResponseItem: {
            /** @description The image ID of an image that was untagged */
            readonly Untagged: string;
            /** @description The image ID of an image that was deleted */
            readonly Deleted: string;
        };
        /** @description contains the information returned to a client on the
         *     creation of a new service.
         *      */
        readonly ServiceCreateResponse: {
            /**
             * @description The ID of the created service.
             * @example ak7w3gjqoa3kuz8xcpnyy0pvl
             */
            readonly ID: string;
            /**
             * @description Optional warning message.
             *
             *     FIXME(thaJeztah): this should have "omitempty" in the generated type.
             *
             * @example [
             *       "unable to pin image doesnotexist:latest to digest: image library/doesnotexist:latest not found"
             *     ]
             */
            readonly Warnings: readonly string[] | null;
        };
        /** @example {
         *       "Warnings": [
         *         "unable to pin image doesnotexist:latest to digest: image library/doesnotexist:latest not found"
         *       ]
         *     } */
        readonly ServiceUpdateResponse: {
            /** @description Optional warning messages */
            readonly Warnings: readonly string[];
        };
        /** ContainerInspectResponse */
        readonly ContainerInspectResponse: {
            /**
             * @description The ID of this container as a 128-bit (64-character) hexadecimal string (32 bytes).
             * @example aa86eacfb3b3ed4cd362c1e88fc89a53908ad05fb3a4103bca3f9b28292d14bf
             */
            readonly Id: string;
            /**
             * Format: dateTime
             * @description Date and time at which the container was created, formatted in
             *     [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.
             * @example 2025-02-17T17:43:39.64001363Z
             */
            readonly Created: string | null;
            /**
             * @description The path to the command being run
             * @example /bin/sh
             */
            readonly Path: string;
            /**
             * @description The arguments to the command being run
             * @example [
             *       "-c",
             *       "exit 9"
             *     ]
             */
            readonly Args: readonly string[];
            readonly State: components["schemas"]["ContainerState"];
            /**
             * @description The ID (digest) of the image that this container was created from.
             * @example sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782
             */
            readonly Image: string;
            /**
             * @description Location of the `/etc/resolv.conf` generated for the container on the
             *     host.
             *
             *     This file is managed through the docker daemon, and should not be
             *     accessed or modified by other tools.
             * @example /var/lib/docker/containers/aa86eacfb3b3ed4cd362c1e88fc89a53908ad05fb3a4103bca3f9b28292d14bf/resolv.conf
             */
            readonly ResolvConfPath: string;
            /**
             * @description Location of the `/etc/hostname` generated for the container on the
             *     host.
             *
             *     This file is managed through the docker daemon, and should not be
             *     accessed or modified by other tools.
             * @example /var/lib/docker/containers/aa86eacfb3b3ed4cd362c1e88fc89a53908ad05fb3a4103bca3f9b28292d14bf/hostname
             */
            readonly HostnamePath: string;
            /**
             * @description Location of the `/etc/hosts` generated for the container on the
             *     host.
             *
             *     This file is managed through the docker daemon, and should not be
             *     accessed or modified by other tools.
             * @example /var/lib/docker/containers/aa86eacfb3b3ed4cd362c1e88fc89a53908ad05fb3a4103bca3f9b28292d14bf/hosts
             */
            readonly HostsPath: string;
            /**
             * @description Location of the file used to buffer the container's logs. Depending on
             *     the logging-driver used for the container, this field may be omitted.
             *
             *     This file is managed through the docker daemon, and should not be
             *     accessed or modified by other tools.
             * @example /var/lib/docker/containers/5b7c7e2b992aa426584ce6c47452756066be0e503a08b4516a433a54d2f69e59/5b7c7e2b992aa426584ce6c47452756066be0e503a08b4516a433a54d2f69e59-json.log
             */
            readonly LogPath: string | null;
            /**
             * @description The name associated with this container.
             *
             *     For historic reasons, the name may be prefixed with a forward-slash (`/`).
             * @example /funny_chatelet
             */
            readonly Name: string;
            /**
             * @description Number of times the container was restarted since it was created,
             *     or since daemon was started.
             * @example 0
             */
            readonly RestartCount: number;
            /**
             * @description The storage-driver used for the container's filesystem (graph-driver
             *     or snapshotter).
             * @example overlayfs
             */
            readonly Driver: string;
            /**
             * @description The platform (operating system) for which the container was created.
             *
             *     This field was introduced for the experimental "LCOW" (Linux Containers
             *     On Windows) features, which has been removed. In most cases, this field
             *     is equal to the host's operating system (`linux` or `windows`).
             * @example linux
             */
            readonly Platform: string;
            readonly ImageManifestDescriptor: components["schemas"]["OCIDescriptor"];
            /**
             * @description SELinux mount label set for the container.
             * @example
             */
            readonly MountLabel: string;
            /**
             * @description SELinux process label set for the container.
             * @example
             */
            readonly ProcessLabel: string;
            /**
             * @description The AppArmor profile set for the container.
             * @example
             */
            readonly AppArmorProfile: string;
            /**
             * @description IDs of exec instances that are running in the container.
             * @example [
             *       "b35395de42bc8abd327f9dd65d913b9ba28c74d2f0734eeeae84fa1c616a0fca",
             *       "3fc1232e5cd20c8de182ed81178503dc6437f4e7ef12b52cc5e8de020652f1c4"
             *     ]
             */
            readonly ExecIDs: readonly string[] | null;
            readonly HostConfig: components["schemas"]["HostConfig"];
            readonly GraphDriver: components["schemas"]["DriverData"];
            /**
             * Format: int64
             * @description The size of files that have been created or changed by this container.
             *
             *     This field is omitted by default, and only set when size is requested
             *     in the API request.
             * @example 122880
             */
            readonly SizeRw: number | null;
            /**
             * Format: int64
             * @description The total size of all files in the read-only layers from the image
             *     that the container uses. These layers can be shared between containers.
             *
             *     This field is omitted by default, and only set when size is requested
             *     in the API request.
             * @example 1653948416
             */
            readonly SizeRootFs: number | null;
            /** @description List of mounts used by the container. */
            readonly Mounts: readonly components["schemas"]["MountPoint"][];
            readonly Config: components["schemas"]["ContainerConfig"];
            readonly NetworkSettings: components["schemas"]["NetworkSettings"];
        };
        readonly ContainerSummary: {
            /**
             * @description The ID of this container as a 128-bit (64-character) hexadecimal string (32 bytes).
             * @example aa86eacfb3b3ed4cd362c1e88fc89a53908ad05fb3a4103bca3f9b28292d14bf
             */
            readonly Id: string;
            /**
             * @description The names associated with this container. Most containers have a single
             *     name, but when using legacy "links", the container can have multiple
             *     names.
             *
             *     For historic reasons, names are prefixed with a forward-slash (`/`).
             * @example [
             *       "/funny_chatelet"
             *     ]
             */
            readonly Names: readonly string[];
            /**
             * @description The name or ID of the image used to create the container.
             *
             *     This field shows the image reference as was specified when creating the container,
             *     which can be in its canonical form (e.g., `docker.io/library/ubuntu:latest`
             *     or `docker.io/library/ubuntu@sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782`),
             *     short form (e.g., `ubuntu:latest`)), or the ID(-prefix) of the image (e.g., `72297848456d`).
             *
             *     The content of this field can be updated at runtime if the image used to
             *     create the container is untagged, in which case the field is updated to
             *     contain the the image ID (digest) it was resolved to in its canonical,
             *     non-truncated form (e.g., `sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782`).
             * @example docker.io/library/ubuntu:latest
             */
            readonly Image: string;
            /**
             * @description The ID (digest) of the image that this container was created from.
             * @example sha256:72297848456d5d37d1262630108ab308d3e9ec7ed1c3286a32fe09856619a782
             */
            readonly ImageID: string;
            readonly ImageManifestDescriptor: components["schemas"]["OCIDescriptor"];
            /**
             * @description Command to run when starting the container
             * @example /bin/bash
             */
            readonly Command: string;
            /**
             * Format: int64
             * @description Date and time at which the container was created as a Unix timestamp
             *     (number of seconds since EPOCH).
             * @example 1739811096
             */
            readonly Created: number;
            /** @description Port-mappings for the container. */
            readonly Ports: readonly components["schemas"]["Port"][];
            /**
             * Format: int64
             * @description The size of files that have been created or changed by this container.
             *
             *     This field is omitted by default, and only set when size is requested
             *     in the API request.
             * @example 122880
             */
            readonly SizeRw: number | null;
            /**
             * Format: int64
             * @description The total size of all files in the read-only layers from the image
             *     that the container uses. These layers can be shared between containers.
             *
             *     This field is omitted by default, and only set when size is requested
             *     in the API request.
             * @example 1653948416
             */
            readonly SizeRootFs: number | null;
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.vendor": "Acme",
             *       "com.example.license": "GPL",
             *       "com.example.version": "1.0"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description The state of this container.
             *
             * @example running
             * @enum {string}
             */
            readonly State: "created" | "running" | "paused" | "restarting" | "exited" | "removing" | "dead";
            /**
             * @description Additional human-readable status of this container (e.g. `Exit 0`)
             * @example Up 4 days
             */
            readonly Status: string;
            /** @description Summary of host-specific runtime information of the container. This
             *     is a reduced set of information in the container's "HostConfig" as
             *     available in the container "inspect" response. */
            readonly HostConfig: {
                /**
                 * @description Networking mode (`host`, `none`, `container:<id>`) or name of the
                 *     primary network the container is using.
                 *
                 *     This field is primarily for backward compatibility. The container
                 *     can be connected to multiple networks for which information can be
                 *     found in the `NetworkSettings.Networks` field, which enumerates
                 *     settings per network.
                 * @example mynetwork
                 */
                readonly NetworkMode: string;
                /**
                 * @description Arbitrary key-value metadata attached to the container.
                 * @example {
                 *       "io.kubernetes.docker.type": "container",
                 *       "io.kubernetes.sandbox.id": "3befe639bed0fd6afdd65fd1fa84506756f59360ec4adc270b0fdac9be22b4d3"
                 *     }
                 */
                readonly Annotations: {
                    readonly [key: string]: string;
                } | null;
            };
            /** @description Summary of the container's network settings */
            readonly NetworkSettings: {
                /** @description Summary of network-settings for each network the container is
                 *     attached to. */
                readonly Networks: {
                    readonly [key: string]: components["schemas"]["EndpointSettings"];
                };
            };
            /** @description List of mounts used by the container. */
            readonly Mounts: readonly components["schemas"]["MountPoint"][];
        };
        /** @description Driver represents a driver (network, logging, secrets). */
        readonly Driver: {
            /**
             * @description Name of the driver.
             * @example some-driver
             */
            readonly Name: string;
            /**
             * @description Key/value map of driver-specific options.
             * @example {
             *       "OptionA": "value for driver-specific option A",
             *       "OptionB": "value for driver-specific option B"
             *     }
             */
            readonly Options?: {
                readonly [key: string]: string;
            };
        };
        readonly SecretSpec: {
            /** @description User-defined name of the secret. */
            readonly Name: string;
            /**
             * @description User-defined key/value metadata.
             * @example {
             *       "com.example.some-label": "some-value",
             *       "com.example.some-other-label": "some-other-value"
             *     }
             */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /**
             * @description Data is the data to store as a secret, formatted as a Base64-url-safe-encoded
             *     ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)) string.
             *     It must be empty if the Driver field is set, in which case the data is
             *     loaded from an external secret store. The maximum allowed size is 500KB,
             *     as defined in [MaxSecretSize](https://pkg.go.dev/github.com/moby/swarmkit/v2@v2.0.0-20250103191802-8c1959736554/api/validation#MaxSecretSize).
             *
             *     This field is only used to _create_ a secret, and is not returned by
             *     other endpoints.
             *
             * @example
             */
            readonly Data: string;
            readonly Driver: components["schemas"]["Driver"];
            readonly Templating: components["schemas"]["Driver"];
        };
        readonly Secret: {
            /** @example blt1owaxmitz71s9v5zh81zun */
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /**
             * Format: dateTime
             * @example 2017-07-20T13:55:28.678958722Z
             */
            readonly CreatedAt: string;
            /**
             * Format: dateTime
             * @example 2017-07-20T13:55:28.678958722Z
             */
            readonly UpdatedAt: string;
            readonly Spec: components["schemas"]["SecretSpec"];
        };
        readonly ConfigSpec: {
            /** @description User-defined name of the config. */
            readonly Name: string;
            /** @description User-defined key/value metadata. */
            readonly Labels: {
                readonly [key: string]: string;
            };
            /** @description Data is the data to store as a config, formatted as a Base64-url-safe-encoded
             *     ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)) string.
             *     The maximum allowed size is 1000KB, as defined in [MaxConfigSize](https://pkg.go.dev/github.com/moby/swarmkit/v2@v2.0.0-20250103191802-8c1959736554/manager/controlapi#MaxConfigSize).
             *      */
            readonly Data: string;
            readonly Templating: components["schemas"]["Driver"];
        };
        readonly Config: {
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /** Format: dateTime */
            readonly CreatedAt: string;
            /** Format: dateTime */
            readonly UpdatedAt: string;
            readonly Spec: components["schemas"]["ConfigSpec"];
        };
        /** @description ContainerState stores container's running state. It's part of ContainerJSONBase
         *     and will be returned by the "inspect" command.
         *      */
        readonly ContainerState: {
            /**
             * @description String representation of the container state. Can be one of "created",
             *     "running", "paused", "restarting", "removing", "exited", or "dead".
             *
             * @example running
             * @enum {string}
             */
            readonly Status: "created" | "running" | "paused" | "restarting" | "removing" | "exited" | "dead";
            /**
             * @description Whether this container is running.
             *
             *     Note that a running container can be _paused_. The `Running` and `Paused`
             *     booleans are not mutually exclusive:
             *
             *     When pausing a container (on Linux), the freezer cgroup is used to suspend
             *     all processes in the container. Freezing the process requires the process to
             *     be running. As a result, paused containers are both `Running` _and_ `Paused`.
             *
             *     Use the `Status` field instead to determine if a container's state is "running".
             *
             * @example true
             */
            readonly Running: boolean;
            /**
             * @description Whether this container is paused.
             * @example false
             */
            readonly Paused: boolean;
            /**
             * @description Whether this container is restarting.
             * @example false
             */
            readonly Restarting: boolean;
            /**
             * @description Whether a process within this container has been killed because it ran
             *     out of memory since the container was last started.
             *
             * @example false
             */
            readonly OOMKilled: boolean;
            /** @example false */
            readonly Dead: boolean;
            /**
             * @description The process ID of this container
             * @example 1234
             */
            readonly Pid: number;
            /**
             * @description The last exit code of this container
             * @example 0
             */
            readonly ExitCode: number;
            readonly Error: string;
            /**
             * @description The time when this container was last started.
             * @example 2020-01-06T09:06:59.461876391Z
             */
            readonly StartedAt: string;
            /**
             * @description The time when this container last exited.
             * @example 2020-01-06T09:07:59.461876391Z
             */
            readonly FinishedAt: string;
            readonly Health: components["schemas"]["Health"];
        } | null;
        /**
         * ContainerCreateResponse
         * @description OK response to ContainerCreate operation
         */
        readonly ContainerCreateResponse: {
            /**
             * @description The ID of the created container
             * @example ede54ee1afda366ab42f824e8a5ffd195155d853ceaec74a927f249ea270c743
             */
            readonly Id: string;
            /**
             * @description Warnings encountered when creating the container
             * @example []
             */
            readonly Warnings: readonly string[];
        };
        /**
         * ContainerUpdateResponse
         * @description Response for a successful container-update.
         */
        readonly ContainerUpdateResponse: {
            /**
             * @description Warnings encountered when updating the container.
             * @example [
             *       "Published ports are discarded when using host network mode"
             *     ]
             */
            readonly Warnings: readonly string[];
        };
        /**
         * ContainerStatsResponse
         * @description Statistics sample for a container.
         *
         */
        readonly ContainerStatsResponse: {
            /**
             * @description Name of the container
             * @example boring_wozniak
             */
            readonly name: string | null;
            /**
             * @description ID of the container
             * @example ede54ee1afda366ab42f824e8a5ffd195155d853ceaec74a927f249ea270c743
             */
            readonly id: string | null;
            /**
             * Format: date-time
             * @description Date and time at which this sample was collected.
             *     The value is formatted as [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
             *     with nano-seconds.
             *
             * @example 2025-01-16T13:55:22.165243637Z
             */
            readonly read: string;
            /**
             * Format: date-time
             * @description Date and time at which this first sample was collected. This field
             *     is not propagated if the "one-shot" option is set. If the "one-shot"
             *     option is set, this field may be omitted, empty, or set to a default
             *     date (`0001-01-01T00:00:00Z`).
             *
             *     The value is formatted as [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
             *     with nano-seconds.
             *
             * @example 2025-01-16T13:55:21.160452595Z
             */
            readonly preread: string;
            readonly pids_stats: components["schemas"]["ContainerPidsStats"];
            readonly blkio_stats: components["schemas"]["ContainerBlkioStats"];
            /**
             * Format: uint32
             * @description The number of processors on the system.
             *
             *     This field is Windows-specific and always zero for Linux containers.
             *
             * @example 16
             */
            readonly num_procs: number;
            readonly storage_stats: components["schemas"]["ContainerStorageStats"];
            readonly cpu_stats: components["schemas"]["ContainerCPUStats"];
            readonly precpu_stats: components["schemas"]["ContainerCPUStats"];
            readonly memory_stats: components["schemas"]["ContainerMemoryStats"];
            /**
             * @description Network statistics for the container per interface.
             *
             *     This field is omitted if the container has no networking enabled.
             *
             * @example {
             *       "eth0": {
             *         "rx_bytes": 5338,
             *         "rx_dropped": 0,
             *         "rx_errors": 0,
             *         "rx_packets": 36,
             *         "tx_bytes": 648,
             *         "tx_dropped": 0,
             *         "tx_errors": 0,
             *         "tx_packets": 8
             *       },
             *       "eth5": {
             *         "rx_bytes": 4641,
             *         "rx_dropped": 0,
             *         "rx_errors": 0,
             *         "rx_packets": 26,
             *         "tx_bytes": 690,
             *         "tx_dropped": 0,
             *         "tx_errors": 0,
             *         "tx_packets": 9
             *       }
             *     }
             */
            readonly networks: {
                readonly [key: string]: components["schemas"]["ContainerNetworkStats"];
            } | null;
        };
        /**
         * @description BlkioStats stores all IO service stats for data read and write.
         *
         *     This type is Linux-specific and holds many fields that are specific to cgroups v1.
         *     On a cgroup v2 host, all fields other than `io_service_bytes_recursive`
         *     are omitted or `null`.
         *
         *     This type is only populated on Linux and omitted for Windows containers.
         *
         * @example {
         *       "io_service_bytes_recursive": [
         *         {
         *           "major": 254,
         *           "minor": 0,
         *           "op": "read",
         *           "value": 7593984
         *         },
         *         {
         *           "major": 254,
         *           "minor": 0,
         *           "op": "write",
         *           "value": 100
         *         }
         *       ],
         *       "io_serviced_recursive": null,
         *       "io_queue_recursive": null,
         *       "io_service_time_recursive": null,
         *       "io_wait_time_recursive": null,
         *       "io_merged_recursive": null,
         *       "io_time_recursive": null,
         *       "sectors_recursive": null
         *     }
         */
        readonly ContainerBlkioStats: {
            readonly io_service_bytes_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][];
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly io_serviced_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly io_queue_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly io_service_time_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly io_wait_time_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly io_merged_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly io_time_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
            /** @description This field is only available when using Linux containers with
             *     cgroups v1. It is omitted or `null` when using cgroups v2.
             *      */
            readonly sectors_recursive: readonly components["schemas"]["ContainerBlkioStatEntry"][] | null;
        } | null;
        /** @description Blkio stats entry.
         *
         *     This type is Linux-specific and omitted for Windows containers.
         *      */
        readonly ContainerBlkioStatEntry: {
            /**
             * Format: uint64
             * @example 254
             */
            readonly major: number;
            /**
             * Format: uint64
             * @example 0
             */
            readonly minor: number;
            /** @example read */
            readonly op: string;
            /**
             * Format: uint64
             * @example 7593984
             */
            readonly value: number;
        } | null;
        /** @description CPU related info of the container
         *      */
        readonly ContainerCPUStats: {
            readonly cpu_usage: components["schemas"]["ContainerCPUUsage"];
            /**
             * Format: uint64
             * @description System Usage.
             *
             *     This field is Linux-specific and omitted for Windows containers.
             *
             * @example 5
             */
            readonly system_cpu_usage: number | null;
            /**
             * Format: uint32
             * @description Number of online CPUs.
             *
             *     This field is Linux-specific and omitted for Windows containers.
             *
             * @example 5
             */
            readonly online_cpus: number | null;
            readonly throttling_data: components["schemas"]["ContainerThrottlingData"];
        } | null;
        /** @description All CPU stats aggregated since container inception.
         *      */
        readonly ContainerCPUUsage: {
            /**
             * Format: uint64
             * @description Total CPU time consumed in nanoseconds (Linux) or 100's of nanoseconds (Windows).
             *
             * @example 29912000
             */
            readonly total_usage: number;
            /** @description Total CPU time (in nanoseconds) consumed per core (Linux).
             *
             *     This field is Linux-specific when using cgroups v1. It is omitted
             *     when using cgroups v2 and Windows containers.
             *      */
            readonly percpu_usage: readonly number[] | null;
            /**
             * Format: uint64
             * @description Time (in nanoseconds) spent by tasks of the cgroup in kernel mode (Linux),
             *     or time spent (in 100's of nanoseconds) by all container processes in
             *     kernel mode (Windows).
             *
             *     Not populated for Windows containers using Hyper-V isolation.
             *
             * @example 21994000
             */
            readonly usage_in_kernelmode: number;
            /**
             * Format: uint64
             * @description Time (in nanoseconds) spent by tasks of the cgroup in user mode (Linux),
             *     or time spent (in 100's of nanoseconds) by all container processes in
             *     kernel mode (Windows).
             *
             *     Not populated for Windows containers using Hyper-V isolation.
             *
             * @example 7918000
             */
            readonly usage_in_usermode: number;
        } | null;
        /** @description PidsStats contains Linux-specific stats of a container's process-IDs (PIDs).
         *
         *     This type is Linux-specific and omitted for Windows containers.
         *      */
        readonly ContainerPidsStats: {
            /**
             * Format: uint64
             * @description Current is the number of PIDs in the cgroup.
             *
             * @example 5
             */
            readonly current: number | null;
            /**
             * Format: uint64
             * @description Limit is the hard limit on the number of pids in the cgroup.
             *     A "Limit" of 0 means that there is no limit.
             *
             * @example 18446744073709551615
             */
            readonly limit: number | null;
        } | null;
        /** @description CPU throttling stats of the container.
         *
         *     This type is Linux-specific and omitted for Windows containers.
         *      */
        readonly ContainerThrottlingData: {
            /**
             * Format: uint64
             * @description Number of periods with throttling active.
             *
             * @example 0
             */
            readonly periods: number;
            /**
             * Format: uint64
             * @description Number of periods when the container hit its throttling limit.
             *
             * @example 0
             */
            readonly throttled_periods: number;
            /**
             * Format: uint64
             * @description Aggregated time (in nanoseconds) the container was throttled for.
             *
             * @example 0
             */
            readonly throttled_time: number;
        } | null;
        /** @description Aggregates all memory stats since container inception on Linux.
         *     Windows returns stats for commit and private working set only.
         *      */
        readonly ContainerMemoryStats: {
            /**
             * Format: uint64
             * @description Current `res_counter` usage for memory.
             *
             *     This field is Linux-specific and omitted for Windows containers.
             *
             * @example 0
             */
            readonly usage: number | null;
            /**
             * Format: uint64
             * @description Maximum usage ever recorded.
             *
             *     This field is Linux-specific and only supported on cgroups v1.
             *     It is omitted when using cgroups v2 and for Windows containers.
             *
             * @example 0
             */
            readonly max_usage: number | null;
            /**
             * @description All the stats exported via memory.stat. when using cgroups v2.
             *
             *     This field is Linux-specific and omitted for Windows containers.
             *
             * @example {
             *       "active_anon": 1572864,
             *       "active_file": 5115904,
             *       "anon": 1572864,
             *       "anon_thp": 0,
             *       "file": 7626752,
             *       "file_dirty": 0,
             *       "file_mapped": 2723840,
             *       "file_writeback": 0,
             *       "inactive_anon": 0,
             *       "inactive_file": 2510848,
             *       "kernel_stack": 16384,
             *       "pgactivate": 0,
             *       "pgdeactivate": 0,
             *       "pgfault": 2042,
             *       "pglazyfree": 0,
             *       "pglazyfreed": 0,
             *       "pgmajfault": 45,
             *       "pgrefill": 0,
             *       "pgscan": 0,
             *       "pgsteal": 0,
             *       "shmem": 0,
             *       "slab": 1180928,
             *       "slab_reclaimable": 725576,
             *       "slab_unreclaimable": 455352,
             *       "sock": 0,
             *       "thp_collapse_alloc": 0,
             *       "thp_fault_alloc": 1,
             *       "unevictable": 0,
             *       "workingset_activate": 0,
             *       "workingset_nodereclaim": 0,
             *       "workingset_refault": 0
             *     }
             */
            readonly stats: {
                readonly [key: string]: number | null;
            };
            /**
             * Format: uint64
             * @description Number of times memory usage hits limits.
             *
             *     This field is Linux-specific and only supported on cgroups v1.
             *     It is omitted when using cgroups v2 and for Windows containers.
             *
             * @example 0
             */
            readonly failcnt: number | null;
            /**
             * Format: uint64
             * @description This field is Linux-specific and omitted for Windows containers.
             *
             * @example 8217579520
             */
            readonly limit: number | null;
            /**
             * Format: uint64
             * @description Committed bytes.
             *
             *     This field is Windows-specific and omitted for Linux containers.
             *
             * @example 0
             */
            readonly commitbytes: number | null;
            /**
             * Format: uint64
             * @description Peak committed bytes.
             *
             *     This field is Windows-specific and omitted for Linux containers.
             *
             * @example 0
             */
            readonly commitpeakbytes: number | null;
            /**
             * Format: uint64
             * @description Private working set.
             *
             *     This field is Windows-specific and omitted for Linux containers.
             *
             * @example 0
             */
            readonly privateworkingset: number | null;
        };
        /** @description Aggregates the network stats of one container
         *      */
        readonly ContainerNetworkStats: {
            /**
             * Format: uint64
             * @description Bytes received. Windows and Linux.
             *
             * @example 5338
             */
            readonly rx_bytes: number;
            /**
             * Format: uint64
             * @description Packets received. Windows and Linux.
             *
             * @example 36
             */
            readonly rx_packets: number;
            /**
             * Format: uint64
             * @description Received errors. Not used on Windows.
             *
             *     This field is Linux-specific and always zero for Windows containers.
             *
             * @example 0
             */
            readonly rx_errors: number;
            /**
             * Format: uint64
             * @description Incoming packets dropped. Windows and Linux.
             *
             * @example 0
             */
            readonly rx_dropped: number;
            /**
             * Format: uint64
             * @description Bytes sent. Windows and Linux.
             *
             * @example 1200
             */
            readonly tx_bytes: number;
            /**
             * Format: uint64
             * @description Packets sent. Windows and Linux.
             *
             * @example 12
             */
            readonly tx_packets: number;
            /**
             * Format: uint64
             * @description Sent errors. Not used on Windows.
             *
             *     This field is Linux-specific and always zero for Windows containers.
             *
             * @example 0
             */
            readonly tx_errors: number;
            /**
             * Format: uint64
             * @description Outgoing packets dropped. Windows and Linux.
             *
             * @example 0
             */
            readonly tx_dropped: number;
            /** @description Endpoint ID. Not used on Linux.
             *
             *     This field is Windows-specific and omitted for Linux containers.
             *      */
            readonly endpoint_id: string | null;
            /** @description Instance ID. Not used on Linux.
             *
             *     This field is Windows-specific and omitted for Linux containers.
             *      */
            readonly instance_id: string | null;
        } | null;
        /** @description StorageStats is the disk I/O stats for read/write on Windows.
         *
         *     This type is Windows-specific and omitted for Linux containers.
         *      */
        readonly ContainerStorageStats: {
            /**
             * Format: uint64
             * @example 7593984
             */
            readonly read_count_normalized: number | null;
            /**
             * Format: uint64
             * @example 7593984
             */
            readonly read_size_bytes: number | null;
            /**
             * Format: uint64
             * @example 7593984
             */
            readonly write_count_normalized: number | null;
            /**
             * Format: uint64
             * @example 7593984
             */
            readonly write_size_bytes: number | null;
        } | null;
        /**
         * ContainerTopResponse
         * @description Container "top" response.
         */
        readonly ContainerTopResponse: {
            /**
             * @description The ps column titles
             * @example {
             *       "Titles": [
             *         "UID",
             *         "PID",
             *         "PPID",
             *         "C",
             *         "STIME",
             *         "TTY",
             *         "TIME",
             *         "CMD"
             *       ]
             *     }
             */
            readonly Titles: readonly string[];
            /**
             * @description Each process running in the container, where each process
             *     is an array of values corresponding to the titles.
             * @example {
             *       "Processes": [
             *         [
             *           "root",
             *           "13642",
             *           "882",
             *           "0",
             *           "17:03",
             *           "pts/0",
             *           "00:00:00",
             *           "/bin/bash"
             *         ],
             *         [
             *           "root",
             *           "13735",
             *           "13642",
             *           "0",
             *           "17:06",
             *           "pts/0",
             *           "00:00:00",
             *           "sleep 10"
             *         ]
             *       ]
             *     }
             */
            readonly Processes: readonly (readonly string[])[];
        };
        /**
         * ContainerWaitResponse
         * @description OK response to ContainerWait operation
         */
        readonly ContainerWaitResponse: {
            /**
             * Format: int64
             * @description Exit code of the container
             */
            readonly StatusCode: number;
            readonly Error?: components["schemas"]["ContainerWaitExitError"];
        };
        /** @description container waiting error, if any */
        readonly ContainerWaitExitError: {
            /** @description Details of an error */
            readonly Message: string;
        };
        /** @description Response of Engine API: GET "/version"
         *      */
        readonly SystemVersion: {
            readonly Platform: {
                readonly Name: string;
            };
            /** @description Information about system components
             *      */
            readonly Components: readonly {
                /**
                 * @description Name of the component
                 *
                 * @example Engine
                 */
                readonly Name: string;
                /**
                 * @description Version of the component
                 *
                 * @example 27.0.1
                 */
                readonly Version: string;
                /** @description Key/value pairs of strings with additional information about the
                 *     component. These values are intended for informational purposes
                 *     only, and their content is not defined, and not part of the API
                 *     specification.
                 *
                 *     These messages can be printed by the client as information to the user.
                 *      */
                readonly Details?: Record<string, never> | null;
            }[];
            /**
             * @description The version of the daemon
             * @example 27.0.1
             */
            readonly Version: string;
            /**
             * @description The default (and highest) API version that is supported by the daemon
             *
             * @example 1.47
             */
            readonly ApiVersion: string;
            /**
             * @description The minimum API version that is supported by the daemon
             *
             * @example 1.24
             */
            readonly MinAPIVersion: string;
            /**
             * @description The Git commit of the source code that was used to build the daemon
             *
             * @example 48a66213fe
             */
            readonly GitCommit: string;
            /**
             * @description The version Go used to compile the daemon, and the version of the Go
             *     runtime in use.
             *
             * @example go1.22.7
             */
            readonly GoVersion: string;
            /**
             * @description The operating system that the daemon is running on ("linux" or "windows")
             *
             * @example linux
             */
            readonly Os: string;
            /**
             * @description The architecture that the daemon is running on
             *
             * @example amd64
             */
            readonly Arch: string;
            /**
             * @description The kernel version (`uname -r`) that the daemon is running on.
             *
             *     This field is omitted when empty.
             *
             * @example 6.8.0-31-generic
             */
            readonly KernelVersion: string;
            /**
             * @description Indicates if the daemon is started with experimental features enabled.
             *
             *     This field is omitted when empty / false.
             *
             * @example true
             */
            readonly Experimental: boolean;
            /**
             * @description The date and time that the daemon was compiled.
             *
             * @example 2020-06-22T15:49:27.000000000+00:00
             */
            readonly BuildTime: string;
        };
        readonly SystemInfo: {
            /**
             * @description Unique identifier of the daemon.
             *
             *     <p><br /></p>
             *
             *     > **Note**: The format of the ID itself is not part of the API, and
             *     > should not be considered stable.
             *
             * @example 7TRN:IPZB:QYBB:VPBQ:UMPP:KARE:6ZNR:XE6T:7EWV:PKF4:ZOJD:TPYS
             */
            readonly ID: string;
            /**
             * @description Total number of containers on the host.
             * @example 14
             */
            readonly Containers: number;
            /**
             * @description Number of containers with status `"running"`.
             *
             * @example 3
             */
            readonly ContainersRunning: number;
            /**
             * @description Number of containers with status `"paused"`.
             *
             * @example 1
             */
            readonly ContainersPaused: number;
            /**
             * @description Number of containers with status `"stopped"`.
             *
             * @example 10
             */
            readonly ContainersStopped: number;
            /**
             * @description Total number of images on the host.
             *
             *     Both _tagged_ and _untagged_ (dangling) images are counted.
             *
             * @example 508
             */
            readonly Images: number;
            /**
             * @description Name of the storage driver in use.
             * @example overlay2
             */
            readonly Driver: string;
            /**
             * @description Information specific to the storage driver, provided as
             *     "label" / "value" pairs.
             *
             *     This information is provided by the storage driver, and formatted
             *     in a way consistent with the output of `docker info` on the command
             *     line.
             *
             *     <p><br /></p>
             *
             *     > **Note**: The information returned in this field, including the
             *     > formatting of values and labels, should not be considered stable,
             *     > and may change without notice.
             *
             * @example [
             *       [
             *         "Backing Filesystem",
             *         "extfs"
             *       ],
             *       [
             *         "Supports d_type",
             *         "true"
             *       ],
             *       [
             *         "Native Overlay Diff",
             *         "true"
             *       ]
             *     ]
             */
            readonly DriverStatus: readonly (readonly string[])[];
            /**
             * @description Root directory of persistent Docker state.
             *
             *     Defaults to `/var/lib/docker` on Linux, and `C:\ProgramData\docker`
             *     on Windows.
             *
             * @example /var/lib/docker
             */
            readonly DockerRootDir: string;
            readonly Plugins: components["schemas"]["PluginsInfo"];
            /**
             * @description Indicates if the host has memory limit support enabled.
             * @example true
             */
            readonly MemoryLimit: boolean;
            /**
             * @description Indicates if the host has memory swap limit support enabled.
             * @example true
             */
            readonly SwapLimit: boolean;
            /**
             * @description Indicates if the host has kernel memory TCP limit support enabled. This
             *     field is omitted if not supported.
             *
             *     Kernel memory TCP limits are not supported when using cgroups v2, which
             *     does not support the corresponding `memory.kmem.tcp.limit_in_bytes` cgroup.
             *
             * @example true
             */
            readonly KernelMemoryTCP: boolean;
            /**
             * @description Indicates if CPU CFS(Completely Fair Scheduler) period is supported by
             *     the host.
             *
             * @example true
             */
            readonly CpuCfsPeriod: boolean;
            /**
             * @description Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by
             *     the host.
             *
             * @example true
             */
            readonly CpuCfsQuota: boolean;
            /**
             * @description Indicates if CPU Shares limiting is supported by the host.
             *
             * @example true
             */
            readonly CPUShares: boolean;
            /**
             * @description Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.
             *
             *     See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)
             *
             * @example true
             */
            readonly CPUSet: boolean;
            /**
             * @description Indicates if the host kernel has PID limit support enabled.
             * @example true
             */
            readonly PidsLimit: boolean;
            /** @description Indicates if OOM killer disable is supported on the host. */
            readonly OomKillDisable: boolean;
            /**
             * @description Indicates IPv4 forwarding is enabled.
             * @example true
             */
            readonly IPv4Forwarding: boolean;
            /**
             * @description Indicates if `bridge-nf-call-iptables` is available on the host when
             *     the daemon was started.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: netfilter module is now loaded on-demand and no longer
             *     > during daemon startup, making this field obsolete. This field is always
             *     > `false` and will be removed in a API v1.49.
             *
             * @example false
             */
            readonly BridgeNfIptables: boolean;
            /**
             * @description Indicates if `bridge-nf-call-ip6tables` is available on the host.
             *
             *     <p><br /></p>
             *
             *     > **Deprecated**: netfilter module is now loaded on-demand, and no longer
             *     > during daemon startup, making this field obsolete. This field is always
             *     > `false` and will be removed in a API v1.49.
             *
             * @example false
             */
            readonly BridgeNfIp6tables: boolean;
            /**
             * @description Indicates if the daemon is running in debug-mode / with debug-level
             *     logging enabled.
             *
             * @example true
             */
            readonly Debug: boolean;
            /**
             * @description The total number of file Descriptors in use by the daemon process.
             *
             *     This information is only returned if debug-mode is enabled.
             *
             * @example 64
             */
            readonly NFd: number;
            /**
             * @description The  number of goroutines that currently exist.
             *
             *     This information is only returned if debug-mode is enabled.
             *
             * @example 174
             */
            readonly NGoroutines: number;
            /**
             * @description Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)
             *     format with nano-seconds.
             *
             * @example 2017-08-08T20:28:29.06202363Z
             */
            readonly SystemTime: string;
            /** @description The logging driver to use as a default for new containers.
             *      */
            readonly LoggingDriver: string;
            /**
             * @description The driver to use for managing cgroups.
             *
             * @default cgroupfs
             * @example cgroupfs
             * @enum {string}
             */
            readonly CgroupDriver: "cgroupfs" | "systemd" | "none";
            /**
             * @description The version of the cgroup.
             *
             * @default 1
             * @example 1
             * @enum {string}
             */
            readonly CgroupVersion: "1" | "2";
            /**
             * @description Number of event listeners subscribed.
             * @example 30
             */
            readonly NEventsListener: number;
            /**
             * @description Kernel version of the host.
             *
             *     On Linux, this information obtained from `uname`. On Windows this
             *     information is queried from the <kbd>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\</kbd>
             *     registry value, for example _"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)"_.
             *
             * @example 6.8.0-31-generic
             */
            readonly KernelVersion: string;
            /**
             * @description Name of the host's operating system, for example: "Ubuntu 24.04 LTS"
             *     or "Windows Server 2016 Datacenter"
             *
             * @example Ubuntu 24.04 LTS
             */
            readonly OperatingSystem: string;
            /**
             * @description Version of the host's operating system
             *
             *     <p><br /></p>
             *
             *     > **Note**: The information returned in this field, including its
             *     > very existence, and the formatting of values, should not be considered
             *     > stable, and may change without notice.
             *
             * @example 24.04
             */
            readonly OSVersion: string;
            /**
             * @description Generic type of the operating system of the host, as returned by the
             *     Go runtime (`GOOS`).
             *
             *     Currently returned values are "linux" and "windows". A full list of
             *     possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
             *
             * @example linux
             */
            readonly OSType: string;
            /**
             * @description Hardware architecture of the host, as returned by the Go runtime
             *     (`GOARCH`).
             *
             *     A full list of possible values can be found in the [Go documentation](https://go.dev/doc/install/source#environment).
             *
             * @example x86_64
             */
            readonly Architecture: string;
            /**
             * @description The number of logical CPUs usable by the daemon.
             *
             *     The number of available CPUs is checked by querying the operating
             *     system when the daemon starts. Changes to operating system CPU
             *     allocation after the daemon is started are not reflected.
             *
             * @example 4
             */
            readonly NCPU: number;
            /**
             * Format: int64
             * @description Total amount of physical memory available on the host, in bytes.
             *
             * @example 2095882240
             */
            readonly MemTotal: number;
            /**
             * @description Address / URL of the index server that is used for image search,
             *     and as a default for user authentication for Docker Hub and Docker Cloud.
             *
             * @default https://index.docker.io/v1/
             * @example https://index.docker.io/v1/
             */
            readonly IndexServerAddress: string;
            readonly RegistryConfig: components["schemas"]["RegistryServiceConfig"];
            readonly GenericResources: components["schemas"]["GenericResources"];
            /**
             * @description HTTP-proxy configured for the daemon. This value is obtained from the
             *     [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
             *     Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
             *     are masked in the API response.
             *
             *     Containers do not automatically inherit this configuration.
             *
             * @example http://xxxxx:xxxxx@proxy.corp.example.com:8080
             */
            readonly HttpProxy: string;
            /**
             * @description HTTPS-proxy configured for the daemon. This value is obtained from the
             *     [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.
             *     Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL
             *     are masked in the API response.
             *
             *     Containers do not automatically inherit this configuration.
             *
             * @example https://xxxxx:xxxxx@proxy.corp.example.com:4443
             */
            readonly HttpsProxy: string;
            /**
             * @description Comma-separated list of domain extensions for which no proxy should be
             *     used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html)
             *     environment variable.
             *
             *     Containers do not automatically inherit this configuration.
             *
             * @example *.local, 169.254/16
             */
            readonly NoProxy: string;
            /**
             * @description Hostname of the host.
             * @example node5.corp.example.com
             */
            readonly Name: string;
            /**
             * @description User-defined labels (key/value metadata) as set on the daemon.
             *
             *     <p><br /></p>
             *
             *     > **Note**: When part of a Swarm, nodes can both have _daemon_ labels,
             *     > set through the daemon configuration, and _node_ labels, set from a
             *     > manager node in the Swarm. Node labels are not included in this
             *     > field. Node labels can be retrieved using the `/nodes/(id)` endpoint
             *     > on a manager node in the Swarm.
             *
             * @example [
             *       "storage=ssd",
             *       "production"
             *     ]
             */
            readonly Labels: readonly string[];
            /**
             * @description Indicates if experimental features are enabled on the daemon.
             *
             * @example true
             */
            readonly ExperimentalBuild: boolean;
            /**
             * @description Version string of the daemon.
             *
             * @example 27.0.1
             */
            readonly ServerVersion: string;
            /**
             * @description List of [OCI compliant](https://github.com/opencontainers/runtime-spec)
             *     runtimes configured on the daemon. Keys hold the "name" used to
             *     reference the runtime.
             *
             *     The Docker daemon relies on an OCI compliant runtime (invoked via the
             *     `containerd` daemon) as its interface to the Linux kernel namespaces,
             *     cgroups, and SELinux.
             *
             *     The default runtime is `runc`, and automatically configured. Additional
             *     runtimes can be configured by the user and will be listed here.
             *
             * @default {
             *       "runc": {
             *         "path": "runc"
             *       }
             *     }
             * @example {
             *       "runc": {
             *         "path": "runc"
             *       },
             *       "runc-master": {
             *         "path": "/go/bin/runc"
             *       },
             *       "custom": {
             *         "path": "/usr/local/bin/my-oci-runtime",
             *         "runtimeArgs": [
             *           "--debug",
             *           "--systemd-cgroup=false"
             *         ]
             *       }
             *     }
             */
            readonly Runtimes: {
                readonly [key: string]: components["schemas"]["Runtime"];
            };
            /**
             * @description Name of the default OCI runtime that is used when starting containers.
             *
             *     The default can be overridden per-container at create time.
             *
             * @default runc
             * @example runc
             */
            readonly DefaultRuntime: string;
            readonly Swarm: components["schemas"]["SwarmInfo"];
            /**
             * @description Indicates if live restore is enabled.
             *
             *     If enabled, containers are kept running when the daemon is shutdown
             *     or upon daemon start if running containers are detected.
             *
             * @default false
             * @example false
             */
            readonly LiveRestoreEnabled: boolean;
            /**
             * @description Represents the isolation technology to use as a default for containers.
             *     The supported values are platform-specific.
             *
             *     If no isolation value is specified on daemon start, on Windows client,
             *     the default is `hyperv`, and on Windows server, the default is `process`.
             *
             *     This option is currently not used on other platforms.
             *
             * @default default
             * @enum {string}
             */
            readonly Isolation: "default" | "hyperv" | "process" | "";
            /**
             * @description Name and, optional, path of the `docker-init` binary.
             *
             *     If the path is omitted, the daemon searches the host's `$PATH` for the
             *     binary and uses the first result.
             *
             * @example docker-init
             */
            readonly InitBinary: string;
            readonly ContainerdCommit: components["schemas"]["Commit"];
            readonly RuncCommit: components["schemas"]["Commit"];
            readonly InitCommit: components["schemas"]["Commit"];
            /**
             * @description List of security features that are enabled on the daemon, such as
             *     apparmor, seccomp, SELinux, user-namespaces (userns), rootless and
             *     no-new-privileges.
             *
             *     Additional configuration options for each security feature may
             *     be present, and are included as a comma-separated list of key/value
             *     pairs.
             *
             * @example [
             *       "name=apparmor",
             *       "name=seccomp,profile=default",
             *       "name=selinux",
             *       "name=userns",
             *       "name=rootless"
             *     ]
             */
            readonly SecurityOptions: readonly string[];
            /**
             * @description Reports a summary of the product license on the daemon.
             *
             *     If a commercial license has been applied to the daemon, information
             *     such as number of nodes, and expiration are included.
             *
             * @example Community Engine
             */
            readonly ProductLicense: string;
            /** @description List of custom default address pools for local networks, which can be
             *     specified in the daemon.json file or dockerd option.
             *
             *     Example: a Base "10.10.0.0/16" with Size 24 will define the set of 256
             *     10.10.[0-255].0/24 address pools.
             *      */
            readonly DefaultAddressPools: readonly {
                /**
                 * @description The network address in CIDR format
                 * @example 10.10.0.0/16
                 */
                readonly Base: string;
                /**
                 * @description The network pool size
                 * @example 24
                 */
                readonly Size: number;
            }[];
            readonly FirewallBackend: components["schemas"]["FirewallInfo"];
            /** @description List of devices discovered by device drivers.
             *
             *     Each device includes information about its source driver, kind, name,
             *     and additional driver-specific attributes.
             *      */
            readonly DiscoveredDevices: readonly components["schemas"]["DeviceInfo"][];
            /**
             * @description List of warnings / informational messages about missing features, or
             *     issues related to the daemon configuration.
             *
             *     These messages can be printed by the client as information to the user.
             *
             * @example [
             *       "WARNING: No memory limit support"
             *     ]
             */
            readonly Warnings: readonly string[];
            /**
             * @description List of directories where (Container Device Interface) CDI
             *     specifications are located.
             *
             *     These specifications define vendor-specific modifications to an OCI
             *     runtime specification for a container being created.
             *
             *     An empty list indicates that CDI device injection is disabled.
             *
             *     Note that since using CDI device injection requires the daemon to have
             *     experimental enabled. For non-experimental daemons an empty list will
             *     always be returned.
             *
             * @example [
             *       "/etc/cdi",
             *       "/var/run/cdi"
             *     ]
             */
            readonly CDISpecDirs: readonly string[];
            readonly Containerd: components["schemas"]["ContainerdInfo"];
        };
        /** @description Information for connecting to the containerd instance that is used by the daemon.
         *     This is included for debugging purposes only.
         *      */
        readonly ContainerdInfo: {
            /**
             * @description The address of the containerd socket.
             * @example /run/containerd/containerd.sock
             */
            readonly Address: string;
            /** @description The namespaces that the daemon uses for running containers and
             *     plugins in containerd. These namespaces can be configured in the
             *     daemon configuration, and are considered to be used exclusively
             *     by the daemon, Tampering with the containerd instance may cause
             *     unexpected behavior.
             *
             *     As these namespaces are considered to be exclusively accessed
             *     by the daemon, it is not recommended to change these values,
             *     or to change them to a value that is used by other systems,
             *     such as cri-containerd.
             *      */
            readonly Namespaces: {
                /**
                 * @description The default containerd namespace used for containers managed
                 *     by the daemon.
                 *
                 *     The default namespace for containers is "moby", but will be
                 *     suffixed with the `<uid>.<gid>` of the remapped `root` if
                 *     user-namespaces are enabled and the containerd image-store
                 *     is used.
                 *
                 * @default moby
                 * @example moby
                 */
                readonly Containers: string;
                /**
                 * @description The default containerd namespace used for plugins managed by
                 *     the daemon.
                 *
                 *     The default namespace for plugins is "plugins.moby", but will be
                 *     suffixed with the `<uid>.<gid>` of the remapped `root` if
                 *     user-namespaces are enabled and the containerd image-store
                 *     is used.
                 *
                 * @default plugins.moby
                 * @example plugins.moby
                 */
                readonly Plugins: string;
            };
        } | null;
        /** @description Information about the daemon's firewalling configuration.
         *
         *     This field is currently only used on Linux, and omitted on other platforms.
         *      */
        readonly FirewallInfo: {
            /**
             * @description The name of the firewall backend driver.
             *
             * @example nftables
             */
            readonly Driver: string;
            /**
             * @description Information about the firewall backend, provided as
             *     "label" / "value" pairs.
             *
             *     <p><br /></p>
             *
             *     > **Note**: The information returned in this field, including the
             *     > formatting of values and labels, should not be considered stable,
             *     > and may change without notice.
             *
             * @example [
             *       [
             *         "ReloadedAt",
             *         "2025-01-01T00:00:00Z"
             *       ]
             *     ]
             */
            readonly Info: readonly (readonly string[])[];
        } | null;
        /** @description Available plugins per type.
         *
         *     <p><br /></p>
         *
         *     > **Note**: Only unmanaged (V1) plugins are included in this list.
         *     > V1 plugins are "lazily" loaded, and are not returned in this list
         *     > if there is no resource using the plugin.
         *      */
        readonly PluginsInfo: {
            /**
             * @description Names of available volume-drivers, and network-driver plugins.
             * @example [
             *       "local"
             *     ]
             */
            readonly Volume: readonly string[];
            /**
             * @description Names of available network-drivers, and network-driver plugins.
             * @example [
             *       "bridge",
             *       "host",
             *       "ipvlan",
             *       "macvlan",
             *       "null",
             *       "overlay"
             *     ]
             */
            readonly Network: readonly string[];
            /**
             * @description Names of available authorization plugins.
             * @example [
             *       "img-authz-plugin",
             *       "hbm"
             *     ]
             */
            readonly Authorization: readonly string[];
            /**
             * @description Names of available logging-drivers, and logging-driver plugins.
             * @example [
             *       "awslogs",
             *       "fluentd",
             *       "gcplogs",
             *       "gelf",
             *       "journald",
             *       "json-file",
             *       "splunk",
             *       "syslog"
             *     ]
             */
            readonly Log: readonly string[];
        };
        /** @description RegistryServiceConfig stores daemon registry services configuration.
         *      */
        readonly RegistryServiceConfig: {
            /**
             * @description List of IP ranges of insecure registries, using the CIDR syntax
             *     ([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries
             *     accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates
             *     from unknown CAs) communication.
             *
             *     By default, local registries (`::1/128` and `127.0.0.0/8`) are configured as
             *     insecure. All other registries are secure. Communicating with an
             *     insecure registry is not possible if the daemon assumes that registry
             *     is secure.
             *
             *     This configuration override this behavior, insecure communication with
             *     registries whose resolved IP address is within the subnet described by
             *     the CIDR syntax.
             *
             *     Registries can also be marked insecure by hostname. Those registries
             *     are listed under `IndexConfigs` and have their `Secure` field set to
             *     `false`.
             *
             *     > **Warning**: Using this option can be useful when running a local
             *     > registry, but introduces security vulnerabilities. This option
             *     > should therefore ONLY be used for testing purposes. For increased
             *     > security, users should add their CA to their system's list of trusted
             *     > CAs instead of enabling this option.
             *
             * @example [
             *       "::1/128",
             *       "127.0.0.0/8"
             *     ]
             */
            readonly InsecureRegistryCIDRs: readonly string[];
            /** @example {
             *       "127.0.0.1:5000": {
             *         "Name": "127.0.0.1:5000",
             *         "Mirrors": [],
             *         "Secure": false,
             *         "Official": false
             *       },
             *       "[2001:db8:a0b:12f0::1]:80": {
             *         "Name": "[2001:db8:a0b:12f0::1]:80",
             *         "Mirrors": [],
             *         "Secure": false,
             *         "Official": false
             *       },
             *       "docker.io": {
             *         "Name": "docker.io",
             *         "Mirrors": [
             *           "https://hub-mirror.corp.example.com:5000/"
             *         ],
             *         "Secure": true,
             *         "Official": true
             *       },
             *       "registry.internal.corp.example.com:3000": {
             *         "Name": "registry.internal.corp.example.com:3000",
             *         "Mirrors": [],
             *         "Secure": false,
             *         "Official": false
             *       }
             *     } */
            readonly IndexConfigs: {
                readonly [key: string]: components["schemas"]["IndexInfo"];
            };
            /**
             * @description List of registry URLs that act as a mirror for the official
             *     (`docker.io`) registry.
             *
             * @example [
             *       "https://hub-mirror.corp.example.com:5000/",
             *       "https://[2001:db8:a0b:12f0::1]/"
             *     ]
             */
            readonly Mirrors: readonly string[];
        } | null;
        /** @description IndexInfo contains information about a registry. */
        readonly IndexInfo: {
            /**
             * @description Name of the registry, such as "docker.io".
             *
             * @example docker.io
             */
            readonly Name: string;
            /**
             * @description List of mirrors, expressed as URIs.
             *
             * @example [
             *       "https://hub-mirror.corp.example.com:5000/",
             *       "https://registry-2.docker.io/",
             *       "https://registry-3.docker.io/"
             *     ]
             */
            readonly Mirrors: readonly string[];
            /**
             * @description Indicates if the registry is part of the list of insecure
             *     registries.
             *
             *     If `false`, the registry is insecure. Insecure registries accept
             *     un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from
             *     unknown CAs) communication.
             *
             *     > **Warning**: Insecure registries can be useful when running a local
             *     > registry. However, because its use creates security vulnerabilities
             *     > it should ONLY be enabled for testing purposes. For increased
             *     > security, users should add their CA to their system's list of
             *     > trusted CAs instead of enabling this option.
             *
             * @example true
             */
            readonly Secure: boolean;
            /**
             * @description Indicates whether this is an official registry (i.e., Docker Hub / docker.io)
             *
             * @example true
             */
            readonly Official: boolean;
        } | null;
        /** @description Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec)
         *     runtime.
         *
         *     The runtime is invoked by the daemon via the `containerd` daemon. OCI
         *     runtimes act as an interface to the Linux kernel namespaces, cgroups,
         *     and SELinux.
         *      */
        readonly Runtime: {
            /**
             * @description Name and, optional, path, of the OCI executable binary.
             *
             *     If the path is omitted, the daemon searches the host's `$PATH` for the
             *     binary and uses the first result.
             *
             * @example /usr/local/bin/my-oci-runtime
             */
            readonly path: string;
            /**
             * @description List of command-line arguments to pass to the runtime when invoked.
             *
             * @example [
             *       "--debug",
             *       "--systemd-cgroup=false"
             *     ]
             */
            readonly runtimeArgs: readonly string[] | null;
            /**
             * @description Information specific to the runtime.
             *
             *     While this API specification does not define data provided by runtimes,
             *     the following well-known properties may be provided by runtimes:
             *
             *     `org.opencontainers.runtime-spec.features`: features structure as defined
             *     in the [OCI Runtime Specification](https://github.com/opencontainers/runtime-spec/blob/main/features.md),
             *     in a JSON string representation.
             *
             *     <p><br /></p>
             *
             *     > **Note**: The information returned in this field, including the
             *     > formatting of values and labels, should not be considered stable,
             *     > and may change without notice.
             *
             * @example {
             *       "org.opencontainers.runtime-spec.features": "{\"ociVersionMin\":\"1.0.0\",\"ociVersionMax\":\"1.1.0\",\"...\":\"...\"}"
             *     }
             */
            readonly status: {
                readonly [key: string]: string;
            } | null;
        };
        /** @description Commit holds the Git-commit (SHA1) that a binary was built from, as
         *     reported in the version-string of external tools, such as `containerd`,
         *     or `runC`.
         *      */
        readonly Commit: {
            /**
             * @description Actual commit ID of external tool.
             * @example cfb82a876ecc11b5ca0977d1733adbe58599088a
             */
            readonly ID: string;
        };
        /** @description Represents generic information about swarm.
         *      */
        readonly SwarmInfo: {
            /**
             * @description Unique identifier of for this node in the swarm.
             * @default
             * @example k67qz4598weg5unwwffg6z1m1
             */
            readonly NodeID: string;
            /**
             * @description IP address at which this node can be reached by other nodes in the
             *     swarm.
             *
             * @default
             * @example 10.0.0.46
             */
            readonly NodeAddr: string;
            readonly LocalNodeState: components["schemas"]["LocalNodeState"];
            /**
             * @default false
             * @example true
             */
            readonly ControlAvailable: boolean;
            /** @default  */
            readonly Error: string;
            /**
             * @description List of ID's and addresses of other managers in the swarm.
             *
             * @default null
             * @example [
             *       {
             *         "NodeID": "71izy0goik036k48jg985xnds",
             *         "Addr": "10.0.0.158:2377"
             *       },
             *       {
             *         "NodeID": "79y6h1o4gv8n120drcprv5nmc",
             *         "Addr": "10.0.0.159:2377"
             *       },
             *       {
             *         "NodeID": "k67qz4598weg5unwwffg6z1m1",
             *         "Addr": "10.0.0.46:2377"
             *       }
             *     ]
             */
            readonly RemoteManagers: readonly components["schemas"]["PeerNode"][] | null;
            /**
             * @description Total number of nodes in the swarm.
             * @example 4
             */
            readonly Nodes: number | null;
            /**
             * @description Total number of managers in the swarm.
             * @example 3
             */
            readonly Managers: number | null;
            readonly Cluster: components["schemas"]["ClusterInfo"];
        };
        /**
         * @description Current local status of this node.
         * @default
         * @example active
         * @enum {string}
         */
        readonly LocalNodeState: "" | "inactive" | "pending" | "active" | "error" | "locked";
        /** @description Represents a peer-node in the swarm */
        readonly PeerNode: {
            /** @description Unique identifier of for this node in the swarm. */
            readonly NodeID: string;
            /** @description IP address and ports at which this node can be reached.
             *      */
            readonly Addr: string;
        };
        /** @description Specifies how a service should be attached to a particular network.
         *      */
        readonly NetworkAttachmentConfig: {
            /** @description The target network for attachment. Must be a network name or ID.
             *      */
            readonly Target: string;
            /** @description Discoverable alternate names for the service on this network.
             *      */
            readonly Aliases: readonly string[];
            /** @description Driver attachment options for the network target.
             *      */
            readonly DriverOpts: {
                readonly [key: string]: string;
            };
        };
        /** @description Actor describes something that generates events, like a container, network,
         *     or a volume.
         *      */
        readonly EventActor: {
            /**
             * @description The ID of the object emitting the event
             * @example ede54ee1afda366ab42f824e8a5ffd195155d853ceaec74a927f249ea270c743
             */
            readonly ID: string;
            /**
             * @description Various key/value attributes of the object, depending on its type.
             *
             * @example {
             *       "com.example.some-label": "some-label-value",
             *       "image": "alpine:latest",
             *       "name": "my-container"
             *     }
             */
            readonly Attributes: {
                readonly [key: string]: string;
            };
        };
        /**
         * SystemEventsResponse
         * @description EventMessage represents the information an event contains.
         *
         */
        readonly EventMessage: {
            /**
             * @description The type of object emitting the event
             * @example container
             * @enum {string}
             */
            readonly Type: "builder" | "config" | "container" | "daemon" | "image" | "network" | "node" | "plugin" | "secret" | "service" | "volume";
            /**
             * @description The type of event
             * @example create
             */
            readonly Action: string;
            readonly Actor: components["schemas"]["EventActor"];
            /**
             * @description Scope of the event. Engine events are `local` scope. Cluster (Swarm)
             *     events are `swarm` scope.
             *
             * @enum {string}
             */
            readonly scope: "local" | "swarm";
            /**
             * Format: int64
             * @description Timestamp of event
             * @example 1629574695
             */
            readonly time: number;
            /**
             * Format: int64
             * @description Timestamp of event, with nanosecond accuracy
             * @example 1629574695515050000
             */
            readonly timeNano: number;
        };
        /** @description A descriptor struct containing digest, media type, and size, as defined in
         *     the [OCI Content Descriptors Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/descriptor.md).
         *      */
        readonly OCIDescriptor: {
            /**
             * @description The media type of the object this schema refers to.
             *
             * @example application/vnd.oci.image.manifest.v1+json
             */
            readonly mediaType: string;
            /**
             * @description The digest of the targeted content.
             *
             * @example sha256:c0537ff6a5218ef531ece93d4984efc99bbf3f7497c0a7726c88e2bb7584dc96
             */
            readonly digest: string;
            /**
             * Format: int64
             * @description The size in bytes of the blob.
             *
             * @example 424
             */
            readonly size: number;
            /** @description List of URLs from which this object MAY be downloaded. */
            readonly urls: readonly string[] | null;
            /**
             * @description Arbitrary metadata relating to the targeted content.
             * @example {
             *       "com.docker.official-images.bashbrew.arch": "amd64",
             *       "org.opencontainers.image.base.digest": "sha256:0d0ef5c914d3ea700147da1bd050c59edb8bb12ca312f3800b29d7c8087eabd8",
             *       "org.opencontainers.image.base.name": "scratch",
             *       "org.opencontainers.image.created": "2025-01-27T00:00:00Z",
             *       "org.opencontainers.image.revision": "9fabb4bad5138435b01857e2fe9363e2dc5f6a79",
             *       "org.opencontainers.image.source": "https://git.launchpad.net/cloud-images/+oci/ubuntu-base",
             *       "org.opencontainers.image.url": "https://hub.docker.com/_/ubuntu",
             *       "org.opencontainers.image.version": "24.04"
             *     }
             */
            readonly annotations: {
                readonly [key: string]: string;
            } | null;
            /**
             * @description Data is an embedding of the targeted content. This is encoded as a base64
             *     string when marshalled to JSON (automatically, by encoding/json). If
             *     present, Data can be used directly to avoid fetching the targeted content.
             * @example null
             */
            readonly data: string | null;
            readonly platform: components["schemas"]["OCIPlatform"];
            /**
             * @description ArtifactType is the IANA media type of this artifact.
             * @example null
             */
            readonly artifactType: string | null;
        };
        /** @description Describes the platform which the image in the manifest runs on, as defined
         *     in the [OCI Image Index Specification](https://github.com/opencontainers/image-spec/blob/v1.0.1/image-index.md).
         *      */
        readonly OCIPlatform: {
            /**
             * @description The CPU architecture, for example `amd64` or `ppc64`.
             *
             * @example arm
             */
            readonly architecture: string;
            /**
             * @description The operating system, for example `linux` or `windows`.
             *
             * @example windows
             */
            readonly os: string;
            /**
             * @description Optional field specifying the operating system version, for example on
             *     Windows `10.0.19041.1165`.
             *
             * @example 10.0.19041.1165
             */
            readonly "os.version": string;
            /**
             * @description Optional field specifying an array of strings, each listing a required
             *     OS feature (for example on Windows `win32k`).
             *
             * @example [
             *       "win32k"
             *     ]
             */
            readonly "os.features": readonly string[];
            /**
             * @description Optional field specifying a variant of the CPU, for example `v7` to
             *     specify ARMv7 when architecture is `arm`.
             *
             * @example v7
             */
            readonly variant: string;
        } | null;
        /**
         * DistributionInspectResponse
         * @description Describes the result obtained from contacting the registry to retrieve
         *     image metadata.
         *
         */
        readonly DistributionInspect: {
            readonly Descriptor: components["schemas"]["OCIDescriptor"];
            /** @description An array containing all platforms supported by the image.
             *      */
            readonly Platforms: readonly components["schemas"]["OCIPlatform"][];
        };
        /** @description Options and information specific to, and only present on, Swarm CSI
         *     cluster volumes.
         *      */
        readonly ClusterVolume: {
            /** @description The Swarm ID of this volume. Because cluster volumes are Swarm
             *     objects, they have an ID, unlike non-cluster volumes. This ID can
             *     be used to refer to the Volume instead of the name.
             *      */
            readonly ID: string;
            readonly Version: components["schemas"]["ObjectVersion"];
            /** Format: dateTime */
            readonly CreatedAt: string;
            /** Format: dateTime */
            readonly UpdatedAt: string;
            readonly Spec: components["schemas"]["ClusterVolumeSpec"];
            /** @description Information about the global status of the volume.
             *      */
            readonly Info: {
                /**
                 * Format: int64
                 * @description The capacity of the volume in bytes. A value of 0 indicates that
                 *     the capacity is unknown.
                 *
                 */
                readonly CapacityBytes: number;
                /** @description A map of strings to strings returned from the storage plugin when
                 *     the volume is created.
                 *      */
                readonly VolumeContext: {
                    readonly [key: string]: string;
                };
                /** @description The ID of the volume as returned by the CSI storage plugin. This
                 *     is distinct from the volume's ID as provided by Docker. This ID
                 *     is never used by the user when communicating with Docker to refer
                 *     to this volume. If the ID is blank, then the Volume has not been
                 *     successfully created in the plugin yet.
                 *      */
                readonly VolumeID: string;
                /** @description The topology this volume is actually accessible from.
                 *      */
                readonly AccessibleTopology: readonly components["schemas"]["Topology"][];
            };
            /** @description The status of the volume as it pertains to its publishing and use on
             *     specific nodes
             *      */
            readonly PublishStatus: readonly {
                /** @description The ID of the Swarm node the volume is published on.
                 *      */
                readonly NodeID: string;
                /**
                 * @description The published state of the volume.
                 *     * `pending-publish` The volume should be published to this node, but the call to the controller plugin to do so has not yet been successfully completed.
                 *     * `published` The volume is published successfully to the node.
                 *     * `pending-node-unpublish` The volume should be unpublished from the node, and the manager is awaiting confirmation from the worker that it has done so.
                 *     * `pending-controller-unpublish` The volume is successfully unpublished from the node, but has not yet been successfully unpublished on the controller.
                 *
                 * @enum {string}
                 */
                readonly State: "pending-publish" | "published" | "pending-node-unpublish" | "pending-controller-unpublish";
                /** @description A map of strings to strings returned by the CSI controller
                 *     plugin when a volume is published.
                 *      */
                readonly PublishContext: {
                    readonly [key: string]: string;
                };
            }[];
        };
        /** @description Cluster-specific options used to create the volume.
         *      */
        readonly ClusterVolumeSpec: {
            /** @description Group defines the volume group of this volume. Volumes belonging to
             *     the same group can be referred to by group name when creating
             *     Services.  Referring to a volume by group instructs Swarm to treat
             *     volumes in that group interchangeably for the purpose of scheduling.
             *     Volumes with an empty string for a group technically all belong to
             *     the same, emptystring group.
             *      */
            readonly Group: string;
            /** @description Defines how the volume is used by tasks.
             *      */
            readonly AccessMode: {
                /**
                 * @description The set of nodes this volume can be used on at one time.
                 *     - `single` The volume may only be scheduled to one node at a time.
                 *     - `multi` the volume may be scheduled to any supported number of nodes at a time.
                 *
                 * @default single
                 * @enum {string}
                 */
                readonly Scope: "single" | "multi";
                /**
                 * @description The number and way that different tasks can use this volume
                 *     at one time.
                 *     - `none` The volume may only be used by one task at a time.
                 *     - `readonly` The volume may be used by any number of tasks, but they all must mount the volume as readonly
                 *     - `onewriter` The volume may be used by any number of tasks, but only one may mount it as read/write.
                 *     - `all` The volume may have any number of readers and writers.
                 *
                 * @default none
                 * @enum {string}
                 */
                readonly Sharing: "none" | "readonly" | "onewriter" | "all";
                /** @description Options for using this volume as a Mount-type volume.
                 *
                 *         Either MountVolume or BlockVolume, but not both, must be
                 *         present.
                 *       properties:
                 *         FsType:
                 *           type: "string"
                 *           description: |
                 *             Specifies the filesystem type for the mount volume.
                 *             Optional.
                 *         MountFlags:
                 *           type: "array"
                 *           description: |
                 *             Flags to pass when mounting the volume. Optional.
                 *           items:
                 *             type: "string"
                 *     BlockVolume:
                 *       type: "object"
                 *       description: |
                 *         Options for using this volume as a Block-type volume.
                 *         Intentionally empty.
                 *      */
                readonly MountVolume: Record<string, never>;
                /** @description Swarm Secrets that are passed to the CSI storage plugin when
                 *     operating on this volume.
                 *      */
                readonly Secrets: readonly {
                    /** @description Key is the name of the key of the key-value pair passed to
                     *     the plugin.
                     *      */
                    readonly Key: string;
                    /** @description Secret is the swarm Secret object from which to read data.
                     *     This can be a Secret name or ID. The Secret data is
                     *     retrieved by swarm and used as the value of the key-value
                     *     pair passed to the plugin.
                     *      */
                    readonly Secret: string;
                }[];
                /** @description Requirements for the accessible topology of the volume. These
                 *     fields are optional. For an in-depth description of what these
                 *     fields mean, see the CSI specification.
                 *      */
                readonly AccessibilityRequirements: {
                    /** @description A list of required topologies, at least one of which the
                     *     volume must be accessible from.
                     *      */
                    readonly Requisite: readonly components["schemas"]["Topology"][];
                    /** @description A list of topologies that the volume should attempt to be
                     *     provisioned in.
                     *      */
                    readonly Preferred: readonly components["schemas"]["Topology"][];
                };
                /** @description The desired capacity that the volume should be created with. If
                 *     empty, the plugin will decide the capacity.
                 *      */
                readonly CapacityRange: {
                    /**
                     * Format: int64
                     * @description The volume must be at least this big. The value of 0
                     *     indicates an unspecified minimum
                     *
                     */
                    readonly RequiredBytes: number;
                    /**
                     * Format: int64
                     * @description The volume must not be bigger than this. The value of 0
                     *     indicates an unspecified maximum.
                     *
                     */
                    readonly LimitBytes: number;
                };
                /**
                 * @description The availability of the volume for use in tasks.
                 *     - `active` The volume is fully available for scheduling on the cluster
                 *     - `pause` No new workloads should use the volume, but existing workloads are not stopped.
                 *     - `drain` All workloads using this volume should be stopped and rescheduled, and no new ones should be started.
                 *
                 * @default active
                 * @enum {string}
                 */
                readonly Availability: "active" | "pause" | "drain";
            };
        };
        /** @description A map of topological domains to topological segments. For in depth
         *     details, see documentation for the Topology object in the CSI
         *     specification.
         *      */
        readonly Topology: {
            readonly [key: string]: string;
        };
        /** @description ImageManifestSummary represents a summary of an image manifest.
         *      */
        readonly ImageManifestSummary: {
            /**
             * @description ID is the content-addressable ID of an image and is the same as the
             *     digest of the image manifest.
             *
             * @example sha256:95869fbcf224d947ace8d61d0e931d49e31bb7fc67fffbbe9c3198c33aa8e93f
             */
            readonly ID: string;
            readonly Descriptor: components["schemas"]["OCIDescriptor"];
            /**
             * @description Indicates whether all the child content (image config, layers) is fully available locally.
             * @example true
             */
            readonly Available: boolean;
            readonly Size: {
                /**
                 * Format: int64
                 * @description Total is the total size (in bytes) of all the locally present
                 *     data (both distributable and non-distributable) that's related to
                 *     this manifest and its children.
                 *     This equal to the sum of [Content] size AND all the sizes in the
                 *     [Size] struct present in the Kind-specific data struct.
                 *     For example, for an image kind (Kind == "image")
                 *     this would include the size of the image content and unpacked
                 *     image snapshots ([Size.Content] + [ImageData.Size.Unpacked]).
                 *
                 * @example 8213251
                 */
                readonly Total: number;
                /**
                 * Format: int64
                 * @description Content is the size (in bytes) of all the locally present
                 *     content in the content store (e.g. image config, layers)
                 *     referenced by this manifest and its children.
                 *     This only includes blobs in the content store.
                 *
                 * @example 3987495
                 */
                readonly Content: number;
            };
            /**
             * @description The kind of the manifest.
             *
             *     kind         | description
             *     -------------|-----------------------------------------------------------
             *     image        | Image manifest that can be used to start a container.
             *     attestation  | Attestation manifest produced by the Buildkit builder for a specific image manifest.
             *
             * @example image
             * @enum {string}
             */
            readonly Kind: "image" | "attestation" | "unknown";
            /** @description The image data for the image manifest.
             *     This field is only populated when Kind is "image".
             *      */
            readonly ImageData?: {
                readonly Platform: components["schemas"]["OCIPlatform"];
                /**
                 * @description The IDs of the containers that are using this image.
                 *
                 * @example [
                 *       "ede54ee1fda366ab42f824e8a5ffd195155d853ceaec74a927f249ea270c7430",
                 *       "abadbce344c096744d8d6071a90d474d28af8f1034b5ea9fb03c3f4bfc6d005e"
                 *     ]
                 */
                readonly Containers: readonly string[];
                readonly Size: {
                    /**
                     * Format: int64
                     * @description Unpacked is the size (in bytes) of the locally unpacked
                     *     (uncompressed) image content that's directly usable by the containers
                     *     running this image.
                     *     It's independent of the distributable content - e.g.
                     *     the image might still have an unpacked data that's still used by
                     *     some container even when the distributable/compressed content is
                     *     already gone.
                     *
                     * @example 3987495
                     */
                    readonly Unpacked: number;
                };
            } | null;
            /** @description The image data for the attestation manifest.
             *     This field is only populated when Kind is "attestation".
             *      */
            readonly AttestationData?: {
                /**
                 * @description The digest of the image manifest that this attestation is for.
                 *
                 * @example sha256:95869fbcf224d947ace8d61d0e931d49e31bb7fc67fffbbe9c3198c33aa8e93f
                 */
                readonly For: string;
            } | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: {
        readonly PluginPrivilegeArray: {
            readonly content: {
                readonly "application/json": readonly components["schemas"]["PluginPrivilege"][];
                readonly "text/plain": readonly components["schemas"]["PluginPrivilege"][];
            };
        };
    };
    headers: never;
    pathItems: never;
};
export type SchemaPort = components['schemas']['Port'];
export type SchemaMountPoint = components['schemas']['MountPoint'];
export type SchemaDeviceMapping = components['schemas']['DeviceMapping'];
export type SchemaDeviceRequest = components['schemas']['DeviceRequest'];
export type SchemaThrottleDevice = components['schemas']['ThrottleDevice'];
export type SchemaMount = components['schemas']['Mount'];
export type SchemaRestartPolicy = components['schemas']['RestartPolicy'];
export type SchemaResources = components['schemas']['Resources'];
export type SchemaLimit = components['schemas']['Limit'];
export type SchemaResourceObject = components['schemas']['ResourceObject'];
export type SchemaGenericResources = components['schemas']['GenericResources'];
export type SchemaHealthConfig = components['schemas']['HealthConfig'];
export type SchemaHealth = components['schemas']['Health'];
export type SchemaHealthcheckResult = components['schemas']['HealthcheckResult'];
export type SchemaHostConfig = components['schemas']['HostConfig'];
export type SchemaContainerConfig = components['schemas']['ContainerConfig'];
export type SchemaImageConfig = components['schemas']['ImageConfig'];
export type SchemaNetworkingConfig = components['schemas']['NetworkingConfig'];
export type SchemaNetworkSettings = components['schemas']['NetworkSettings'];
export type SchemaAddress = components['schemas']['Address'];
export type SchemaPortMap = components['schemas']['PortMap'];
export type SchemaPortBinding = components['schemas']['PortBinding'];
export type SchemaDriverData = components['schemas']['DriverData'];
export type SchemaFilesystemChange = components['schemas']['FilesystemChange'];
export type SchemaChangeType = components['schemas']['ChangeType'];
export type SchemaImageInspect = components['schemas']['ImageInspect'];
export type SchemaImageSummary = components['schemas']['ImageSummary'];
export type SchemaAuthConfig = components['schemas']['AuthConfig'];
export type SchemaProcessConfig = components['schemas']['ProcessConfig'];
export type SchemaVolume = components['schemas']['Volume'];
export type SchemaVolumeCreateOptions = components['schemas']['VolumeCreateOptions'];
export type SchemaVolumeListResponse = components['schemas']['VolumeListResponse'];
export type SchemaNetwork = components['schemas']['Network'];
export type SchemaConfigReference = components['schemas']['ConfigReference'];
export type SchemaIpam = components['schemas']['IPAM'];
export type SchemaIpamConfig = components['schemas']['IPAMConfig'];
export type SchemaNetworkContainer = components['schemas']['NetworkContainer'];
export type SchemaPeerInfo = components['schemas']['PeerInfo'];
export type SchemaNetworkCreateResponse = components['schemas']['NetworkCreateResponse'];
export type SchemaBuildInfo = components['schemas']['BuildInfo'];
export type SchemaBuildCache = components['schemas']['BuildCache'];
export type SchemaImageId = components['schemas']['ImageID'];
export type SchemaCreateImageInfo = components['schemas']['CreateImageInfo'];
export type SchemaPushImageInfo = components['schemas']['PushImageInfo'];
export type SchemaDeviceInfo = components['schemas']['DeviceInfo'];
export type SchemaErrorDetail = components['schemas']['ErrorDetail'];
export type SchemaProgressDetail = components['schemas']['ProgressDetail'];
export type SchemaErrorResponse = components['schemas']['ErrorResponse'];
export type SchemaIdResponse = components['schemas']['IDResponse'];
export type SchemaEndpointSettings = components['schemas']['EndpointSettings'];
export type SchemaEndpointIpamConfig = components['schemas']['EndpointIPAMConfig'];
export type SchemaPluginMount = components['schemas']['PluginMount'];
export type SchemaPluginDevice = components['schemas']['PluginDevice'];
export type SchemaPluginEnv = components['schemas']['PluginEnv'];
export type SchemaPluginInterfaceType = components['schemas']['PluginInterfaceType'];
export type SchemaPluginPrivilege = components['schemas']['PluginPrivilege'];
export type SchemaPlugin = components['schemas']['Plugin'];
export type SchemaObjectVersion = components['schemas']['ObjectVersion'];
export type SchemaNodeSpec = components['schemas']['NodeSpec'];
export type SchemaNode = components['schemas']['Node'];
export type SchemaNodeDescription = components['schemas']['NodeDescription'];
export type SchemaPlatform = components['schemas']['Platform'];
export type SchemaEngineDescription = components['schemas']['EngineDescription'];
export type SchemaTlsInfo = components['schemas']['TLSInfo'];
export type SchemaNodeStatus = components['schemas']['NodeStatus'];
export type SchemaNodeState = components['schemas']['NodeState'];
export type SchemaManagerStatus = components['schemas']['ManagerStatus'];
export type SchemaReachability = components['schemas']['Reachability'];
export type SchemaSwarmSpec = components['schemas']['SwarmSpec'];
export type SchemaClusterInfo = components['schemas']['ClusterInfo'];
export type SchemaJoinTokens = components['schemas']['JoinTokens'];
export type SchemaSwarm = components['schemas']['Swarm'];
export type SchemaTaskSpec = components['schemas']['TaskSpec'];
export type SchemaTaskState = components['schemas']['TaskState'];
export type SchemaContainerStatus = components['schemas']['ContainerStatus'];
export type SchemaPortStatus = components['schemas']['PortStatus'];
export type SchemaTaskStatus = components['schemas']['TaskStatus'];
export type SchemaTask = components['schemas']['Task'];
export type SchemaServiceSpec = components['schemas']['ServiceSpec'];
export type SchemaEndpointPortConfig = components['schemas']['EndpointPortConfig'];
export type SchemaEndpointSpec = components['schemas']['EndpointSpec'];
export type SchemaService = components['schemas']['Service'];
export type SchemaImageDeleteResponseItem = components['schemas']['ImageDeleteResponseItem'];
export type SchemaServiceCreateResponse = components['schemas']['ServiceCreateResponse'];
export type SchemaServiceUpdateResponse = components['schemas']['ServiceUpdateResponse'];
export type SchemaContainerInspectResponse = components['schemas']['ContainerInspectResponse'];
export type SchemaContainerSummary = components['schemas']['ContainerSummary'];
export type SchemaDriver = components['schemas']['Driver'];
export type SchemaSecretSpec = components['schemas']['SecretSpec'];
export type SchemaSecret = components['schemas']['Secret'];
export type SchemaConfigSpec = components['schemas']['ConfigSpec'];
export type SchemaConfig = components['schemas']['Config'];
export type SchemaContainerState = components['schemas']['ContainerState'];
export type SchemaContainerCreateResponse = components['schemas']['ContainerCreateResponse'];
export type SchemaContainerUpdateResponse = components['schemas']['ContainerUpdateResponse'];
export type SchemaContainerStatsResponse = components['schemas']['ContainerStatsResponse'];
export type SchemaContainerBlkioStats = components['schemas']['ContainerBlkioStats'];
export type SchemaContainerBlkioStatEntry = components['schemas']['ContainerBlkioStatEntry'];
export type SchemaContainerCpuStats = components['schemas']['ContainerCPUStats'];
export type SchemaContainerCpuUsage = components['schemas']['ContainerCPUUsage'];
export type SchemaContainerPidsStats = components['schemas']['ContainerPidsStats'];
export type SchemaContainerThrottlingData = components['schemas']['ContainerThrottlingData'];
export type SchemaContainerMemoryStats = components['schemas']['ContainerMemoryStats'];
export type SchemaContainerNetworkStats = components['schemas']['ContainerNetworkStats'];
export type SchemaContainerStorageStats = components['schemas']['ContainerStorageStats'];
export type SchemaContainerTopResponse = components['schemas']['ContainerTopResponse'];
export type SchemaContainerWaitResponse = components['schemas']['ContainerWaitResponse'];
export type SchemaContainerWaitExitError = components['schemas']['ContainerWaitExitError'];
export type SchemaSystemVersion = components['schemas']['SystemVersion'];
export type SchemaSystemInfo = components['schemas']['SystemInfo'];
export type SchemaContainerdInfo = components['schemas']['ContainerdInfo'];
export type SchemaFirewallInfo = components['schemas']['FirewallInfo'];
export type SchemaPluginsInfo = components['schemas']['PluginsInfo'];
export type SchemaRegistryServiceConfig = components['schemas']['RegistryServiceConfig'];
export type SchemaIndexInfo = components['schemas']['IndexInfo'];
export type SchemaRuntime = components['schemas']['Runtime'];
export type SchemaCommit = components['schemas']['Commit'];
export type SchemaSwarmInfo = components['schemas']['SwarmInfo'];
export type SchemaLocalNodeState = components['schemas']['LocalNodeState'];
export type SchemaPeerNode = components['schemas']['PeerNode'];
export type SchemaNetworkAttachmentConfig = components['schemas']['NetworkAttachmentConfig'];
export type SchemaEventActor = components['schemas']['EventActor'];
export type SchemaEventMessage = components['schemas']['EventMessage'];
export type SchemaOciDescriptor = components['schemas']['OCIDescriptor'];
export type SchemaOciPlatform = components['schemas']['OCIPlatform'];
export type SchemaDistributionInspect = components['schemas']['DistributionInspect'];
export type SchemaClusterVolume = components['schemas']['ClusterVolume'];
export type SchemaClusterVolumeSpec = components['schemas']['ClusterVolumeSpec'];
export type SchemaTopology = components['schemas']['Topology'];
export type SchemaImageManifestSummary = components['schemas']['ImageManifestSummary'];
export type RequestBodyPluginPrivilegeArray = components['requestBodies']['PluginPrivilegeArray'];
export type $defs = Record<string, never>;
export interface operations {
    readonly ContainerList: {
        readonly parameters: {
            readonly query?: {
                /** @description Return all containers. By default, only running containers are shown.
                 *      */
                readonly all?: boolean;
                /** @description Return this number of most recently created containers, including
                 *     non-running ones.
                 *      */
                readonly limit?: number;
                /** @description Return the size of container as fields `SizeRw` and `SizeRootFs`.
                 *      */
                readonly size?: boolean;
                /** @description Filters to process on the container list, encoded as JSON (a
                 *     `map[string][]string`). For example, `{"status": ["paused"]}` will
                 *     only return paused containers.
                 *
                 *     Available filters:
                 *
                 *     - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`)
                 *     - `before`=(`<container id>` or `<container name>`)
                 *     - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
                 *     - `exited=<int>` containers with exit code of `<int>`
                 *     - `health`=(`starting`|`healthy`|`unhealthy`|`none`)
                 *     - `id=<ID>` a container's ID
                 *     - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only)
                 *     - `is-task=`(`true`|`false`)
                 *     - `label=key` or `label="key=value"` of a container label
                 *     - `name=<name>` a container's name
                 *     - `network`=(`<network id>` or `<network name>`)
                 *     - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`)
                 *     - `since`=(`<container id>` or `<container name>`)
                 *     - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`)
                 *     - `volume`=(`<volume name>` or `<mount point destination>`)
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["ContainerSummary"][];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerCreate: {
        readonly parameters: {
            readonly query?: {
                /** @description Assign the specified name to the container. Must match
                 *     `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.
                 *      */
                readonly name?: string;
                /** @description Platform in the format `os[/arch[/variant]]` used for image lookup.
                 *
                 *     When specified, the daemon checks if the requested image is present
                 *     in the local image cache with the given OS and Architecture, and
                 *     otherwise returns a `404` status.
                 *
                 *     If the option is not set, the host's native OS and Architecture are
                 *     used to look up the image in the image cache. However, if no platform
                 *     is passed and the given image does exist in the local image cache,
                 *     but its OS or architecture does not match, the container is created
                 *     with the available image, and a warning is added to the `Warnings`
                 *     field in the response, for example;
                 *
                 *         WARNING: The requested image's platform (linux/arm64/v8) does not
                 *                  match the detected host platform (linux/amd64) and no
                 *                  specific platform was requested
                 *      */
                readonly platform?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Container to create */
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["ContainerConfig"] & {
                    readonly HostConfig?: components["schemas"]["HostConfig"];
                    readonly NetworkingConfig?: components["schemas"]["NetworkingConfig"];
                };
                readonly "application/octet-stream": components["schemas"]["ContainerConfig"] & {
                    readonly HostConfig?: components["schemas"]["HostConfig"];
                    readonly NetworkingConfig?: components["schemas"]["NetworkingConfig"];
                };
            };
        };
        readonly responses: {
            /** @description Container created successfully */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContainerCreateResponse"];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such image */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description conflict */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerInspect: {
        readonly parameters: {
            readonly query?: {
                /** @description Return the size of container as fields `SizeRw` and `SizeRootFs` */
                readonly size?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContainerInspectResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerTop: {
        readonly parameters: {
            readonly query?: {
                /** @description The arguments to pass to `ps`. For example, `aux` */
                readonly ps_args?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContainerTopResponse"];
                    readonly "text/plain": components["schemas"]["ContainerTopResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerLogs: {
        readonly parameters: {
            readonly query?: {
                /** @description Keep connection after returning logs. */
                readonly follow?: boolean;
                /** @description Return logs from `stdout` */
                readonly stdout?: boolean;
                /** @description Return logs from `stderr` */
                readonly stderr?: boolean;
                /** @description Only return logs since this time, as a UNIX timestamp */
                readonly since?: number;
                /** @description Only return logs before this time, as a UNIX timestamp */
                readonly until?: number;
                /** @description Add timestamps to every log line */
                readonly timestamps?: boolean;
                /** @description Only return this number of log lines from the end of the logs.
                 *     Specify as an integer or `all` to output all log lines.
                 *      */
                readonly tail?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description logs returned as a stream in response body.
             *     For the stream format, [see the documentation for the attach endpoint](#operation/ContainerAttach).
             *     Note that unlike the attach endpoint, the logs endpoint does not
             *     upgrade the connection and does not set Content-Type.
             *      */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": string;
                    readonly "application/vnd.docker.multiplexed-stream": string;
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerChanges: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description The list of changes */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["FilesystemChange"][];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerExport: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/octet-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/octet-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerStats: {
        readonly parameters: {
            readonly query?: {
                /** @description Stream the output. If false, the stats will be output once and then
                 *     it will disconnect.
                 *      */
                readonly stream?: boolean;
                /** @description Only get a single stat instead of waiting for 2 cycles. Must be used
                 *     with `stream=false`.
                 *      */
                readonly "one-shot"?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContainerStatsResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerResize: {
        readonly parameters: {
            readonly query: {
                /** @description Height of the TTY session in characters */
                readonly h: number;
                /** @description Width of the TTY session in characters */
                readonly w: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description cannot resize container */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerStart: {
        readonly parameters: {
            readonly query?: {
                /** @description Override the key sequence for detaching a container. Format is a
                 *     single character `[a-Z]` or `ctrl-<value>` where `<value>` is one
                 *     of: `a-z`, `@`, `^`, `[`, `,` or `_`.
                 *      */
                readonly detachKeys?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description container already started */
            readonly 304: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerStop: {
        readonly parameters: {
            readonly query?: {
                /** @description Signal to send to the container as an integer or string (e.g. `SIGINT`).
                 *      */
                readonly signal?: string;
                /** @description Number of seconds to wait before killing the container */
                readonly t?: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description container already stopped */
            readonly 304: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerRestart: {
        readonly parameters: {
            readonly query?: {
                /** @description Signal to send to the container as an integer or string (e.g. `SIGINT`).
                 *      */
                readonly signal?: string;
                /** @description Number of seconds to wait before killing the container */
                readonly t?: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerKill: {
        readonly parameters: {
            readonly query?: {
                /** @description Signal to send to the container as an integer or string (e.g. `SIGINT`).
                 *      */
                readonly signal?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description container is not running */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerUpdate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["Resources"] & {
                    readonly RestartPolicy?: components["schemas"]["RestartPolicy"];
                };
            };
        };
        readonly responses: {
            /** @description The container has been updated. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContainerUpdateResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerRename: {
        readonly parameters: {
            readonly query: {
                /** @description New name for the container */
                readonly name: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description name already in use */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerPause: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerUnpause: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerAttach: {
        readonly parameters: {
            readonly query?: {
                /** @description Override the key sequence for detaching a container.Format is a single
                 *     character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
                 *     `@`, `^`, `[`, `,` or `_`.
                 *      */
                readonly detachKeys?: string;
                /** @description Replay previous logs from the container.
                 *
                 *     This is useful for attaching to a container that has started and you
                 *     want to output everything since the container started.
                 *
                 *     If `stream` is also enabled, once all the previous output has been
                 *     returned, it will seamlessly transition into streaming current
                 *     output.
                 *      */
                readonly logs?: boolean;
                /** @description Stream attached streams from the time the request was made onwards.
                 *      */
                readonly stream?: boolean;
                /** @description Attach to `stdin` */
                readonly stdin?: boolean;
                /** @description Attach to `stdout` */
                readonly stdout?: boolean;
                /** @description Attach to `stderr` */
                readonly stderr?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error, hints proxy about hijacking */
            readonly 101: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no error, no upgrade header found */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerAttachWebsocket: {
        readonly parameters: {
            readonly query?: {
                /** @description Override the key sequence for detaching a container.Format is a single
                 *     character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`,
                 *     `@`, `^`, `[`, `,`, or `_`.
                 *      */
                readonly detachKeys?: string;
                /** @description Return logs */
                readonly logs?: boolean;
                /** @description Return stream */
                readonly stream?: boolean;
                /** @description Attach to `stdin` */
                readonly stdin?: boolean;
                /** @description Attach to `stdout` */
                readonly stdout?: boolean;
                /** @description Attach to `stderr` */
                readonly stderr?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error, hints proxy about hijacking */
            readonly 101: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no error, no upgrade header found */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerWait: {
        readonly parameters: {
            readonly query?: {
                /** @description Wait until a container state reaches the given condition.
                 *
                 *     Defaults to `not-running` if omitted or empty.
                 *      */
                readonly condition?: "not-running" | "next-exit" | "removed";
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description The container has exit. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContainerWaitResponse"];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerDelete: {
        readonly parameters: {
            readonly query?: {
                /** @description Remove anonymous volumes associated with the container. */
                readonly v?: boolean;
                /** @description If the container is running, kill it before removing it. */
                readonly force?: boolean;
                /** @description Remove the specified link associated with the container. */
                readonly link?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description conflict */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerArchive: {
        readonly parameters: {
            readonly query: {
                /** @description Resource in the container’s filesystem to archive. */
                readonly path: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Container or path does not exist */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PutContainerArchive: {
        readonly parameters: {
            readonly query: {
                /** @description Path to a directory in the container to extract the archive’s contents into.  */
                readonly path: string;
                /** @description If `1`, `true`, or `True` then it will be an error if unpacking the
                 *     given content would cause an existing directory to be replaced with
                 *     a non-directory and vice versa.
                 *      */
                readonly noOverwriteDirNonDir?: string;
                /** @description If `1`, `true`, then it will copy UID/GID maps to the dest file or
                 *     dir
                 *      */
                readonly copyUIDGID?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        /** @description The input stream must be a tar archive compressed with one of the
         *     following algorithms: `identity` (no compression), `gzip`, `bzip2`,
         *     or `xz`.
         *      */
        readonly requestBody: {
            readonly content: {
                readonly "application/x-tar": string;
                readonly "application/octet-stream": string;
            };
        };
        readonly responses: {
            /** @description The content was extracted successfully */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Permission denied, the volume or container rootfs is marked as read-only. */
            readonly 403: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No such container or path does not exist inside the container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerArchiveInfo: {
        readonly parameters: {
            readonly query: {
                /** @description Resource in the container’s filesystem to archive. */
                readonly path: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    /** @description A base64 - encoded JSON object with some filesystem header
                     *     information about the path
                     *      */
                    readonly "X-Docker-Container-Path-Stat"?: string;
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Container or path does not exist */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerPrune: {
        readonly parameters: {
            readonly query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
                 *
                 *     Available filters:
                 *     - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *     - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description Container IDs that were deleted */
                        readonly ContainersDeleted: readonly string[];
                        /**
                         * Format: int64
                         * @description Disk space reclaimed in bytes
                         */
                        readonly SpaceReclaimed: number;
                    };
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageList: {
        readonly parameters: {
            readonly query?: {
                /** @description Show all images. Only images from a final layer (no children) are shown by default. */
                readonly all?: boolean;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the images list.
                 *
                 *     Available filters:
                 *
                 *     - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
                 *     - `dangling=true`
                 *     - `label=key` or `label="key=value"` of an image label
                 *     - `reference`=(`<image-name>[:<tag>]`)
                 *     - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)
                 *     - `until=<timestamp>`
                 *      */
                readonly filters?: string;
                /** @description Compute and show shared size as a `SharedSize` field on each image. */
                readonly "shared-size"?: boolean;
                /** @description Show digest information as a `RepoDigests` field on each image. */
                readonly digests?: boolean;
                /** @description Include `Manifests` in the image summary. */
                readonly manifests?: boolean;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Summary image data for the images matching the query */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["ImageSummary"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageBuild: {
        readonly parameters: {
            readonly query?: {
                /** @description Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`. */
                readonly dockerfile?: string;
                /** @description A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters. */
                readonly t?: string;
                /** @description Extra hosts to add to /etc/hosts */
                readonly extrahosts?: string;
                /** @description A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball. */
                readonly remote?: string;
                /** @description Suppress verbose build output. */
                readonly q?: boolean;
                /** @description Do not use the cache when building the image. */
                readonly nocache?: boolean;
                /** @description JSON array of images used for build cache resolution. */
                readonly cachefrom?: string;
                /** @description Attempt to pull the image even if an older image exists locally. */
                readonly pull?: string;
                /** @description Remove intermediate containers after a successful build. */
                readonly rm?: boolean;
                /** @description Always remove intermediate containers, even upon failure. */
                readonly forcerm?: boolean;
                /** @description Set memory limit for build. */
                readonly memory?: number;
                /** @description Total memory (memory + swap). Set as `-1` to disable swap. */
                readonly memswap?: number;
                /** @description CPU shares (relative weight). */
                readonly cpushares?: number;
                /** @description CPUs in which to allow execution (e.g., `0-3`, `0,1`). */
                readonly cpusetcpus?: string;
                /** @description The length of a CPU period in microseconds. */
                readonly cpuperiod?: number;
                /** @description Microseconds of CPU time that the container can get in a CPU period. */
                readonly cpuquota?: number;
                /** @description JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.
                 *
                 *     For example, the build arg `FOO=bar` would become `{"FOO":"bar"}` in JSON. This would result in the query parameter `buildargs={"FOO":"bar"}`. Note that `{"FOO":"bar"}` should be URI component encoded.
                 *
                 *     [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)
                 *      */
                readonly buildargs?: string;
                /** @description Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB. */
                readonly shmsize?: number;
                /** @description Squash the resulting images layers into a single layer. *(Experimental release only.)* */
                readonly squash?: boolean;
                /** @description Arbitrary key/value labels to set on the image, as a JSON map of string pairs. */
                readonly labels?: string;
                /** @description Sets the networking mode for the run commands during build. Supported
                 *     standard values are: `bridge`, `host`, `none`, and `container:<name|id>`.
                 *     Any other value is taken as a custom network's name or ID to which this
                 *     container should connect to.
                 *      */
                readonly networkmode?: string;
                /** @description Platform in the format os[/arch[/variant]] */
                readonly platform?: string;
                /** @description Target build stage */
                readonly target?: string;
                /** @description BuildKit output configuration */
                readonly outputs?: string;
                /** @description Version of the builder backend to use.
                 *
                 *     - `1` is the first generation classic (deprecated) builder in the Docker daemon (default)
                 *     - `2` is [BuildKit](https://github.com/moby/buildkit)
                 *      */
                readonly version?: "1" | "2";
            };
            readonly header?: {
                readonly "Content-type"?: "application/x-tar";
                /** @description This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.
                 *
                 *     The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:
                 *
                 *     ```
                 *     {
                 *       "docker.example.com": {
                 *         "username": "janedoe",
                 *         "password": "hunter2"
                 *       },
                 *       "https://index.docker.io/v1/": {
                 *         "username": "mobydock",
                 *         "password": "conta1n3rize14"
                 *       }
                 *     }
                 *     ```
                 *
                 *     Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.
                 *      */
                readonly "X-Registry-Config"?: string;
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. */
        readonly requestBody?: {
            readonly content: {
                readonly "application/octet-stream": string;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly BuildPrune: {
        readonly parameters: {
            readonly query?: {
                /** @description Amount of disk space in bytes to keep for cache
                 *
                 *     > **Deprecated**: This parameter is deprecated and has been renamed to "reserved-space".
                 *     > It is kept for backward compatibility and will be removed in API v1.49.
                 *      */
                readonly "keep-storage"?: number;
                /** @description Amount of disk space in bytes to keep for cache */
                readonly "reserved-space"?: number;
                /** @description Maximum amount of disk space allowed to keep for cache */
                readonly "max-used-space"?: number;
                /** @description Target amount of free disk space after pruning */
                readonly "min-free-space"?: number;
                /** @description Remove all types of build cache */
                readonly all?: boolean;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the list of build cache objects.
                 *
                 *     Available filters:
                 *
                 *     - `until=<timestamp>` remove cache older than `<timestamp>`. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon's local time.
                 *     - `id=<id>`
                 *     - `parent=<id>`
                 *     - `type=<string>`
                 *     - `description=<string>`
                 *     - `inuse`
                 *     - `shared`
                 *     - `private`
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        readonly CachesDeleted: readonly string[];
                        /**
                         * Format: int64
                         * @description Disk space reclaimed in bytes
                         */
                        readonly SpaceReclaimed: number;
                    };
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageCreate: {
        readonly parameters: {
            readonly query?: {
                /** @description Name of the image to pull. If the name includes a tag or digest, specific behavior applies:
                 *
                 *     - If only `fromImage` includes a tag, that tag is used.
                 *     - If both `fromImage` and `tag` are provided, `tag` takes precedence.
                 *     - If `fromImage` includes a digest, the image is pulled by digest, and `tag` is ignored.
                 *     - If neither a tag nor digest is specified, all tags are pulled.
                 *      */
                readonly fromImage?: string;
                /** @description Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image. */
                readonly fromSrc?: string;
                /** @description Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. */
                readonly repo?: string;
                /** @description Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. */
                readonly tag?: string;
                /** @description Set commit message for imported image. */
                readonly message?: string;
                /** @description Apply `Dockerfile` instructions to the image that is created,
                 *     for example: `changes=ENV DEBUG=true`.
                 *     Note that `ENV DEBUG=true` should be URI component encoded.
                 *
                 *     Supported `Dockerfile` instructions:
                 *     `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`
                 *      */
                readonly changes?: readonly string[];
                /** @description Platform in the format os[/arch[/variant]].
                 *
                 *     When used in combination with the `fromImage` option, the daemon checks
                 *     if the given image is present in the local image cache with the given
                 *     OS and Architecture, and otherwise attempts to pull the image. If the
                 *     option is not set, the host's native OS and Architecture are used.
                 *     If the given image does not exist in the local image cache, the daemon
                 *     attempts to pull the image with the host's native OS and Architecture.
                 *     If the given image does exists in the local image cache, but its OS or
                 *     architecture does not match, a warning is produced.
                 *
                 *     When used with the `fromSrc` option to import an image from an archive,
                 *     this option sets the platform information for the imported image. If
                 *     the option is not set, the host's native OS and Architecture are used
                 *     for the imported image.
                 *      */
                readonly platform?: string;
            };
            readonly header?: {
                /** @description A base64url-encoded auth configuration.
                 *
                 *     Refer to the [authentication section](#section/Authentication) for
                 *     details.
                 *      */
                readonly "X-Registry-Auth"?: string;
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Image content if the value `-` has been specified in fromSrc query parameter */
        readonly requestBody?: {
            readonly content: {
                readonly "text/plain": string;
                readonly "application/octet-stream": string;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description repository does not exist or no read access */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageInspect: {
        readonly parameters: {
            readonly query?: {
                /** @description Include Manifests in the image summary. */
                readonly manifests?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description Image name or id */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ImageInspect"];
                };
            };
            /** @description No such image */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageHistory: {
        readonly parameters: {
            readonly query?: {
                /** @description JSON-encoded OCI platform to select the platform-variant.
                 *     If omitted, it defaults to any locally available platform,
                 *     prioritizing the daemon's host platform.
                 *
                 *     If the daemon provides a multi-platform image store, this selects
                 *     the platform-variant to show the history for. If the image is
                 *     a single-platform image, or if the multi-platform image does not
                 *     provide a variant matching the given platform, an error is returned.
                 *
                 *     Example: `{"os": "linux", "architecture": "arm", "variant": "v5"}`
                 *      */
                readonly platform?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description Image name or ID */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description List of image layers */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly {
                        readonly Id: string;
                        /** Format: int64 */
                        readonly Created: number;
                        readonly CreatedBy: string;
                        readonly Tags: readonly string[];
                        /** Format: int64 */
                        readonly Size: number;
                        readonly Comment: string;
                    }[];
                };
            };
            /** @description No such image */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImagePush: {
        readonly parameters: {
            readonly query?: {
                /** @description Tag of the image to push. For example, `latest`. If no tag is provided,
                 *     all tags of the given image that are present in the local image store
                 *     are pushed.
                 *      */
                readonly tag?: string;
                /** @description JSON-encoded OCI platform to select the platform-variant to push.
                 *     If not provided, all available variants will attempt to be pushed.
                 *
                 *     If the daemon provides a multi-platform image store, this selects
                 *     the platform-variant to push to the registry. If the image is
                 *     a single-platform image, or if the multi-platform image does not
                 *     provide a variant matching the given platform, an error is returned.
                 *
                 *     Example: `{"os": "linux", "architecture": "arm", "variant": "v5"}`
                 *      */
                readonly platform?: string;
            };
            readonly header: {
                /** @description A base64url-encoded auth configuration.
                 *
                 *     Refer to the [authentication section](#section/Authentication) for
                 *     details.
                 *      */
                readonly "X-Registry-Auth": string;
            };
            readonly path: {
                /** @description Name of the image to push. For example, `registry.example.com/myimage`.
                 *     The image must be present in the local image store with the same name.
                 *
                 *     The name should be provided without tag; if a tag is provided, it
                 *     is ignored. For example, `registry.example.com/myimage:latest` is
                 *     considered equivalent to `registry.example.com/myimage`.
                 *
                 *     Use the `tag` parameter to specify the tag to push.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No such image */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageTag: {
        readonly parameters: {
            readonly query?: {
                /** @description The repository to tag in. For example, `someuser/someimage`. */
                readonly repo?: string;
                /** @description The name of the new tag. */
                readonly tag?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description Image name or ID to tag. */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No such image */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Conflict */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageDelete: {
        readonly parameters: {
            readonly query?: {
                /** @description Remove the image even if it is being used by stopped containers or has other tags */
                readonly force?: boolean;
                /** @description Do not delete untagged parent images */
                readonly noprune?: boolean;
                /** @description Select platform-specific content to delete.
                 *     Multiple values are accepted.
                 *     Each platform is a OCI platform encoded as a JSON string.
                 *      */
                readonly platforms?: readonly string[];
            };
            readonly header?: never;
            readonly path: {
                /** @description Image name or ID */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description The image was deleted successfully */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["ImageDeleteResponseItem"][];
                };
            };
            /** @description No such image */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Conflict */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageSearch: {
        readonly parameters: {
            readonly query: {
                /** @description Term to search */
                readonly term: string;
                /** @description Maximum number of results to return */
                readonly limit?: number;
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:
                 *
                 *     - `is-official=(true|false)`
                 *     - `stars=<number>` Matches images that has at least 'number' stars.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly {
                        readonly description: string;
                        readonly is_official: boolean;
                        /**
                         * @description Whether this repository has automated builds enabled.
                         *
                         *     <p><br /></p>
                         *
                         *     > **Deprecated**: This field is deprecated and will always be "false".
                         *
                         * @example false
                         */
                        readonly is_automated: boolean;
                        readonly name: string;
                        readonly star_count: number;
                    }[];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImagePrune: {
        readonly parameters: {
            readonly query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:
                 *
                 *     - `dangling=<boolean>` When set to `true` (or `1`), prune only
                 *        unused *and* untagged images. When set to `false`
                 *        (or `0`), all unused images are pruned.
                 *     - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *     - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description Images that were deleted */
                        readonly ImagesDeleted: readonly components["schemas"]["ImageDeleteResponseItem"][];
                        /**
                         * Format: int64
                         * @description Disk space reclaimed in bytes
                         */
                        readonly SpaceReclaimed: number;
                    };
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemAuth: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Authentication to check */
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["AuthConfig"];
            };
        };
        readonly responses: {
            /** @description An identity token was generated successfully. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description The status of the authentication */
                        readonly Status: string;
                        /** @description An opaque token used to authenticate a user after a successful login */
                        readonly IdentityToken?: string;
                    };
                };
            };
            /** @description No error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Auth error */
            readonly 401: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemInfo: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SystemInfo"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemVersion: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SystemVersion"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemPing: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    /** @description Max API Version the server supports */
                    readonly "Api-Version"?: string;
                    /** @description Default version of docker image builder
                     *
                     *     The default on Linux is version "2" (BuildKit), but the daemon
                     *     can be configured to recommend version "1" (classic Builder).
                     *     Windows does not yet support BuildKit for native Windows images,
                     *     and uses "1" (classic builder) as a default.
                     *
                     *     This value is a recommendation as advertised by the daemon, and
                     *     it is up to the client to choose which builder to use.
                     *      */
                    readonly "Builder-Version"?: string;
                    /** @description If the server is running with experimental mode enabled */
                    readonly "Docker-Experimental"?: boolean;
                    /** @description Contains information about Swarm status of the daemon,
                     *     and if the daemon is acting as a manager or worker node.
                     *      */
                    readonly Swarm?: "inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager";
                    readonly "Cache-Control"?: string;
                    readonly Pragma?: string;
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/plain": string;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly "Cache-Control"?: string;
                    readonly Pragma?: string;
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemPingHead: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    /** @description Max API Version the server supports */
                    readonly "Api-Version"?: string;
                    /** @description Default version of docker image builder */
                    readonly "Builder-Version"?: string;
                    /** @description If the server is running with experimental mode enabled */
                    readonly "Docker-Experimental"?: boolean;
                    /** @description Contains information about Swarm status of the daemon,
                     *     and if the daemon is acting as a manager or worker node.
                     *      */
                    readonly Swarm?: "inactive" | "pending" | "error" | "locked" | "active/worker" | "active/manager";
                    readonly "Cache-Control"?: string;
                    readonly Pragma?: string;
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/plain": string;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageCommit: {
        readonly parameters: {
            readonly query?: {
                /** @description The ID or name of the container to commit */
                readonly container?: string;
                /** @description Repository name for the created image */
                readonly repo?: string;
                /** @description Tag name for the create image */
                readonly tag?: string;
                /** @description Commit message */
                readonly comment?: string;
                /** @description Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`) */
                readonly author?: string;
                /** @description Whether to pause the container before committing */
                readonly pause?: boolean;
                /** @description `Dockerfile` instructions to apply while committing */
                readonly changes?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description The container configuration */
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["ContainerConfig"];
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["IDResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemEvents: {
        readonly parameters: {
            readonly query?: {
                /** @description Show events created since this timestamp then stream new events. */
                readonly since?: string;
                /** @description Show events created until this timestamp then stop streaming. */
                readonly until?: string;
                /** @description A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:
                 *
                 *     - `config=<string>` config name or ID
                 *     - `container=<string>` container name or ID
                 *     - `daemon=<string>` daemon name or ID
                 *     - `event=<string>` event type
                 *     - `image=<string>` image name or ID
                 *     - `label=<string>` image or container label
                 *     - `network=<string>` network name or ID
                 *     - `node=<string>` node ID
                 *     - `plugin`=<string> plugin name or ID
                 *     - `scope`=<string> local or swarm
                 *     - `secret=<string>` secret name or ID
                 *     - `service=<string>` service name or ID
                 *     - `type=<string>` object to filter by, one of `container`, `image`, `volume`, `network`, `daemon`, `plugin`, `node`, `service`, `secret` or `config`
                 *     - `volume=<string>` volume name
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["EventMessage"];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SystemDataUsage: {
        readonly parameters: {
            readonly query?: {
                /** @description Object types, for which to compute and return data.
                 *      */
                readonly type?: readonly ("container" | "image" | "volume" | "build-cache")[];
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** Format: int64 */
                        readonly LayersSize: number;
                        readonly Images: readonly components["schemas"]["ImageSummary"][];
                        readonly Containers: readonly components["schemas"]["ContainerSummary"][];
                        readonly Volumes: readonly components["schemas"]["Volume"][];
                        readonly BuildCache: readonly components["schemas"]["BuildCache"][];
                    };
                    readonly "text/plain": {
                        /** Format: int64 */
                        readonly LayersSize: number;
                        readonly Images: readonly components["schemas"]["ImageSummary"][];
                        readonly Containers: readonly components["schemas"]["ContainerSummary"][];
                        readonly Volumes: readonly components["schemas"]["Volume"][];
                        readonly BuildCache: readonly components["schemas"]["BuildCache"][];
                    };
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageGet: {
        readonly parameters: {
            readonly query?: {
                /** @description JSON encoded OCI platform describing a platform which will be used
                 *     to select a platform-specific image to be saved if the image is
                 *     multi-platform.
                 *     If not provided, the full multi-platform image will be saved.
                 *
                 *     Example: `{"os": "linux", "architecture": "arm", "variant": "v5"}`
                 *      */
                readonly platform?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description Image name or ID */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": string;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageGetAll: {
        readonly parameters: {
            readonly query?: {
                /** @description Image names to filter by */
                readonly names?: readonly string[];
                /** @description JSON encoded OCI platform describing a platform which will be used
                 *     to select a platform-specific image to be saved if the image is
                 *     multi-platform.
                 *     If not provided, the full multi-platform image will be saved.
                 *
                 *     Example: `{"os": "linux", "architecture": "arm", "variant": "v5"}`
                 *      */
                readonly platform?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": string;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/x-tar": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ImageLoad: {
        readonly parameters: {
            readonly query?: {
                /** @description Suppress progress details during load. */
                readonly quiet?: boolean;
                /** @description JSON encoded OCI platform describing a platform which will be used
                 *     to select a platform-specific image to be load if the image is
                 *     multi-platform.
                 *     If not provided, the full multi-platform image will be loaded.
                 *
                 *     Example: `{"os": "linux", "architecture": "arm", "variant": "v5"}`
                 *      */
                readonly platform?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Tar archive containing images */
        readonly requestBody?: {
            readonly content: {
                readonly "application/x-tar": string;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ContainerExec: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of container */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        /** @description Exec configuration */
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /** @description Attach to `stdin` of the exec command. */
                    readonly AttachStdin: boolean;
                    /** @description Attach to `stdout` of the exec command. */
                    readonly AttachStdout: boolean;
                    /** @description Attach to `stderr` of the exec command. */
                    readonly AttachStderr: boolean;
                    /**
                     * @description Initial console size, as an `[height, width]` array.
                     * @example [
                     *       80,
                     *       64
                     *     ]
                     */
                    readonly ConsoleSize: readonly number[] | null;
                    /** @description Override the key sequence for detaching a container. Format is
                     *     a single character `[a-Z]` or `ctrl-<value>` where `<value>`
                     *     is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.
                     *      */
                    readonly DetachKeys: string;
                    /** @description Allocate a pseudo-TTY. */
                    readonly Tty: boolean;
                    /** @description A list of environment variables in the form `["VAR=value", ...]`.
                     *      */
                    readonly Env: readonly string[];
                    /** @description Command to run, as a string or array of strings. */
                    readonly Cmd: readonly string[];
                    /**
                     * @description Runs the exec process with extended privileges.
                     * @default false
                     */
                    readonly Privileged: boolean;
                    /** @description The user, and optionally, group to run the exec process inside
                     *     the container. Format is one of: `user`, `user:group`, `uid`,
                     *     or `uid:gid`.
                     *      */
                    readonly User: string;
                    /** @description The working directory for the exec process inside the container.
                     *      */
                    readonly WorkingDir: string;
                };
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["IDResponse"];
                };
            };
            /** @description no such container */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description container is paused */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ExecStart: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Exec instance ID */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": {
                    /**
                     * @description Detach from the command.
                     * @example false
                     */
                    readonly Detach: boolean;
                    /**
                     * @description Allocate a pseudo-TTY.
                     * @example true
                     */
                    readonly Tty: boolean;
                    /**
                     * @description Initial console size, as an `[height, width]` array.
                     * @example [
                     *       80,
                     *       64
                     *     ]
                     */
                    readonly ConsoleSize: readonly number[] | null;
                };
            };
        };
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No such exec instance */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Container is stopped or paused */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ExecResize: {
        readonly parameters: {
            readonly query: {
                /** @description Height of the TTY session in characters */
                readonly h: number;
                /** @description Width of the TTY session in characters */
                readonly w: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description Exec instance ID */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No such exec instance */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ExecInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Exec instance ID */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        readonly CanRemove: boolean;
                        readonly DetachKeys: string;
                        readonly ID: string;
                        readonly Running: boolean;
                        readonly ExitCode: number;
                        readonly ProcessConfig: components["schemas"]["ProcessConfig"];
                        readonly OpenStdin: boolean;
                        readonly OpenStderr: boolean;
                        readonly OpenStdout: boolean;
                        readonly ContainerID: string;
                        /** @description The system process ID for the exec process. */
                        readonly Pid: number;
                    };
                };
            };
            /** @description No such exec instance */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly VolumeList: {
        readonly parameters: {
            readonly query?: {
                /** @description JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the volumes list. Available filters:
                 *
                 *     - `dangling=<boolean>` When set to `true` (or `1`), returns all
                 *        volumes that are not in use by a container. When set to `false`
                 *        (or `0`), only volumes that are in use by one or more
                 *        containers are returned.
                 *     - `driver=<volume-driver-name>` Matches volumes based on their driver.
                 *     - `label=<key>` or `label=<key>:<value>` Matches volumes based on
                 *        the presence of a `label` alone or a `label` and a value.
                 *     - `name=<volume-name>` Matches all or part of a volume name.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Summary volume data that matches the query */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["VolumeListResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly VolumeCreate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Volume configuration */
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["VolumeCreateOptions"];
            };
        };
        readonly responses: {
            /** @description The volume was created successfully */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Volume"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly VolumeInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Volume name or ID */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Volume"];
                };
            };
            /** @description No such volume */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly VolumeUpdate: {
        readonly parameters: {
            readonly query: {
                /** @description The version number of the volume being updated. This is required to
                 *     avoid conflicting writes. Found in the volume's `ClusterVolume`
                 *     field.
                 *      */
                readonly version: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description The name or ID of the volume */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        /** @description The spec of the volume to update. Currently, only Availability may
         *     change. All other fields must remain unchanged.
         *      */
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": {
                    readonly Spec: components["schemas"]["ClusterVolumeSpec"];
                };
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such volume */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly VolumeDelete: {
        readonly parameters: {
            readonly query?: {
                /** @description Force the removal of the volume */
                readonly force?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description Volume name or ID */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description The volume was removed */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No such volume or volume driver */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Volume is in use and cannot be removed */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly VolumePrune: {
        readonly parameters: {
            readonly query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
                 *
                 *     Available filters:
                 *     - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels.
                 *     - `all` (`all=true`) - Consider all (local) volumes for pruning and not just anonymous volumes.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description Volumes that were deleted */
                        readonly VolumesDeleted: readonly string[];
                        /**
                         * Format: int64
                         * @description Disk space reclaimed in bytes
                         */
                        readonly SpaceReclaimed: number;
                    };
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkList: {
        readonly parameters: {
            readonly query?: {
                /** @description JSON encoded value of the filters (a `map[string][]string`) to process
                 *     on the networks list.
                 *
                 *     Available filters:
                 *
                 *     - `dangling=<boolean>` When set to `true` (or `1`), returns all
                 *        networks that are not in use by a container. When set to `false`
                 *        (or `0`), only networks that are in use by one or more
                 *        containers are returned.
                 *     - `driver=<driver-name>` Matches a network's driver.
                 *     - `id=<network-id>` Matches all or part of a network ID.
                 *     - `label=<key>` or `label=<key>=<value>` of a network label.
                 *     - `name=<network-name>` Matches all or part of a network name.
                 *     - `scope=["swarm"|"global"|"local"]` Filters networks by scope (`swarm`, `global`, or `local`).
                 *     - `type=["custom"|"builtin"]` Filters networks by type. The `custom` keyword returns all user-defined networks.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Network"][];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkInspect: {
        readonly parameters: {
            readonly query?: {
                /** @description Detailed inspect output for troubleshooting */
                readonly verbose?: boolean;
                /** @description Filter the network by scope (swarm, global, or local) */
                readonly scope?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description Network ID or name */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Network"];
                };
            };
            /** @description Network not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkDelete: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Network ID or name */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description operation not supported for pre-defined networks */
            readonly 403: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such network */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkCreate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Network configuration */
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /**
                     * @description The network's name.
                     * @example my_network
                     */
                    readonly Name: string;
                    /**
                     * @description Name of the network driver plugin to use.
                     * @default bridge
                     * @example bridge
                     */
                    readonly Driver?: string;
                    /** @description The level at which the network exists (e.g. `swarm` for cluster-wide
                     *     or `local` for machine level).
                     *      */
                    readonly Scope?: string;
                    /** @description Restrict external access to the network. */
                    readonly Internal?: boolean;
                    /**
                     * @description Globally scoped network is manually attachable by regular
                     *     containers from workers in swarm mode.
                     *
                     * @example true
                     */
                    readonly Attachable?: boolean;
                    /**
                     * @description Ingress network is the network which provides the routing-mesh
                     *     in swarm mode.
                     *
                     * @example false
                     */
                    readonly Ingress?: boolean;
                    /**
                     * @description Creates a config-only network. Config-only networks are placeholder
                     *     networks for network configurations to be used by other networks.
                     *     Config-only networks cannot be used directly to run containers
                     *     or services.
                     *
                     * @default false
                     * @example false
                     */
                    readonly ConfigOnly?: boolean;
                    readonly ConfigFrom?: components["schemas"]["ConfigReference"];
                    readonly IPAM?: components["schemas"]["IPAM"];
                    /**
                     * @description Enable IPv4 on the network.
                     * @example true
                     */
                    readonly EnableIPv4?: boolean;
                    /**
                     * @description Enable IPv6 on the network.
                     * @example true
                     */
                    readonly EnableIPv6?: boolean;
                    /**
                     * @description Network specific options to be used by the drivers.
                     * @example {
                     *       "com.docker.network.bridge.default_bridge": "true",
                     *       "com.docker.network.bridge.enable_icc": "true",
                     *       "com.docker.network.bridge.enable_ip_masquerade": "true",
                     *       "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
                     *       "com.docker.network.bridge.name": "docker0",
                     *       "com.docker.network.driver.mtu": "1500"
                     *     }
                     */
                    readonly Options?: {
                        readonly [key: string]: string;
                    };
                    /**
                     * @description User-defined key/value metadata.
                     * @example {
                     *       "com.example.some-label": "some-value",
                     *       "com.example.some-other-label": "some-other-value"
                     *     }
                     */
                    readonly Labels?: {
                        readonly [key: string]: string;
                    };
                };
            };
        };
        readonly responses: {
            /** @description Network created successfully */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["NetworkCreateResponse"];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden operation. This happens when trying to create a network named after a pre-defined network,
             *     or when trying to create an overlay network on a daemon which is not part of a Swarm cluster.
             *      */
            readonly 403: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description plugin not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkConnect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Network ID or name */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /** @description The ID or name of the container to connect to the network. */
                    readonly Container: string;
                    readonly EndpointConfig: components["schemas"]["EndpointSettings"];
                };
            };
        };
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Operation forbidden */
            readonly 403: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Network or container not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkDisconnect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Network ID or name */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /** @description The ID or name of the container to disconnect from the network.
                     *      */
                    readonly Container: string;
                    /** @description Force the container to disconnect from the network.
                     *      */
                    readonly Force: boolean;
                };
            };
        };
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Operation not supported for swarm scoped networks */
            readonly 403: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Network or container not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NetworkPrune: {
        readonly parameters: {
            readonly query?: {
                /** @description Filters to process on the prune list, encoded as JSON (a `map[string][]string`).
                 *
                 *     Available filters:
                 *     - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time.
                 *     - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description Networks that were deleted */
                        readonly NetworksDeleted: readonly string[];
                    };
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginList: {
        readonly parameters: {
            readonly query?: {
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the plugin list.
                 *
                 *     Available filters:
                 *
                 *     - `capability=<capability name>`
                 *     - `enable=<true>|<false>`
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description No error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Plugin"][];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly GetPluginPrivileges: {
        readonly parameters: {
            readonly query: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly remote: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["PluginPrivilege"][];
                    readonly "text/plain": readonly components["schemas"]["PluginPrivilege"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginPull: {
        readonly parameters: {
            readonly query: {
                /** @description Remote reference for plugin to install.
                 *
                 *     The `:latest` tag is optional, and is used as the default if omitted.
                 *      */
                readonly remote: string;
                /** @description Local name for the pulled plugin.
                 *
                 *     The `:latest` tag is optional, and is used as the default if omitted.
                 *      */
                readonly name?: string;
            };
            readonly header?: {
                /** @description A base64url-encoded auth configuration to use when pulling a plugin
                 *     from a registry.
                 *
                 *     Refer to the [authentication section](#section/Authentication) for
                 *     details.
                 *      */
                readonly "X-Registry-Auth"?: string;
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: components["requestBodies"]["PluginPrivilegeArray"];
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Plugin"];
                    readonly "text/plain": components["schemas"]["Plugin"];
                };
            };
            /** @description plugin is not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginDelete: {
        readonly parameters: {
            readonly query?: {
                /** @description Disable the plugin before removing. This may result in issues if the
                 *     plugin is in use by a container.
                 *      */
                readonly force?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Plugin"];
                    readonly "text/plain": components["schemas"]["Plugin"];
                };
            };
            /** @description plugin is not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginEnable: {
        readonly parameters: {
            readonly query?: {
                /** @description Set the HTTP client timeout (in seconds) */
                readonly timeout?: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description plugin is not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginDisable: {
        readonly parameters: {
            readonly query?: {
                /** @description Force disable a plugin even if still in use.
                 *      */
                readonly force?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description plugin is not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginUpgrade: {
        readonly parameters: {
            readonly query: {
                /** @description Remote reference to upgrade to.
                 *
                 *     The `:latest` tag is optional, and is used as the default if omitted.
                 *      */
                readonly remote: string;
            };
            readonly header?: {
                /** @description A base64url-encoded auth configuration to use when pulling a plugin
                 *     from a registry.
                 *
                 *     Refer to the [authentication section](#section/Authentication) for
                 *     details.
                 *      */
                readonly "X-Registry-Auth"?: string;
            };
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: components["requestBodies"]["PluginPrivilegeArray"];
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description plugin not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginCreate: {
        readonly parameters: {
            readonly query: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** @description Path to tar containing plugin rootfs and manifest */
        readonly requestBody?: {
            readonly content: {
                readonly "application/x-tar": string;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginPush: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description plugin not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly PluginSet: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description The name of the plugin. The `:latest` tag is optional, and is the
                 *     default if omitted.
                 *      */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": readonly string[];
            };
        };
        readonly responses: {
            /** @description No error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Plugin not installed */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NodeList: {
        readonly parameters: {
            readonly query?: {
                /** @description Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).
                 *
                 *     Available filters:
                 *     - `id=<node id>`
                 *     - `label=<engine label>`
                 *     - `membership=`(`accepted`|`pending`)`
                 *     - `name=<node name>`
                 *     - `node.label=<node label>`
                 *     - `role=`(`manager`|`worker`)`
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Node"][];
                    readonly "text/plain": readonly components["schemas"]["Node"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NodeInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description The ID or name of the node */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Node"];
                    readonly "text/plain": components["schemas"]["Node"];
                };
            };
            /** @description no such node */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NodeDelete: {
        readonly parameters: {
            readonly query?: {
                /** @description Force remove a node from the swarm */
                readonly force?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description The ID or name of the node */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such node */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly NodeUpdate: {
        readonly parameters: {
            readonly query: {
                /** @description The version number of the node object being updated. This is required
                 *     to avoid conflicting writes.
                 *      */
                readonly version: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description The ID of the node */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["NodeSpec"];
                readonly "text/plain": components["schemas"]["NodeSpec"];
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such node */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Swarm"];
                    readonly "text/plain": components["schemas"]["Swarm"];
                };
            };
            /** @description no such swarm */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmInit: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /** @description Listen address used for inter-manager communication, as well
                     *     as determining the networking interface used for the VXLAN
                     *     Tunnel Endpoint (VTEP). This can either be an address/port
                     *     combination in the form `192.168.1.1:4567`, or an interface
                     *     followed by a port number, like `eth0:4567`. If the port number
                     *     is omitted, the default swarm listening port is used.
                     *      */
                    readonly ListenAddr: string;
                    /** @description Externally reachable address advertised to other nodes. This
                     *     can either be an address/port combination in the form
                     *     `192.168.1.1:4567`, or an interface followed by a port number,
                     *     like `eth0:4567`. If the port number is omitted, the port
                     *     number from the listen address is used. If `AdvertiseAddr` is
                     *     not specified, it will be automatically detected when possible.
                     *      */
                    readonly AdvertiseAddr: string;
                    /** @description Address or interface to use for data path traffic (format:
                     *     `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
                     *     like `eth0`. If `DataPathAddr` is unspecified, the same address
                     *     as `AdvertiseAddr` is used.
                     *
                     *     The `DataPathAddr` specifies the address that global scope
                     *     network drivers will publish towards other  nodes in order to
                     *     reach the containers running on this node. Using this parameter
                     *     it is possible to separate the container data traffic from the
                     *     management traffic of the cluster.
                     *      */
                    readonly DataPathAddr: string;
                    /**
                     * Format: uint32
                     * @description DataPathPort specifies the data path port number for data traffic.
                     *     Acceptable port range is 1024 to 49151.
                     *     if no port is set or is set to 0, default port 4789 will be used.
                     *
                     */
                    readonly DataPathPort: number;
                    /** @description Default Address Pool specifies default subnet pools for global
                     *     scope networks.
                     *      */
                    readonly DefaultAddrPool: readonly string[];
                    /** @description Force creation of a new swarm. */
                    readonly ForceNewCluster: boolean;
                    /**
                     * Format: uint32
                     * @description SubnetSize specifies the subnet size of the networks created
                     *     from the default subnet pool.
                     *
                     */
                    readonly SubnetSize: number;
                    readonly Spec: components["schemas"]["SwarmSpec"];
                };
                readonly "text/plain": {
                    /** @description Listen address used for inter-manager communication, as well
                     *     as determining the networking interface used for the VXLAN
                     *     Tunnel Endpoint (VTEP). This can either be an address/port
                     *     combination in the form `192.168.1.1:4567`, or an interface
                     *     followed by a port number, like `eth0:4567`. If the port number
                     *     is omitted, the default swarm listening port is used.
                     *      */
                    readonly ListenAddr: string;
                    /** @description Externally reachable address advertised to other nodes. This
                     *     can either be an address/port combination in the form
                     *     `192.168.1.1:4567`, or an interface followed by a port number,
                     *     like `eth0:4567`. If the port number is omitted, the port
                     *     number from the listen address is used. If `AdvertiseAddr` is
                     *     not specified, it will be automatically detected when possible.
                     *      */
                    readonly AdvertiseAddr: string;
                    /** @description Address or interface to use for data path traffic (format:
                     *     `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
                     *     like `eth0`. If `DataPathAddr` is unspecified, the same address
                     *     as `AdvertiseAddr` is used.
                     *
                     *     The `DataPathAddr` specifies the address that global scope
                     *     network drivers will publish towards other  nodes in order to
                     *     reach the containers running on this node. Using this parameter
                     *     it is possible to separate the container data traffic from the
                     *     management traffic of the cluster.
                     *      */
                    readonly DataPathAddr: string;
                    /**
                     * Format: uint32
                     * @description DataPathPort specifies the data path port number for data traffic.
                     *     Acceptable port range is 1024 to 49151.
                     *     if no port is set or is set to 0, default port 4789 will be used.
                     *
                     */
                    readonly DataPathPort: number;
                    /** @description Default Address Pool specifies default subnet pools for global
                     *     scope networks.
                     *      */
                    readonly DefaultAddrPool: readonly string[];
                    /** @description Force creation of a new swarm. */
                    readonly ForceNewCluster: boolean;
                    /**
                     * Format: uint32
                     * @description SubnetSize specifies the subnet size of the networks created
                     *     from the default subnet pool.
                     *
                     */
                    readonly SubnetSize: number;
                    readonly Spec: components["schemas"]["SwarmSpec"];
                };
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": string;
                    readonly "text/plain": string;
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is already part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmJoin: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /** @description Listen address used for inter-manager communication if the node
                     *     gets promoted to manager, as well as determining the networking
                     *     interface used for the VXLAN Tunnel Endpoint (VTEP).
                     *      */
                    readonly ListenAddr: string;
                    /** @description Externally reachable address advertised to other nodes. This
                     *     can either be an address/port combination in the form
                     *     `192.168.1.1:4567`, or an interface followed by a port number,
                     *     like `eth0:4567`. If the port number is omitted, the port
                     *     number from the listen address is used. If `AdvertiseAddr` is
                     *     not specified, it will be automatically detected when possible.
                     *      */
                    readonly AdvertiseAddr: string;
                    /** @description Address or interface to use for data path traffic (format:
                     *     `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
                     *     like `eth0`. If `DataPathAddr` is unspecified, the same address
                     *     as `AdvertiseAddr` is used.
                     *
                     *     The `DataPathAddr` specifies the address that global scope
                     *     network drivers will publish towards other nodes in order to
                     *     reach the containers running on this node. Using this parameter
                     *     it is possible to separate the container data traffic from the
                     *     management traffic of the cluster.
                     *      */
                    readonly DataPathAddr: string;
                    /** @description Addresses of manager nodes already participating in the swarm.
                     *      */
                    readonly RemoteAddrs: readonly string[];
                    /** @description Secret token for joining this swarm. */
                    readonly JoinToken: string;
                };
                readonly "text/plain": {
                    /** @description Listen address used for inter-manager communication if the node
                     *     gets promoted to manager, as well as determining the networking
                     *     interface used for the VXLAN Tunnel Endpoint (VTEP).
                     *      */
                    readonly ListenAddr: string;
                    /** @description Externally reachable address advertised to other nodes. This
                     *     can either be an address/port combination in the form
                     *     `192.168.1.1:4567`, or an interface followed by a port number,
                     *     like `eth0:4567`. If the port number is omitted, the port
                     *     number from the listen address is used. If `AdvertiseAddr` is
                     *     not specified, it will be automatically detected when possible.
                     *      */
                    readonly AdvertiseAddr: string;
                    /** @description Address or interface to use for data path traffic (format:
                     *     `<ip|interface>`), for example,  `192.168.1.1`, or an interface,
                     *     like `eth0`. If `DataPathAddr` is unspecified, the same address
                     *     as `AdvertiseAddr` is used.
                     *
                     *     The `DataPathAddr` specifies the address that global scope
                     *     network drivers will publish towards other nodes in order to
                     *     reach the containers running on this node. Using this parameter
                     *     it is possible to separate the container data traffic from the
                     *     management traffic of the cluster.
                     *      */
                    readonly DataPathAddr: string;
                    /** @description Addresses of manager nodes already participating in the swarm.
                     *      */
                    readonly RemoteAddrs: readonly string[];
                    /** @description Secret token for joining this swarm. */
                    readonly JoinToken: string;
                };
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is already part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmLeave: {
        readonly parameters: {
            readonly query?: {
                /** @description Force leave swarm, even if this is the last manager or that it will
                 *     break the cluster.
                 *      */
                readonly force?: boolean;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmUpdate: {
        readonly parameters: {
            readonly query: {
                /** @description The version number of the swarm object being updated. This is
                 *     required to avoid conflicting writes.
                 *      */
                readonly version: number;
                /** @description Rotate the worker join token. */
                readonly rotateWorkerToken?: boolean;
                /** @description Rotate the manager join token. */
                readonly rotateManagerToken?: boolean;
                /** @description Rotate the manager unlock key. */
                readonly rotateManagerUnlockKey?: boolean;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["SwarmSpec"];
                readonly "text/plain": components["schemas"]["SwarmSpec"];
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmUnlockkey: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": {
                        /** @description The swarm's unlock key. */
                        readonly UnlockKey: string;
                    };
                    readonly "text/plain": {
                        /** @description The swarm's unlock key. */
                        readonly UnlockKey: string;
                    };
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SwarmUnlock: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": {
                    /** @description The swarm's unlock key. */
                    readonly UnlockKey: string;
                };
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ServiceList: {
        readonly parameters: {
            readonly query?: {
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the services list.
                 *
                 *     Available filters:
                 *
                 *     - `id=<service id>`
                 *     - `label=<service label>`
                 *     - `mode=["replicated"|"global"]`
                 *     - `name=<service name>`
                 *      */
                readonly filters?: string;
                /** @description Include service status, with count of running and desired tasks.
                 *      */
                readonly status?: boolean;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Service"][];
                    readonly "text/plain": readonly components["schemas"]["Service"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ServiceCreate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: {
                /** @description A base64url-encoded auth configuration for pulling from private
                 *     registries.
                 *
                 *     Refer to the [authentication section](#section/Authentication) for
                 *     details.
                 *      */
                readonly "X-Registry-Auth"?: string;
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["ServiceSpec"] & Record<string, never>;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ServiceCreateResponse"];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description network is not eligible for services */
            readonly 403: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description name conflicts with an existing service */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ServiceInspect: {
        readonly parameters: {
            readonly query?: {
                /** @description Fill empty fields with default values. */
                readonly insertDefaults?: boolean;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of service. */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Service"];
                    readonly "text/plain": components["schemas"]["Service"];
                };
            };
            /** @description no such service */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ServiceDelete: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID or name of service. */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description no such service */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ServiceUpdate: {
        readonly parameters: {
            readonly query: {
                /** @description The version number of the service object being updated. This is
                 *     required to avoid conflicting writes.
                 *     This version number should be the value as currently set on the
                 *     service *before* the update. You can find the current version by
                 *     calling `GET /services/{id}`
                 *      */
                readonly version: number;
                /** @description If the `X-Registry-Auth` header is not specified, this parameter
                 *     indicates where to find registry authorization credentials.
                 *      */
                readonly registryAuthFrom?: "spec" | "previous-spec";
                /** @description Set to this parameter to `previous` to cause a server-side rollback
                 *     to the previous service spec. The supplied spec will be ignored in
                 *     this case.
                 *      */
                readonly rollback?: string;
            };
            readonly header?: {
                /** @description A base64url-encoded auth configuration for pulling from private
                 *     registries.
                 *
                 *     Refer to the [authentication section](#section/Authentication) for
                 *     details.
                 *      */
                readonly "X-Registry-Auth"?: string;
            };
            readonly path: {
                /** @description ID or name of service. */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["ServiceSpec"] & Record<string, never>;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ServiceUpdateResponse"];
                };
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such service */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ServiceLogs: {
        readonly parameters: {
            readonly query?: {
                /** @description Show service context and extra details provided to logs. */
                readonly details?: boolean;
                /** @description Keep connection after returning logs. */
                readonly follow?: boolean;
                /** @description Return logs from `stdout` */
                readonly stdout?: boolean;
                /** @description Return logs from `stderr` */
                readonly stderr?: boolean;
                /** @description Only return logs since this time, as a UNIX timestamp */
                readonly since?: number;
                /** @description Add timestamps to every log line */
                readonly timestamps?: boolean;
                /** @description Only return this number of log lines from the end of the logs.
                 *     Specify as an integer or `all` to output all log lines.
                 *      */
                readonly tail?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID or name of the service */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description logs returned as a stream in response body */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": string;
                    readonly "application/vnd.docker.multiplexed-stream": string;
                };
            };
            /** @description no such service */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly TaskList: {
        readonly parameters: {
            readonly query?: {
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the tasks list.
                 *
                 *     Available filters:
                 *
                 *     - `desired-state=(running | shutdown | accepted)`
                 *     - `id=<task id>`
                 *     - `label=key` or `label="key=value"`
                 *     - `name=<task name>`
                 *     - `node=<node id or name>`
                 *     - `service=<service name>`
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Task"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly TaskInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID of the task */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Task"];
                };
            };
            /** @description no such task */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly TaskLogs: {
        readonly parameters: {
            readonly query?: {
                /** @description Show task context and extra details provided to logs. */
                readonly details?: boolean;
                /** @description Keep connection after returning logs. */
                readonly follow?: boolean;
                /** @description Return logs from `stdout` */
                readonly stdout?: boolean;
                /** @description Return logs from `stderr` */
                readonly stderr?: boolean;
                /** @description Only return logs since this time, as a UNIX timestamp */
                readonly since?: number;
                /** @description Add timestamps to every log line */
                readonly timestamps?: boolean;
                /** @description Only return this number of log lines from the end of the logs.
                 *     Specify as an integer or `all` to output all log lines.
                 *      */
                readonly tail?: string;
            };
            readonly header?: never;
            readonly path: {
                /** @description ID of the task */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description logs returned as a stream in response body */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": string;
                    readonly "application/vnd.docker.multiplexed-stream": string;
                };
            };
            /** @description no such task */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/json": unknown;
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                    readonly "application/vnd.docker.multiplexed-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SecretList: {
        readonly parameters: {
            readonly query?: {
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the secrets list.
                 *
                 *     Available filters:
                 *
                 *     - `id=<secret id>`
                 *     - `label=<key> or label=<key>=value`
                 *     - `name=<secret name>`
                 *     - `names=<secret name>`
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Secret"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SecretCreate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["SecretSpec"] & Record<string, never>;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["IDResponse"];
                };
            };
            /** @description name conflicts with an existing object */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SecretInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID of the secret */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Secret"];
                };
            };
            /** @description secret not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SecretDelete: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID of the secret */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description secret not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly SecretUpdate: {
        readonly parameters: {
            readonly query: {
                /** @description The version number of the secret object being updated. This is
                 *     required to avoid conflicting writes.
                 *      */
                readonly version: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description The ID or name of the secret */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        /** @description The spec of the secret to update. Currently, only the Labels field
         *     can be updated. All other fields must remain unchanged from the
         *     [SecretInspect endpoint](#operation/SecretInspect) response values.
         *      */
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["SecretSpec"];
                readonly "text/plain": components["schemas"]["SecretSpec"];
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such secret */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ConfigList: {
        readonly parameters: {
            readonly query?: {
                /** @description A JSON encoded value of the filters (a `map[string][]string`) to
                 *     process on the configs list.
                 *
                 *     Available filters:
                 *
                 *     - `id=<config id>`
                 *     - `label=<key> or label=<key>=value`
                 *     - `name=<config name>`
                 *     - `names=<config name>`
                 *      */
                readonly filters?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": readonly components["schemas"]["Config"][];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ConfigCreate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["ConfigSpec"] & Record<string, never>;
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["IDResponse"];
                };
            };
            /** @description name conflicts with an existing object */
            readonly 409: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ConfigInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID of the config */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Config"];
                };
            };
            /** @description config not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ConfigDelete: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description ID of the config */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description config not found */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly ConfigUpdate: {
        readonly parameters: {
            readonly query: {
                /** @description The version number of the config object being updated. This is
                 *     required to avoid conflicting writes.
                 *      */
                readonly version: number;
            };
            readonly header?: never;
            readonly path: {
                /** @description The ID or name of the config */
                readonly id: string;
            };
            readonly cookie?: never;
        };
        /** @description The spec of the config to update. Currently, only the Labels field
         *     can be updated. All other fields must remain unchanged from the
         *     [ConfigInspect endpoint](#operation/ConfigInspect) response values.
         *      */
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["ConfigSpec"];
                readonly "text/plain": components["schemas"]["ConfigSpec"];
            };
        };
        readonly responses: {
            /** @description no error */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description no such config */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description node is not part of a swarm */
            readonly 503: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                    readonly "text/plain": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly DistributionInspect: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                /** @description Image name or id */
                readonly name: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description descriptor and platform information */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["DistributionInspect"];
                };
            };
            /** @description Failed authentication or no image found */
            readonly 401: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    readonly Session: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description no error, hijacking successful */
            readonly 101: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description bad parameter */
            readonly 400: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description server error */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/vnd.docker.raw-stream": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
}
