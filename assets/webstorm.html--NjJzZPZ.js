import{_ as e,o as a,c as r,a as d}from"./app-1Fk5NupV.js";const t={},o=d(`<h1 id="webstorm" tabindex="-1"><a class="header-anchor" href="#webstorm" aria-hidden="true">#</a> webstorm</h1><h2 id="debugger-调试html-失败" tabindex="-1"><a class="header-anchor" href="#debugger-调试html-失败" aria-hidden="true">#</a> debugger 调试html 失败</h2><p>单击右键小甲虫Debugger HTML 页面时chrome打开空白页</p><p>弹出提示信息</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>正在等待连接到 localhost:port。
请确保在打开远程调试端口的情况下成功启动浏览器。
如果已启动具有相同用户数据目录的 Chrome，将无法打开端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决办法</p></blockquote><p>打开 tool -&gt; Web Browsers and Preview</p><p>编辑打开的浏览器,添加命令行选项<code>--remote-allow-origins=*</code>, 应用保存,重新debug</p><h2 id="nuxt2-debug服务端调试配置" tabindex="-1"><a class="header-anchor" href="#nuxt2-debug服务端调试配置" aria-hidden="true">#</a> nuxt2 Debug服务端调试配置</h2><p><a href="/images/webstome-1.png">图片</a></p>`,10),n=[o];function s(i,c){return a(),r("div",null,n)}const h=e(t,[["render",s],["__file","webstorm.html.vue"]]);export{h as default};
