<template>
	<ul class="form-wrap">
		<li><input type="text" v-model="mesPhone" placeholder="请输入您的手机号" /></li>
		<li><textarea v-model="mesMessage" placeholder="请输入您的短信内容"></textarea></li>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		components: {
			 
		},
		computed: {
			mesPhone: {
		    get () {
		      return this.$store.state.PHONE
		    },
		    set (val) {
		      this.$store.commit('updatePhone', val)
		    }
		  },

			mesMessage: {
		    get () {
		      return this.$store.state.MESSAGE
		    },
		    set (val) {
		      this.$store.commit('updateMessage', val)
		    }
		  },		  
		},
		methods: {
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<style lang='less'>

</style>
