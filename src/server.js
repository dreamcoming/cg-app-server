import Koa from 'koa';
import koaCors from 'koa-cors';
import koaXmlBody from 'koa-xml-body';
import koaBody from 'koa-body';
import Router from 'koa-router';

const port = 6655;
const router = new Router();

// 实例化
const app = new Koa();
app.proxy = true;

// 配置koa
app.use(koaCors());
app.use(koaXmlBody());
app.use(koaBody({
  patchNode: true,
  patchKoa: false,
  multipart: true,
  formidable: {
    maxFileSize: 10 * 1024 * 1024,
  },
  strict: false,
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

router.get('/cg/ctrl', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'OK';
});

// 欢迎信息
console.log(`✈️  服务端已启动，监听端口${port}`);
