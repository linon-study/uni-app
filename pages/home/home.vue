<template>
	<view class="container">
		<!-- 头部显示  -->
		<view class='head'>
			<image src='../../static/img/head.png'></image>
			<view v-if="isLogin">
				<view v-if="integral_show&&noIntegral_show" class='common integral'>
					<text>积分</text>
					<text class="num">{{points}}</text>
					<!-- <button class='withdraw'>提现</button> -->
				</view>
				<view v-else class='common noIntegral'>
					<text>还没有积分，赶快去赚取积分吧~</text>
				</view>
			</view>

			<view v-else>
				<view class='common no_login'>
					<text>登录后发现更多任务</text>
					<button @tap="bindLogin" >去登录</button>
				</view>
			</view>

		</view>
		<!-- 主体内容  -->
		<view class='content'>
			<!-- 推荐任务  -->
			<view class='recomond'>
				<text>推荐任务</text>
				<view>
					<text class='recomond_search' bindtap='searchTask'>找任务</text>
					<image src='../../static/img/arrows.png'></image>
				</view>
			</view>

			<!-- 任务列表  -->

			<TaskList ></TaskList>
			<!-- <view>
				<view v-for="(item, index) in taskList.items" :key="index" >
					{{item.name}}
				</view>
			</view> -->
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
		uniPopup
	} from "@dcloudio/uni-ui"
	import TaskList from './taskList.vue'

	export default {

		onLoad() {
			console.log('onLoad.....', this.dontTokens())
		},
		
		computed: {
			...mapState('authed', [
				'isLogin',
				'tokens',
			]),
			...mapState('home', [
				'taskList',
			])
		},
		
		components: {
			uniPopup,
			TaskList,
		},

		methods: {
			// ...mapActions('authed',['getTokenByCodeAction']),
			...mapGetters('authed', [
				'dontTokens',
			]),

			bindLogin() {
				uni.navigateTo({
					url: '../../components/login/loginContainer',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style lang="less">
	.container {
		width: 100%;
		min-height: 100%;
		.head {
			position: relative;
			height: 480rpx;

			image {
				width: 100%;
			}

			.common {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.no_login {
				text {
					line-height: 50rpx;
					color: #fff;
					font-size: 36rpx;
					margin: 0 0 20rpx 0;
				}

				button {
					margin: 0;
					display: inline-block;
					width: 160rpx;
					height: 60rpx;
					line-height: 60rpx;
					background: #FD9A00;
					font-size: 28rpx;
					color: #fff;
				}
			}

			.noIntegral {
				text {
					color: #fff;
					font-size: 36rpx;
				}
			}

			.integral {
				text {
					font-size: 36rpx;
					color: #FFFFFF;
				}

				.num {
					color: #FFFFFF;
					font-size: 72rpx;
					font-family: 'PingFangSC-Semibold';
				}

				button {
					width: 160rpx;
					height: 50rpx;
					line-height: 50rpx;
					background: #fd9a00;
					font-size: 24rpx;
					color: white;
				}
			}
		}

		.content {
			padding: 0 20rpx;

			.recomond {
				border-bottom: 1px solid #e5e5e5;
				height: 112rpx;
				line-height: 112rpx;

				text {
					font-size: 34rpx;
					color: #333;
					font-weight: bold;
				}

				view {
					display: inline-block;
					float: right;

					text {
						font-size: 28rpx;
						color: #666;
					}

					image {
						width: 14rpx;
						height: 22rpx;
						margin: 0 0 0 8rpx;
					}
				}
			}
		}


	}
</style>
