import{_ as e,o as n,c as i,a as d}from"./app-xctzKS5k.js";const s={},a=d(`<h1 id="doker" tabindex="-1"><a class="header-anchor" href="#doker" aria-hidden="true">#</a> DOKER</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>
  run         通过镜像创建一个容器
  exec        在正在运行的容器中执行命令
  ps           查看容器列表(-a 查看所有容器包括已停止的)
  build       从dockerFile构建镜像
  pull        远程下载镜像
  push        上传镜像文件
  images     镜像列表
  login       
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 查找镜像
docker search [镜像名称]

// 下载镜像
docker pull nginx

// 删除镜像
docker rmi [镜像名称或者id]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据nginx镜像运行一个Nginx容器</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker run -d -p 5000:80 nginx
// or
docker run --name nginx-docker-con  -d -p 5000:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署外部路径 <code>/usr/local/dockerWork</code>到容器内</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker run -d --name nginx-demo -p 5000:80  -v /usr/local/dockerWork:/usr/share/nginx/html:ro nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件复制到容器内</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker cp 797c652d907e:/etc/nginx/nginx.conf /usr/local/nginx/conf/nginx.conf
// 容器id:内部路径 外部文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找指定容器</p><div class="language-doc line-numbers-mode" data-ext="doc"><pre class="language-doc"><code>// 先查找所有容器
// 然后通过linux命令grep 过滤
docker ps | grep [过滤参数]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看容器日志</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 查看所有日志
docker logs -f [容器ID或者容器名称]

// 添加过滤条件
docker logs -f[容器ID或者容器名称] --tail=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[a];function c(r,v){return n(),i("div",null,l)}const m=e(s,[["render",c],["__file","docker.html.vue"]]);export{m as default};
