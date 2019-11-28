<template>
	<view>
		<block v-for="(item,index) in taskList" :key="index">
			<view class='list' @tap="linkTaskDetails(item.id)" >
				<view class='img_left'>
					<image :src="getImage(item.store_img_url)" class='target_pic' />
				</view>
				<view class='content_right'>
					<view class='one_line'>
						<text class='name'>{{item.name}}</text>
						<text class='pos_integral'>{{item.salary}}<text style='font-size:24rpx;color:#333;'>积分/{{item.salary_unit_chinese}}</text></text>
					</view>
					<view class='two_line'>
						<view class='line_default'>
							<image src='../../static/img/position_pos.png'></image>
							<text class='info_time'>{{item.position}}</text>
						</view>
						<text :hidden="!item.is_extra_commission" style='font-size:24rpx;color:#333;position:absolute;right:0;top:76rpx;'>+{{item.extra_commission_rate}}%提成</text>
					</view>

					<view class='three_line line_default'>
						<image src='../../static/img/date.png'></image>
						<text>{{item.begin_time}}</text>
					</view>

					<view class='four_line line_default'>
						<image src='../../static/img/position.png'></image>
						<text>{{item.depbranch}}</text>
					</view>
					<view class='five_line line_default'>
						<image src='../../static/img/locationDetail.png'></image>
						<text>{{item.address}}</text>
					</view>
					<button class='apply_btn'>申请任务</button>
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
		uniList,
		uniListItem,
	} from "@dcloudio/uni-ui"

	export default {
		name: "TaskList",
		computed: {
			...mapState('home', [
				'taskList',
			])
		},

		components: {
			uniList,
			uniListItem
		},

		methods: {
			...mapActions('home',['getTaskDetailsAction']),
			...mapGetters('authed', [
				'dontTokens',
			]),
			getImage: function(imgUrl) {
				if (imgUrl && imgUrl.length > 0) {
					return `http://oss.workai.com.cn/public/${JSON.parse(imgUrl[0]).object}`
				} else {
					return `../../static/img/pic.png`
				}
			},
			linkTaskDetails: function(id) {
				uni.navigateTo({
				    url: `taskDetails?id=${id}`
				});
			}
		}
	}
</script>

<style lang="less">
	.line_default {
		width: 380rpx;
		image {
			width: 30rpx;
			height: 30rpx;
			float: left;
			margin-top: 8rpx;
		}

		text {
			font-size: 24rpx;
			margin-left: 18rpx;
			color: #999;
		}
	}

	.list {
		width: 100%;
		height: auto;
		overflow: hidden;
		background: white;
		padding: 38rpx 0;
		position: relative;
		border-top: 1rpx solid #e5e5e5;

		.img_left {
			float: left;

			image {
				width: 160rpx;
				height: 160rpx;
			}
		}

		.content_right {
			margin: 0 0 0 20rpx;
			width: 530rpx;
			float: right;

			.one_line {
				.name {
					font-size: 32rpx;
					font-weight: bold;
					color: #333;
				}

				.pos_integral {
					color: #FF5229;
					font-size: 26rpx;
					float: right;
					font-family: Microsoft YaHei;
				}
			}

			.apply_btn {
				width: 140rpx;
				height: 52rpx;
				line-height: 52rpx;
				background: #FD9A00;
				color: white;
				position: absolute;
				right: 0rpx;
				bottom: 38rpx;
				font-size: 24rpx;
				padding: 0 10px;
				border: none;
			}
		}
	}
</style>
