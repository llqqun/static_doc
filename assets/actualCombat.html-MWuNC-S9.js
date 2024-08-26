import{_ as s,o as n,c as a,a as e}from"./app-7ZQ6jRti.js";const t={},p=e(`<h2 id="项目内添加全局less变量-这样就不用手动的到每个文件里去-import" tabindex="-1"><a class="header-anchor" href="#项目内添加全局less变量-这样就不用手动的到每个文件里去-import" aria-hidden="true">#</a> 项目内添加全局less变量(这样就不用手动的到每个文件里去@import)</h2><p>环境 @vue/cli 5.0.0</p><p>安装插件</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm i style-resources-loader -D
npm i vue-cli-plugin-style-resources-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置vue.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">pluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;style-resources-loader&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">preProcessor</span><span class="token operator">:</span><span class="token string">&#39;less&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/assets/css/variables.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// chainWebpack: config =&gt; {</span>
    <span class="token comment">//     config.module</span>
    <span class="token comment">//         .rule(&#39;less&#39;)</span>
    <span class="token comment">//         .oneOf(&#39;vue&#39;)</span>
    <span class="token comment">//         .use(&#39;style-resources-loader&#39;)</span>
    <span class="token comment">//         .loader(&#39;style-resources-loader&#39;)</span>
    <span class="token comment">//         .options({</span>
    <span class="token comment">//             patterns: [path.resolve(__dirname, &#39;src/assets/less/variables.less&#39;)]</span>
    <span class="token comment">//         }</span>
    <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加svg图标" tabindex="-1"><a class="header-anchor" href="#添加svg图标" aria-hidden="true">#</a> 添加svg图标</h2>`,7),l=[p];function c(i,o){return n(),a("div",null,l)}const d=s(t,[["render",c],["__file","actualCombat.html.vue"]]);export{d as default};
