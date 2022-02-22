import { defineComponent, inject } from 'vue'
import { configProviderKey } from './ConfigProvider'
import './BasicLayout.less'

const WarpContent = defineComponent({
  setup(props, { slots }) {
    return () => <div>{slots.default?.()}</div>
  }
})

const BasicLayout = defineComponent({
  setup() {
    const context = inject(configProviderKey)
    const prefixCls = context?.prefixCls

    const headerDom = <div>header</div>
    const siderPanelDom = <div>side panel</div>
    const toolPanelDom = <div>tool panel</div>

    return () => (
      <>
        <div class={prefixCls + '-basicLayout'}>
          {headerDom}
          <div>
            {siderPanelDom}
            <WarpContent>content</WarpContent>
            {toolPanelDom}
          </div>
        </div>
      </>
    )
  }
})
export default BasicLayout
