import{_ as n,o as s,c as a,a as t}from"./app-vL25MzAY.js";const p={},e=t(`<h1 id="javascript中的类" tabindex="-1"><a class="header-anchor" href="#javascript中的类" aria-hidden="true">#</a> JavaScript中的类</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    <span class="token comment">// name; 这种显示声明会和set/get 语法绑定冲突</span>
    #nameValue <span class="token operator">=</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">;</span>
    age <span class="token operator">=</span> <span class="token number">32</span><span class="token punctuation">;</span> <span class="token comment">// 声明公共实例字段,并设置初始值</span>
    #birthdate <span class="token operator">=</span> <span class="token string">&#39;1991-01-01&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 声明私有字段,只能在所属类中读取和修改</span>
    
    <span class="token keyword">static</span> heartbeat <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span> <span class="token comment">// 静态字段,绑定在类上面,只能类.使用</span>
    <span class="token keyword">static</span> #<span class="token constant">MAX_NUM</span> <span class="token operator">=</span> <span class="token number">3</span>
    <span class="token keyword">static</span> instance <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token comment">// 构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">sex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        People<span class="token punctuation">.</span>instance<span class="token operator">++</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>People<span class="token punctuation">.</span>instance <span class="token operator">&gt;</span> People<span class="token punctuation">.</span>#<span class="token constant">MAX_NUM</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;人数已经超过最大限制了&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;新生了一个人&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;人名&#39;</span> <span class="token comment">// 隐式声明实例变量,不会和set/get语法冲突</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex <span class="token comment">// 另一种方式声明实例字段</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 实例方法,实例通过实例方法进行计算或者操作内部私有变量,调用私有方法</span>
    <span class="token function">publicFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">#privateFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">setBirthdate</span><span class="token punctuation">(</span><span class="token parameter">ages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>#birthdate <span class="token operator">=</span> ages
    <span class="token punctuation">}</span>
    <span class="token comment">// 内部访问私有变量</span>
    <span class="token function">getBirthdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#birthdate
    <span class="token punctuation">}</span>
    <span class="token comment">// 私有方法,只能在类的内部调用,实例不能直接调用(可以通过实例方法调用私有方法)</span>
    <span class="token function">#privateFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>People<span class="token punctuation">.</span>heartbeat<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#birthdate<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 静态方法</span>
    <span class="token comment">// 静态方法可以访问静态字段。</span>
    <span class="token comment">// 静态方法不能访问实例字段。</span>
    <span class="token keyword">static</span> <span class="token function">classFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;静态方法:&#39;</span><span class="token punctuation">,</span> People<span class="token punctuation">.</span>#<span class="token constant">MAX_NUM</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;静态方法:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 访问不到实例字段</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// get/set 语法 将实例的属性和查询该属性时调用的函数进行绑定</span>
    <span class="token comment">// 隐式的给实例添加了name 属性</span>
    <span class="token comment">// 若是在类中公开声明过同名的实例变量,则 get/set 语法不生效</span>
    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#nameValue
    <span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>#nameValue <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">child</span> <span class="token keyword">extends</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
    job <span class="token operator">=</span> <span class="token string">&#39;程序员&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// 在使用this关键字之前，必须在子构造函数中执行super()。调用super()确保父构造函数初始化实例。</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> obj<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
    <span class="token comment">// 重写父类中的方法</span>
    <span class="token function">publicFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;子类重写方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
    <span class="token function">childFun</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">publicFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// 通过super访问父类中的方法</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">publicFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","class.html.vue"]]);export{k as default};
