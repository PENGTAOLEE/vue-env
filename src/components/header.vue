<template>
	<div ref="header" class="header">
		<img @click="backspace" src="/static/images/qrcode/back.png" alt="">
		<span>{{ title }}</span>
	</div>
</template>

<script>
	export default {
		props: ['title'],
		data () {
			return {
				timer: null,
			}
		},
		components:{
			
		},
		computed: {
		},
		methods: {
			backspace() {
				this.$router.back(-1);
			},

			errorTip(content) {
				this.$refs.header.classList.add('error');
				this.$refs.header.setAttribute('data-content',content);

				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.$refs.header.classList.remove('error');
				},2000)
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<style lang='less'>
.header {
	position: relative;
	width: 100%;
	height: 0.88rem;
	background-color: #fff;
	border-bottom: 1px solid #e8e8e8;
	z-index: 99;
	text-align: center;
	&.error::before {
		position: absolute;
		left: 0;
		z-index: 100;
		content: attr(data-content);
		width: 100%;
		height: 100%;
		line-height: 0.88rem;
		color: #fff;
		font-size: 0.32rem;
		opacity: 0.9;
		background: #488bf1;
	}
	img {
		position: absolute;
		left: 0.388rem;
		bottom: 0.28rem;
		width: 0.144rem;
		height: 0.32rem;
	}
	span {
		font-size: 0.36rem;
		color: #343434;
		line-height: 0.88rem;
	}
}
</style>
