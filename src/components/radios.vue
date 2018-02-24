<template>
	<div class="type-list">
		<div class="btn" @click="selectionType(item.id, item.type)" :class="{'on':item.id==currentId}" :data-id="item.id" v-for="(item, index) in list">{{ item.text }}</div>
		}
	</div>
</template>

<script>
	export default {
		props: ['list'],
		data () {
			return {
				currentId: 1,
				currentType: 'WEP'
			}
		},
		components: {
			 
		},
		computed:{
		},
		methods: {
			selectionType(id, type) {
				this.currentId = id;
				this.currentType = type;
				// 当前选中的类型id

				this.$emit('takeout', this.currentType)
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	}
</script>

<style lang='less'>
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