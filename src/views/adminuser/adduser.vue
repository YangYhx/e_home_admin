<template>
    <div>
      <div class="form_wrap">
        <el-form :model="formdata" label-width="80px" label-position="left">
          <el-form-item label="用户名" required>
            <el-input v-model="formdata.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" required>
            <el-input type="password" v-model="formdata.password" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="昵称" required>
            <el-input type="text" v-model="formdata.nickname" placeholder="请输入用户昵称"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="formdata.sex" placeholder="请选择性别">
              <el-option value="1" label="男"></el-option>
              <el-option value="0" label="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="个人描述">
            <el-input type="textarea" v-model="formdata.desc"></el-input>
          </el-form-item>
          <el-form-item label="上传头图" required>
            <upimg v-model="formdata.avatar"></upimg>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>

    </div>
</template>

<script>
  import upimg from '../../components/upIMG'
    export default {
        name: "adduser",
      components:{
        upimg
      },
      data(){
          return {
            formdata:{
              username:'',
              password:'',
              sex:'',
              desc:'',
              avatar:'',
              nickname:''
            }
          }
      },
      methods:{
        submit(){
          this.$axios.post('/admin/adminUser',this.formdata).then( res => {
            if(res.code === 200){
              this.$message.success(res.msg)
              this.formdata = {
                username:'',
                password:'',
                sex:'',
                desc:'',
                avatar:'',
                nickname:''
              }
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .form_wrap{
    width: 400px;
    padding: 10px;
  }


</style>
