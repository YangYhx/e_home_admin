<template>
  <div>
    <el-table
    :data="formdata"
    class="table-wrap">
      <el-table-column
        label="头图"
        width="300">
        <template slot-scope="scope">
          <img :src="scope.row.pic" style="width: 80px;height: 60px;">
        </template>
      </el-table-column>
      <el-table-column
      width="200"
      prop="title"
      label="标题">
      </el-table-column>
      <el-table-column
        width="200"
        prop="newcontent.title"
        label="内容标题">
      </el-table-column>
      <el-table-column
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button type="danger" @click="handleDel(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
    export default {
        name: "swiperlist",
      data(){
          return {
            formdata:[],
            pn:1,
            size:10
          }
      },
      methods:{
          getdata(){
            this.$axios.get('/admin/swiper/swiperlist',{page:this.pn,page_size:this.size}).then( res => {
              console.log(res )
              if( res.code === 200){
                this.formdata = res.data
              }
            })
          },
        handleEdit(id){
          this.$router.push({name:'editswiper',params:{
            id
            }})
        },
        handleDel(id){
          this.$axios.post(`/admin/swiper/delswiper?id=${id}`).then( res => {
            if( res.code === 200){
              this.getdata()
              this.$message.success(res.msg)
            }
          })
        }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped>
.table-wrap{
  padding: 20px;
}
</style>
