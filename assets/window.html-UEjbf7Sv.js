import{_ as e,o as a,c as i,a as d}from"./app-vL25MzAY.js";const n={},s=d(`<h1 id="window电脑操作" tabindex="-1"><a class="header-anchor" href="#window电脑操作" aria-hidden="true">#</a> Window电脑操作</h1><h2 id="mcd命令系列" tabindex="-1"><a class="header-anchor" href="#mcd命令系列" aria-hidden="true">#</a> MCD命令系列</h2><h3 id="端口命令" tabindex="-1"><a class="header-anchor" href="#端口命令" aria-hidden="true">#</a> 端口命令</h3><p>查找所有运行的端口</p><div class="language-CMD line-numbers-mode" data-ext="CMD"><pre class="language-CMD"><code>netstat -ano
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过指定端口查找进程PID</p><div class="language-CMD line-numbers-mode" data-ext="CMD"><pre class="language-CMD"><code>netstat -aon|findstr &quot;8081&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过pid查找进程</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>tasklist|findstr &quot;9088&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>强制关闭PID进程</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>taskkill /T /F /PID 9088 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bat-批处理命令" tabindex="-1"><a class="header-anchor" href="#bat-批处理命令" aria-hidden="true">#</a> BAT 批处理命令</h2><h3 id="重命名文件夹内文件" tabindex="-1"><a class="header-anchor" href="#重命名文件夹内文件" aria-hidden="true">#</a> 重命名文件夹内文件</h3><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>
@echo off
setlocal EnableDelayedExpansion

rem
set /a count=0

for /f &quot;delims=&quot; %%f in (&#39;dir /b/od *.*&#39;) do (
  if not &quot;%%f&quot;==&quot;%~nx0&quot; (
           set /a b+=1 
           ren &quot;%%f&quot; &quot;!b!%%~xf&quot;
           echo. !b!%%~xf
)
)

pause

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[s];function r(c,t){return a(),i("div",null,l)}const o=e(n,[["render",r],["__file","window.html.vue"]]);export{o as default};
