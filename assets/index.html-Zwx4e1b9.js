import{_ as s,o as n,c as a,a as t}from"./app-1Fk5NupV.js";const e={},p=t(`<h1 id="node问题" tabindex="-1"><a class="header-anchor" href="#node问题" aria-hidden="true">#</a> node问题</h1><h2 id="import导入json文件报错" tabindex="-1"><a class="header-anchor" href="#import导入json文件报错" aria-hidden="true">#</a> import导入JSON文件报错</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;file://&#39;</span> <span class="token operator">+</span> pkgPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span>default
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行报错</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>Module &quot;file:///D:/test/custom-cli/testProject/package.json&quot; needs an import assertion of type &quot;json&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方案</p><p>导入断言是 ECMAScript 2021 (ES12) 中引入的一项功能，它允许开发人员指定有关要导入的模块的其他元数据。这些断言在 Node.js 版本 14.0.0 及更高版本中可用 使用导入断言，您可以指定有关正在导入的模块的元数据，例如其完整性校验和或其媒体类型。导入断言的语法如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> defaultExport <span class="token keyword">from</span> <span class="token string">&#39;module&#39;</span> <span class="token keyword">assert</span> <span class="token punctuation">{</span> assertion <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> namedExports <span class="token keyword">from</span> <span class="token string">&#39;module&#39;</span> <span class="token keyword">assert</span> <span class="token punctuation">{</span> assertion <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> namedExport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module&#39;</span> <span class="token keyword">assert</span> <span class="token punctuation">{</span> assertion <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;file://&#39;</span> <span class="token operator">+</span> pkgPath<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">assert</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> v<span class="token punctuation">.</span>default
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,l){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","index.html.vue"]]);export{u as default};
