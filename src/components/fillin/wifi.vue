<template>
	<div>
		<ul class="form-wrap">
			<li><input type="text" v-model="wifiAccount" placeholder="请输入您的Wi-Fi账号" /></li>
			<li><input type="password" v-model="wifiPassword" placeholder="请输入您的密码" /></li>
		</ul>
		<p class="choose-title">选择二维码类型</p>
		<radios :list="list" @takeout="assign"></radios>
	</div>
	
</template>

<script>
 	import Radios from '../../components/radios'
	export default {
		data () {
			return {
				list: [
					{
						id: '1',
						type: 'WPA',
						text: 'WPA/WPA2'
					},
					{
						id: '2',
						type: 'WEP',
						text: 'WEP'
					},
					{
						id: '3',
						type: 'nopass',
						text: '无加密'
					}
				],
				curType: 1,
			}
		},
		components: {
			Radios
		},
		computed: {
			wifiAccount: {
		    get () {
		      return this.$store.state.WIFIACCOUNT
		    },
		    set (val) {
		      this.$store.commit('updateWIFIaccount', val)
		    }
		  },

		  wifiPassword: {
		    get () {
		      return this.$store.state.WIFIPASSWORD
		    },
		    set (val) {
		      this.$store.commit('updateWIFIpassword', val)
		    }
		  }
		},
		methods: {
			assign(id) {
				this.curType = id;
				this.$store.commit('updateWIFItype', id)
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<style lang='less'>
.choose-title {
	padding-top: 0.3rem;
	line-height: 0.8rem;
	font-size: 0.28rem;
	color: #686868;
}
.type-list {
	display: flex;
	.btn {
		flex: 1;
		height: 0.72rem;
		margin-right: 0.24rem;
		line-height: 0.72rem;
		font-size: 0.24rem;
		text-align: center;
		background-color: #e5e5e5;
		border-radius: 0.08rem;
		color: #686868;
		&:last-child {
			margin: 0;
		}
		&.on {
			background-color: #ffb53d;
			color: #fff;
		}
	}
}
</style>
