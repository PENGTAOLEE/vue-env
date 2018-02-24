<template>
	<ul class="form-wrap">
		<li><textarea v-model="text" placeholder="请输入您需要的文本"></textarea></li>
	</ul>
</template>

<script>
	import store from '../../vuex/store'

	export default {
		data () {
			return {
			}
		},
		components: {
			 
		},
		computed: {
			text: {
		    get () {
		      return this.$store.state.TEXT
		    },
		    set (val) {
		      this.$store.commit('updateText', val)
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
