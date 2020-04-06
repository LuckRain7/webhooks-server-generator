/*
 *  Description: 新增代码生成器
 *  Author: LuckRain7
 *  Date: 2020-04-06 13:19:13
 */
const ejs = require('ejs')
const Fs = require('fs')
const fs = Fs.promises
const path = require('path')

// 提供路径读取函数
const readFile = async (filePath) => {
  const r = await fs.readFile(filePath, 'utf8')
  return r
}

// 获得路径
const getFilePath = (filePath) => {
  return path.resolve(__dirname, filePath)
}

async function getCode(data) {
  // 读取文件内容
  const indexJSTemplate = await readFile(getFilePath('./index_add.ejs'))

  // index.js 模板渲染
  const renderData = {
    secret: data.secret,
    // cmd: "cd C:\\APP\\MyWorkLoad && git pull",
    cmd: `cd ${data.file} && ${data.cmd}`,
    path: data.url,
    port: data.port,
    name: data.name
  }
  const indexJS = ejs.render(indexJSTemplate, renderData)

  return indexJS
}

const add = async (renderData) => {
  const result = await getCode(renderData)
  return result
}

module.exports = add
