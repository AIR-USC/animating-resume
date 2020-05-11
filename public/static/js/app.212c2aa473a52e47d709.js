webpackJsonp([1],{40:function(n,t){},41:function(n,t,e){e(87);var r=e(14)(e(48),e(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,t,e){e(86);var r=e(14)(e(49),e(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,t,e){e(85);var r=e(14)(e(46),e(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,t,e){e(88);var r=e(14)(e(47),e(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),s=e.n(i),a=e(24),c=e.n(a),u=e(42),l=e.n(u),d=e(41),h=e.n(d),m=e(40);e.n(m);t.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:h.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 你好呀！这里是南华大学计算机学院USC-AIR团队\n* 真开心你来到了这个界面~\n* 现在，让我们一起看看我的动态简历吧！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成更适合我们观看的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"\nUSC-AIR\n----\n南华大学计算机学院USC-AIR（Artificial Intelligence Robot）团队为院直属团队，于2017年12月成功申请为校级团队，并入驻南华大学创新创业学院工程实训中心。\n\nContact\n---\n\n* Address: **the University of South China - 28 Changsheng West Road- Hunan, China**\n* E-mail: **airusc@foxmail.com**\n* QQ：**3458038461**\n* Blog: **[https://uscair.club](https://airusc.github.io/)**\n* Introduction:**A professional team studying artificial intelligence and robotics**\n* Instructor:**Dr. Mao Yu**\n* GitHub: **[https://github.com/AIR-USC](https://github.com/AIR-USC)**\n\n发展理念\n----\n\n* 机器人编程\n* 底层开发\n* 硬件维护\n* 学术研究\n* 项目工程\n\n学术科研\n---\n* 数字图像处理\n* 机器学习\n* 人工智能\n\n获奖经历\n----\n\n### National Competition\n- **One Second Prize & One Third Prize**, [2017 World Robot Contest Fighting Robot Competition]\n<img src='https://s1.ax1x.com/2020/05/05/YF7mGj.jpg' width=\"100%\" >\n<img src='https://s1.ax1x.com/2020/05/05/YFqmJe.jpg' width='100%'>\n- **One Second Prize & Three Third Prizes**,[“Soft Silver Robot Cup” China robot skill competition] Dec. 2018\n<img src='https://s1.ax1x.com/2020/05/05/YFLcHP.png' width=\"100%\">\n<img src='https://s2.ax1x.com/2020/02/01/1GgUd1.jpg' width=\"100%\">\n<img src='https://s1.ax1x.com/2020/05/05/YFOCHx.png' width=\"100%\">\n<img src='https://s1.ax1x.com/2020/05/05/YFO7xH.png' width=\"100%\">\n\n### Provincial Competition\n- **One First Prize & Two Third Prizes**, [The 15th Hunan University Student Computer Program Design Competition] Aug. 2019\n<img src='https://s2.ax1x.com/2020/02/01/1Gy3xH.jpg' width=\"100%\">\n<img src='https://s2.ax1x.com/2020/02/01/1GyRoV.jpg' width=\"100%\">\n\n- **One Third Prize**, [The 14th Hunan University Student Computer Program Design Competition] Sep. 2018\n<img src='https://gowi-picgo.oss-cn-shenzhen.aliyuncs.com/picgo/ACM201801.jpg' width=\"100%\">\n\n- **Two Third Prize**, [The 13th Hunan University Student Computer Program Design Competition] Sep. 2017\n<img src='https://s1.ax1x.com/2020/05/05/YFvKbR.jpg' width=\"100%\">\n<img src='https://s1.ax1x.com/2020/05/05/YFvaqA.jpg' width=\"100%\">\n\n科研成就\n---\n\n **Grade 16 Qiu Zhongxi published EI paper as first author**\n<img src='https://s2.ax1x.com/2020/02/01/1GcK3D.png' width=\"100%\">\n\n\n> 回到博客主页，请[点击此处](http://uscair.club)！\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=c()(s.a.mark(function t(){var r,a,c,u,l,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),c=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-c,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},47:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(15),o=e.n(r),i=e(25),s=e.n(i),a=e(24),c=e.n(a),u=e(42),l=e.n(u),d=e(41),h=e.n(d),m=e(40);e.n(m);t.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:h.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n*  你好呀！这里是南华大学计算机学院USC-AIR团队！\n*  真开心你来到了这个界面~\n*  现在，让我们一起看看我的动态简历吧！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成更适合我们观看的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"\n\t\t\nUSC-AIR\n----\n南华大学计算机学院USC-AIR（Artificial Intelligence Robot）团队为院直属团队，于2017年12月成功申请为校级团队，并入驻南华大学创新创业学院工程实训中心。\n\nContact\n---\n\n* Address: **the University of South China - 28 Changsheng West Road- Hunan, China**\n* E-mail: **airusc@foxmail.com**\n* QQ：**3458038461**\n* Blog: **[https://uscair.club](https://airusc.github.io/)**\n* Introduction:**A professional team studying artificial intelligence and robotics**\n* Instructor:**Dr. Mao Yu**\n* GitHub: **[https://github.com/AIR-USC](https://github.com/AIR-USC)**\n\n发展理念\n----\n\n* 机器人编程\n* 底层开发\n* 硬件维护\n* 学术研究\n* 项目工程\n\n学术科研\n---\n* 数字图像处理\n* 机器学习\n* 人工智能\n\n获奖经历\n----\n\n### National Competition\n- **One Second Prize & One Third Prize**, [2017 World Robot Contest Fighting Robot Competition]\n<img src='https://s1.ax1x.com/2020/05/05/YF7mGj.jpg' width=\"100%\" >\n<img src='https://s1.ax1x.com/2020/05/05/YFqmJe.jpg' width='100%'>\n- **One Second Prize & Three Third Prizes**,[“Soft Silver Robot Cup” China robot skill competition] Dec. 2018\n<img src='https://s1.ax1x.com/2020/05/05/YFLcHP.png' width=\"100%\">\n<img src='https://s2.ax1x.com/2020/02/01/1GgUd1.jpg' width=\"100%\">\n<img src='https://s1.ax1x.com/2020/05/05/YFOCHx.png' width=\"100%\">\n<img src='https://s1.ax1x.com/2020/05/05/YFO7xH.png' width=\"100%\">\n\n### Provincial Competition\n- **One First Prize & Two Third Prizes**, [The 15th Hunan University Student Computer Program Design Competition] Aug. 2019\n<img src='https://s2.ax1x.com/2020/02/01/1Gy3xH.jpg' width=\"100%\">\n<img src='https://s2.ax1x.com/2020/02/01/1GyRoV.jpg' width=\"100%\">\n\n- **One Third Prize**, [The 14th Hunan University Student Computer Program Design Competition] Sep. 2018\n<img src='https://gowi-picgo.oss-cn-shenzhen.aliyuncs.com/picgo/ACM201801.jpg' width=\"100%\">\n\n- **Two Third Prize**, [The 13th Hunan University Student Computer Program Design Competition] Sep. 2017\n<img src='https://s1.ax1x.com/2020/05/05/YFvKbR.jpg' width=\"100%\">\n<img src='https://s1.ax1x.com/2020/05/05/YFvaqA.jpg' width=\"100%\">\n\n科研成就\n---\n\n **Grade 16 Qiu Zhongxi published EI paper as first author**\n<img src='https://s2.ax1x.com/2020/02/01/1GcK3D.png' width=\"100%\">\n\n\n> 回到博客主页，请[点击此处](http://uscair.club)！\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=c()(s.a.mark(function t(){var r,a,c,u,l,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),c=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-c,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},48:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(89),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(90),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(45),o=e(43),i=e.n(o),s=e(44),a=e.n(s),c=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(c>500?i.a:a.a)}})},85:function(n,t){},86:function(n,t){},87:function(n,t){},88:function(n,t){},93:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.212c2aa473a52e47d709.js.map