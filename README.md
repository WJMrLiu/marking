# marking

## 初始化项目

```
yarn install
```

### 本地开发环境运行的命令

```
yarn run serve
```

### 生产环境测试运行的命令

```
yarn run buildtest
```

### 生产环境运行的命令

```
yarn run build
```

### 如何使用 axios 发送请求， 如果是 get 方式

首先下在 .vue 页面引入 request 例如

```
import request from "@utils/request.js"

使用的话就像下面这样
```

![avatar](/src/assets/img/get.jpg)

```
### 如何使用axios发送请求， 如果是post方式
首先下在 .vue 页面引入 request 例如
```

import request from "@utils/request.js"

使用的话就像下面这样

```
async updateFreshManInfo() {
  let result = await request({
    url: "/smmu/mobile/updateFreshmanInfo",
    method: "post",
    data: this.dataValidate
  });

if (result.data.code === "10000") {
  this.$router.push({
    name: "formSub",
    query: { result: result.data }
  });
```
