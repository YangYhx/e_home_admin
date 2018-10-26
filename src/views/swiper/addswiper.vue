<template>
  <div>
    <el-card>
      <el-form label-position="left" style="width: 500px">
        <el-form-item label="轮播图标题" required>
          <el-input v-model="formdata.title"></el-input>
        </el-form-item>
        <el-form-item label="轮播图头图"  required>
          <uping v-model="formdata.pic"></uping>
        </el-form-item>
        <el-form-item label="选择新闻">
          <el-select v-model="formdata.newcontent">
            <el-option v-for="(item,index) in newlist" :key="index" :value="item._id" :label="item.title"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="hendleadd" v-if="isshow">添 加</el-button>
      <el-button type="primary" @click="hendlesave" v-else>保存修改</el-button>
    </el-card>
  </div>

</template>

<script>
  import uping from  '@/components/upIMG'
    export default {
        name: "addswiper",
      components:{
        uping
      },
      data(){
          return {
            formdata:{
              title:'',
              pic:'',
              newcontent:'',
              id:''
            },
            newlist:[],
            isshow:true
          }
      },
      methods:{
        hendleadd(){
          this.$axios.post('/admin/swiper/addswiper',this.formdata).then( res => {
            if( res.code  === 200){
              this.$message.success(res.msg)
              this.formdata = {
                title:'',
                pic:'',
                newcontent:'',
                id:''
              }
            }
          })
        },
        getnews(){
          this.$axios.get('/admin/news/newslist').then( res => {
            console.log( res.data )
            if( res.code === 200){
              this.newlist = res.data
            }else {
              this.$message.error(res.msg)
            }
          })
        },
        getdetail(){
          this.formdata.id = this.$route.params.id
          console.log( this.formdata.id )
          if(this.formdata.id){
            this.isshow = false
            this.$axios.get(`/admin/swiper/${this.formdata.id}`).then( res => {
              if( res.code === 200){
                this.formdata = res.data
              }
            })
          }
        },
        hendlesave(){
          this.$axios.post('/admin/swiper/editswiper',this.formdata).then( res => {
            if( res.code === 200){
              this.$message.success(res.msg)
              this.$router.push('/admin/swiperlist')
            }
          })
        }
      },
      created(){
          this.getnews()
        this.getdetail()
      }
    }
</script>

<style scoped>

</style>
