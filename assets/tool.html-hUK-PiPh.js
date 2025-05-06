import{_ as e,o as n,c as i,a}from"./app-dks1XpE7.js";const d={},s=a(`<h1 id="工具的使用" tabindex="-1"><a class="header-anchor" href="#工具的使用" aria-hidden="true">#</a> 工具的使用</h1><h2 id="包管理器" tabindex="-1"><a class="header-anchor" href="#包管理器" aria-hidden="true">#</a> 包管理器</h2><h3 id="pip命令" tabindex="-1"><a class="header-anchor" href="#pip命令" aria-hidden="true">#</a> pip命令</h3><p>更换全局pip镜像源 配置文件路径</p><blockquote><p>Windows：C:\\Users\\Administrator\\AppData\\Roaming\\pip\\pip.ini Linux/macOS：~/.pip/pip.conf</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 安装
pip install package_name
pip install package_name==version_number
pip install -r requirements.txt
// 升级包
pip install --upgrade package_name
// 卸载包
pip uninstall package_name
// 列出所有包
pip list
pip list &gt; requirements.txt
//  查看包详情
pip show package_name
// 搜索包
pip search search_term
// 生成项目依赖文件
pip freeze &gt; requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conda-命令" tabindex="-1"><a class="header-anchor" href="#conda-命令" aria-hidden="true">#</a> conda 命令</h3><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 创建conda 环境指定python版本
conda create -n myenv python=3.9
// 激活conda 环境
conda activate myenv
// 查看所有环境
conda env list
// 停用环境
conda deactivate
// 删除环境
conda remove -n myenv --all
// 在激活的环境安装包
conda install numpy
conda update numpy
conda remove numpy
conda list
# 导出到YAML文件（推荐）
conda env export &gt; environment.yml
# 根据YAML文件创建新环境
conda env create -f environment.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>conda 关闭默认激活</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>
conda config --set auto_activate_base false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示当前状态</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>conda config --show | findstr auto_activate_base
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),l=[s];function c(r,v){return n(),i("div",null,l)}const m=e(d,[["render",c],["__file","tool.html.vue"]]);export{m as default};
