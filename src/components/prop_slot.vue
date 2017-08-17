<style lang="sass" scoped>
.propsel {
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .bg {
        background:rgba(0,0,0,0.4);
        width: 100%;
        height: 100%;
        position:absolute;
        left: 0;
        top: 0;
    }
    .combox {
        position:absolute;
        transform: translate(-50%, -50%);
        background: #fff;
        z-index: 999;
        padding:0 0 60px 0;
        min-width: 300px;
        min-height: 180px;
        top: 50%;
        left: 50%;
    }
    .combox_top {
    	padding:10px;
    	overflow:hidden;
    	position:relative;
    	border-bottom:1px solid #ddd;
    }
    .combox_main {
    	padding:10px;
    }
    .combox_bottom {
    	position:absolute;
    	left: 0;
    	bottom:20px;
    	width: 100%;
    	text-align:center;
    	height: 36px;
    	border-top: 1px solid #ddd;
    	padding-top:10px;
    }
    .removetrans {
    	transform: translate(0, 0);
    	top:35%;
    	.combox_top {
    		cursor: move;
    	}
	}
}
</style>
<template>
	<div class="propsel" v-show="datas.shows">
        <div class="bg" @click="closepropone"></div>
        <div class="combox" :style="{width:optionalWidth,left:flg?p_datas.leftx+'%':''}" :class="{'removetrans':flg}">
        	<div class="combox_top">
        		<span class="combox_title">{{p_datas.title}}</span>
        		<button type="button" class="close" @click="closeprop('callback')"><span>&times;</span></button>
        	</div>
        	<div class="combox_main">
        		<slot name="combox_main"></slot>
        	</div>
        	<div class="combox_bottom">
        		<button class="btn btn-primary" @click="callback">{{p_datas.oktext}}</button>
        		<button class="btn btn-default" @click="closeprop('callback')" v-show="closeshow">{{p_datas.closetext}}</button>
        	</div>
        </div>
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
		showpop:{
			type:Boolean,
			default:false,
		},
		callback:{
			type:Function,
			default () {}
		},
		flg:{
			type:Boolean,
			default:false,
		},
		closeback:{
			type:Function,
			default () {}
		},
		closeshow:{
			type:Boolean,
			default:true,
		},
		closeprops:{
			type:Boolean,
			default:true,
		}
	},
	mixins: [propsync],
	data(){
		return {}
	},
	created(){
		var config = {
			title:'默认标题',
			oktext:'确定啊',
			closetext:'取消呢',
			width:400,
			leftx:null,
		};	
		for(var i in config) {
			if(!this.p_datas) return ;
			for(var k in this.p_datas) {
				if(i == k) {
					config[k] = this.p_datas[k];
				}
			}
		}
		this.p_datas=config;
	},
	computed: {
		optionalWidth () {
			if (this.p_datas.width === null) {
			    return null
			}
			else if (Number.isInteger(this.p_datas.width)) {
			    return this.p_datas.width + 'px'
			}
			return this.p_datas.width
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.$emit('onPropsChanges', this.beginid, ''); 
			if(this.flg) {
	          $('.combox_top').on('mousedown',function($event){
	              var disX=$event.pageX-$(this).offset().left;
	              var disY=$event.pageY-$(this).offset().top;
	              var _this = $(this);
	              $(document).mousemove(function(eve){
	                var ev = eve || event;
	                _this.parents('.combox').css('left',ev.pageX-disX);
	                _this.parents('.combox').css('top',ev.pageY-disY);
	              })
	              $(document).mouseup(function(){
	                $(document).off();
	              })
	              return false;
	          });
	        }; 
        });
	},
	methods:{
		closeprop(callback){
			this.datas.shows = false;
			if(callback) {
				this.closeback && this.closeback();
			}
		},
		closepropone(){
			if(this.closeprops) {
				this.datas.shows = false;
			}
		}
	}
}


</script>