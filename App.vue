<script>
	import {
		mapState,
		mapActions,
		mapGetters,
		mapMutations
	} from 'vuex'
	import wxRequest from './static/js/wechat-request.js';

	export default {

		globalData: {
			OSSUrl: "https://oss.workai.com.cn/",
			// baseUrl: "https://api.workai.com.cn/", // 线上环境

			// OSSUrl: "https://oss.engma.net/",          //苏州英格玛人力资源有限公司(小英领活)  专用
			// baseUrl: "https://api.engma.net/",         //苏州英格玛人力资源有限公司(小英领活)  专用

			// OSSUrl: "https://oss.qidianren.com/",      //武汉起点人力资源股份有限公司(起点灵创)  专用
			// baseUrl: "https://hroapi.qidianren.com/",  //武汉起点人力资源股份有限公司(起点灵创)  专用

			// OSSUrl: "https://oss.fjhxrl.com/",            //海峡人力云(浙江)智能科技有限公司(海峡人力云)  专用
			// baseUrl: "https://api.fjhxrl.com/",           //海峡人力云(浙江)智能科技有限公司(海峡人力云)  专用

			// baseUrl: "http://47.110.158.110:20000/",  // 测试环境
			baseUrl: 'http://47.110.250.177:20000/',
			// baseUrl: "http://118.178.181.180:20000/",

			// baseUrl: "http://47.110.91.56:20000/", // 预生产环境


			"appId": "wxd77d768a54c1a6ed", //社会化用工
			// "appId": 'wxacb81f2785bbed2b' //方圆零工
			// "appId": 'wxa3306c52497202a4'//天宇人力
			// "appId": 'wx0b015904869974f2'//三一(石力速派)
			// "appId": 'wxb6d75b24391c6d9e'//幺零幺零工
			// "appId": "wx664091016b50bde5",//点米(北京)科技有限公司(灵灵8)
			// "appId": "wx8f7d1fc61a9d6c65",//芸众邦
			// "appId": "wx824a09bdd3045a67",//上海信轩劳务服务有限公司(博乐零工)
			// "appId": "wxcecc8be26f17caea",//泉州智服计算机科技有限公司(派接单)
			// "appId": "wx9c3a93ee24d542dd",//上海智服人力资源有限公司 （智客云助手）
			// "appId": "wx764e650822a5a2bb",//重庆联实人力资源管理有限公司 （热职零工）
			// "appId": "wxe3ae2bb24674a63c",//青岛汇成世纪人力资源有限公司 （灵工猫）
			// "appId": "wx82963271c9f8d692",//辽宁招才人力资源咨询有限公司 （招才灵工邦）
			// "appId": "wx78f18c40b2782cd2",//湖南小翊网络科技有限公司(小翊灵工)
			// "appId": "wx213a8e2f988f2805",//东莞市新世纪人才资源研究所（领活零工）
			// "appId": "wx651e3cbd9c8890b3",//广东方胜人力资源服务有限公司（揽活儿）
			// "appId": "wxdc53ed2d6004350d",//重庆新思达企业管理有限公司(薪职口快)
			// "appId": "wxcc23b093a768c585",//徐州海通人力资源有限公司(徐州海通人力资源有限公司)
			// "appId": "wx1e39a40b0bfaeff1",//阜新市金阳光人力资源服务有限公司（美周薪）
			// "appId": "wxe9ec494161b02e99",//盐城派合大数据有限公司(大盐城零工团)
			// "appId": "wxf85bc4f236d022fe",//青岛华文人力资源有限公司(华文人力资源)
			// "appId": "wxc329a9aea74faf36",//宁翔人力资源临工招聘系统(宁翔招聘)
			// "appId": "wx83f4725777bc368c",//四川云发信息科技有限公司（熊猫易工）
			// "appId": "wxdfac38f16b9d8491",//天津北海油人力资源咨询服务有限公司深圳分公司(HR小微服务)
			// "appId": "wx1a774db6a591e2a3",//江西省同济人力资源集团有限公司(薪福宝平台)
			// "appId": "wxa1fe1ff8de81a55f",//苏州市金阊人力资源有限公司(金阊瑞翔)
			// "appId": "wx461facd714a59f2c",//上海纵搁文化传播有限公司(展付通)
			// "appId": "wx50833d08aa96cfc0",//天津多宝鱼企业管理顾问有限公司(鳞集未来)
			// "appId": "wx04946d5a86d6d279",//云南人力港劳务派遣有限公司(人力岗)
			// "appId": "wx75951492e33f6349",//河北万古人力资源股份有限公司(青创人才中心)
			// "appId": "wx0ec6f262420f2c39",//山东蓝谷人力资源有限公司(灵灵发)
			// "appId": "wxd9c2c8b6eaee3ae1",//成都面包圈信息技术有限公司(面包圈小单)
			// "appId": "wxd9976d613c977239",//江苏薪税企业服务有限公司(个圆共享众创平台)
			// "appId": "wx0f11c10e785d29c7",//上海薪木人力资源有限公司（蜗壳众包）
			// "appId": "wx972b68ff51976d73",//繁昌一招盈人力资源服务有限公司（一招盈用工平台）
			// "appId": "wx0db2660abdb69547",//安徽正德人力资源咨询有限公司(挣得)
			// "appId": "wxddaf96f35f121a0d",//安徽正德人力资源咨询有限公司(好得众包)
			// "appId": "wx65c58345356b3e82",//成都祥能劳务派遣有限公司（祥能灵工云）
			// "appId": "wx68a85454bc73330f",//觅职猫科技(山东)有限公司（觅职猫）
			// "appId": "wx786b7d8383b93c13",//海南自贸区汇客财税科技有限公司（汇客众包）
			// "appId": "wx044dacff412f45aa",//石家庄森海人力资源服务有限公司（森海人力）
			// "appId": "wx1bb4a94e8e0e9539",//青岛人通人力资源集团有限公司（青岛人通人力集团）
			// "appId": "wx02d81c62bf42c6a9",//北京汇智众和管理顾问有限公司（泰和灵活用工）
			// "appId": "wx2340d135949a68cd",//郑州众助企业管理咨询有限公司（工多多灵工保）
			// "appId": "wx9123040af6d7d767",//沈阳易通盛人力资源服务有限公司（智在零工）
			// "appId": "wxe7bf782626e6da32",//重庆新思达企业管理有限公司（新思达）
			// "appId": "wx37b0c59b0652cb7b",//青岛励志人力资源服务有限公司（适配工）
			// "appId": "wx9347ce4dd885457a",//上海乐松人力资源有限公司（上海乐松人力资源配置专家）
			// "appId": "wxd2334127523a3ca1",//安阳薪云人力资源服务有限公司（薪零工）
			// "appId": "wxe9612182c6de2a32",//青岛联农劳务服务有限公司（）
			// "appId": "wx5d6cfdabb2916da1",//南充市英联劳务派遣有限公司（临工通）
			// "appId": "wx2e609fbfae3190a3",//成都智勇人力资源有限公司（智勇人力）
			// "appId": "wxb4da6982a0194306",//北京人本国际人力资源开发有限公司（人本经理人）
			// "appId": "wx2b994dcb6e5c7833",//重庆邦兴泰劳务服务有限公司（邦兴泰）
			// "appId": "wxffb8903e841df9e8",//才星(广州)科技服务有限公司（考拉零工）
			// "appId": "wxf79b44460627567a",//桐城市易才网络科技服务有限公司（光宇众包）
			// "appId": "wx60bb68e6deab4cd9",//迈维(辽宁)人力资源服务有限公司（迈维小蜜蜂）
			// "appId": "wx4f4a1518d86c945a",//西昌中才人力资源服务有限责任公司（中才人力）

			// "appId": "wxfc0e0b54f9463555",//苏州英格玛人力资源有限公司(小英领活)                     (私有云 URL切记要改)
			// "appId": "wxc08326b22c8739e8",//武汉起点人力资源股份有限公司(起点灵创)                   (私有云 URL切记要改)
			// "appId": "wx6e6fb24e860ffbbb",//海峡人力云(浙江)智能科技有限公司(海峡人力云)             (私有云 URL切记要改)

		},

		beforeCreate: function() {},

		onLaunch: function() {
			wxRequest.defaults.baseURL = this.globalData.baseUrl;
			uni.login({
				provider: 'weixin',
				success: res => {
					const params = {
						"grant_type": "wx_app_code",
						"code": res.code,
						"scope": "global_access:end_user,tenant:" + this.globalData.appId
					}

					this.getTokenByCode(params).then((data) => {
						if (data && data.code >= 300) {
							uni.showToast({
								icon: 'none',
								title: data.message,
								duration: 2000
							});
						} else {
							this.getLocation()
						}

					})
				}
			});
		},

		onShow: function() {
			// console.log('App Show')
		},

		onHide: function() {
			// console.log('App Hide')
		},

		computed: {
			...mapState('authed', [
				'userInfo',
			])
		},

		methods: {
			...mapActions('authed', [
				'getTokenByCode',
				'getCityName',
				'getProvinceCityCode',
			]),
			...mapActions('home', [
				'getTaskListAction',
				'getRecommentdTaskAction',
				'getWithdrawCheckAction',
				'getIndividualPointsAction',
			]),
			...mapGetters('authed', [
				'dontTokens',
			]),
			...mapMutations('authed', [
				'getLocationMutations',
			]),

			getLocation: function() {
				const _this = this
				uni.getLocation({
					type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用wx.openLocation 的坐标
					success: function(res) {

						_this.getLocationMutations(res)
						let params = [];
						params.push('?longitude=' + res.longitude)
						params.push('&latitude=' + res.latitude)

						_this.getCityName(params.join('')).then((data) => {

							let values = [];
							values.push('?limit=10')
							values.push('&offset=0')
							values.push('&home=y')
							values.push('&lat=' + res.latitude)
							values.push('&lng=' + res.longitude)
							if (data && data.code > 300) {
								values.push('&province_code=110000')

							} else {
								values.push('&province_code=' + data.province_code)
								if (data.province_name != '北京市' && data.province_name != '天津市' && data.province_name != '上海市' && data.province_name !=
									'重庆市') {
									values.push('&city_code=' + data.city_code)
								}
							}

							// console.log('userInfo....', _this.userInfo)
							if (_this.userInfo.type == 1) {
								_this.getTaskListAction(values.join(''))
								_this.getRecommentdTaskAction('?offset=0&limit=1')
								_this.getWithdrawCheckAction()
								_this.getIndividualPointsAction()
								
								
							}
							// let cityName = ''
							// if (data && data.city.indexOf('市') != -1) {
							// 	cityName = data.city.substring(0, data.city.length - 1);
							// } else {
							// 	cityName = data.city
							// }
							// _this.getProvinceCityCode(`?city=` + cityName)
						})
					},
					fail: function(res) {},
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
