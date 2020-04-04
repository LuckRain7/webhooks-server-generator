/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-04-04 13:14:11
 */

const Router = require('koa-router')()
const create = require('./template/create')

Router.post('/api/create', async (ctx, next) => {
  const result = await create(ctx.request.body)
  ctx.body = result
})

module.exports = Router
