<template>
  <div>
    <el-card>
      <div class="form_wrap">
        <el-form :model="formdata" label-width="80px" label-position="left">
          <el-form-item label="新闻标题" required>
            <el-input v-model="formdata.title"></el-input>
          </el-form-item>
          <el-form-item label="新闻头图" required>
            <upimg v-model="formdata.pic"></upimg>
          </el-form-item>
          <el-form-item label="新闻内容" required>
            <quill v-model="formdata.content" v-on:quiller="quiller"></quill>
          </el-form-item>
          <el-form-item label="新闻分类" required>
           <el-select v-model="formdata.type" placeholder="请选择分类">
             <el-option
             v-for="(item,index) in categorydata"
             :key="index"
             :value="item._id"
             :label="item.title"
             ></el-option>
           </el-select>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submit" v-if="isshow">提交</el-button>
        <el-button type="primary" @click="save" v-else>保存修改</el-button>
      </div>
    </el-card>

  </div>

</template>

<script>
  import upimg from '../../components/upIMG'
  import quill from '../../components/quill'
    export default {
      props:{
          value:String
      },
        name: "addnews",
      components:{
          upimg,
          quill
      },
      data(){
          return {
            formdata:{
              pic:'',
              title:'',
              content:this.value,
              type:'',
            },
            categorydata:[],
            isshow:true
          }
      },
      methods:{
        submit(){
          this.$axios.post('/admin/news/addnews',this.formdata).then( res => {
            if(res.code === 200){
              this.$message.success(res.msg)
              this.formdata = {
                pic:'',
                title:'',
                content:'',
                type:'',
                id:''
              }
            }
          })
        },
        quiller(data){
          this.formdata.content = data
        },
        getcategory(){
          this.$axios.get('/admin/news/category').then( res => {
            console.log( res )
            if( res.code == 200){
              this.categorydata = res.data
            }
          })
        },
        getformdata(){
          console.log(1)
          this.id = this.$route.params.id
          console.log(this.id)
          if(this.id){
            this.isshow = false
            this.$axios.get(`/admin/news/newsdetail/${this.id}`).then( res => {
              console.log(res)
              if( res.code === 200){
                this.formdata = res.detaildata
              }
            })
          }
        },
        save(){
          console.log( this.formdata )
          this.$axios.post('/admin/news/newsdetail',this.formdata).then( res => {
            console.log( res )
            if( res.code === 200){
              this.$message.success(res.msg)
              this.$router.push('/admin/newslist')
              this.formdata = {
                pic:'',
                title:'',
                content:'',
                type:'',
                id:''
              }
            }
          })

        }
      },
      created(){
        this.getcategory()
        this.getformdata()
      },
      watch:{
        // '$route':'getformdata'
      }
    }
</script>

<style scoped lang="scss">
  .form_wrap{
    width: 700px;
    padding: 10px;
  }
</style>
