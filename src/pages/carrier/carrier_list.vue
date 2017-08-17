<style lang="sass" scoped>
.text-centers {
    th {
        text-align: center;
    }
}
</style>

<template>
<div class="container-fluid">
    <div class="search_commsearchs ">
        <div class="search_left mt20">搜索：</div>
        <div class="search_right mt20">
            <div class="inline_block middle form-inline">
                <select class="form-control">
                    <option>承运商</option>
                    <option>承运商代码</option>
                </select>
                <input type="text" class="form-control ml20" />
            </div>
            <button  class="btn btn-primary ml20">查询</button>
            <router-link class="btn btn-success ml20" :to="{name:'carrier_add'}">添加承运商</router-link>
        </div>
    </div>
    <div class="table-commain mt20">
        <table class="table table-bordered table_color text-center">
            <thead>
                <tr class="tr_success text-centers">
                    <th>序号</th>
                    <th>承运商类型</th>
                    <th>承运商代码</th>
                    <th>承运商</th>
                    <th>国家简码</th>
                    <th>地址</th>
                    <th>电话号码</th>
                    <th>联系人</th>
                    <th>有效</th>
                    <th>操作</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
</template>

<script>
    import Vue from 'vue'
    import page from 'components/page'
    import selectTimeCommon from 'components/select_time_common'
    import propslot from 'components/prop_slot'

    export default {
        components: {
           page,
           selectTimeCommon,
           propslot,
        },
        data(){
            return {
               
            }
        },
        mounted() {
            this.$nextTick(()=>{
            
            })
        },
        methods: {
            
        }
    }
</script>
<style lang="sass">

</style>

