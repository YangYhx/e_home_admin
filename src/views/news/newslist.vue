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
           prop="type"
           width="100">
         </el-table-column>
         <el-table-column
           label="新闻头图"
           width="200">
           <template slot-scope="scope">
             <img :src="scope.row.pic" style="width: 100%;height: 100%;">
           </template>
         </el-table-column>
         <el-table-column
           label="操作"
           width="100">
           <template>
             <el-button>编辑</el-button>
             <el-button>删除</el-button>
           </template>
         </el-table-column>
       </el-table>
      </div>
    </el-card>
  </div>

</template>

<script>
    export default {
        name: "newlist",
      data(){
          return {
            tabeldata:[]
          }
      },
      methods:{
          getdata(){
            this.$axios.get('/admin/news/newslist').then( res => {
              console.log( res )
              if( res.code === 200){
                this.tabeldata = res.data
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
