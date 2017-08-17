// 模块路由设置
module.exports = [
	{
		path: '/warehouse/warehouse_list',
		name: 'warehouse_list',
		meta: {
			title: '仓库列表',
		},
		component: resolve => require(['./warehouse_list.vue'], resolve)
	},
]