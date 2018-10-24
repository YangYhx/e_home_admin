<template>
  <el-row>
    <el-col :span="4">
      <sidetab></sidetab>
    </el-col>
    <el-col :span="20">
      <vue_head></vue_head>
      <div>
       <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import vue_head from '@/components/vue_head'
  import sidetab from '@/components/sidetab'
  import main_content from '@/components/main_content'
    export default {
        name: "home",
      components:{
        vue_head,
        sidetab,
        main_content
      }
    }
</script>

<style scoped lang="scss">
</style>
