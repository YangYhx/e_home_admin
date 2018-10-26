<template>
    <div>
        <el-form label-position="left" style="margin: 20px">
          <el-form-item label="分类标题" required>
            <el-input v-model="formdata.title"  style="width: 500px;"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="hendleadd" style="margin: 40px"> 添加</el-button>
    </div>
</template>

<script>
    export default {
        name: "addcategory",
      data(){
          return {
            formdata:{
              title:''
            }
          }
      },
      methods:{
        hendleadd(){
          this.$axios.post('/admin/news/addcategory',this.formdata).then( res => {
            if( res.code === 200){
              this.$message.success(res.msg)
              this.formdata = {
                title:''
              }
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
