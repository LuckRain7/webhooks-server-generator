/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-04-04 13:14:11
 */

const Router = require('koa-router')()
const create = require('./template/create')
const add = require('./template/add')

Router.post('/api/create', async (ctx, next) => {
  const result = await create(ctx.request.body)
  ctx.body = result
})

Router.post('/api/add', async (ctx, next) => {
  const result = await add(ctx.request.body)
  ctx.body = result
})

module.exports = Router
