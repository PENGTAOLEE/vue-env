<template>
	<ul class="form-wrap">
		<li><input type="text" v-model="website"  placeholder="请输入您的网址" /></li>
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
			website: {
		    get () {
		      return this.$store.state.WEBSITE
		    },
		    set (val) {
		      this.$store.commit('updateWebsite', val)
		    }
		  }
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
