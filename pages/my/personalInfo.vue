<template>
	<view class="list">
		<inputField type="picker" placeholder="自动获得焦点"></inputField>
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
	import inputField from "../../components/form/inputField"

	export default {

		onLoad() {

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
			inputField,
		},

		methods: {
			...mapActions('authed', [
				'getWxAppNameAction',
			]),

		}
	}
</script>

<style lang="less">
	.avatar {
		width: 70rpx;
		height: 70rpx;
		float: right;
		border-radius: 50%;
		// overflow:hidden;
		display:inline-block;
	}
</style>
