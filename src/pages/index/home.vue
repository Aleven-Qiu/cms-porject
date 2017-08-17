<style lang="sass" scoped>
    .index_body{
        background: linear-gradient(#efefef, #e8e8e8);
        .imger {
            display:block;
            margin:auto;
        }
        img {
            height:525px;
        }
        p {

            padding-top:30px;
            padding-left: 30px;
            span {
                color: #af7f67;
            }
        }
    }
</style>
<template>
    <div class="index_body">
        <P class="bigmoresize imger">欢迎进入<span class="ml20 ">采购系统</span></P>
        <img class="imger" src="../../assets/common/images/default_big_img.png">
    </div>
</template>

<script>
    import Vue from 'vue'
    import page from 'components/page'
    import selectTimeCommon from 'components/select_time_common'
    import navBar from 'components/navBar'
    export default {
        data(){
            return {}
        },
        mounted () {
            var heig = $(window).height();
            $(".index_body").css("min-height",heig-60);
        },
        methods: {
            
        }
    }
</script>


