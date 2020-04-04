<!--
 * @Description: 欢迎页
 * @Author: LuckRain7
 * @Date: 2020-04-04 11:04:02
 -->
<template>
  <div class="container">
    <div>
      <h1 class="title">
        欢迎使用webhooks服务器端代码生成器
      </h1>
      <h2 class="subtitle">
        webhooks-server-generator
      </h2>
      <div class="links">
        <nuxt-link
          :to="{ path: '/build', query: { module: 'new' } }"
          class="button--green"
        >
          新建 webhooks 服务器
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/build', query: { module: 'add' } }"
          class="button--grey"
        >
          添加 webhooks 服务器端代码
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
