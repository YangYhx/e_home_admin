<template>
  <div>
    <el-card>
      <div class="form_wrap">
       <el-table
       :data="tabeldata">
          <el-table-column
          label="新闻标题"
          prop="title"
          width="200">
          </el-table-column>
         <el-table-column
           label="新闻分类"
           prop="type.title"
           width="200">
         </el-table-column>
         <el-table-column
           label="新闻头图"
           width="200">
           <template slot-scope="scope">
             <img :src="scope.row.pic" style="width: 50%;height: 50%;">
           </template>
         </el-table-column>
         <el-table-column
           label="操作">
           <template slot-scope="scope">
             <el-button type="primary" size="mini" @click="hendEdit(scope.row._id)">编辑</el-button>
             <el-button type="danger" size="mini" @click="hendDel(scope.row._id)">删除</el-button>
           </template>
         </el-table-column>
       </el-table>
      </div>
      <el-pagination
        :page-size="5"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </el-card>
  </div>

</template>

<script>
    export default {
        name: "newlist",
      data(){
          return {
            tabeldata:[],
            pn:1,
            size:5,
            total:0
          }
      },
      methods:{
          getdata(){
            this.$axios.get('/admin/news/newslist',{page:this.pn,page_size:this.size}).then( res => {
              if( res.code === 200){
                this.tabeldata = res.data
                this.total = res.total
              }
            })
          },
        handleCurrentChange(e){
            this.pn = e
          this.getdata()
        },
        hendEdit(id){
            // this.$router.push(`/admin/newsdetail/${id}`)
          //******************************************************
          //              这一种传参只能是name
          this.$router.push({name:'newsdetail',params:{
            id
            }})
          //**************************************************
          // console.log(id)
        },
        hendDel(id){
            let data = {
              id
            }
            this.$axios.post('/admin/news/delnews',data).then( res => {
             if( res.code === 200){
               this.$message.success(res.msg)
               this.getdata()
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

</style>
