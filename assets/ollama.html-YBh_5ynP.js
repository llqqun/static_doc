import{_ as l,r as i,o as n,c as r,b as t,d as e,e as a,a as s}from"./app-dvpOtimn.js";const o={},c=t("h1",{id:"ollama",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ollama","aria-hidden":"true"},"#"),e(" ollama")],-1),m={href:"https://ollama.com",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/ollama/ollama",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>ollamay一个开源的大型语言模型服务工具</p><h2 id="可用命令" tabindex="-1"><a class="header-anchor" href="#可用命令" aria-hidden="true">#</a> 可用命令</h2><ol start="0"><li>创建自定义模型</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>启动ollama服务</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装ollama模型</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama pull [modelName]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>启动ollama模型<br> 没有模型的情况下，默认会主动去下载模型</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama run [modelName]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>删除</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama rm [modelName]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>停止运行的模型</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama stop [modelName]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>列出所有模型</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ollama list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="根据modelfile创建自定义模型" tabindex="-1"><a class="header-anchor" href="#根据modelfile创建自定义模型" aria-hidden="true">#</a> 根据Modelfile创建自定义模型</h2><p>.Modelfile文件</p><div class="language-Modelfile line-numbers-mode" data-ext="Modelfile"><pre class="language-Modelfile"><code>FROM llama3.2

SYSTEM &quot;&quot;&quot;
你是一个阅读助手，帮助用户理解和分析文本内容。你可以总结文本、提取关键信息、回答问题，并提供相关的背景知识。
&quot;&quot;&quot;

# 设置 Ollama 如何运行模型的参数。
PARAMETER num_ctx 4096

# 要发送给模型的完整提示模板。
TEMPLATE

# 定义适用于模型的 (Q)LoRA 适配器。
ADAPTER

#指定合法的许可证。
LICENSE

#指定消息历史记录。
MESSAGE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PARAMETER 参数</p><table><thead><tr><th>名称</th><th>说明</th><th>值类型</th><th>默认值</th></tr></thead><tbody><tr><td>mirostat</td><td>启用米罗统计采样以控制困惑度。（默认值：0，0 表示禁用，1 表示米罗统计，2 表示米罗统计 2.0）</td><td>int</td><td>0</td></tr><tr><td>mirostat_eta</td><td>影响算法对生成文本反馈做出响应的速度。较低的学习率会导致调整速度变慢，而较高的学习率会使算法响应更灵敏。</td><td>float</td><td>0.1</td></tr><tr><td>mirostat_tau</td><td>控制输出内容连贯性和多样性之间的平衡。较低的值会使生成的文本更聚焦、更连贯。</td><td>float</td><td>5.0</td></tr><tr><td>num_ctx</td><td>设置用于生成下一个词元的上下文窗口大小。</td><td>int</td><td>2048</td></tr><tr><td>repeat_last_n</td><td>设置模型为防止重复向前回看的距离。（默认值：64，0 表示禁用，-1 表示上下文数量）</td><td>int</td><td>64</td></tr><tr><td>repeat_penalty</td><td>设置对重复内容惩罚的力度。较高的值（例如 1.5）会对重复进行更严厉的惩罚，而较低的值（例如 0.9）则更宽松。</td><td>float</td><td>1.1</td></tr><tr><td>temperature</td><td>模型的温度参数。提高温度会使模型的回答更具创造性。</td><td>int</td><td>0.7</td></tr><tr><td>seed</td><td>设置用于生成内容的随机数种子。将其设置为特定数字会使模型针对相同的提示生成相同的文本。</td><td>int</td><td>42</td></tr><tr><td>stop</td><td>设置要使用的停止序列。当遇到此模式时，大型语言模型（LLM）将停止生成文本并返回结果。可通过在模型文件中指定多个独立的停止参数来设置多个停止模式。 字符串类型 停止序列 “AI 助手：”</td><td></td><td></td></tr><tr><td>tfs_z</td><td>无尾采样用于降低输出中较不可能出现的词元的影响。较高的值（例如 2.0）会更大程度地降低这种影响，值为 1.0 则禁用此设置。</td><td>float</td><td>1</td></tr><tr><td>num_predict</td><td>生成文本时要预测的最大词元数量。（默认值：-1，即无限生成）</td><td>int</td><td>42</td></tr><tr><td>top_k</td><td>降低生成无意义内容的概率。较高的值（例如 100）会给出更多样化的答案，而较低的值（例如 10）则更保守。（默认值：40）</td><td>int</td><td>40</td></tr><tr><td>top_p</td><td>与前 k 采样共同起作用。较高的值（例如 0.95）会使生成的文本更具多样性，而较低的值（例如 0.5）会生成更聚焦、更保守的文本。</td><td>float</td><td>0.9</td></tr><tr><td>min_p</td><td>是核采样（top_p）的替代方案，旨在确保质量和多样性之间的平衡。参数 p 代表相对于最有可能出现的词元的概率而言，一个词元被考虑的最小概率。例如，当 p = 0.05 且最有可能出现的词元概率为 0.9 时，值小于 0.045 的对数几率（logits）会被过滤掉。</td><td>float</td><td>0.05</td></tr></tbody></table>`,21);function b(p,h){const d=i("ExternalLinkIcon");return n(),r("div",null,[c,t("p",null,[t("a",m,[e("ollama"),a(d)]),e(" is a local LLM runner.")]),t("p",null,[t("a",u,[e("github"),a(d)])]),v])}const g=l(o,[["render",b],["__file","ollama.html.vue"]]);export{g as default};
