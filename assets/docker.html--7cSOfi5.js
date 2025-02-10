import{_ as e,o as d,c as i,a as n}from"./app-dvpOtimn.js";const a={},s=n(`<h1 id="doker" tabindex="-1"><a class="header-anchor" href="#doker" aria-hidden="true">#</a> DOKER</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>  run         通过镜像创建一个容器
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-镜像管理" tabindex="-1"><a class="header-anchor" href="#_1-镜像管理" aria-hidden="true">#</a> 1. 镜像管理</h3><p>拉取镜像</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker pull &lt;image_name&gt;[:&lt;tag&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除镜像</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker rmi [镜像名称或者id]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出本地镜像列表</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker build -t [镜像名称] [dockerfile路径]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-容器管理" tabindex="-1"><a class="header-anchor" href="#_2-容器管理" aria-hidden="true">#</a> 2. 容器管理</h3><p>根据镜像创建容器</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker run [参数] [镜像名称] [命令]

docker run -d -p 5000:80 nginx
// or
docker run --name nginx-docker-con  -d -p 5000:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部路径 <code>/usr/local/dockerWork</code>目录挂载到容器内</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker run -d --name nginx-demo -p 5000:80  -v /usr/local/dockerWork:/usr/share/nginx/html:ro nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件复制到容器内</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker cp 797c652d907e:/etc/nginx/nginx.conf /usr/local/nginx/conf/nginx.conf
// 容器id:内部路径 外部文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>  docker exec -it [容器ID或者容器名称] [命令]
  // 示例
  docker exec -it mynginx /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动容器/停止容器</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker start [容器ID或者容器名称]
docker stop [容器ID或者容器名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除容器</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker rm [容器ID或者容器名称]
docker rm -f [容器ID或者容器名称]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查找容器</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 先查找所有容器
// 然后通过linux命令grep 过滤
docker ps | grep [过滤参数]
// 列出所有容器
docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看容器日志</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 查看所有日志
docker logs -f [容器ID或者容器名称]

// 添加过滤条件
docker logs -f[容器ID或者容器名称] --tail=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-docker-compose" tabindex="-1"><a class="header-anchor" href="#_3-docker-compose" aria-hidden="true">#</a> 3. Docker Compose</h3><p>启动服务</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker-compose up [options]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止服务</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>docker-compose down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),c=[s];function r(l,m){return d(),i("div",null,c)}const u=e(a,[["render",r],["__file","docker.html.vue"]]);export{u as default};
