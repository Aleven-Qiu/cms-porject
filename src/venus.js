
import Vue from 'vue'

// 上报数据---（点击上报）

Vue.directive('jurdi', {
  	inserted: function (el,vnode) {
        var flg=common.isInJurisdnArr(vnode.value);
        if(!flg) {
          $(el).remove();
        }
  	},
});

// 权限过滤指令  用法 v-jurdi='oms1000'
// let jurisdnArrs= util.getStorage('session','jurisdnArrs') ? JSON.parse(util.getStorage('session','jurisdnArrs')) : []
// Vue.directive('jurdi', {
//     inserted(el,data) {
//         //权限过滤器
//         if(!data.value) {$(el).remove(); return;}
//         let result = jurisdnArrs.includes(data.value);
//         if(!result){
//             $(el).remove()
//         }     
//     },
// })