/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-04-04 13:15:14
 */
const ejs = require('ejs')
const Fs = require('fs')
const fs = Fs.promises
const path = require('path')
const ZIP = require('jszip')

// 提供路径读取函数
const readFile = async (filePath) => {
  const r = await fs.readFile(filePath, 'utf8')
  return r
}

// 获得路径
const getFilePath = (filePath) => {
  return path.resolve(__dirname, filePath)
}

// 创建 list 文件夹
const listMkdir = async () => {
  await fs.mkdir(getFilePath('../list')) // 创建文件夹
}

// 创建package文件(拷贝)
const packageJson = () => {
  fs.copyFile(getFilePath('./package.ejs'), getFilePath('../list/package.json'))
}

// 创建index.js文件
const indexJs = async (data) => {
  const template = await readFile(getFilePath('./index.ejs'))
  const renderData = {
    secret: data.secret,
    // cmd: "cd C:\\APP\\MyWorkLoad && git pull",
    cmd: `cd ${data.file} && ${data.cmd}`,
    path: data.url,
    port: data.port
  }
  const result = ejs.render(template, renderData)
  if (data.new) {
    await fs.writeFile(getFilePath('../list/index.js'), result)
    return '1'
  } else {
    return result
  }
}

async function createZIP() {
  const zip = new ZIP()

  // 读取文件内容
  const packageJSON = await readFile(getFilePath('./package.ejs'))
  const indexJS = await readFile(getFilePath('./index.ejs'))

  // 创建文件并解压
  zip.file('package.json', packageJSON)
  zip.file('index.js', indexJS)
  zip
    .generateAsync({
      type: 'nodebuffer', // node压缩类型
      compressionOptions: {
        level: 5 // 压缩级别
      }
    })
    .then(async function(content) {
      // 将压缩文件存储到静态文件中
      await fs.writeFile(getFilePath('../../static/example.zip'), content)
      return 1
    })
}

const create = async (renderData) => {
  if (!Fs.existsSync(getFilePath('../list'))) {
    listMkdir()
  }
  await packageJson()
  const resultState = await indexJs(renderData)
  await createZIP()
  // 生成压缩包
  return resultState
}

module.exports = create
