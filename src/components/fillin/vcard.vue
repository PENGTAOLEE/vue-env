<template>
	<div>
		<ul class="form-wrap" ref="list">
			<li><input v-model="CARD_NAME" type="text" placeholder="姓名" /></li>
			<li><input v-model="CARD_PHONE" type="text" placeholder="电话" /></li>
			<li><input v-model="CARD_COMPANY" type="text" placeholder="公司" /></li>
			<li><input v-model="CARD_POSITION" type="text" placeholder="职位" /></li>
			<li><input v-model="CARD_EMAIL" type="text" placeholder="邮箱" /></li>
			<li><input v-model="CARD_QQ" type="text" placeholder="QQ" /></li>
			<li><input v-model="CARD_WEIBO" type="text" placeholder="微博" /></li>
			<li><input v-model="CARD_WEBSITE" type="text" placeholder="网址" /></li>
			<li><input v-model="CARD_ADDRESS" type="text" placeholder="地址" /></li>
		</ul>
		<p @click="readMore($event)">点击查看更多</p>
	</div>
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
			CARD_ADDRESS: {
		    get () {
		      return this.$store.state.CARD_ADDRESS
		    },
		    set (val) {
		      this.$store.commit('updateCardaddress', val)
		    }
		  },

			CARD_WEBSITE: {
		    get () {
		      return this.$store.state.CARD_WEBSITE
		    },
		    set (val) {
		      this.$store.commit('updateCardwebsite', val)
		    }
		  },

			CARD_WEIBO: {
		    get () {
		      return this.$store.state.CARD_WEIBO
		    },
		    set (val) {
		      this.$store.commit('updateCardweibo', val)
		    }
		  },

			CARD_QQ: {
		    get () {
		      return this.$store.state.CARD_QQ
		    },
		    set (val) {
		      this.$store.commit('updateCardqq', val)
		    }
		  },

			CARD_EMAIL: {
		    get () {
		      return this.$store.state.CARD_EMAIL
		    },
		    set (val) {
		      this.$store.commit('updateCardemail', val)
		    }
		  },

			CARD_NAME: {
		    get () {
		      return this.$store.state.CARD_NAME
		    },
		    set (val) {
		      this.$store.commit('updateCardname', val)
		    }
		  },

		  CARD_PHONE: {
		    get () {
		      return this.$store.state.CARD_PHONE
		    },
		    set (val) {
		      this.$store.commit('updateCardphone', val)
		    }
		  },

		  CARD_COMPANY: {
		    get () {
		      return this.$store.state.CARD_COMPANY
		    },
		    set (val) {
		      this.$store.commit('updateCardcompany', val)
		    }
		  },

		  CARD_POSITION: {
		    get () {
		      return this.$store.state.CARD_POSITION
		    },
		    set (val) {
		      this.$store.commit('updateCardposition', val)
		    }
		  },
		},
		methods: {
			readMore(ev) {
				this.$refs.list.style.height = 'auto';
				ev.target.style.display = 'none';
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<style lang='less' scoped>
.form-wrap {
	height: 4.1rem;
	overflow: hidden;
	li > input {
		border: none;
		border-bottom: 1px solid #f1f1f1;
	}
	& + p {
		margin-top: 0.2rem;
		text-align: center;
		font-size: 0.28rem;
		color: #989898;
	}
}
</style>