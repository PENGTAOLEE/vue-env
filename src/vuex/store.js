import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		TEXT: '',
		PHONE: '',
		MESSAGE: '',
		WEBSITE: 'http://',
		WIFIACCOUNT: '',
		WIFIPASSWORD: '',
		WIFITYPE: '',
		CARD_NAME: '',
		CARD_PHONE: '',
		CARD_COMPANY: '',
		CARD_POSITION: '',
		CARD_EMAIL: '',
		CARD_QQ: '',
		CARD_WEIBO: '',
		CARD_WEBSITE: '',
		CARD_ADDRESS: '',
		QRDESC: ''
	},
	mutations: {
		updateQrdesc (state, message) {
	    state.QRDESC = message
	  },

	  updateText (state, message) {
	    state.TEXT = message
	  },

	  updatePhone (state, message) {
	    state.PHONE = message
	  },

	  updateMessage (state, message) {
	    state.MESSAGE = message
	  },

	  updateWebsite (state, message) {
	    state.WEBSITE = message
	  },

	  updateWIFIaccount (state, message) {
	    state.WIFIACCOUNT = message
	  },

	  updateWIFIpassword (state, message) {
	    state.WIFIPASSWORD = message
	  },

	  updateWIFItype (state, message) {
	    state.WIFITYPE = message
	  },

	  updateCardname (state, message) {
	    state.CARD_NAME = message
	  },

	  updateCardphone (state, message) {
	    state.CARD_PHONE = message
	  },

	  updateCardcompany (state, message) {
	    state.CARD_COMPANY = message
	  },

	  updateCardposition (state, message) {
	    state.CARD_POSITION = message
	  },

	  updateCardemail (state, message) {
	    state.CARD_EMAIL = message
	  },

	  updateCardqq (state, message) {
	    state.CARD_QQ = message
	  },

	  updateCardweibo (state, message) {
	    state.CARD_WEIBO = message
	  },

	  updateCardwebsite (state, message) {
	    state.CARD_WEBSITE = message
	  },

	  updateCardaddress (state, message) {
	    state.CARD_ADDRESS = message
	  },
	},
	getters: {
		// getTab (state, getters) {
		// 	return state.curTab;
		// },
		// getSong (state, getters) {
		// 	return state.curSong;
		// },
		// getSongIndex (state, getters) {
		// 	return state.songIndex;
		// },
		// getSongByIndex (state, getters) {
		// 	return state.songList[state.songIndex];
		// }
	}
})