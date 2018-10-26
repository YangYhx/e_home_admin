<template>
    <div>
      <el-upload
        class="avatar-uploader"
        action="https://upload-z1.qiniup.com"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :data="formdata">
        <img v-if="imgUrl" :src="imgUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
    props:{
      value:String
    },
        name: "upIMG",
      data(){
          return {
            formdata:{
              token:''
            },
            imgUrl:this.value
          }
      },
      methods:{
          gettoken(){
            axios.get('http://upload.yaojunrong.com/getToken').then( res => {
              if(res.data.code === 200){
                this.formdata.token = res.data.data
              }

            })
          },
      handleAvatarSuccess(res) {
        this.imgUrl = res.url
        this.$emit('input',this.imgUrl)
        }
      },
      created(){
          this.gettoken()
      },
      watch:{
      value(val){
        this.imgUrl=val
      }
      }
    }
</script>

<style scoped lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #666;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
