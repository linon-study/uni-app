<template>
	<view class="phone_group">
		<form @submit="formSubmit" @reset="formReset">

			<view class="uni-form-item phone_num">
				<text>手机号</text>
				<input class=" textarea_wrp" @blur="mobileInputEvent" name="mobile" type="number" placeholder='请输入手机号'></input>
			</view>

			<view class="uni-form-item sms_code">
				<text>验证码</text>
				<button @tap="verifyCodeEvent" disabled="buttonDisable">{{verifyCodeTime}}</button>
				<input name="verify_code" @input="verifyInputEvent" placeholder='请输入验证码'></input>
			</view>

			<view class="uni-btn-v">
				<button form-type="submit">登录</button>
			</view>

		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				verifyCodeTime: '获取验证码'
			}
		},

		computed: {
			// ...mapState('authed', [
			// 	'tokens',
			// ])
		},

		methods: {
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			replaceInput: function(event) {
				var value = event.target.value;
				if (value === '11') {
					this.changeValue = '2';
				}
			},
			hideKeyboard: function(event) {
				if (event.target.value === '123') {
					uni.hideKeyboard();
				}
			}
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
