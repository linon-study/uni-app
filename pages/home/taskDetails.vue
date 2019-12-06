<template>
	<view class="task-details">
		<view class="swiper_group">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
				<block v-for="(item,index) in imgUrlArray" :key="index">
					<swiper-item>
						<image :src="item" class="swiper_image" mode="aspectFill" />
					</swiper-item>
				</block>
			</swiper>
		</view>

		<view class="content_group">

			<view class='task_top'>
				<view class="name">
					<text>{{taskDetails.name}}</text>
					<text class="job">{{taskDetails.position}} / {{taskDetails.headcount}}人</text>
				</view>

				<view class='integral'>
					<text>{{taskDetails.salary}}<text style='font-size:24rpx;color:#333;'>积分/</text></text>
					<text class='integral_title'>{{taskDetails.salary_unit_chinese}}</text>
				</view>


				<view class='task' :style="{padding:0}">
					<view>
						<image src='../../static/img/time.png'></image>
						<text>工作时间</text>
					</view>
					<text>{{this.$moment(taskDetails.daily_start_time * 1000).format('YYYY-MM-DD')}}~{{this.$moment(taskDetails.daily_end_time * 1000).format('YYYY-MM-DD')}}</text>
				</view>

				<view class='company' @tap='goDetail'>
					<image src='../../static/img/company.png'></image>
					<text>{{taskDetails.customer}}</text>
					<text class='shop_loc'>{{taskDetails.depbranch}}</text>
				</view>



				<view class='task' :style="{padding: '16rpx 0'}">
					<view>
						<image src='../../static/img/locationDetail.png'></image>
						<text>工作地址</text>
					</view>
					<text>{{taskDetails.address}}</text>
				</view>
			</view>

			<view class='task'>
				<view>
					<image src='../../static/img/task.png'></image>
					<text>任务描述</text>
				</view>
				<text>{{taskDetails.position_description}}</text>
			</view>

			<view class='task'>
				<view>
					<image src='../../static/img/task.png'></image>
					<text>任职要求</text>
				</view>
				<text style="word-break:break-all;white-space:pre-wrap">{{taskDetails.take_office_demands}}</text>
			</view>
		</view>

		<!-- 底部菜单 -->
		<view class='footer' :hidden='isShowFooter'>
			<button open-type="share" @tap='onShareAppMessage'>
				<image src='../../static/img/share.png'></image>
				<text>分享</text>
			</button>
			<view @tap='_applyTaskAction'>立即接单</view>
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
				imgUrlArray: []
			}
		},

		onLoad(option) {
			this.getTaskDetailsAction(option).then(data => {
				this.imgUrlArray = this.doneImgUrl()
			})
		},

		computed: {
			...mapState('home', [
				'taskDetails',
			])
		},

		components: {},

		methods: {
			...mapActions('home', ['getTaskDetailsAction']),
			...mapGetters('home', ['doneImgUrl']),
		}
	}
</script>

<style lang="less">
	.task-details {
		.swiper_group {
			.swiper_image {
				width: 100%;
			}
		}

		.content_group {
			background: #f4f4f4;
			margin-bottom: 160rpx;

			.task_top {
				background: #FFFFFF;
				margin: 0 0 20rpx 0;
				padding: 0 16rpx;

				.name {
					padding: 20rpx 0 0 0;

					text {
						font-size: 30rpx;
						color: #333;
					}

					.job {
						float: right;
						color: #666;
						font-size: 28rpx;
					}
				}

				.integral {
					font-size: 20px;
					color: #FF5229;
					padding: 8rpx 0;

					.integral_title {
						font-size: 24rpx;
						color: #333;
						margin-left: 4rpx;
					}
				}

				.company {
					border-top: 1px solid #e5e5e5;
					border-bottom: 1px solid #e5e5e5;
					height: 80rpx;
					line-height: 80rpx;

					image {
						width: 28rpx;
						height: 30rpx;
						position: relative;
						top: 5rpx;
					}

					text {
						font-size: 28rpx;
						margin: 0 0 0 8rpx;
						color: #333333;
					}

					.shop_loc {
						font-size: 24rpx;
						color: #999;
						float: right;
					}
				}
			}

			.task {
				margin: 0 0 20rpx 0;
				padding: 0 16rpx;
				background: #FFFFFF;

				view {
					height: auto;
					overflow: hidden;

					image {
						width: 28rpx;
						height: 30rpx;
						position: relative;
						top: 5rpx;
					}

					text {
						font-size: 28rpx;
						margin: 0 0 0 8rpx;
						color: #333333;
					}
				}

				text {
					clear: both;
					line-height: 40rpx;
					color: #999;
					font-size: 24rpx;
					margin-top: 10rpx;
				}
			}
		}

		.footer {
			height: 96rpx;
			line-height: 96rpx;
			border-top: #E5E5E5 solid 1px;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;

			button {
				width: 254rpx;
				float: left;
				text-align: center;
				background: white;
				border: none !important;
				border-radius: 0;
				height: 100%;

				image {
					width: 28rpx;
					height: 24rpx;
					margin-right: 10rpx;
					font-size: 28rpx;
				}
			}

			button::after {
				content: '';
				border: none;
				position: static;
			}

			view {
				width: 495rpx;
				float: right;
				text-align: center;
				background: #277BFF;
				height: 96rpx;
				color: white;
				font-size: 28rpx;
			}

		}
	}
</style>
