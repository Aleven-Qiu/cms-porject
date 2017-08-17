<style scoped lang="sass">
	.brank_nav{
		font-size:12px;
	}
</style>
<template>
  <ol class="brank_nav">
    <li><router-link :to="{name:'index'}">首页</router-link></li>
    <slot name="nav_two"></slot>
    <slot name="nav_other"></slot>
    <li>{{$route.meta.title}}</li>
</ol>
</template>
