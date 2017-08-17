//filter.js 过滤器集合
import util from 'common/js/util'
import indexFilder from 'pages/index/filter'
import accounting from 'accounting'
import warehouseFilder from 'pages/warehouse/filter'

//定义用的路由集合
let arrFilder = [indexFilder,warehouseFilder];

let json = {};

//合并过滤器
if (arrFilder.length) {
	for (var i = 0; i < arrFilder.length; i++) {
		json = Object.assign(json, arrFilder[i]);
	};
};
json = Object.assign(json, {
	// 转换为大写
	uppercase(value) {
		if (!value) return;
		return value.toString().toUpperCase();
	},
	// 转换为小写
	lowercase(value) {
		if (!value) return;
		return value.toString().toLowerCase();
	},
	//货币过滤器
	currency(value, symbol, digit, bwf, gwf) {
		if (value!=0 && !value) return;
		return accounting.formatMoney(value, symbol || '', digit || 2, bwf || ',', gwf || '.'); // ¥4,999.99
	},
	// 时间过滤器
	date(value, gengefu, full) {
		if (!value) return;
		let ty = gengefu || '-';
		if (full) {
			return moment(value).format('YYYY' + ty + 'MM' + ty + 'DD HH:mm:ss');
		} else {
			return moment(value).format('YYYY' + ty + 'MM' + ty + 'DD');
		};
	},
	//limitTo过滤器
	limitTo(value, num) {
		if (!value) return;
		var text = "";
		if (value.length < num) {
			text = value;
		} else {
			text = value.substring(0, num) + '···';
		}
		return text;
	},
	//付款方式验证
    payMethodVerify:{
        read: function(val) {
            return val.toFixed(0);
        },
        write: function(val, oldVal) {
            var number = +val.replace(/[^\d.]/g, '');
            return isNaN(number) || number>10 ? 10 : parseFloat(number.toFixed(0));
        }
    },
    payMethod1Verify:{
        read: function(val) {
            return val.toFixed(0);
        },
        write: function(val, oldVal) {
            var number = +val.replace(/[^\d.]/g, '');
            return isNaN(number) || number>10 || number==0 ? 10 : parseFloat(number.toFixed(0));
        }
    },
    payMethod2Verify:{
        read: function(val) {
            return val.toFixed(0);
        },
        write: function(val, oldVal) {
            var number = +val.replace(/[^\d.]/g, '');
            return isNaN(number) || number>=10 || number==0 ? 1 : parseFloat(number.toFixed(0));
        }
    },
    formatSeconds(value) {
        var second = parseInt(value);// 秒
        var minute = 0;// 分
        var hour = 0;// 小时
        if(second > 60) {
                minute = parseInt(second/60);
                second = parseInt(second%60);
            if(minute > 60) {
                hour = parseInt(minute/60);
                minute = parseInt(minute%60);
            }
        }
        var result = this.getZero(minute)+':'+this.getZero(parseInt(second));
        if(minute > 0) {
            result =this.getZero(parseInt(minute))+":"+this.getZero(parseInt(second));
        }
        if(hour > 0) {
            result =this.getZero(parseInt(hour))+':'+this.getZero(parseInt(minute))+":"+this.getZero(parseInt(second));
        }
        return result;
    },
});

module.exports = json;