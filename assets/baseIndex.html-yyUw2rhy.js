import{_ as e,o as i,c as l,a as n}from"./app-vL25MzAY.js";const s={},a=n(`<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><p>博主作为一名前端开发，日常开发的技术栈是 Vue，并且用 Vue 开发也有一年多了，对其用法也较为熟练了，但是对各种用法和各种 api 使用都是只知其然而不知其所以然，因此，有时候在排查 bug 的时候就会有点捉襟见肘。鉴于此，索性就从 github 上 clone 下来一份 Vue 源码来学习学习，本系列博文将用来记录博主对 Vue 源码的整个学习过程，以及自己对源码的一些理解。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。</p><h2 id="学习简要" tabindex="-1"><a class="header-anchor" href="#学习简要" aria-hidden="true">#</a> 学习简要</h2><ul><li><p>源码版本为最终版 2.6.14</p></li><li><p>通用目录结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─dist                   # 项目构建后的文件
├─scripts                # 与项目构建相关的脚本和配置文件
├─flow                   # flow的类型声明文件
├─src                    # 项目源代码
│    ├─complier          # 与模板编译相关的代码
│    ├─core              # 通用的、与运行平台无关的运行时代码
│    │  ├─observe        # 实现变化侦测的代码
│    │  ├─vdom           # 实现virtual dom的代码
│    │  ├─instance       # Vue.js实例的构造函数和原型方法
│    │  ├─global-api     # 全局api的代码
│    │  └─components     # 内置组件的代码
│    ├─server            # 与服务端渲染相关的代码
│    ├─platforms         # 特定运行平台的代码，如weex
│    ├─sfc               # 单文件组件的解析代码
│    └─shared            # 项目公用的工具代码
└─test                   # 项目测试代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在学习之前，我们需要先制定一个学习路线，循序渐进的学习，这样不至于一头雾水，无处下手。后面的学习路线如下：</p></li></ul><ol><li>响应式篇</li></ol><p>学习 Vue 中如何实现数据的响应式系统，从而达到数据驱动视图。</p><ol start="2"><li>虚拟 DOM 篇</li></ol><p>学习什么是虚拟 DOM，以及 Vue 中的 DOM-Diff 原理</p><ol start="3"><li>模板编译篇</li></ol><p>学习 Vue 内部是怎么把 template 模板编译成虚拟 DOM,从而渲染出真实 DOM</p><ol start="4"><li>实例方法篇</li></ol><p>学习 Vue 中所有实例方法(即所有以$开头的方法)的实现原理</p><ol start="5"><li>全局 API 篇</li></ol><p>学习 Vue 中所有全局 API 的实现原理</p><ol start="6"><li>生命周期篇</li></ol><p>学习 Vue 中组件的生命周期实现原理</p><ol start="7"><li>指令篇</li></ol><p>学习 Vue 中所有指令的实现原理</p><ol start="8"><li>过滤器篇</li></ol><p>学习 Vue 中所有过滤器的实现原理</p><ol start="9"><li>内置组件篇</li></ol><p>学习 Vue 中内置组件的实现原理</p>`,22),d=[a];function r(t,o){return i(),l("div",null,d)}const u=e(s,[["render",r],["__file","baseIndex.html.vue"]]);export{u as default};
