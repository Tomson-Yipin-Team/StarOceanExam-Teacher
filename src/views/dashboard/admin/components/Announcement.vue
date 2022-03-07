<template>
  <div id="contain">
    <h2>公告</h2>
    <el-table
      :data="announce"
      style="width:100%"
      border="border"
    >
      <el-table-column label="日期" width="200" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="origin" label="发布者" width="200" align="center" />
      <el-table-column prop="contain" label="内容" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
  data() {
    return {
      announce: [{
        date: '2022-3-6',
        origin: 'Admin',
        contain: '欢迎使用考试管理系统'
      }]
    }
  }
}
</script>

<style scoped>
#contain{
  background-color: #ffffff;
  padding: 10px 20px 20px;
}

h2{
  text-align: center;
  color: #5a5e66;
}
</style>
