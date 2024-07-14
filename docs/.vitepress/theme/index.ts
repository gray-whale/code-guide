// 具体参考 https://vitepress.vuejs.org/guide/theme-introduction#using-a-custom-theme
import DefaultTheme from 'vitepress/theme';
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.mixin({
      // 混合注入,加载全局文件
      data() {
        return {
          isInit: false
        }
      },
      mounted() {
        const container = document.querySelector('.VPDoc');
        if (!container) return;
        if (!this.isInit) {
          setTimeout(() => {
            const contentContainer = container.querySelector('.content-container');
            contentContainer.setAttribute('id', 'page-container');
            contentContainer.style.minHeight = `${window.innerHeight - 64 - 32}px`;
            const readMoreContainer = document.querySelector('#read-more-wrap');
            if (readMoreContainer) {
              readMoreContainer.remove();
            }
            window.btw = new BTWPlugin();
            window.btw.init({
              id: 'page-container',
              blogId: '32228-1698943811239-404',
              name: '前端研学营',
              qrcode: 'https://codeteenager.github.io/FE/weixin.jpg',
              keyword: '前端研学营',
            });
          }, 1000);
          this.isInit = true;
        }
      }
    })
  }
}