<template>
	<view v-if="type == 'picker'" class="uni-view" >
		<input class="uni-input" :placeholder="placeholder" />
	</view>
	
	<view v-else>
		<input class="uni-input" :placeholder="placeholder" />
	</view>
	
</template>

<script>
	import {
		mapState,
		mapActions,
		mapGetters,
		mapMutations
	} from 'vuex'
	import {
		uniPopup,
		uniList,
		uniListItem,
	} from "@dcloudio/uni-ui"
	
	export default {
		props:{
			type: String,
			placeholder: String,
		},
	
		computed: {
			...mapState('home', [
				'individualPoints',
			]),
	
		},
	
		components: {
			uniPopup,
			uniList,
			uniListItem,
		},
	
		methods: {
			...mapActions('authed', [
				'getWxAppNameAction',
			]),
	
		},
		
		onLoad() {
			
		}
	}
</script>

<style lang="less">
	
	.uni-view {
		width: 100%;
		padding: 0 20rpx;
		border-bottom: 1px solid #dddddd;
		.uni-input {
			height: 80rpx;
		}
	}
</style>
