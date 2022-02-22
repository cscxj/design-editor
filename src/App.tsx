import { BasicLayout, ConfigProvider } from '@deditor/layout'
import type { FunctionalComponent } from 'vue'
import './app.less'

const App: FunctionalComponent = () => {
  return (
    <ConfigProvider>
      <BasicLayout></BasicLayout>
    </ConfigProvider>
  )
}
export default App
