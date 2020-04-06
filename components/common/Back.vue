<!--
 * @Description:  返回按钮
 * @Author: LuckRain7
 * @Date: 2020-04-06 13:10:47
 -->

<template>
  <div class="back-btn" @click="$router.push('/')">
    <i class="el-icon-back"></i>
    <span> &lt; 主页</span>
  </div>
</template>
<style lang="less" scoped>
.back-btn {
  span {
    color: #3b8070;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
