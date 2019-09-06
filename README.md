# CloudDisk(C-DISK)> C-DISK## 体验- [点我下载](https://raw.githubusercontent.com/zjinh/CloudDisk/master/release/CloudDisk_setup_1.3.0.exe)## 🖥 应用界面#### 主界面   ![主界面](screen/disk.gif)   ![主界面](screen/disk.png)#### pdf阅读器  ![pdf阅读器](screen/pdf.gif)#### 音乐播放器![音乐播放器](screen/music.gif)#### 视频播放器![视频播放器](screen/video.gif)#### 图片查看工具![图片查看工具](screen/photo.gif)#### 代码查看工具![代码查看工具](screen/viewer.gif)---## 头脑发热开发的网盘小应用偶然机会接触electron，后学习了vue，搬砖之余开发了C-DISK，然而并没有开发完，还有些许问题C-DISK是一款集上传下载、文件在线查看的工具。## ✨ 功能亮点- 🕹 简洁的图形操作界面- 💾 支持断点上传下载文件- 🔔 传输任务完成通知提醒- 🌍 在线解压200M以下文件（服务端支持）- ✨ 音乐文件在线查看- ✨ 视频文件在线查看- ✨ 图片文件在线查看- ✨ pdf文件在线查看- ✨ 多种开发文件在线查看，支持代码高亮## 🛠 使用的技术栈- [Electron](https://electronjs.org/)- [electron-vue](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/) - [electron-builder](https://www.electron.build/) - [Vue](https://vuejs.org/)- [VueX](https://vuex.vuejs.org/)- [iView](https://www.iviewui.com/)- [Element](https://element.eleme.io)## 🛠 使用的插件- [pdf.js](https://github.com/mozilla/pdf.js)- [syntaxhighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter)## ⌨️ 本地开发### 克隆代码```bashgit clone https://github.com/zjinh/CloudDisk.git```### 安装依赖```bashcd CloudDisknpm i```### 淘宝的npm源```bashnpm config set registry 'https://registry.npm.taobao.org'npm config set ELECTRON_MIRROR='https://npm.taobao.org/mirrors/electron/'```或者使用[Yarn](https://yarnpkg.com/)安装依赖### 运行项目```bashnpm run dev```### 打包项目```bashnpm run build```### 注意:bangbang::bangbang::bangbang:项目不包含服务端:smile::smile: