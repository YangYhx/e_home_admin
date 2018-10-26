<template>
    <div class="container">
      <div class="login-box">
        <div class="title">请登录</div>
        <el-form :model="formdata" label-width="80px" label-position="left">
          <el-form-item label="用户名">
            <el-input v-model="formdata.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formdata.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" class="btn">取消</el-button>
          <el-button type="primary" class="btn" @click="login">登录</el-button>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return {
            formdata:{
              username:'',
              password:''
            }
          }
      },
      methods:{
        login(){
          this.$axios.post('/admin/adminUser/login',this.formdata).then( res => {
            console.log(res)
            if(res.code === 200){
              this.$message.success(res.msg)
              this.$router.push('/admin')
            }
            else {
              this.$message.error(res.msg)
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.container{
  width: 100vw;
  height: 100vh;
  background: #666;
  text-align: center;
  padding-top: 150px;


  .login-box{
    width: 500px;
    height: 300px;
    margin: auto;
    background: #fff;
    padding: 10px;
    border-radius: 10px;


    .title{
      text-align: center;
      font-size: 16px;
      height: 50px;
      line-height: 50px;
    }
  }

  .btn{
    margin: 30px;
  }
}
</style>
