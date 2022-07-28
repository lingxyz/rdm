import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import installAxios from './plugins/axios'
import installAntd from './plugins/antd'
import installUtils from './plugins/utils'

const app = createApp(App)
installAxios(app)
installAntd(app)
installUtils(app)
app.use(router).mount('#app')
