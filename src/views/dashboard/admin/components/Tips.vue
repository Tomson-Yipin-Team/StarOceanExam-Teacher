<template>
  <div>
    <el-card :body-style="{padding:'0px'}" class="container">
      <div slot="header" class="card-header">
        <span>快捷跳转</span>
        <span>
          <el-button type="text" class="diy-button">自定义</el-button>
        </span>
      </div>
      <el-table
        :data="formData"
        style="width: 100%"
        :show-header="false"
        class="table"
        :row-style="{height:'50px'}"
        :cell-style="{padding:'0 0'}"
        @row-click="openPage"
      >
        <el-table-column prop="name" label="名称" />
        <el-table-column label="操作" fixed="right" width="100px">
          <el-button type="primary" plain size="mini">跳转</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data() {
    return {
      formData: [
        {
          name: '批阅试卷'
        },
        {
          name: '管理班级'
        }
      ]
    }
  },
  methods: {
    openPage(row) {

    }
  }
}
</script>

<style scoped>
.card-header{
  display:table-cell;
  vertical-align:middle;
  height:20px;
}
.container{
  margin-bottom: 20px;
}
</style>
