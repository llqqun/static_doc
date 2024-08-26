import{_ as n,o as s,c as a,a as e}from"./app-ra6C9Im4.js";const p={},t=e(`<h1 id="python-基础知识" tabindex="-1"><a class="header-anchor" href="#python-基础知识" aria-hidden="true">#</a> Python 基础知识</h1><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>int,float,True,False,str,list,tuple,set,dict<br> Python 内置支持 复数，后缀 j 或 J 用于表示虚数（例如 3+5j ）</p><h3 id="数值" tabindex="-1"><a class="header-anchor" href="#数值" aria-hidden="true">#</a> 数值</h3><p>整数（如，2、4、20 ）的类型是 int，带小数（如，5.0、1.6 ）的类型是 float。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>counter <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment"># 整型变量</span>
miles <span class="token operator">=</span> <span class="token number">1000.0</span>  <span class="token comment"># 浮点型变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p>字符串类型<code>str</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;runoob&quot;</span>

<span class="token comment"># 引号前添加 r 表示使用原始字符串</span>
<span class="token comment"># 原始字符串还有一个微妙的限制：一个原始字符串不能以奇数个 \\ 字符结束</span>
<span class="token comment"># 这样就不需要使用\\进行转义</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\some\\name&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&#39;C:\\some\\name&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 字符串可以用 + 合并（粘到一起），也可以用 * 重复</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token string">&#39;un&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;ium&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># unununium</span>

<span class="token comment"># 相邻的两个或多个 字符串字面值 （引号标注的字符）会自动合并</span>
<span class="token comment"># 能用于两个字面值，不能用于变量或表达式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Py&#39;</span> <span class="token string">&#39;thon&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 字符串支持 索引 （下标访问），第一个字符的索引是 0</span>
word <span class="token operator">=</span> <span class="token string">&#39;Python&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># P</span>
<span class="token comment"># 索引还支持负数，用负数索引时，从右边开始计数</span>
<span class="token comment"># -0 和 0 一样，因此，负数索引从 -1 开始</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># n</span>

<span class="token comment"># 字符串的分片提取, 功能类似js 中的substring函数</span>
<span class="token comment"># 索引的默认值很有用；省略开始索引时，默认值为 0，省略结束索引时，默认为到字符串的结尾</span>
<span class="token comment"># Python 字符串不能修改，是 immutable 的。因此，为字符串中某个索引位置赋值会报错</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span>  <span class="token comment"># 报错</span>
<span class="token comment"># Py</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔型" tabindex="-1"><a class="header-anchor" href="#布尔型" aria-hidden="true">#</a> 布尔型</h3><p>在 Python 中，True 和 False 都是关键字，表示布尔值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token boolean">True</span>
b <span class="token operator">=</span> <span class="token boolean">False</span>

<span class="token comment"># 比较运算符</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>

<span class="token comment"># 逻辑运算符</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token keyword">and</span> b<span class="token punctuation">)</span>  <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token keyword">or</span> b<span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">not</span> a<span class="token punctuation">)</span>  <span class="token comment"># False</span>

<span class="token comment"># 类型转换</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">float</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 0.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &quot;True&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 在 Python 中，所有非零的数字和非空的字符串、列表、元组等数据类型都被视为 True，只有 0、空字符串、空列表、空元组等被视为 False。因此，在进行布尔类型转换时，需要注意数据类型的真假性。</p><h3 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表 list</h3><p>Python 支持多种 复合 数据类型，可将不同值组合在一起.(类似js中的数组)</p><p>注意:<br> 切片操作返回包含请求元素的新列表。(进行的是列表的浅拷贝)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>squares <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span>

<span class="token comment"># 和字符串（及其他内置 sequence 类型）一样，列表也支持索引和切片</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 25</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># [9,16,25]</span>

<span class="token comment"># 列表的合并</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>squares <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]</span>

<span class="token comment"># 为切片赋值可以改变列表大小，甚至清空整个列表</span>
letters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">]</span>
letters<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;a&#39;, &#39;b&#39;, &#39;f&#39;, &#39;g&#39;]</span>

<span class="token comment"># 列表嵌套</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
n <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> n<span class="token punctuation">]</span>
<span class="token comment"># [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [1, 2, 3]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>常用的操作函数</p></blockquote><p><code>append(x)</code> 将 x 添加到序列的末尾 (等同于 s[len(s):len(s)] = [x])</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
s<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment"># [1,2,3,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>s.extend(t)</code> 用 t 的内容扩展 s (基本上等同于 s[len(s):len(s)] = t)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>s.insert(i, x)</code> 在由 i 给出的索引位置将 x 插入 s (等同于 s[i:i] = [x])</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>s.pop(i)</code> 提取在 i 位置上的项，并将其从 列表 中移除</p><p><code>s.remove(x)</code> 删除 s 中第一个 s[i] 等于 x 的项目。</p><p><code>s.sort(key)</code> 列表排序函数</p><h3 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组 tuple</h3><p>组中只包含一个元素时，需要在元素后面添加逗号 , ，否则括号会被当作运算符使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>  <span class="token comment"># 不加逗号，类型为整型</span>
tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token punctuation">)</span>  <span class="token comment"># 加上逗号，类型为元组</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推导式" tabindex="-1"><a class="header-anchor" href="#推导式" aria-hidden="true">#</a> 推导式</h3><p>列表推导式</p><div class="language-pycon line-numbers-mode" data-ext="pycon"><pre class="language-pycon"><code>[i for i in list]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字典推导式</p><div class="language-pycon line-numbers-mode" data-ext="pycon"><pre class="language-pycon"><code>{key: val for ... in ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>集合推导式</p><div class="language-pycon line-numbers-mode" data-ext="pycon"><pre class="language-pycon"><code>{val for ... in ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推导式-1" tabindex="-1"><a class="header-anchor" href="#推导式-1" aria-hidden="true">#</a> 推导式</h3><p>列表推导式</p><div class="language-pycon line-numbers-mode" data-ext="pycon"><pre class="language-pycon"><code>[i for i in list]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>字典推导式</p><div class="language-pycon line-numbers-mode" data-ext="pycon"><pre class="language-pycon"><code>{key: val for ... in ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>集合推导式</p><div class="language-pycon line-numbers-mode" data-ext="pycon"><pre class="language-pycon"><code>{val for ... in ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>元组的元素不能修改</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python3</span>
 
tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">34.56</span><span class="token punctuation">)</span>
tup2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xyz&#39;</span><span class="token punctuation">)</span>
 
<span class="token comment"># 以下修改元组元素操作是非法的。</span>
<span class="token comment"># tup1[0] = 100</span>
 
<span class="token comment"># 创建一个新的元组</span>
tup3 <span class="token operator">=</span> tup1 <span class="token operator">+</span> tup2
<span class="token keyword">print</span> <span class="token punctuation">(</span>tup3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>元组中的元素值是不允许修改的，但我们可以对元组进行连接组合</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">34.56</span><span class="token punctuation">)</span>
tup2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;xyz&#39;</span><span class="token punctuation">)</span>
 
<span class="token comment"># 以下修改元组元素操作是非法的。</span>
<span class="token comment"># tup1[0] = 100</span>
 
<span class="token comment"># 创建一个新的元组</span>
tup3 <span class="token operator">=</span> tup1 <span class="token operator">+</span> tup2
<span class="token keyword">print</span> <span class="token punctuation">(</span>tup3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除元组</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;Google&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">,</span> <span class="token number">1997</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
 
<span class="token keyword">print</span> <span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
<span class="token keyword">del</span> tup
<span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;删除后的元组 tup : &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所谓元组的不可变指的是元组所指向的内存中的内容不可变</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
tup<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;g&#39;</span>     <span class="token comment"># 不支持修改元素</span>

<span class="token builtin">id</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>     <span class="token comment"># 查看内存地址</span>

tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token builtin">id</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典-dict" tabindex="-1"><a class="header-anchor" href="#字典-dict" aria-hidden="true">#</a> 字典 dict</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="集合-set" tabindex="-1"><a class="header-anchor" href="#集合-set" aria-hidden="true">#</a> 集合 set</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>变量的声明: 变量名 = 变量值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义</span>
var <span class="token operator">=</span> <span class="token string">&#39;变量&#39;</span>
name <span class="token operator">=</span> <span class="token number">123</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment"># 赋值</span>
z <span class="token operator">=</span> bx <span class="token operator">=</span> cx <span class="token operator">=</span> <span class="token number">1</span>

a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">3j</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值运算" tabindex="-1"><a class="header-anchor" href="#数值运算" aria-hidden="true">#</a> 数值运算</h3><p>Python 全面支持浮点数；混合类型运算数的运算会把整数转换为浮点数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 9 加法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4.3</span> <span class="token operator">-</span> <span class="token number">2.5</span><span class="token punctuation">)</span>  <span class="token comment">#1.7999999 减法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4.3</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 2.3 减法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">)</span>  <span class="token comment"># 21 乘法</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 0.5 除法，得到一个浮点数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 2.0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">//</span> <span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 0 除法，得到一个整数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">17</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 2 取余</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># 32 乘方</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三目运算" tabindex="-1"><a class="header-anchor" href="#三目运算" aria-hidden="true">#</a> 三目运算</h3><p>左边结果 if 条件成立返回左边,不成立返回右边 else 右边结果</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">10</span>
b <span class="token operator">=</span> <span class="token number">20</span>
c <span class="token operator">=</span> a <span class="token keyword">if</span> a <span class="token operator">&gt;</span> b <span class="token keyword">else</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;函数&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fun<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

fun<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可变参数-args" tabindex="-1"><a class="header-anchor" href="#可变参数-args" aria-hidden="true">#</a> 可变参数 *args</h3><p>加了星号 * 的参数会以元组(tuple)的形式导入，存放所有未命名的变量参数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加了两个星号 ** 的参数会以字典的形式导入。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 可写函数说明</span>
<span class="token keyword">def</span> <span class="token function">printinfo</span><span class="token punctuation">(</span> arg1<span class="token punctuation">,</span> <span class="token operator">**</span>vardict <span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token string">&quot;打印任何传入的参数&quot;</span>
   <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&quot;输出: &quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">print</span> <span class="token punctuation">(</span>arg1<span class="token punctuation">)</span>
   <span class="token keyword">print</span> <span class="token punctuation">(</span>vardict<span class="token punctuation">)</span>
 
<span class="token comment"># 调用printinfo 函数</span>
printinfo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> a<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名函数-lambda" tabindex="-1"><a class="header-anchor" href="#匿名函数-lambda" aria-hidden="true">#</a> 匿名函数 lambda</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># var = lambda: 100</span>

<span class="token comment">#var = lambda a, b: a + b</span>
<span class="token comment">#var(1, 2)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><p>Python <code>open()</code> 方法用于打开一个文件，并返回文件对象。</p><p>open() 函数常用形式是接收两个参数：文件名(file)和模式(mode)。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># 完整参数</span>
<span class="token comment">#open(file, mode=&#39;r&#39;, buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)</span>
<span class="token comment">#file: 必需，文件路径（相对或者绝对路径）。</span>
<span class="token comment">#mode: 可选，文件打开模式</span>
<span class="token comment">#buffering: 设置缓冲</span>
<span class="token comment">#encoding: 一般使用utf8</span>
<span class="token comment">#errors: 报错级别</span>
<span class="token comment">#newline: 区分换行符</span>
<span class="token comment">#closefd: 传入的file参数类型</span>
<span class="token comment">#opener: 设置自定义开启器，开启器的返回值必须是一个打开的文件描述符。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
