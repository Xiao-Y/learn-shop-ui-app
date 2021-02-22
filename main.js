import Vue from 'vue';
import App from './App';
// 弹出框
import DialogBox from './components/DialogBox/DialogBox';


Vue.config.productionTip = false

// 全局组件
Vue.component('DialogBox', DialogBox);
//mescroll
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
import VkDataGoodsSkuPopup from '@/components/SkuPopup/vk-data-goods-sku-popup/vk-data-goods-sku-popup.vue';
import VkDataInputNumberBox from '@/components/SkuPopup/vk-data-input-number-box/vk-data-input-number-box.vue';
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.component('vk-data-goods-sku-popup', VkDataGoodsSkuPopup)
Vue.component('vk-data-input-number-box', VkDataInputNumberBox)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
