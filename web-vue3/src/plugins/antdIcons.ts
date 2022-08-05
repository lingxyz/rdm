/*
 * 全局注册图标
 */
import * as Icons from "@ant-design/icons-vue";
const icons: any = Icons;

export default (app: any) => {
  for (const i in icons) {
    app.component(i, icons[i]);
  }
}