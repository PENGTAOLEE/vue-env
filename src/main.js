import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './vuex/store'
import axios from 'axios'

Vue.prototype.$http = axios;

function initrem(){
	var _w=750;
	var nw=window.innerWidth||document.documentElement.clientWidth;
	if(nw>_w){
		nw=_w;
	}
	document.documentElement.style.fontSize=(nw/_w)*100+'px';
}
initrem();
window.addEventListener('resize',initrem);
window.addEventListener('orientationchange',initrem);

Vue.use(vueResource);

new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})
