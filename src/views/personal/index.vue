<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :xs="22" :sm="22" :md="22" :lg="9" :xl="9" :offset="1" class="content">
        <UserCard />
      </el-col>
      <el-col :span="12" :offset="1" class="content" />
    </el-row>
  </div>
</template>

<script>

import UserCard from '@/views/personal/componments/UserCard'

export default {
  name: 'PersonIndex',
  components: { UserCard }
}
</script>

<style scoped>
.container{
  background-color: #eff1f4;

}

.content{
  margin-top: 18px;
}

</style>
