<template>
  <div>
    <el-table
      :data="tableData"
      style="width:100%"
    >
      <el-table-column
        prop="id"
        label="试卷ID"
        width="200"
      />
      <el-table-column
        prop="name"
        label="试卷名称"
      />
      <el-table-column
        prop="origin"
        label="发卷人"
      />
      <el-table-column
        #default="scope"
        label="状态"
      >
        <el-tag type="danger">
          {{ scope.row.status }}
        </el-tag>
      </el-table-column>
      <el-table-column label="查看信息" width="300" fixed="right">
        <el-button-group>
          <el-button>试卷</el-button>
          <el-button>发布信息</el-button>
        </el-button-group>
      </el-table-column>
      <el-table-column label="审阅操作" width="300" fixed="right">
        <el-button-group>
          <el-button type="danger" plain>打回</el-button>
          <el-button type="primary" plain>批准</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data() {
    return {
      tableData: [{
        id: '1000075888',
        name: '2021-2022-2大学英语六级模拟考试（3）',
        origin: '杨涛',
        time: '2022-3-01',
        status: '等待审核'
      }]
    }
  }
}
</script>

<style>

</style>
