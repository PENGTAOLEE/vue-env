<template>
	<div class="result-box">
		<div class="header-tip"><span>长按图片以分享</span></div>	
		<div class="middle">
			<img :src="imgurl" alt="">
			<p>{{ desc }}</p>
		</div>
		<div class="create-again">
			<button @click="createAgent" id="submit" type="button">再生成一个</button>
		</div>
	</div>
</template>

<script>
	import store from '../../vuex/store'

	export default {
		data () {
			return {
				imgurl: ''
			}
		},
		components: {
			 
		},
		computed: {
			desc() {
				return this.$store.state.QRDESC
			}
		},
		methods: {
			createAgent() {
				this.$router.back(-1);
			}
		},
		mounted () {
			this.imgurl = 'http://qr.topscan.com/api.php?text=' + this.$route.params.id;
		},
		beforeDestroy () {
			this.$router.go(0);
		}
	}
</script>

<style lang='less'>
.result-box {
	max-width: 7.5rem;
	margin: 0 auto;
}
.header-tip {
	position: relative;
	width: 100%;
	height: 0.88rem;
	background-color: #fff;
	z-index: 99;
	text-align: center;
	& > span {
		position: absolute;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		line-height: 0.88rem;
		color: #fff;
		font-size: 0.32rem;
		background: #488bf1;
	}
	& + .middle {
		text-align: center;
		padding-top: 0.3rem;
		& > img {
			width: 5.8rem;
			height: 5.8rem;
			box-shadow: 0.08rem 0.08rem 0.16rem 0 rgba(0,0,0,0.16);
		}	
		& > p {
			margin-top: 0.2rem;
			font-size: 0.24rem;
			color: #686868;
		}
	}
}
.create-again {
	position: fixed;
	bottom: 0;
	background-color: #fff;
	padding: 0.35rem 0.3rem;
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
    border-radius: 0.12rem;
	  font-size: 0.34rem;
	  vertical-align: top;
	}
}
</style>
