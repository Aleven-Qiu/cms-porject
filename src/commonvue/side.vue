<style scoped lang="sass">
	.left-nav{
		color:#babcc4;
		border-top:solid 1px #494b50;
		.nav-item{
			position:relative;
		}
		.nav-title{
			line-height: 45px;
			padding: 0 10px;
			cursor: pointer;
			font-size:14px;
			border-bottom:solid 1px #494b50;
			span{
				margin-right:6px;
			}
			span:nth-child(1){
			}
		}
		.nav-title:hover{
			span{
				color:#fff;
			}
		}
		.nav-box, .nav-box-two{
			display: none;
			margin: 0;
			padding: 0;
			list-style: none;
			background: #2b2f3c;
			.nav-list{
				text-align: left;
				font-size:12px;
				line-height: 40px;
				a, p{
					padding: 0 20px;
					overflow: hidden;
					display: block;
					text-decoration: none;
					display: block;
					color:#babcc4;
					span{
						float: right;
					}
					&:hover{
						color:#fff;
					}
					&:last-child{
					}
				}
			}
			.cur{
				background:#31333c;
				a{
					color:#fff;
					font-weight:bold;
				}
			}
		}
		.open{
			.nav-box {
				display: block;
			}
			.nav-title {
				color:#fff;
				span{
					color:#fff;
				}
			}
		}
		.mouserover{
			.nav-title {
				span{
				}
			}
		}
		.openslide {
			.nav-title {
				color:#fff;
				span{
					color:#fff;
				}
			}
		}
		.nav-list-two {
			span {
				transition: all .5s;
			}
		}
		.showul {
			span {
				transform:rotateZ(90deg);
			}
		}
		.nav-box-two {
			display: none;
			a {
				padding:0 20px 0 40px  !important;
				border-bottom:none !important;
				border-top:1px solid #d5d6d8;
			}
		}
		.slideUl{
			display:block;
			position: absolute;
		    width: 180px;
		    top:0;
		    left: 45px;
		    z-index: 100;
		}
		.slideUl li:nth-child(1){
			margin-left:-1px;
		}
	}
</style>

<template>
	<div class="left-nav " id="left-nav">
		<div class="nav-item">
			<div class="nav-title">
				<span class="iconfont" aria-hidden="true">&#xe62e;</span>
				<span class="title" v-show="!p_leftBarToggle">首页</span>
			</div>
			<ul class="nav-box">
				<li class="nav-list" :class="{'cur' : $route.name == 'index'}">
					<router-link :to="{name:'index'}">首页</router-link>
				</li>
			</ul>
		</div>
		<div class="nav-item" :class="{'open' : iscarrier}">
			<div class="nav-title">
				<span class="iconfont" aria-hidden="true">&#xe62e;</span>
				<span class="title" v-show="!p_leftBarToggle">承运商</span>
			</div>
			<ul class="nav-box">
				<li class="nav-list" :class="{'cur' : $route.name == 'carrier_list'}">
					<router-link :to="{name:'carrier_list'}">承运商列表</router-link>
				</li>
			</ul>
		</div>
		<div class="nav-item" :class="{'open' : iswarehouse}">
			<div class="nav-title">
				<span class="iconfont" aria-hidden="true">&#xe62e;</span>
				<span class="title" v-show="!p_leftBarToggle">仓库</span>
			</div>
			<ul class="nav-box">
				<li class="nav-list" :class="{'cur' : $route.name == 'warehouse_list'}">
					<router-link :to="{name:'warehouse_list'}">仓库列表</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import propsync from 'common/lib/mixin/propsync'
	module.exports={
		data(){
			return{
				iscarrier:false,
				iswarehouse:false,
			}
		},
		props:{
			leftBarToggle:{
				type:null,
				toWay:true,
				default:false
			}
		},
		mixins: [propsync],
		watch: {
		    $route () {
		    	this.iscarrier=/^carrier\W*/.test(this.$route.name);
		    	this.iswarehouse = /^warehouse\W*/.test(this.$route.name);
		    }
		},
		mounted() {
			// 保证 this.$el 已经插入文档
		  	this.$nextTick(()=>{
				var This=this;
				$(".left-nav").on("click", ".nav-title", function(){
					//展开导航
					$(this).parent('.nav-item').addClass('openslide').siblings().removeClass('openslide open');
					if(!This.p_leftBarToggle){	
						$(this).parent('.nav-item').find('.nav-box').slideToggle().end().siblings().find('.nav-box').slideUp();
						$(this).parent('.nav-item').find('.nav-box-two').slideUp().end().find('.showul').removeClass('showul');
					}
				});
				$(".left-nav").on("click", ".nav-list-two", function(){
					//展开导航
					$(this).toggleClass('showul').next().stop().slideToggle();
					$(this).parent().siblings().find('ul').slideUp();
				});

				//移入时效果
				$(".nav-item").on("mouseenter",function(){
					if(This.p_leftBarToggle){
						$('#left').css({overflow:'visible'})
						$('#left-nav').find('.nav-item').removeClass('mouserover')
						$(this).addClass('mouserover')
						$('#left-nav').find('ul').hide();
						$(this).find('ul.nav-box').addClass('slideUl').show();
					}
				})
				// //移出时效果
				$(".nav-item").on("mouseleave", function(){
					var _this=this;
					if(This.p_leftBarToggle){
						setTimeout(function(){
							$(_this).removeClass('mouserover')
							$(_this).find('ul.nav-box').hide();
						}, 10);
					}
				})

				/*----------------------------处理移动端---------------------*/
				$('#left li a').click(function(){
					if($(window).width()<768) {
						if($(this).find('a')) {
							$('#left').css('left',-180);
						}
					}
				});
				$(window).on('resize',function(){
					if($(window).width()>768) {
						$('#left').css('left',0);
					}else {
						$('#left').css('left',-180);
					}
				});
		  	})
		},
	}
</script>