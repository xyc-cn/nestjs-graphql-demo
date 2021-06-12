## NestJs-GraphQL-Demo

在官方的脚手架基础上，新增了
1. sessionService 传递cookie header 等参数到GraphQL的service
2. 全局暴露httpClientService， 定制http请求客户端
3. 添加了logService，定制日志打印(待完善)

```bash
# run mock server
$ npm run mock

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

[MIT licensed](LICENSE).
