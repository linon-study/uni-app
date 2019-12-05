<template>
	<view class='container'>
		<view class='login_group'>
			<image class="background_img" src='../../static/img/group.png'></image>

			<view v-if="isLogin" class="user_info">
				<view class="user_avatar">
					<open-data type="userAvatarUrl"></open-data>
				</view>
				<text>{{userInfo.name}}</text>
				<view class='points' @tap="goToIntegral" :hidden="true">积分 {{individualPoints.points}} ></view>
			</view>

			<view v-else class="user_info">
				<view class="user_avatar">
					<image src='../../static/img/account.png' onerror='getDefaultImg'></image>
				</view>
				<text @tap="onTapLogin">点击登录</text>
			</view>
		</view>

		<view class="perosn_info" v-if="isLogin">

			<view class="info_item">
				<image src='../../static/img/personPic1.png' class='person_pic'></image>
				<view>
					<text>个人信息</text>
					<text class="text_bottom">设置个人信息</text>
				</view>
				<image src='../../static/img/33.png' class='person_arrow'></image>
			</view>

			<view class="info_item">
				<image src='../../static/img/personPic2.png' class='person_pic'></image>
				<view>
					<text>个人资质</text>
					<text class="text_bottom">上传个人资质</text>
				</view>
				<image src='../../static/img/33.png' class='person_arrow'></image>
			</view>

		</view>


		<view class='task_status' v-if="isLogin">
			<view class='task_item' @tap='toBeConfirm'>
				<image src='../../static/img/tobeconfirm.png'></image>
				<view>待确认</view>
				<uni-badge text="2" type="error" size="small"></uni-badge>
			</view>

			<view class='task_item' @tap='toMountGuard'>
				<image src='../../static/img/tobemount.png'></image>
				<view style='margin-top:8rpx;'>待上岗</view>
				<uni-badge text="2" type="error" size="small"></uni-badge>
			</view>

			<view class='task_item' @tap='toBeCompleted'>
				<image src='../../static/img/tobefinish.png'></image>
				<view>待完成</view>
				<uni-badge text="2" type="error" size="small"></uni-badge>
			</view>

			<view class='task_item' @tap='toBeFinished'>
				<image src='../../static/img/finished.png'></image>
				<view>已完成</view>
			</view>
		</view>

		<view class="list" v-if="isLogin">
			<uni-list>
				<uni-list-item title="我的钱包" :show-arrow="true"></uni-list-item>
				<uni-list-item title="我的银行卡" :show-arrow="true"></uni-list-item>
				<uni-list-item title="我的店铺" :show-arrow="true"></uni-list-item>
				<uni-list-item title="我的协议" :show-arrow="true"></uni-list-item>
				<uni-list-item title="我的消息" :show-arrow="true"></uni-list-item>
				<uni-list-item title="设置" :show-arrow="true"></uni-list-item>
				<uni-list-item title="分享二维码" :show-arrow="true"></uni-list-item>
			</uni-list>
		</view>

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
		uniBadge,
		uniList,
		uniListItem,
	} from "@dcloudio/uni-ui"

	export default {

		onLoad() {
			if (this.isLogin) {}
		},

		computed: {
			...mapState('authed', [
				'isLogin',
				'userInfo',
			]),
			...mapState('home', [
				'individualPoints',
			]),

		},

		components: {
			uniPopup,
			uniBadge,
			uniList,
			uniListItem,

		},

		methods: {
			...mapActions('message', [
				'getMessageListAction',
			]),
			
			//登录
			onTapLogin() {
				uni.navigateTo({
					url: '../../components/login/loginContainer',
				});
			},

		}
	}
</script>

<style lang="less">
	.container {
		height: 100%;
		min-height: 100%;

		.login_group {
			position: relative;
			height: 272rpx;
			width: 100%;
			background: white;

			.background_img {
				width: 100%;
				height: 272rpx;
				position: absolute;
				z-index: 1;
			}

			.user_info {
				width: 100%;
				height: 272rpx;
				position: absolute;
				z-index: 300;
				padding-top: 60rpx;

				.user_avatar {
					width: 116rpx;
					height: 116rpx;
					margin-left: 100rpx;
					float: left;
					border-radius: 50%;
					overflow: hidden;
					display: block;

					image {
						width: 100%;
						height: 100%;
					}
				}

				text {
					color: white;
					font-size: 36rpx;
					float: left;
					margin: 32rpx 0 0 30rpx;
				}

				.points {
					color: #252525;
					font-size: 30rpx;
					background: #f5a623;
					height: 70rpx;
					line-height: 70rpx;
					text-align: center;
					border-top-left-radius: 35rpx;
					border-bottom-left-radius: 35rpx;
					float: right;
					margin-top: 30rpx;
					padding-left: 14rpx;
				}
			}
		}

		.perosn_info {
			margin: 40rpx 0 60rpx 0;
			display: -webkit-flex;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;

			.info_item {
				width: 320rpx;
				height: 116rpx;
				border: solid 4rpx #E4E7F0;
				border-radius: 8rpx;

				.person_pic {
					width: 60rpx;
					height: 60rpx;
					margin: 24rpx 20rpx;
					margin-top: 30rpx;
				}

				view {
					vertical-align: top;
					display: inline-block;
					width: 170rpx;
					font-size: 28rpx;
					color: #08162A;
					margin: 20rpx 0 0 0;

					.text_bottom {
						display: inline-block;
						color: #838A94;
						font-size: 22rpx;
					}
				}

				.person_arrow {
					vertical-align: top;
					width: 20rpx;
					height: 20rpx;
					margin-top: 50rpx;
					margin-right: 20rpx;
				}
			}
		}

		.task_status {
			padding: 16rpx 0;
			background: white;
			display: -webkit-flex;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;

			.task_item {
				width: 25%;
				position: relative;
				text-align: center;
				font-size: 24rpx;
				color: #252525;


				image {
					width: 54rpx;
					height: 54rpx;
				}

				uni-badge {
					position: absolute;
					top: -15rpx;
					right: 35rpx;
				}

			}
		}

	}
</style>
