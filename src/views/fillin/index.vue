<template>
	<div>
		<head-com ref="headcom" :title="title"></head-com>	
		<div class="fillin">
			<router-view></router-view>
			<button id="submit" @click="generateQr" type="button">生成二维码</button>
		</div>
	</div>
</template>

<script>
	import store from '../../vuex/store'
	import HeadCom from '../../components/header'

	export default {
		data () {
			return {
				title: document.title,
				type: '',
				url: ''
			}
		},
		components: {
			HeadCom 
		},
		computed:{
		},
		methods: {
			generateQr() {
				this.type = this.$route.path.slice(8,);
				var url = 'http://qr.topscan.com/api.php?text=';
				
				switch(this.type) {
					case 'text':
						var params = this.$store.state.TEXT;
						if (params == '') {
							this.$refs.headcom.errorTip('请输入内容');
							return false;
						}
						break;
					case 'website':
						var params = this.$store.state.WEBSITE;
						if (params == '') {
							this.$refs.headcom.errorTip('请输入内容');
							return false;
						}
						break;
					case 'wifi':
						var params = 'WIFI:S:' + this.$store.state.WIFIACCOUNT +
												 ';P:' + this.$store.state.WIFIPASSWORD + 
												 ';T:'+ this.$store.state.WIFITYPE;
						if (!this.$store.state.WIFIACCOUNT) {
							this.$refs.headcom.errorTip('请输入账号');
							return false;
						}

						if (!this.$store.state.WIFIPASSWORD) {
							this.$refs.headcom.errorTip('请输入密码');
							return false;
						}

						break;
					case 'vcard':
						var params = '' +
							 'MECARD:N:' + this.$store.state.CARD_NAME +
							 ';TEL:' + this.$store.state.CARD_PHONE + 
							 ';TIL:' + this.$store.state.CARD_POSITION + 
							 ';ORG:' + this.$store.state.CARD_COMPANY + 
							 ';NOTE:' + this.$store.state.CARD_QQ + 
							 ';URL:' + this.$store.state.CARD_WEBSITE + 
							 ';EMAIL:' +this.$store.state.CARD_EMAIL + 
							 ';ADR:' + this.$store.state.CARD_ADDRESS + 
							 ';WEIBO:' + this.$store.state.CARD_WEIBO;
						break;
					case 'message':
					  var params = 'smsto:' + this.$store.state.PHONE + ':'+ this.$store.state.MESSAGE;
					  if (!this.$store.state.PHONE) {
							this.$refs.headcom.errorTip('请输入手机号码');
							return false;
						}

						if (!/^((\(\d{3}\))|(\d{3}\-))?(1[3|4|5|7|8]\d{9}$)/.test(this.$store.state.PHONE)) {
							this.$refs.headcom.errorTip('请检查您输入的手机号');
							return false;
						}

						if (!this.$store.state.MESSAGE) {
							this.$refs.headcom.errorTip('请输入短信内容');
							return false;
						}
						break;
					default:
						console.log(23333)
				}
				var query = encodeURIComponent(params);
				this.$router.push('/result/'+query);
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<style lang='less'>
.fillin {
	background-color: #fff;
	padding: 0.5rem 0.3rem 0.4rem 0.3rem;
	border-bottom: 1px solid #e8e8e8;
	.form-wrap {
		li {
			margin-bottom: 0.3rem;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
	button {
    width: 6.9rem;
    height: 0.88rem;
    background-color: #488bf1;
    color: #fff;
    margin-top: 0.3rem;
    border-radius: 0.12rem;
	  font-size: 0.34rem;
	  vertical-align: top;
	}
}
</style>
