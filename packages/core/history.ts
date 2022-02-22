interface Transaction {
  (): void
  (): Promise<never>
}

export class History {
  public canUndo: boolean
  public canRedo: boolean

  // 事务
  public transaction(fn: Transaction) {
    // todo
  }
  public ignore(fn: Transaction) {
    // todo
  }

  public startTransaction() {
    // todo
  }

  public endTransaction() {
    // todo
  }

  constructor() {
    this.canRedo = this.canUndo = false
  }
}
export default History
