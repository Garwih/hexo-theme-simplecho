Simplecho
========
Theme for [Hexo](http://hexo.io). 

Demo: http://garwih.github.io/hexo-theme-simplecho/

##Install
修改 Hexo 根目录下 _config.yml 里面的 `theme` 为 `simplecho`

~~~
git clone https://github.com/Garwih/hexo-theme-simplecho.git themes/simplecho
~~~

##Update

进入 Hexo 根目录并执行
~~~
cd themes/simplecho
git pull
~~~

##Config
####默认主题配置 `simplecho/_config.yml`
~~~ yaml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml
favicon: /favicon.png
subtitle_show: true

# Main
duoshuo_shortname: 
duoshuo_home: true

~~~

* menu - 顶部导航，Home 和 Archives 可修改为中文
* subtitle_show - 首页 title 是否显示子标题，默认 true
* duoshuo_shortname - 多说 ID
* duoshuo_home - 是否在首页加载多说的 js 。如果首页需要显示评论数量，请选择 true (设置了多说 ID 之后才有效)

####Hexo 根目录下的 `_config.yml` ，修改部分如下
~~~ yaml
archive: 1
category: 1
tag: 1
~~~

主题默认语言为英文，需要中文的请修改。
~~~ yaml
language: zh-CN
~~~

如果使用 Disqus ，请填入你的 Disqus ID ， 若设置了 Disqus ，则`多说`的设置无效。
~~~ yaml
# Disqus
disqus_shortname: Disqus ID
~~~

##Features

###Featured Image
插入文章特色图片，在文章顶部加入 image 及图片链接
~~~
title: post title
image: //example.com/example.jpg
---
~~~

###No Title Post
无标题，即 title 留空时，发表日期会作为标题

###Link Post
~~~ yaml
title: Link Post
link: http://www.google.com/
---
~~~

###Video
插入视频时，为了自适应页面大小，请将视频分享代码放在 `class="video"` 中，例如
~~~ html
<div class="video">视频分享代码</div>
~~~


##Browser Support

IE 8+, Opera, Chrome, Firefox, Safari

##License
[MIT License](http://opensource.org/licenses/MIT)
