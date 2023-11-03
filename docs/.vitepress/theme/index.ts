// 具体参考 https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
import DefaultTheme from 'vitepress/theme';
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    let isInit = false;
    app.mixin({
      // 混合注入,加载全局文件
      mounted() {
        if (!isInit) {
          setTimeout(() => {
            const container = document.querySelector('.VPDoc');
            if (!container) return;
            container.setAttribute('id', 'container');
            window.btw = new BTWPlugin();
            window.btw.init({
              id: 'container',
              blogId: '32228-1698943811239-404',
              name: '前端研学营',
              qrcode: 'https://codeteenager.github.io/FE/weixin.jpeg',
              keyword: '前端研学营',
            });
          }, 1000);
          isInit = true;
        }
      }
    })
  }
}