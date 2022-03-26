<template>
  <div class="container">
    <el-card>
      <el-alert v-if="false" title="成功提示的文案" type="success" />
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        border="border"
      >
        <el-table-column label="发布时间" prop="date" align="center" width="100" fixed />
        <el-table-column label="ID" align="center" width="100">
          <template #default="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column label="名称" prop="name" align="center" width="500" />
        <el-table-column label="发布人" prop="origin" align="center" width="100" />
        <el-table-column label="参加人数" prop="join" align="center" width="100" />
        <el-table-column label="状态" width="100" align="center">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top">
              <template #default>
                <p>开始时间: {{ scope.row.beginTime }}</p>
                <p>结束时间: {{ scope.row.endTime }}</p>
              </template>
              <template #reference>
                <div class="name-wrapper">
                  <el-tag size="medium" :type="tagColor(scope.$index,scope.row)">{{ scope.row.status }}</el-tag>
                </div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="250" fixed="right">
          <template #default="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handlePreview(scope.$index, scope.row)"
            >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="监考信息" :visible.sync="showDoing" width="70%">
      <Doing :see-id="seeId" :see-name="seeName" />
    </el-dialog>
    <el-dialog title="监考信息" :visible.sync="showFinish" width="70%">
      <Finish :see-id="seeId" :see-name="seeName" />
    </el-dialog>
    <el-dialog title="监考信息" :visible.sync="showWait" width="70%">
      <Wait :see-id="seeId" :see-name="seeName" />
    </el-dialog>

  </div>
</template>

<script>
import paperContent from '@/api/paper-content'
import Doing from '@/views/examination/all/components/Doing'
import Finish from '@/views/examination/all/components/Finish'
import Wait from '@/views/examination/all/components/Wait'
export default {
  name: 'Index',
  components: {
    Doing,
    Finish,
    Wait
  },
  data() {
    return {
      tableData: paperContent.examinations,
      search: '',
      showDoing: false,
      showFinish: false,
      showWait: false,
      seeName: '',
      seeId: ''
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
    // 查看考试情况
    handlePreview(index, row) {
      this.seeName = row.name
      this.seeId = row.id
      if (row.status === '正在进行') {
        this.showDoing = true
      } else if (row.status === '已结束') {
        this.showFinish = true
      } else if (row.status === '即将开始') {
        this.showWait = true
      } else {
        console.log('error')
      }
    },
    tagColor(index, row) {
      if (row.status === '已结束') {
        return 'success'
      } else if (row.status === '正在进行') {
        return 'warning'
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
