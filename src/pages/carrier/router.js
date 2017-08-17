// 模块路由设置
module.exports = [
	{
		path: '/carrier/carrier_list',
		name: 'carrier_list',
		meta: {
			title: '承运商列表',
		},
		component: resolve => require(['./carrier_list.vue'], resolve)
	},
	{
		path: '/carrier/carrier_add',
		name: 'carrier_add',
		meta: {
			title: '新增承运商',
		},
		component: resolve => require(['./carrier_add.vue'], resolve)
	},
]