<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
*  你好呀！这里是南华大学计算机学院USC-AIR团队！
*  真开心你来到了这个界面~
*  现在，让我们一起看看我的动态简历吧！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* 太高了 */
.styleEditor {
  height: 45vh;
}
/* 代码高亮 */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成更适合我们观看的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `
		
USC-AIR
----
南华大学计算机学院USC-AIR（Artificial Intelligence Robot）团队为院直属团队，于2017年12月成功申请为校级团队，并入驻南华大学创新创业学院工程实训中心。

Contact
---

* Address: **the University of South China - 28 Changsheng West Road- Hunan, China**
* E-mail: **airusc@foxmail.com**
* QQ：**3458038461**
* Blog: **[https://uscair.club](https://airusc.github.io/)**
* Introduction:**A professional team studying artificial intelligence and robotics**
* Instructor:**Dr. Mao Yu**
* GitHub: **[https://github.com/AIR-USC](https://github.com/AIR-USC)**

发展理念
----

* 机器人编程
* 底层开发
* 硬件维护
* 学术研究
* 项目工程

学术科研
---
* 数字图像处理
* 机器学习
* 人工智能

获奖经历
----

### National Competition
- **One Second Prize & One Third Prize**, [2017 World Robot Contest Fighting Robot Competition]
<img src='https://s1.ax1x.com/2020/05/05/YF7mGj.jpg' width="100%" >
<img src='https://s1.ax1x.com/2020/05/05/YFqmJe.jpg' width='100%'>
- **One Second Prize & Three Third Prizes**,[“Soft Silver Robot Cup” China robot skill competition] Dec. 2018
<img src='https://s1.ax1x.com/2020/05/05/YFLcHP.png' width="100%">
<img src='https://s2.ax1x.com/2020/02/01/1GgUd1.jpg' width="100%">
<img src='https://s1.ax1x.com/2020/05/05/YFOCHx.png' width="100%">
<img src='https://s1.ax1x.com/2020/05/05/YFO7xH.png' width="100%">

### Provincial Competition
- **One First Prize & Two Third Prizes**, [The 15th Hunan University Student Computer Program Design Competition] Aug. 2019
<img src='https://s2.ax1x.com/2020/02/01/1Gy3xH.jpg' width="100%">
<img src='https://s2.ax1x.com/2020/02/01/1GyRoV.jpg' width="100%">

- **One Third Prize**, [The 14th Hunan University Student Computer Program Design Competition] Sep. 2018
<img src='https://gowi-picgo.oss-cn-shenzhen.aliyuncs.com/picgo/ACM201801.jpg' width="100%">

- **Two Third Prize**, [The 13th Hunan University Student Computer Program Design Competition] Sep. 2017
<img src='https://s1.ax1x.com/2020/05/05/YFvKbR.jpg' width="100%">
<img src='https://s1.ax1x.com/2020/05/05/YFvaqA.jpg' width="100%">

科研成就
---

 **Grade 16 Qiu Zhongxi published EI paper as first author**
<img src='https://s2.ax1x.com/2020/02/01/1GcK3D.png' width="100%">


> 回到博客主页，请[点击此处](http://uscair.club)！
`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
