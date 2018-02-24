<template>
	<div class="qrcode-index">
		<h3>选择二维码类型</h3>
		<div class="list clearfix">
		  <router-link v-for="(value, key) in typeList" :key="key" :to="'/fillin/'+value.name">
		  	<img :class="{ rotate: value.isWebsite }" :src="value.src" alt="">
		    <span>{{ value.text }}</span>
		  </router-link>
		</div>
	</div>
</template>

<script>
	import store from '../../vuex/store'
	export default {
		data () {
			return {
				typeList: [
					{
						id: '1',
						name: 'text',
						src: '/static/images/qrcode/text.png',
						text: '文本',
						title: '文本二维码',
						qrdesc: ''
					},
					{
						id: '2',
						name: 'website',
						isWebsite: true,
						src: '/static/images/qrcode/network.png',
						text: '网址',
						title: '网址二维码',
						qrdesc: ''
					},
					{
						id: '3',
						name: 'wifi',
						src: '/static/images/qrcode/wifi.png',
						text: 'Wi-Fi密码',
						title: 'WiFi二维码',
						qrdesc: '使用手机自带相机扫描即可直接加入该WIFI网络'
					},
					{
						id: '4',
						name: 'vcard',
						src: '/static/images/qrcode/vcard.png',
						text: '电子名片',
						title: '名片二维码',
						qrdesc: '使用手机自带相机扫描即可查看该电子名片类型'
					},
					{
						id: '5',
						name: 'message',
						src: '/static/images/qrcode/message.png',
						text: '短信',
						title: '短信二维码',
						qrdesc: '使用手机自带相机扫描即可发送本条短信'
					},
				],
				currentId: 1
			}
		},
		components:{
			
		},
		computed: {
		},
		methods: {
		},
		mounted() {
		},
		beforeRouteLeave(to, from, next) {
			var name = to.path.slice(8, );
			console.log(name)
	    this.typeList.forEach((item, index) => {
	    	if (name == item.name) {
	    		this.$store.commit('updateQrdesc', item.qrdesc)
	    	}
	    })
	    next()
		},
		beforeDestroy() {
		}
	}
</script>

<style lang='less'>
.qrcode-index {
	@color: #686868;
	max-width: 7.5rem;
	margin: 0 auto;
	background-color: #fff;
	h3 {
		height: 1.09rem;
		line-height: 1.09rem;
		font-weight: normal;
		padding-left: 0.37rem;
		border-bottom: 1px solid #e8e8e8;
		font-size: 0.28rem;
		color: @color;
	}

	.list {
		width: 100%;
		a {
			@color: #e8e8e8; 
			display: block;
			float: left;
			width: 33.3%;
			height: 2.23rem;
			padding-top: 0.6rem;
			text-align: center;
			border-bottom: 1px solid @color;
			border-right: 1px solid @color;
			img {
				width: auto;
				height: 0.56rem;
				&.rotate {
					width: 0.6rem;
					height: 0.2rem;
					margin-top: 0.2rem;
					margin-bottom: 0.14rem;
					transform: rotate(-45deg);
				}
			}
			span {
				@color: #343434;
				display: block;
				margin-top: 0.2rem;
				font-size: 0.24rem;
				color: @color;
			}
		}
	}

}
</style>
