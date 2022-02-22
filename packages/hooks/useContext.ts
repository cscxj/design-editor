import {
  inject,
  provide,
  reactive,
  type InjectionKey,
  type UnwrapNestedRefs
} from 'vue'

export function createContext<T extends object>(
  context: T,
  key: InjectionKey<UnwrapNestedRefs<T>> = Symbol()
) {
  const state = reactive<T>(context)
  provide(key, state)
}

export function useContext<T>(
  key: InjectionKey<UnwrapNestedRefs<T>> = Symbol()
): UnwrapNestedRefs<T> | void {
  return inject(key)
}
