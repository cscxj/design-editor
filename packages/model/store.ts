import History from '@deditor/core/history'
import type Page from './page'

export class Store {
  /**
   * page 管理相关api
   */

  public pages: Page[]
  public activePage?: Page
  /**
   * 添加一个page
   * @param page的json描述对象
   */
  public addPage(page: Page) {
    // todo
  }

  public selectPage(pageId: string) {
    // todo
  }

  public deletePages(pageId: string) {
    // todo
  }

  /**
   * UI 相关
   */

  // 缩放比例
  scale: number

  setScale(value: number) {
    this.scale = value
  }

  /**
   * history 管理
   */

  public history: History

  // that "json" should be a javascript object
  public toJSON() {
    // todo
  }

  // that "json" should be a javascript object
  public loadJSON(json: any, keepHistory = false) {
    // todo
  }

  /**
   * 字体管理
   */
  public addFont({ fontFamily, url }: any) {
    // todo
  }
  public removeFont(name: string) {
    // todo
  }
  public loadFont(name: string) {
    // todo
  }

  constructor() {
    this.pages = []
    this.scale = 1
    this.history = new History()
  }
}

export function createStore() {
  // todo
}

export default Store
