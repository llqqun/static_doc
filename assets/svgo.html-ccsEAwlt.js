import{_ as e,o as i,c as n,a as s}from"./app-7ZQ6jRti.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g svgo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svgo [OPTIONS] [ARGS]

Options:
  -h, --help : Help 帮助
  -v, --version : Version版本
  -i INPUT, --input=INPUT : 输入的文件, &quot;-&quot; 为标准输入
  -s STRING, --string=STRING : 输入SVG数据字符串
  -f FOLDER, --folder=FOLDER : 输入的文件夹，会优化与重写所有的*.svg文件
  -o OUTPUT, --output=OUTPUT : 输入的文件或文件夹 (默认同输入), &quot;-&quot; 标准输出
  -p PRECISION, --precision=PRECISION : 设置数字的小数部分，重写插件参数
  --config=CONFIG : 配置文件扩展或替换默认设置
  --disable=DISABLE : 根据名字禁用插件
  --enable=ENABLE : 根据名字开启插件
  --datauri=DATAURI : 输入文件以Data URI字符串形式(base64, URI encoded or unencoded)
  -q, --quiet : 仅输出错误信息，不包括正常状态消息
  --pretty : 让SVG漂亮的打印
  --show-plugins : 显示可用和存在的插件

Arguments:
  INPUT : 别名 --input
  OUTPUT : 别名 --output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>单个文件使用</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svgo test.svg
or
svgo test.svg test.min.svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>文件夹使用</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svgo -f ../path/to/folder/with/svg/files
or
svgo -f ../path/to/folder/with/svg/files -o ../path/to/folder/with/svg/output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function a(v,r){return i(),n("div",null,t)}const c=e(d,[["render",a],["__file","svgo.html.vue"]]);export{c as default};
