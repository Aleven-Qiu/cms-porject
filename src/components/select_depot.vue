<style lang="sass" scoped>
.sliderdown {
    position:relative;
    border:1px solid #cdcdcd;
    width:200px;
    background:#fff;
    border-bottom:none;
    border-radius:5px;

    span {
        border-bottom:1px solid #cdcdcd;
        text-align: left;
        display: block;
        padding:0 30px 0 20px;
        line-height: 32px;
        position:relative;
        width: 100%;
        white-space: nowrap;
        height: 32px;
        text-overflow: ellipsis;
        overflow: hidden;
        &:after {
            content:'';
            position:absolute;
            right:7px;
            top:15px;
            width: 0;
            height: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 6px solid #635a5a;
        }
    }
    input {
        position:absolute;
        left:0;
        top:35px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        background:#fff;
        border:1px solid #cdcdcd;
        border-top:none;
        padding-left:20px;
        z-index: 999;
    }
    ul {
        position:absolute;
        left:0;
        top:65px;
        width: 100%;
        max-height: 300px;
        overflow: hidden;
        overflow-y:auto;
        background:#fff;
        z-index: 9999;
        border:1px solid #ccc;
        border-top:none;
        li {
            cursor: pointer;
            padding-left:20px;
            line-height: 24px;
            &:hover {
                background:#0074bc;
                color:#fff;
            }
        }
    }
    .notcursor {
        background:#eee;
        cursor: no-drop;
    }
}
</style>
<template>
	<div class="sliderdown">
        <span v-show="!depotshow" class="notcursor">{{defaultData.deponame}}</span>
		<span v-show="depotshow" @click="selpinpai">{{defaultData.deponame}}</span>
	    <input type="text" v-model="defaultData.depotNames" v-show="defaultData.depotshow" placeholder="搜索仓库">
	    <ul v-show="defaultData.depotshow">
            <li @click="allclick">全部</li>
	        <li v-for="item in wareLists" @click="depotclick(item)" track-by="$index" >{{item.depotName}}</li>
	    </ul>
	</div>
</template>

<script>

import propsync from 'common/lib/mixin/propsync'

export default{
	props:{
		datas:{
			type:Object,
            default:(()=>{
                return {
                }
            }),
		},
		depotshow:{
			type:Boolean,
			default:false,
		},
		wareList:{
			type: Array,
		},
		callback:{
			type:Function,
			default () {}
		},
		depotCode:{
			type: String,
		}
	},
	mixins: [propsync],
	data(){
		return {
			defaultData:{
        		depotshow:this.datas.depotshow || false,
        		depotNames:this.datas.depotNames || "",
        		deponame:this.datas.deponame || "",
        	}
		}
	},
	computed: {
	  wareLists: function () {
	    var self = this
	    return self.wareList.filter(function (user) {
	      return user.depotName.indexOf(self.defaultData.depotNames) !== -1
	    })
	  }
	},
	mounted(){
		this.$nextTick(()=>{
			
        });
	},
	methods:{
		selpinpai(){
       		var _this = this;
            this.defaultData.depotshow = true;
            $('body').on('click','.sliderdown',function(e){
                $(document).one("click", function(){
                    _this.defaultData.depotshow = false;
                    _this.defaultData.depotNames = "";
                });
                e.stopPropagation();
            });	
        },
		depotclick(item){
			this.callback && this.callback();
		    this.defaultData.deponame = item.depotName;
		    this.p_depotCode = item.depotCode;
            this.depotNamester = item.depotName
		    this.defaultData.depotNames = "";
		    this.defaultData.depotshow = false;
            
		},
        allclick(){
            this.defaultData.deponame = '全部';
            this.p_depotCode = '';
            this.depotNamester = '';
            this.defaultData.depotNames = "";
            this.defaultData.depotshow = false;
            this.callback && this.callback();
        }
	}
}


</script>