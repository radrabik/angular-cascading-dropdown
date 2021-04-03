export class ControlNodes {
  constructor(public id: number, public name: string) {}
}

export class ManagedNodes {
  constructor(
    public id: number,
    public controlNodeId: number,
    public name: string
  ) {}
}
