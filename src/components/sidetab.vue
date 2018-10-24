<template>
    <div>
     <el-menu
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#ffd04b"
       default-active="2"
       class="navbar"
       :router="true"
     >
       <el-submenu index="1">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span>管理员管理</span>
         </template>
         <el-menu-item index="/admin/adduser">添加管理员</el-menu-item>
         <el-menu-item index="/admin/userlist">管理员列表</el-menu-item>
       </el-submenu>
       <el-submenu index="2">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span>新闻管理</span>
         </template>
         <el-menu-item index="/admin/addnews">添加新闻</el-menu-item>
         <el-menu-item index="/admin/newslist">新闻列表</el-menu-item>
       </el-submenu>
       <el-submenu index="3">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span>轮播图管理</span>
         </template>
         <el-menu-item index="#">添加轮播图</el-menu-item>
         <el-menu-item index="#">修改轮播图</el-menu-item>
         <el-menu-item index="#">删除轮播图</el-menu-item>
       </el-submenu>
     </el-menu>
    </div>
</template>

<script>
    export default {
        name: "sidetab"
    }
</script>

<style scoped>
  .navbar{
    margin: 0;
    height: 100vh;

  }

</style>
