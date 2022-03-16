<template>
  <div class="container">
    <el-card>
      <el-alert v-if="false" title="成功提示的文案" type="success" />
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        border="border"
      >
        <el-table-column label="创建时间" prop="date" align="center" width="100" />
        <el-table-column label="ID" align="center" width="100">
          <template #default="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column label="名称" prop="name" align="center" />
        <el-table-column label="发布人" prop="origin" align="center" width="100" />
        <el-table-column label="参加人数" prop="join" align="center" width="100" />
        <!--<el-table-column label="状态" width="100" align="center">-->
        <!--  <template #default="scope">-->
        <!--    <el-popover effect="light" trigger="hover" placement="top">-->
        <!--      <template #default>-->
        <!--        <p>开始时间: {{ scope.row.beginTime }}</p>-->
        <!--        <p>结束时间: {{ scope.row.endTime }}</p>-->
        <!--      </template>-->
        <!--      <template #reference>-->
        <!--        <div class="name-wrapper">-->
        <!--          <el-tag size="medium">{{ scope.row.status }}</el-tag>-->
        <!--        </div>-->
        <!--      </template>-->
        <!--    </el-popover>-->
        <!--  </template>-->
        <!--</el-table-column>-->
        <el-table-column label="操作" align="center" width="300">
          <template #default="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleSee(scope.$index, scope.row)"
            >查看</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>

          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PaperList',
  data() {
    return {
      tableData: [
        {
          id: '1000075885',
          date: '2022-03-01',
          name: '2021-2022-1普本大学英语三期末考试',
          origin: '张三',
          join: '26',
          status: '已结束',
          beginTime: '2021-12-27 13:28:40',
          endTime: '2021-12-27 15:09:42'
        },
        {
          id: '1000075886',
          date: '2022-03-01',
          name: '2021-2022-2普本大学英语三期末考试',
          origin: '张三',
          join: '36',
          status: '已结束',
          beginTime: '2021-12-27 13:28:40',
          endTime: '2021-12-27 15:09:42'
        }
      ],
      search: ''
    }
  },
  methods: {
    // TODO: 补充编辑功能
    handleEdit(index, row) {
      console.log(index, row.id)
    },
    // TODO: 补充删除功能
    handleDelete(index, row) {
      console.log(index, row.id)
    },
    // 跳转试卷查看
    handleSee(index, row) {
      console.log('正在查看试卷' + row.id)
      this.$router.push({ path: '/examination/create', query: { name: row.name }})
    },
    // 状态颜色
    tableRowClassName(index, row) {
      if (row.status === 'waring') {
        return 'warning-row'
      } else if (row.status === 'success') {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
