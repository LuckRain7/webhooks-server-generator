/*
 *  Description: antd-ui 按需引入
 *  Author: LuckRain7
 *  Date: 2020-04-04 11:04:02
 */
import Vue from 'vue'
import Button from 'ant-design-vue/lib/button'
import Steps from 'ant-design-vue/lib/steps'
import Form from 'ant-design-vue/lib/form'

import Input from 'ant-design-vue/lib/input'

Vue.use(Button)
Vue.use(Steps) // 步骤条
Vue.use(Form)
Vue.use(Form.Item)
Vue.use(Input)
