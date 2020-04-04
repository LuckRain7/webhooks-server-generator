<!--
 * @Description: 构建页面
 * @Author: LuckRain7
 * @Date: 2020-04-04 11:22:05
 -->
<template>
  <div class="Build">
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
      <div class="from-content">
        <a-form
          :form="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
          @submit="handleSubmit"
        >
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
      <!-- 代码显示 2 -->
      <div class="show-code">
        <pre>{{ code }}</pre>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'basic',
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      current: 0,
      code: null,
      steps: [
        {
          title: '填写信息',
          content: 'First-content'
        },
        {
          title: '生成代码',
          content: 'Second-content'
        },
        {
          title: '在服务器构建',
          content: 'Last-content'
        }
      ]
    }
  },
  methods: {
    next() {
      this.current++
    },
    prev() {
      this.current--
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          values.new = true

          const code = await this.$axios.$post('/api/create', values)
          this.code = code
          this.current++
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>
<style scoped lang="less">
.Build {
  width: 90%;
  margin: 30px auto;

  // 标题
  .title {
    text-align: center;
    margin-bottom: 30px;
  }

  // 内容北京
  .steps-content-bg {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;

    .from-content {
      width: 700px;
      margin-top: 20px;
      margin: 20px auto;
    }

    // 代码显示
    .show-code {
    }
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
