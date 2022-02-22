import { defineComponent, provide, type InjectionKey } from 'vue'

type ConfigContext = {
  prefixCls: string
}

export const configProviderKey: InjectionKey<ConfigContext> =
  Symbol('configContext')

export type ConfigProviderProps = {
  prefixCls?: string
}

const ConfigProvider = defineComponent<ConfigProviderProps>({
  setup(props, { slots }) {
    provide(configProviderKey, {
      prefixCls: props.prefixCls ?? 'design-editor'
    })
    return () => <>{slots.default?.()}</>
  }
})
export default ConfigProvider
