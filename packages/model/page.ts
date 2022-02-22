import type Element from './element'

export class Page {
  public elements: Element[]
  public selectedElements: Element[]
  public selectElements(eIds: string[]) {
    // todo
  }
  public deleteElements(eIds: string[]) {
    // todo
  }
  public getElementById(eId: string) {
    // todo
  }
  public set(attrs: any) {
    // todo
  }
  public addElement(el: Element) {
    // todo
  }
  public clone(el: Element) {
    // todo
  }
  public computedWidth: number
  public computedHeight: number

  constructor() {
    this.elements = []
    this.selectedElements = []
    this.computedWidth = 0
    this.computedHeight = 0
  }
}
export default Page
