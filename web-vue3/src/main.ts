import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import installAxios from './plugins/axios'
import installAntd from './plugins/antd'

const app = createApp(App)
installAxios(app)
installAntd(app)
app.use(router).mount('#app')
