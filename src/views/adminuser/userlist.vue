<template>
    <div>
      <el-card class="box-card">
        <el-table
        :data="formdata">

          <el-table-column
          prop="nickname"
          label="昵称"
          width="150">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="个人简介"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="头像"
            width="180">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" style="width: 90px;height: 70px;">
            </template>
          </el-table-column>

        </el-table>
        <el-pagination
        :page-size="10"
        :pager-count="5"
        layout="prev, pager, next"
        :total="formdata.length">
      </el-pagination>
      </el-card>


    </div>
</template>

<script>
    export default {
        name: "userlist",
      data(){
          return {
            formdata:[]
          }
      },
      methods:{
          getdata(){
            this.$axios.get('/admin/adminUser/userlist').then( res => {
              console.log(res)
              if(res.code === 200){
                this.formdata = res.data
              }
            })
          }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped lang="scss">
.box-card{
  margin-top: 20px;

}
</style>
