<template>
	<view v-if="messageList<=0" class='noneView'>
		<image src='../../static/img/noContent.png'></image>
		<view>暂无数据</view>
	</view>
	<view v-else>
		<block v-for="(item,index) in messageList" :key="index">
			<view class='message-content'>
				<image src='../../static/img/message.png'></image>
				<view class='content-warp'>
					<view class='content-top'>
						<text class='message-content-top-title'>{{item.subject}}</text>
						<text class='message-content-top-date'>{{item.create_time}}</text>
					</view>
					<view class='content-bottom'>
						{{item.content}}
					</view>
				</view>
			</view>
		</block>
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
		uniPopup
	} from "@dcloudio/uni-ui"

	export default {

		onLoad() {
			if (this.isLogin) {
				this.getWxAppNameAction()
				this.getMessageListAction('?offset=0&limit=10&category=socialwork')
			}
		},

		computed: {
			...mapState('authed', [
				'isLogin',
			]),
			...mapState('message', [
				'messageList',
			]),

		},

		components: {
			uniPopup,
		},

		methods: {
			...mapActions('authed', [
				'getWxAppNameAction',
			]),
			...mapActions('message', [
				'getMessageListAction',
			]),

		}
	}
</script>

<style lang="less">
	.noneView {
		text-align: center;
		margin-top: 30rpx;
		font-size: 30rpx;
		color: #999;

		image {
			width: 168rpx;
			height: 144rpx;
		}

		view {
			padding-right: 40rpx;
		}
	}

	.message-content {
		border-bottom: 1px #E5E5E5 solid;
		margin-left: 24rpx;
		overflow: hidden;
		display: flex;
		padding: 24rpx 20rpx 24rpx 0;

		image {
			width: 96rpx;
			height: 96rpx;
			margin-right: 20rpx;
		}

		.content-warp {
			color: #999999;

			.content-top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.message-content-top-title {
					font-size: 32rpx;
					color: #252525;
				}

				.message-content-top-date {
					font-size: 24rpx;
				}
			}

			.content-bottom {
				width: 586rpx;
				font-size: 26rpx;
			}
		}
	}
</style>
