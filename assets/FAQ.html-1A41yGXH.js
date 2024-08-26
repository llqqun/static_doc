import{_ as e,r as t,o as p,c as i,b as n,d as c,e as o,a as s}from"./app-1Fk5NupV.js";const l={},u=s(`<h1 id="js-faq-问题汇总" tabindex="-1"><a class="header-anchor" href="#js-faq-问题汇总" aria-hidden="true">#</a> JS FAQ 问题汇总</h1><h2 id="import-导入js-this-为undefined" tabindex="-1"><a class="header-anchor" href="#import-导入js-this-为undefined" aria-hidden="true">#</a> import 导入js , this 为undefined</h2><p>demo</p><p>index.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">import</span> <span class="token string">&#39;./test.js&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fun</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 输出undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态的 import 语句用于导入由另一个模块导出的绑定。无论是否声明了 strict mode，导入的模块都运行在严格模式下。在浏览器中，import 语句只能在声明了 type=&quot;module&quot; 的 script 的标签中使用</p><p>严格模式下,执行函数时没有执行主体，因此this指向undefined，非严格模式下的执行主体默认是window，因此this指向window。</p><h2 id="async-await-问题" tabindex="-1"><a class="header-anchor" href="#async-await-问题" aria-hidden="true">#</a> async/await 问题</h2><p>async 声明的函数的返回值是一个 Promise 对象(根据函数内部 return 的结果进行包装),所以返回值可以进行 then 操作 await 后面语句返回的 Promise 处于 pending 状态,所以其后的同步代码不会执行</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>async function async1 () {
  console.log(&#39;async1 start&#39;);
  await new Promise(resolve =&gt; {
    console.log(&#39;promise1&#39;)
  })
  console.log(&#39;async1 success&#39;);
  return &#39;async1 end&#39;
}
console.log(&#39;srcipt start&#39;)
async1().then(res =&gt; console.log(res))
console.log(&#39;srcipt end&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-图片资源处理" tabindex="-1"><a class="header-anchor" href="#vite-图片资源处理" aria-hidden="true">#</a> vite 图片资源处理</h2><p>1.项目引入本地图片通过 new URL(url, import.meta.url)方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 打包后资源会找不到</span>
<span class="token keyword">function</span> <span class="token function">getImageUrl</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 官方声明这里的url必须是静态的才能打包后正常使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>直接将资源放入 public 目录内,直接使用/开头绝对路径</li><li>通过 import 引入图片后再使用</li></ol><h2 id="html-实体编码" tabindex="-1"><a class="header-anchor" href="#html-实体编码" aria-hidden="true">#</a> HTML 实体编码</h2><ul><li>不可分的空格:＆nbsp;</li><li>&lt;(小于符号):＆lt;</li><li>(大于符号):＆gt;</li><li>＆(与符号):＆amp;</li><li>″(双引号):＆quot;</li><li>&#39;(单引号):&#39;＆apos;</li></ul><h2 id="子元素-click-事件为什么不执行" tabindex="-1"><a class="header-anchor" href="#子元素-click-事件为什么不执行" aria-hidden="true">#</a> 子元素 click 事件为什么不执行</h2>`,19),r={href:"https://codepen.io/lancelovejava/pen/dymVZYN",target:"_blank",rel:"noopener noreferrer"},d=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pointer<span class="token operator">-</span>events<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token comment">//值none表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textarea" tabindex="-1"><a class="header-anchor" href="#textarea" aria-hidden="true">#</a> textarea</h2><p>高度适应解决方案</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">textarea</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> textList <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;textarea&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  textList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> el <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement<span class="token punctuation">;</span>
      el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>el<span class="token punctuation">.</span>scrollHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改enter为发送,ctrl + enter 为换行</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputContent<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:autosize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ minRows: 2, maxRows: 4}<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入内容<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@keydown.native.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handledTextarea<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">handledTextarea</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断ctrl 是否按下</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>ctrlKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;换行&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>inputContent <span class="token operator">+=</span> <span class="token string">&#39;\\n&#39;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;发送&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">subMit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-url-注意" tabindex="-1"><a class="header-anchor" href="#data-url-注意" aria-hidden="true">#</a> Data URL 注意</h2><p>使用 Data URL 也有一些缺点：</p><ul><li>base64 编码后的图片会比原来的体积大三分之一左右。</li><li>Data URL 形式的图片不会缓存下来，每次访问页面都要被下载一次。可以将 Data URL 写入到 CSS 文件中随着 CSS 被缓存下来。</li></ul><p>Data URL 是前缀为<code>data:</code>协议的 URL； 它允许内容创建者向文档中嵌入小文件，比如图片等。 Data URL 由四部分组成：</p><ul><li>前缀<code>data:</code></li><li>指示数据类型的 MIME 类型。例如<code>image/jpeg</code>表示 JPEG 图像文件；如果此部分被省略，则默认值为<code>text/plain;charset=US-SACII</code></li><li>如果为非文本数据，则可选 base64 做标记</li><li>数据</li></ul><h2 id="json-中-stringify-输出注意" tabindex="-1"><a class="header-anchor" href="#json-中-stringify-输出注意" aria-hidden="true">#</a> JSON 中 stringify 输出注意</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const obj = {
  a: 3,
  b: 4,
  c: null,
  d: undefined,
  get e() {},
};
console.log(JSON.stringify(obj));
// {&quot;a&quot;:3,&quot;b&quot;:4,&quot;c&quot;:null,&quot;e&quot;:111}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stringify 函数处理对象时,值是 undefined 的 key 被抛弃,get e() 未有返回值所以是 undefined</p>`,16);function k(v,m){const a=t("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",r,[c("https://codepen.io/lancelovejava/pen/dymVZYN"),o(a)])]),d])}const h=e(l,[["render",k],["__file","FAQ.html.vue"]]);export{h as default};
