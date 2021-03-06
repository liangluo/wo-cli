# wo-cli

运营活动开发初始化脚手架

## 安装

```shell
npm install -g wo-cli
```
如果已经安装过，请更新wo-cli包

## 配置

为了保证使用方便，需要全局安装node-sass
```shell
npm install -g node-sass
```
## 更新wo-cli包

为了保证wo-cli的最新版本，全局卸载wo-cli,然后在安装
```shell
npm uninstall -g wo-cli
npm install -g wo-cli
```


## 使用

### 新建项目

```shell
wo init
```

参数说明：
```shell
  -n, --name [name]         项目名
  -t, --type [type]         项目类型：vue(默认) 
```
根据提示输入项目名称、设计稿倍数、开发者名称，即初始化项目完成;


### 安装依赖
npm install

创建完毕项目后，进入项目跟目录`npm install`安装依赖，即可开始开发

## 开发项目
### sass编译

```shell
npm run sass
```
监控`scss`文件夹，编译到`css`文件夹

### 打包项目

```shell
npm run publish
```
合并雪碧图，图片base64 inline到css

## 说明

### 项目目录
#### compent
存放组件文件夹,包含js,css
####  slice
雪碧图需要放在slice目录
需要inline到css的图片，在slice目录新建inline文件夹，把图片放进去即可
雪碧图可以区分合并，slice目录下新建文件夹可以合并为新的雪碧图
####  项目说明
直接npm下来的项目一个完整的事例，可以在事例上进行修改；

### 图片压缩
使用 [image-minify] 实现图片压缩功能，png图片压缩效果比较令人满意，默认会开启png图片压缩
```javascript
imageMinCheck: false, // 检查图片是否压缩了
imageMinify: {  // 图片压缩配置
  // spritePngOnly: true, // 只压缩png格式的雪碧图
  png: true,  // 压缩png格式的图片
  jpg: false  // 压缩jpg格式的图片
}
```

如果极致要求，可以采用手动压缩的方式，项目配置如下
```javascript
imageMinCheck: true, // 检查图片是否压缩了
imageMinify: false,  // 图片压缩配置
```
手动压缩图片推荐 [tinypng] 或者 [optimizilla]   
合并完成的雪碧图，会生成在publish目录，把雪碧图压缩后放到`./generate_sprite/min`目录，再运行`npm run publish`即可自动替换publish目录的雪碧图为压缩后的资源，如果雪碧图没有调整就无需每次`publish`都重复压缩雪碧图  


[image-minify]: https://github.com/perfey/image-minify
[tinypng]: https://tinypng.com/
[optimizilla]: http://optimizilla.com/zh/
