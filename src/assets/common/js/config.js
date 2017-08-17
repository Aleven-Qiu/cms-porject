/*---------------------------------设置domain localStorage--------------------------------------------*/
// var domain=system();
/*---设置函数---*/
// function system(){
//     if(localStorage.getItem('domain')) return localStorage.getItem('domain');
//     var system='';
//     var url=location.hostname;
//     var arr=url.split('.');
//     var head=arr[0];
//     if (head.indexOf('test') > -1) {
//         system = '//test.venus.' + arr[arr.length - 2] + '.' + arr[arr.length - 1] + '/'
//     } else if(head.indexOf('dev') > -1){
//         var domain = arr[arr.length - 2] + '.' + arr[arr.length - 1];
//         if (domain == 'morning-star.cn') {
//             system = 'https://dev-venus.' + domain + '/'
//         } else {
//             system = '//dev-venus.' + domain + '/'
//         };
//     }else {
//         var domain = arr[arr.length - 2] + '.' + arr[arr.length - 1];
//         if (domain == 'morning-star.cn') {
//             system = 'https://venus.' + domain + '/'
//         } else {
//             system = '//venus.' + domain + '/'
//         };
//     }
//     localStorage.setItem('domain', system)
//     return system
// };
/*-------------------------------------------后台配置------------------------------------------------*/ 
module.exports={
	//登陆页面 
    // loginUrl:"http://127.0.0.1:4000/" + "html/login.html",
    // loginUrl:'/index'

	//登陆成功后需要跳转到的页面                                                       
	homeUrl: "/index.html",    

	//请求头部信息地址 
	// loginApi:"http://127.0.0.1:4000/",

	//根接口
    baseApi:'/',
	//图片服务器地址
	baseApiPicUrl:'http://oc3xj63bg.bkt.clouddn.com/',

	// 测试服基础数据服务器接口
	// baseApiDataApiUrl : "http://106.75.148.54/central-common/api/",

	//ajax 请求超时时间
	ajaxtimeout:15000,

	//发送验证码时间间隔
	msgTime:60,
	                            
 	//隐藏显示时间
 	containerShowTime:10,

 	//pagesize 分页数量
 	pageSize:20,
	//长传图片格式
	fileSuffixs:'bmp,gif,jpg,jpeg,jpe,png,BMP,GIF,JPG,JPEG,JPE,PNG',

};
