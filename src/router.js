//router.js 路由集合
import common from 'common/js/common'
import indextRouter from 'pages/index/router'
import carrierRouter from 'pages/carrier/router'
import warehouseRouter from 'pages/warehouse/router'


//默认首页路由
const route = [{
	path: '/',
	name: 'index',
	meta: {
		title: '欢迎进入采购系统',
	},
	component: resolve => require(['pages/index/home.vue'], resolve)
}, ]


//合并路由
var routes = route.concat(indextRouter,carrierRouter,warehouseRouter)

module.exports = routes;