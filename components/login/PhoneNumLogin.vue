<template>
	<view class="phone_group">
		<form @submit="formSubmit" @reset="formReset">

			<view class="uni-form-item phone_num">
				<text>手机号</text>
				<input name="mobile" type="number" @input="onKeyMobileInput" maxlength="11" class=" textarea_wrp" placeholder='请输入手机号'></input>
			</view>

			<view class="uni-form-item sms_code">
				<text>验证码</text>
				<button @tap="inputTapCode" :disabled="defaults.disable">{{defaults.verifyText}}</button>
				<input name="verify_code" @input="onKeyCodeInput" maxlength="6" placeholder='请输入验证码'></input>
			</view>

			<view class="uni-btn-v">
				<button form-type="submit">登录</button>
			</view>

		</form>
	</view>
</template>

<script>
	import Vue from 'vue'
	import {
		mapState,
		mapActions,
		mapGetters,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				defaults: {
					verifyText: '获取验证码',
					disable: false,
					mobile: '',
					verify_code: '',
				}
			}
		},

		computed: {
			...mapState('authed', [
				'smsCode',
				'tokens',
			])
		},

		methods: {
			...mapActions('authed', [
				'getSmsCodeAction',
				'getBindMobileAction',
			]),

			onKeyMobileInput: function(event) {
				this.defaults.mobile = event.detail.value
			},

			onKeyCodeInput: function(event) {
				this.defaults.verify_code = event.detail.value
			},

			inputTapCode: function(event) {
				if (this.defaults.disable) return;

				let loginRules = [{
					name: 'mobile',
					required: true,
					type: 'phone',
					errmsg: '请输入正确的手机号'
				}, ]
				let valLoginRes = this.$validate.validate({
					mobile: this.defaults.mobile
				}, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				} else {
					let _this = this
					let timelength = 60;
					var intervalId = setInterval(function() {

						timelength = timelength - 1;
						_this.$set(_this.defaults, 'verifyText', timelength + 's后重发')
						_this.$set(_this.defaults, 'disable', true)

						if (timelength == 0) {
							clearInterval(intervalId);
							_this.$set(_this.defaults, 'verifyText', '获取验证码')
							_this.$set(_this.defaults, 'disable', false)
						}
					}, 1000);

					const params = {
						"mobile": this.defaults.mobile,
						"type": "bindmobile",
						"scope": "global_access:end_user,tenant:" + getApp().globalData.appId
					}
					this.getSmsCodeAction(params);
				}
			},

			formSubmit: function(event) {
				console.log(event)
				let loginRules = [{
					name: 'mobile',
					required: true,
					type: 'phone',
					errmsg: '请输入正确的手机号'
				}, ]
				let valLoginRes = this.$validate.validate(event.detail.value, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				} else {
					console.log(this)
					console.log(this.smsCode)
					console.log(this.defaults.verify_code)

					const appId = getApp().globalData.appId;
					const {
						tenant,
						user
					} = this.tokens;

					const params = {
						"mobile": this.defaults.mobile,
						"sms_code": this.defaults.verify_code,
						"app_id": appId,
						"tenant_id": tenant.id,
						"source": "wx_app",
						"wx_open_id": user.wx_open_id, //可选，如果传了，绑定到对应的微信号
					}

					this.getBindMobileAction(params)
				}
			},
		}
	}
</script>

<style lang="less">
	.phone_group {
		padding: 200rpx 0 0 0;

		.uni-form-item {
			border-bottom: 1px solid #dddddd;

			text {
				float: left;
				font-size: 32rpx;
				color: #333333;
				padding-left: 20rpx;
				padding-right: 20rpx;
				line-height: 88rpx;
			}

			input {
				font-size: 16px;
				width: 400rpx;
				height: 88rpx;
				line-height: 88rpx;
			}

			button {
				float: right;
				color: #519ff0;
				font-size: 26rpx;
				margin: 10rpx;

			}
		}

		.uni-btn-v {

			button {
				margin-top: 144rpx;
				line-height: 80rpx;
				height: 80rpx;
				width: 80%;
				text-align: center;
				background: #519ff0;
				color: #fff;
			}
		}
	}
</style>
