<style lang="sass" scoped>
.text-centers {
    th {
        text-align: center;
    }
}
.nav {
    border-bottom: none;
}
</style>

<template>
<div class="container-fluid">
    <ul class="nav nav-tabs mt20" role="tablist">
        <li role="presentation" :class="tabshow?'active':''">
            <a href="javascript:;" @click="selbtn('tabshow')">承运商信息</a>
        </li>
        <li role="presentation" :class="adminshow?'active':''">
            <a href="javascript:;" @click="selbtn('adminshow')">管理员账号</a>
        </li>
        <li role="presentation" >
            <a href="javascript:;" @click="selbtn('3')">权限管理</a>
        </li>
    </ul>
    <div class="table-commain">
        <div class="chengyun" v-show="tabshow">
            <div class="search_commsearchs">
                <div class="search_left">承运商类型：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">承运商代码：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                    <span>承运商代码长度应在3-32之间</span>
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">承运商：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">承运商全称：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                    <span>填写承运商全称，用于开具发票</span>
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">地址：</div>
                <div class="search_right form-inline">
                    <select class="form-control">
                        <option>广东省</option>
                    </select>
                    <select class="form-control ml20">
                        <option>深圳市</option>
                    </select>
                    <select class="form-control ml20">
                        <option>南山区</option>
                    </select>
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">邮编：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">联系人：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">电话号码：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">手机号码：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">传真号码：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">有效：</div>
                <div class="search_right form-inline">
                    <label><input type="radio" name="aa">否</label>
                    <label class="ml20"><input type="radio" name="aa">否</label>
                    <span class="ml20">承运商是否可用，是即激活承运商，否锁定承运商</span>
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">备注：</div>
                <div class="search_right form-inline">
                    <textarea></textarea>
                </div>
            </div>
        </div>
        <div class="adminbox" v-show="adminshow">
            <div class="search_commsearchs">
                <div class="search_left">用户名：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">密码：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">确认密码：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">E-mail：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">姓名：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">部门：</div>
                <div class="search_right form-inline">
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="search_commsearchs">
                <div class="search_left">账号启用：</div>
                <div class="search_right form-inline">
                    <label><input type="radio" name="aa">否</label>
                    <label class="ml20"><input type="radio" name="aa">是</label>
                </div>
            </div>
        </div>
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
               tabshow:true,
               adminshow:false,
            }
        },
        mounted() {
            this.$nextTick(()=>{
            
            })
        },
        methods: {
            selbtn(type){
                switch(type){
                    case 'tabshow':
                        this.adminshow = false;
                    break;
                    case 'adminshow':
                        this.tabshow = false;
                    break;
                }
                this[type] = !this[type];
            }
        }
    }
</script>
<style lang="sass">

</style>

