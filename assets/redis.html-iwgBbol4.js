import{_ as e,o as s,c as i,a as t}from"./app-vL25MzAY.js";const l={},r=t('<h2 id="安装配置redis" tabindex="-1"><a class="header-anchor" href="#安装配置redis" aria-hidden="true">#</a> 安装配置redis</h2><p>yum install redis</p><p>打开配置文件 vi /etc/redis.conf</p><p>配置连接密码(配置文件中) requirepass [password]</p><p>启动redis systemctl start redis</p><p>停止redis systemctl stop redis</p><p>查看redis运行状态 systemctl status redis</p><p>查看redis进程 systemctl status redis</p><p>重启redis进程 systemctl restart redis</p><p>本机连接redis redis-cli</p><p>如果有密码连接本机还需要输入密码(否则不管输入什么命令都不会执行) auth [password]</p><h2 id="使用命令" tabindex="-1"><a class="header-anchor" href="#使用命令" aria-hidden="true">#</a> 使用命令</h2><ul><li>set key value #设置键值对</li><li>append key value #追加值</li><li>get key #获取key对应的值</li><li>del key #删除key</li><li>keys * #获取所有key</li><li>setex key seconds value #设置键值对，并设置过期时间</li><li>ttl key #查看key的剩余生存时间</li><li>mset key1 value1 key2 value2 ... #设置多个键值对</li><li>mget key1 key2 ... #获取多个键对应的值</li><li>expire key seconds #设置key的过期时间</li><li>exists key #查看key是否存在</li><li>type key #查看key的类型</li></ul>',13),a=[r];function d(p,c){return s(),i("div",null,a)}const n=e(l,[["render",d],["__file","redis.html.vue"]]);export{n as default};
