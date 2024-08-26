import{_ as o,r as a,o as r,c as d,b as n,d as t,e as s,a as l}from"./app-ra6C9Im4.js";const c={},i=n("h1",{id:"canvas-学习笔记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#canvas-学习笔记","aria-hidden":"true"},"#"),t(" Canvas 学习笔记")],-1),u=n("p",null,"1.canvas 画布只能固定尺寸,可以动态改变元素尺寸,但是内容画像会拉伸变形",-1),p={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D#%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"CanvasRenderingContext2D",-1),h=n("p",null,"处理跨域图片",-1),v=n("p",null,'img.setAttribute("crossOrigin", "anonymous");',-1),g=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性")],-1),k=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"解释")])],-1),b=n("tr",null,[n("td",null,"lineJoin"),n("td",null,"决定了图形中两线段连接处所显示的样子 miter round bevel")],-1),m=n("tr",null,[n("td",null,"miterLimit"),n("td",null,"设定外延交点与连接点的最大距离,如果交点距离大于此值，连接效果会变成了 bevel")],-1),x=n("tr",null,[n("td",null,"strokeStyle"),n("td",null,"画笔（绘制图形）颜色或者样式的属性")],-1),f=n("tr",null,[n("td",null,"lineWidth"),n("td",null,"线段厚度的属性")],-1),C=n("tr",null,[n("td",null,"lineDashOffset"),n("td",null,"设置线段起始偏移量")],-1),y={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"globalCompositeOperation",-1),R=n("td",null,"设定了在画新图形时采用的遮盖策略",-1),w=n("tr",null,[n("td"),n("td")],-1),A=n("tr",null,[n("td"),n("td")],-1),D=n("tr",null,[n("td"),n("td")],-1),I=n("tr",null,[n("td"),n("td")],-1),N=n("tr",null,[n("td"),n("td")],-1),P=n("tr",null,[n("td"),n("td")],-1),W=n("tr",null,[n("td"),n("td")],-1),E=n("tr",null,[n("td"),n("td")],-1),B=n("tr",null,[n("td"),n("td")],-1),T=l(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>基本操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取元素</span>
<span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;tutorial&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取元素渲染上下文</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),j=n("thead",null,[n("tr",null,[n("th",null,"函数名称"),n("th",null,"解释")])],-1),L={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"fillRect(x, y, width, height)",-1),S=n("td",null,"绘制一个填充的矩形",-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"strokeRect(x, y, width, height)",-1),q=n("td",null,"绘制一个矩形的边框",-1),J={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"clearRect(x, y, width, height)",-1),F=n("td",null,"清除指定矩形区域，让清除部分完全透明。",-1),H=n("tr",null,[n("td",null,"beginPath()"),n("td")],-1),K=n("tr",null,[n("td",null,"closePath()"),n("td")],-1),M=n("tr",null,[n("td",null,"stroke()"),n("td",null,"根据当前的画线样式，绘制当前或已经存在的路径的方法。")],-1),Q=n("td",null,"fill()",-1),X={href:"http://en.wikipedia.org/wiki/Nonzero-rule",target:"_blank",rel:"noopener noreferrer"},Y={href:"http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"lineTo(x, y)",-1),nn=n("td",null,"绘制一条从当前位置到指定 x 以及 y 位置的直线",-1),tn={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc",target:"_blank",rel:"noopener noreferrer"},en=n("code",null,"arc(x, y, radius, startAngle, endAngle, anticlockwise)",-1),sn=n("td",null,"画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成",-1),ln={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arcTo",target:"_blank",rel:"noopener noreferrer"},on=n("code",null,"arcTo(x1, y1, x2, y2, radius)",-1),an=n("td",null,"根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点",-1),rn=n("tr",null,[n("td",null,"quadraticCurveTo(cp1x, cp1y, x, y)"),n("td",null,[t("绘制二次贝塞尔曲线，"),n("code",null,"cp1x,cp1y"),t("为一个控制点，"),n("code",null,"x,y为"),t("结束点。")])],-1),dn=n("tr",null,[n("td",null,"bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)"),n("td",null,[t("绘制三次贝塞尔曲线，"),n("code",null,"cp1x,cp1y"),t("为控制点一，"),n("code",null,"cp2x,cp2y"),t("为控制点二，"),n("code",null,"x,y"),t("为结束点。")])],-1),cn=n("tr",null,[n("td",null,"setLineDash"),n("td",null,"接受一个数组，来指定线段与间隙的交替")],-1),un=n("tr",null,[n("td",null,"createLinearGradient(x0, y0, x1, y1)"),n("td",null,"创建一个沿参数坐标指定的直线的渐变")],-1),pn={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createRadialGradient",target:"_blank",rel:"noopener noreferrer"},_n=n("code",null,"createRadialGradient(x1, y1, r1, x2, y2, r2)",-1),hn=n("td",null,"绘制放射性渐变的方法",-1),vn=n("tr",null,[n("td",null,"addColorStop"),n("td",null,[t("添加一个由"),n("strong",null,"偏移值"),t("和"),n("strong",null,"颜色值"),t("指定的断点到渐变")])],-1),gn=n("tr",null,[n("td",null,"createPattern(img, repeat)"),n("td",null,"使用图片填充画布")],-1),kn={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage",target:"_blank",rel:"noopener noreferrer"},bn=n("code",null,"drawImage(image, x, y, width, height)",-1),mn=n("td",null,"绘制指定的图片(主要画图方法)",-1),xn=n("tr",null,[n("td",null,"toDataURL()"),n("td",null,"将canvas保存为图片")],-1),fn=n("tr",null,[n("td",null,"toBlob()"),n("td",null,"将Canvas转换 Blob对象")],-1),Cn=n("tr",null,[n("td",null,"save()"),n("td",null,"将当前状态放入栈中，保存 canvas 全部状态的方法")],-1),yn=n("tr",null,[n("td",null,"restore()"),n("td",null,"在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。如果没有保存状态，此方法不做任何改变。")],-1),zn=l(`<h2 id="阴影效果" tabindex="-1"><a class="header-anchor" href="#阴影效果" aria-hidden="true">#</a> 阴影效果</h2><p>实现原理即在下次渲染时首先填充一个含有透明度的蒙层,再画内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(255,255,255,0.3)&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function Rn(wn,An){const e=a("ExternalLinkIcon");return r(),d("div",null,[i,u,n("p",null,[t("2."),n("a",p,[_,s(e)]),t("是2D渲染上下文的主要对象")]),h,v,g,n("table",null,[k,n("tbody",null,[b,m,x,f,C,n("tr",null,[n("td",null,[n("a",y,[z,s(e)])]),R]),w,A,D,I,N,P,W,E,B])]),T,n("table",null,[j,n("tbody",null,[n("tr",null,[n("td",null,[n("a",L,[O,s(e)])]),S]),n("tr",null,[n("td",null,[n("a",V,[G,s(e)])]),q]),n("tr",null,[n("td",null,[n("a",J,[U,s(e)])]),F]),H,K,M,n("tr",null,[Q,n("td",null,[t("根据当前的填充样式，填充当前或已存在的路径的方法。采取非零环绕或者奇偶环绕规则,nonzero("),n("a",X,[t("非零环绕规则"),s(e)]),t(")默认值, evenodd("),n("a",Y,[t("奇偶环绕规则"),s(e)]),t(")")])]),n("tr",null,[n("td",null,[n("a",Z,[$,s(e)])]),nn]),n("tr",null,[n("td",null,[n("a",tn,[en,s(e)])]),sn]),n("tr",null,[n("td",null,[n("a",ln,[on,s(e)])]),an]),rn,dn,cn,un,n("tr",null,[n("td",null,[n("a",pn,[_n,s(e)])]),hn]),vn,gn,n("tr",null,[n("td",null,[n("a",kn,[bn,s(e)])]),mn]),xn,fn,Cn,yn])]),zn])}const In=o(c,[["render",Rn],["__file","canvas.html.vue"]]);export{In as default};
