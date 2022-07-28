/**
 * 获取本地图
 * @param name // 文件名 如 doc.png
 * @returns {*|string}
 */
function getAssetsImages(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}

export default (app: any) => {
  app.config.globalProperties.$requireImages = getAssetsImages
}