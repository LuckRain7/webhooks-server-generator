<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-04-04 20:17:55
 -->

<template>
  <div class="Add">
    <back></back>
    <!-- 标题 -->
    <div class="title">
      添加 webhooks 服务器端代码
    </div>
    <!-- 步骤条 -->
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <!-- 内容 -->
    <div class="steps-content-bg">
      <!-- 表单 1 -->
      <transition enter-active-class="fadeInLeft">
        <div v-if="current === 1" class="from-content">
          <a-form
            :form="form"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            @submit="handleSubmit"
          >
            <a-form-item label="项目名称">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: '请填写项目名称!' }]
                  }
                ]"
                placeholder="填写项目名称（仅限英文6字符）"
              />
            </a-form-item>

            <a-form-item label="校验秘钥">
              <a-input
                v-decorator="[
                  'secret',
                  {
                    rules: [{ required: true, message: '请填写校验秘钥!' }]
                  }
                ]"
                placeholder="填写协商校验秘钥"
              />
            </a-form-item>

            <a-form-item label="项目文件地址">
              <a-input
                v-decorator="[
                  'file',
                  {
                    rules: [{ required: true, message: '请填写项目文件地址!' }]
                  }
                ]"
                placeholder="填写在服务器上的项目地址"
              />
            </a-form-item>

            <a-form-item label="CMD命令">
              <a-input
                v-decorator="[
                  'cmd',
                  {
                    rules: [{ required: true, message: '请填写CMD命令' }]
                  }
                ]"
                placeholder="填写进入项目后执行的命令 用 & 进行分割"
              />
            </a-form-item>

            <a-form-item label="接受请求地址">
              <a-input
                v-decorator="[
                  'url',
                  {
                    rules: [{ required: true, message: '请填写接受请求地址' }]
                  }
                ]"
                placeholder="填写接受请求地址"
              />
            </a-form-item>

            <a-form-item label="端口号">
              <a-input
                v-decorator="[
                  'port',
                  {
                    rules: [{ required: true, message: '请填写端口号' }]
                  }
                ]"
                placeholder="填写端口号"
              />
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
              <a-button type="primary" html-type="submit">
                确定
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </transition>
      <!-- 代码显示 2 -->
      <transition enter-active-class=" fadeInLeft">
        <!-- <transition name="test"> -->
        <div v-if="current === 2" class="download ">
          <pre>{{ code }}</pre>
        </div>
      </transition>
      <!-- 服务器构建 -->
      <transition enter-active-class="fadeInLeft">
        <div v-if="current === 0" class="server ">
          <p>先按要求填写 webhooks 的信息</p>
          <p>系统会为你生成代码</p>
          <p>将代码粘贴到服务器项目 <span class="red">index.js</span> 中</p>
          <p>在服务器中重启服务</p>
        </div>
      </transition>
    </div>
    <!-- 按钮 -->
    <div class="steps-action">
      <a-button v-if="current === 0" type="primary" @click="next">
        下一步
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$router.push('/')"
      >
        返回主页
      </a-button>
      <!-- <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        上一步
      </a-button> -->
    </div>
  </div>
</template>
<script>
import Back from '../../components/common/Back.vue'

import '@/node_modules/ant-design-vue/lib/button/style/index.css'
import '@/node_modules/ant-design-vue/lib/steps/style/index.css'
import '@/node_modules/ant-design-vue/lib/form/style/index.css'
import '@/node_modules/ant-design-vue/lib/input/style/index.css'

export default {
  layout: 'basic',
  components: {
    Back
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      current: 0,
      code: null,
      steps: [
        {
          title: '阅读说明',
          content: 'First-content'
        },
        {
          title: '填写表单',
          content: 'Second-content'
        },
        {
          title: '生成代码',
          content: 'Last-content'
        }
      ]
    }
  },
  methods: {
    next() {
      this.current++
    },
    back() {
      this.$router.push('/')
    },
    prev() {
      this.current--
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const code = await this.$axios.$post('/api/add', values)

          console.log(code)

          this.code = code
          this.current++
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
// 引入动画
@import '../../style/animate.css';

.Add {
  width: 80%;
  margin: 30px auto;

  // 内容背景
  .steps-content-bg {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;

    min-height: 500px;

    .from-content {
      width: 700px;

      margin: 40px auto;
    }

    // 文件下载
    .download {
      // width: 500px;
      margin: 40px 30px;
    }

    .server {
      width: 400px;
      margin: 40px auto;

      p {
        font-size: 20px;
      }

      button {
        margin-top: 40px;
        float: right;
        margin-right: 20px;
      }
    }
  }

  .steps-action {
    margin-top: 24px;
  }
}
.red {
  color: red;
}
</style>
