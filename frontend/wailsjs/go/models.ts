export namespace api {

	export class FairOSConfig {
    isProxy: boolean
    bee: string
    batch: string
    rpc: string
    network: string

    static createFrom(source: any = {}) {
      return new FairOSConfig(source)
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source)
      this.isProxy = source['isProxy']
      this.bee = source['bee']
      this.batch = source['batch']
      this.rpc = source['rpc']
      this.network = source['network']
    }
  }
}

export namespace handler {
  export class PodMountedInfo {
    podName: string
    isMounted: boolean
    mountPoint: string

    static createFrom(source: any = {}) {
      return new PodMountedInfo(source)
    }

    constructor(source: any = {}) {
      if ('string' === typeof source) source = JSON.parse(source)
      this.podName = source['podName']
      this.isMounted = source['isMounted']
      this.mountPoint = source['mountPoint']
    }
  }

  export class UserInfo {
    username: string | any
    password: string | any

    constructor(user: string, pass: string[]) {
      this.username = user
      this.password = pass
    }
  }

  export class AccountInfo {
    userInfo: UserInfo[] | any
    pods: PodMountedInfo[] | any

    constructor(user: UserInfo, pods: PodMountedInfo[]) {
      this.userInfo = [user]
      this.pods = pods
    }
  }
}

