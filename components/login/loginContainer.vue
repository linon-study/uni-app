<template>
	<view class='phone'>
		<view class='phone_top'>
			<image src='http://hropublic.oss-cn-beijing.aliyuncs.com/user_image/users/76342638745239519256341851417625.png' mode="widthFix"></image>
			<view>
				<text>请选择您的登录方式</text>
				<text>建议使用微信快速登录</text>
			</view>
		</view>

		<button open-type="getPhoneNumber" class='btn' @getphonenumber="getPhoneNumber">微信快速授权/登录</button>
		<button class='btn_defualt' @tap='phoneLogin'>输入手机号登录</button>
		<view :hidden="false" v-if="showAgreement" class='agreement'>
			<text> 登录即表示同意</text>
			<text class="link_btn" @tap='gotoAgreement'> 《好得众包协议》</text>
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

	export default {

		data() {
			return {
				showAgreement: true
			}
		},

		computed: {
			...mapState('authed', [
				'tokens',
			])
		},

		methods: {
			...mapActions('authed', ['getBindMobileAction']),

			getPhoneNumber(e) {
				// console.log(e)
				const _this = this
				if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
					uni.showModal({
						title: '提示',
						showCancel: false,
						content: '未授权'
					})
				} else {
					uni.showModal({
						title: '提示',
						showCancel: false,
						content: '同意授权',
						success: function(res) {
							_this.bindMobile(e.detail);
						}
					})
				}
			},

			bindMobile(value) {
				const appId = getApp().globalData.appId;
				const {
					tenant,
					user
				} = this.tokens;

				const params = {
					"mobile": '13691224349',
					"app_id": appId,
					"tenant_id": tenant.id,
					"source": "wx_app::" + value.encryptedData + ":" + value.iv,
					"wx_open_id": user.wx_open_id, //可选，如果传了，绑定到对应的微信号
				}

				this.getBindMobileAction(params)
			},

			phoneLogin() {
				uni.navigateTo({
					url: './PhoneNumLogin',
				});
			},
			gotoAgreement() {
				uni.navigateTo({
					url: '../webView/webView'
				});
			}
		}
	}
</script>

<style lang="less">
	.phone {
		background: white;
		min-height: 100%;
		width: 100%;

		.phone_top {
			position: relative;
			height: 400rpx;

			image {
				width: 100%;
				position: absolute;
			}

			view {
				font-size: 32rpx;
				text-align: center;
				position: absolute;
				z-index: 10;
				color: white;
				width: 100%;
				top: 96rpx;

				text {
					display: block;
				}
			}
		}

		.btn {
			margin: 60rpx 60rpx;
			background: #0098ff;
			color: white;
			height: 84rpx;
			line-height: 84rpx;
			font-size: 28rpx;
			margin-top: 70rpx;
		}

		.btn_defualt {
			margin: 60rpx 60rpx;
			background: #fff;
			border: 1px solid #0098FF;
			color: #0098FF;
			height: 84rpx;
			line-height: 84rpx;
			font-size: 28rpx;
			margin-top: 70rpx;
		}

		.agreement {
			padding: 5px 30px;
			text-align: center;

			text {
				display: inline-block;
				color: #000;
				font-size: 28rpx;
			}

			.link_btn {
				display: inline-block;
				color: #0098FF;
				font-size: 28rpx;
			}
		}

	}
</style>
