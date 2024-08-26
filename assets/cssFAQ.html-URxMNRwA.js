import{_ as p,r as i,o as c,c as l,b as n,d as e,e as a,a as t}from"./app-1Fk5NupV.js";const o={},u=t(`<h1 id="css-笔记" tabindex="-1"><a class="header-anchor" href="#css-笔记" aria-hidden="true">#</a> CSS 笔记</h1><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><p>工作中遇到的情况及处理</p><h3 id="行内块元素问题" tabindex="-1"><a class="header-anchor" href="#行内块元素问题" aria-hidden="true">#</a> 行内块元素问题</h3><ol><li>元素间的间隙</li></ol><p>元素设置为 <code>display: inline-block;</code>后兄弟元素间存在极小的间隙</p><p>解决方案, 给父元素添加样式<code>font-size: 0;</code></p><ol start="2"><li>与样式<code>overflow: hidden;</code>同时存在则会产生元素错位效果</li></ol><p>原因: 行内块的基线为其文档流内最后一个行盒的基线，除非该行内块没有文档流内行盒或者其 overflow 属性计算值不为 visible，这种情况下基线为下外边距边缘 所以,实际是元素的基线变成了底部边缘,和父元素对其</p><p>解决方案: 错位元素添加 <code>vertical-align: top;</code></p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>浮动元素不会压住文字</p><h3 id="解决-ios-滚动条被卡住的问题" tabindex="-1"><a class="header-anchor" href="#解决-ios-滚动条被卡住的问题" aria-hidden="true">#</a> 解决 iOS 滚动条被卡住的问题</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body,html</span><span class="token punctuation">{</span>
  <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ios-底部横杠兼容问题" tabindex="-1"><a class="header-anchor" href="#ios-底部横杠兼容问题" aria-hidden="true">#</a> ios 底部横杠兼容问题</h3><p>添加meta标签</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    &lt;meta name=&quot;viewport&quot; content: &quot;width=device-width, initial-scale=1, ,maximum-scale=1, user-scalable=no, viewport-fit=cover&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
// 对应的元素上添加下面样式
<span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">constant</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*兼容 IOS&lt;11.2*/</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> <span class="token function">env</span><span class="token punctuation">(</span>safe-area-inset-bottom<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*兼容 IOS&gt;11.2*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片拖拽" tabindex="-1"><a class="header-anchor" href="#图片拖拽" aria-hidden="true">#</a> 图片拖拽</h3><p>默认浏览器图片是能拖拽的添加下面设置禁止拖拽</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">-webkit-user-drag</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nth-child-和-nt-of-type-的区别" tabindex="-1"><a class="header-anchor" href="#nth-child-和-nt-of-type-的区别" aria-hidden="true">#</a> <code>nth-child</code> 和 <code>nt-of-type</code> 的区别</h3><p>E:nth-child(n) 和 E:nth-of-type(n) 区别</p><p>E:nth-child(n) =&gt; 先匹配父元素的第 n 个子元素,再去匹配 E 元素(从所有兄弟元素中找)</p><p>E:nth-of-type(n) =&gt; 先从兄弟元素中匹配 E 类型的元素,然后根据 n 去找到目标元素(从同类型兄弟元素中找)</p><h3 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token comment">/* IE6、7 专有 */</span>
  *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画三角形" tabindex="-1"><a class="header-anchor" href="#画三角形" aria-hidden="true">#</a> 画三角形</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 等腰三角 */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* 1.只保留右边的边框有颜色 */</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent red transparent transparent<span class="token punctuation">;</span>
  <span class="token comment">/* 2. 样式都是solid */</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token comment">/* 3. 上边框宽度要大， 右边框 宽度稍小， 其余的边框该为 0 */</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 100px 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 斜三角 */</span>
<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* 1.只保留右边的边框有颜色 */</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent red transparent transparent<span class="token punctuation">;</span>
  <span class="token comment">/* 2. 样式都是solid */</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token comment">/* 3. 上边框宽度要大， 右边框 宽度稍小， 其余的边框该为 0 */</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 100px 50px 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="画小箭头" tabindex="-1"><a class="header-anchor" href="#画小箭头" aria-hidden="true">#</a> 画小箭头</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.arrow</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* Base Style */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 16px solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent #cddc39 transparent transparent<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.arrow::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -16px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 16px solid<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent #fff transparent transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*下*/</span>
<span class="token selector">.arrow.bottom</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>270deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*上*/</span>
<span class="token selector">.arrow.top</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*左*/</span>
<span class="token selector">.arrow.left</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*右*/</span>
<span class="token selector">.arrow.right</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),r={href:"https://codepen.io/lancelovejava/pen/popwgpG",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"动画animation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动画animation","aria-hidden":"true"},"#"),e(" 动画"),n("strong",null,"animation")],-1),v=n("h3",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),e(" 属性")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"说明")])],-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"animation-name",-1),h=n("td",null,"动画名称",-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"animation-duration",-1),y=n("td",null,"动画时长",-1),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"animation-timing-function",-1),w=n("td",null,"动画速度曲线",-1),q={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline",target:"_blank",rel:"noopener noreferrer"},S=n("td",null,"auto",-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"animation-delay",-1),E=n("td",null,"动画开始时间,默认 0",-1),N={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"animation-iteration-count",-1),I=n("td",null,"动画播放次数",-1),O={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"animation-direction",-1),j=n("td",null,"是否逆向播放",-1),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"animation-fill-mode",-1),F=n("td",null,"动画结束后元素状态",-1),Q={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"animation-play-state",-1),G=n("td",null,"动画运行或暂停",-1),L=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h1><h3 id="块元素纵向布局" tabindex="-1"><a class="header-anchor" href="#块元素纵向布局" aria-hidden="true">#</a> 块元素纵向布局</h3><p>writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向</p><p>此属性指定块流动方向，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向。因此，它也确定块级内容的顺序</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
<span class="token comment">/* 关键值 */</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb<span class="token punctuation">;</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-rl<span class="token punctuation">;</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-lr<span class="token punctuation">;</span>

<span class="token comment">/* 全局值 */</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 flex 布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-flow</span><span class="token punctuation">:</span> column wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input-标签" tabindex="-1"><a class="header-anchor" href="#input-标签" aria-hidden="true">#</a> input 标签</h3><p>删除 <code>type=&quot;number&quot;</code> 末尾的箭头</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.no-arrow::-webkit-outer-spin-button,
.no-arrow::-webkit-inner-spin-button</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>caret-color</code> 来修改光标的颜色</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">caret-color</span><span class="token punctuation">:</span> #ffd476<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 input placeholder 样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #babbc1<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>outline:none</code> 删除输入状态线</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>input 自动填充颜色设置</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token comment">/* 设置透明度 */</span>
<span class="token selector">input:-internal-autofill-previewed,
input:-internal-autofill-selected</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> #807c7c<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> background-color 5000s ease-out 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 通过动画延迟 */</span>
    <span class="token selector">input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active</span> <span class="token punctuation">{</span>
      <span class="token property">transition-delay</span><span class="token punctuation">:</span> 99999s<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> color 99999s ease-out<span class="token punctuation">,</span> background-color 99999s ease-out<span class="token punctuation">;</span>
      <span class="token property">-webkit-transition-delay</span><span class="token punctuation">:</span> 99999s<span class="token punctuation">;</span>
      <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> color 99999s ease-out<span class="token punctuation">,</span> background-color 99999s ease-out<span class="token punctuation">;</span>
      <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> #807c7c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="固定元素宽高比" tabindex="-1"><a class="header-anchor" href="#固定元素宽高比" aria-hidden="true">#</a> 固定元素宽高比</h3><p>aspect-ratio</p><h3 id="滚动条设置-webkit-scrollbar-webkit-的浏览器" tabindex="-1"><a class="header-anchor" href="#滚动条设置-webkit-scrollbar-webkit-的浏览器" aria-hidden="true">#</a> 滚动条设置::-webkit-scrollbar( webkit 的浏览器)</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token punctuation">{</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar    //<span class="token property">滚动条整体部分</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar-button   //<span class="token property">滚动条两端的按钮</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar-track   // <span class="token property">外层轨道</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar-track-piece    //<span class="token property">内层轨道，滚动条中间部分（除去）</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar-thumb //<span class="token property">滚动条里面可以拖动的那个</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar-corner   //<span class="token property">边角</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-resizer   ///定义右下角拖动块的样式


<span class="token punctuation">}</span>
<span class="token selector">.box-hide-scrollbar::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* Chrome Safari */</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本操作" tabindex="-1"><a class="header-anchor" href="#文本操作" aria-hidden="true">#</a> 文本操作</h2><h3 id="文字两端对齐" tabindex="-1"><a class="header-anchor" href="#文字两端对齐" aria-hidden="true">#</a> 文字两端对齐</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">text-align-last</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="textarea-高度自适应" tabindex="-1"><a class="header-anchor" href="#textarea-高度自适应" aria-hidden="true">#</a> textarea 高度自适应</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="优先使用系统字体" tabindex="-1"><a class="header-anchor" href="#优先使用系统字体" aria-hidden="true">#</a> 优先使用系统字体</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> system-ui<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不允许选择文本" tabindex="-1"><a class="header-anchor" href="#不允许选择文本" aria-hidden="true">#</a> 不允许选择文本</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义选定的文本样式" tabindex="-1"><a class="header-anchor" href="#自定义选定的文本样式" aria-hidden="true">#</a> 自定义选定的文本样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::selection</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff4c9f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#单行文本溢出显示省略号" aria-hidden="true">#</a> 单行文本溢出显示省略号</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*1. 先强制一行内显示文本*/
white-space: nowrap;  （ 默认 normal 自动换行）
/*2. 超出的部分隐藏*/
overflow: hidden;
/*3. 文字用省略号替代超出的部分*/
text-overflow: ellipsis;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#多行文本溢出显示省略号" aria-hidden="true">#</a> 多行文本溢出显示省略号</h3><p><strong>有较大兼容性问题</strong>，适合于 webKit 浏览器或移动端（移动端大部分是 webkit 内核）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token comment">/*1.超出的部分隐藏 */</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token comment">/*2. 文字用省略号替代超出的部分 */</span>
        <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token comment">/* 3. 弹性伸缩盒子模型显示 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token comment">/* 4. 限制在一个块元素显示的文本的行数 */</span>
        <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token comment">/* 5. 设置或检索伸缩盒对象的子元素的排列方式 */</span>
        <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本竖向排列" tabindex="-1"><a class="header-anchor" href="#文本竖向排列" aria-hidden="true">#</a> 文本竖向排列</h3><p><strong>writing-mode</strong> 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向</p><p>此属性指定块流动方向，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-lr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影" aria-hidden="true">#</a> 阴影</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 20px 13px red<span class="token punctuation">;</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0px 0px 22px red<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h2><h3 id="方案1-纯css-通过使用-rem-和-vw-以及-media-媒体查询实现响应式布局" tabindex="-1"><a class="header-anchor" href="#方案1-纯css-通过使用-rem-和-vw-以及-media-媒体查询实现响应式布局" aria-hidden="true">#</a> 方案1 纯CSS 通过使用 REM 和 VW 以及 media 媒体查询实现响应式布局</h3><p>以750px设计图为基准，为方便计算根元素字体大小取100px。 进行响应式换算则是 13.33vw, 所以默认的根元素字体大小为</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 13.33vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后通过媒体查询的方式设置当屏幕宽度超出设计稿宽度时,进行兼容处理</p><p>演示DEMO</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>响应式测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			测试盒子1
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>测试盒子2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">html</span> <span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 13.33vw<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.d1</span> <span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 0.32rem<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.d2</span> <span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 0.24rem<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.child-1</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
		<span class="token selector">html</span> <span class="token punctuation">{</span>
			<span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function M(T,U){const s=i("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[e("示例 demo: "),n("a",r,[e("https://codepen.io/lancelovejava/pen/popwgpG"),a(s)])]),d,v,n("table",null,[k,n("tbody",null,[n("tr",null,[n("td",null,[n("a",m,[b,a(s)])]),h]),n("tr",null,[n("td",null,[n("a",g,[f,a(s)])]),y]),n("tr",null,[n("td",null,[n("a",x,[_,a(s)])]),w]),n("tr",null,[n("td",null,[n("a",q,[e("animation-timeline (en-US)"),a(s)])]),S]),n("tr",null,[n("td",null,[n("a",z,[C,a(s)])]),E]),n("tr",null,[n("td",null,[n("a",N,[W,a(s)])]),I]),n("tr",null,[n("td",null,[n("a",O,[V,a(s)])]),j]),n("tr",null,[n("td",null,[n("a",B,[A,a(s)])]),F]),n("tr",null,[n("td",null,[n("a",Q,[D,a(s)])]),G])])]),L])}const P=p(o,[["render",M],["__file","cssFAQ.html.vue"]]);export{P as default};
