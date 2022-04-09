<template>
  <div>
    <!--<el-row class="app-container">-->
    <!--<el-col :xs="20" :sm="6" :md="6" :lg="6" :xl="6" :offset="1">-->
    <!--  <el-card>-->
    <!--    <div slot="header">-->
    <!--      <el-row type="flex" justify="center">-->
    <!--        操作-->
    <!--      </el-row>-->
    <!--    </div>-->
    <!--    <el-row type="flex" justify="center">-->
    <!--      <el-button class="button" @click="createClass">创建新的班级</el-button>-->
    <!--    </el-row>-->
    <!--    <el-row type="flex" justify="center">-->
    <!--      <el-button class="button">批准所有</el-button>-->
    <!--    </el-row>-->
    <!--    <el-row type="flex" justify="center">-->
    <!--      <el-button class="button">拒绝所有</el-button>-->
    <!--    </el-row>-->
    <!--  </el-card>-->
    <!--</el-col>-->
    <!--<el-col :xs="20" :sm="15" :md="15" :lg="15" :xl="15" :offset="1">-->
    <el-card style="height: 450px;margin-right: 20px">
      <div slot="header">
        <el-row class="card-title">
          <span>
            待审核列表
          </span>
          <span>
            <el-button-group>
              <el-button>通过全部</el-button>
              <el-button>拒绝全部</el-button>
            </el-button-group>
          </span>
        </el-row>
      </div>
      <el-table
        :data="tableData"
        style="width:100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="150px"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="100px"
        />
        <el-table-column
          prop="tip"
          label="备注"
        />
        <el-table-column
          label="操作"
          fixed="right"
          width="100px"
        >
          <el-button-group>
            <el-button size="mini" type="primary">批准</el-button>
            <el-button size="mini" type="danger">拒绝</el-button>
          </el-button-group>
        </el-table-column>
      </el-table>
    </el-card>
    <!--</el-col>-->
    <!--</el-row>-->
  </div>
</template>

<script>
export default {
  name: 'Action',
  data() {
    return {
      tableData: [{
        date: '2022-03-14',
        name: '程大伟',
        tip: '放我进去！！！'
      }, {
        date: '2022-03-15',
        name: '程小伟',
        tip: '再不放我进去，我可要'
      }]
    }
  },
  methods: {
    createClass() {
      this.$router.push({ path: '/classroom/join' })
    }
  }
}
</script>

<style scoped>
.card-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
