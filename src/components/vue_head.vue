<template>
    <div>
      <div class="header">
        党建E家后台管理系统
        <div class="logout" @click="logout">
          退出登录
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      methods:{
        logout(){
          this.$axios.post('/admin/adminUser/logout').then( res => {
            if( res.code == 200){
              this.$message.success(res.msg)
              this.$router.push('/')
            }
          })
        }
      }
    }
</script>

<style scoped>
.header{
  height: 80px;
  font-size: 16px;
  text-align: center;
  line-height: 80px;
  border-bottom: 1px solid #ddd;
}
  .logout{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;
    height: 50px;
    background: #fff;
    color: red;
    cursor: pointer;

  }
</style>
