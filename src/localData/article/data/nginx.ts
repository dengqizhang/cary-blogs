export const nginx: string = `<h1>nginx的使用</h1>
<p>最近驻场使用nginx的频率比较高，顺便做个笔记讲一下nginx</p>
<h2>nginx的功能</h2>
<p>主要的功能有三个</p>
<ul>
<li>负载均衡</li>
</ul>
<pre><code class="code-highlight"><span class="code-line line-number" line="1">http {
</span><span class="code-line line-number" line="2">    upstream myapp {
</span><span class="code-line line-number" line="3">        least_conn;
</span><span class="code-line line-number" line="4">        server 192.168.1.100:8080 weight=2 max_fails=3 fail_timeout=30s;
</span><span class="code-line line-number" line="5">        server 192.168.1.101:8080;
</span><span class="code-line line-number" line="6">        server 192.168.1.102:8080 backup;
</span><span class="code-line line-number" line="7">    }
</span><span class="code-line line-number" line="8">
</span><span class="code-line line-number" line="9">    server {
</span><span class="code-line line-number" line="10">        listen 80;
</span><span class="code-line line-number" line="11">        server_name example.com;
</span><span class="code-line line-number" line="12">
</span><span class="code-line line-number" line="13">        location / {
</span><span class="code-line line-number" line="14">            proxy_pass http://myapp;
</span><span class="code-line line-number" line="15">            proxy_set_header Host $host;
</span><span class="code-line line-number" line="16">            proxy_set_header X-Real-IP $remote_addr;
</span><span class="code-line line-number" line="17">            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
</span><span class="code-line line-number" line="18">        }
</span><span class="code-line line-number" line="19">    }
</span><span class="code-line line-number" line="20">}
</span></code></pre>
<p>使用upstream 命名服务集群</p>
<p>可以增加负载均衡策略：</p>
<p>1，轮询：默认服务策略</p>
<p>2，加权轮询：</p>
<pre><code class="code-highlight"><span class="code-line line-number" line="1">upstream backend {
</span><span class="code-line line-number" line="2">    server backend1.example.com weight=3;  # 3/5 请求
</span><span class="code-line line-number" line="3">    server backend2.example.com weight=2;  # 2/5 请求
</span><span class="code-line line-number" line="4">}
</span></code></pre>
<ul>
<li>反向代理</li>
</ul>
<p>用于 接收客户端请求并转发给后端服务器处理</p>
<ul>
<li>web服务器</li>
</ul>
<p>在nginx的配置文件中，可以增加前端静态资源的目录用于展示页面</p>
<pre><code class="code-highlight"><span class="code-line line-number" line="1">server {
</span><span class="code-line line-number" line="2">    listen 80;
</span><span class="code-line line-number" line="3">    server_name example.com;
</span><span class="code-line line-number" line="4">    root /var/www/frontend;  # 前端项目根目录
</span><span class="code-line line-number" line="5">    
</span><span class="code-line line-number" line="6">    # 主入口文件处理
</span><span class="code-line line-number" line="7">    location / {
</span><span class="code-line line-number" line="8">        try_files $uri $uri/ /index.html;  # 支持前端路由
</span><span class="code-line line-number" line="9">    }
</span><span class="code-line line-number" line="10">    # 处理前端路由应用
</span><span class="code-line line-number" line="11">    error_page 404 =200 /index.html;
</span><span class="code-line line-number" line="12">}
</span></code></pre>
<p>使用root挂载前端资源的目录，下一次迭代版本时只需要更新这个路径的文件即可。</p>`