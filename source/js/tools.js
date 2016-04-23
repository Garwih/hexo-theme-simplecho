function show_search(){
    var search_input = document.getElementById('nav-search-input');
    if (search_input.className == 'show') {
      search_input.attributes.removeNamedItem('class');
      var class_name = document.createAttribute('class');
      class_name.value = 'hide';
      search_input.attributes.setNamedItem(class_name);
    } else {
      search_input.attributes.removeNamedItem('class');
      var class_name = document.createAttribute('class');
      class_name.value = 'show';
      search_input.attributes.setNamedItem(class_name);
    };
}

function dispatch() {
  var q = document.getElementById("q");
  var site = document.getElementById("site");
  if (q.value != "") {
    var url = 'https://www.google.com/search?q=' + site.value + '%20' + q.value;
    if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
      location.href = url;
    } else {
      window.open(url, "_blank");
    }
    return false;
  } else {
    return false;
  }
}

(function tool(global, document) {
  function query(selector, element) {
    return (element || document).querySelector(selector);
  }
  
  function queryAll(selector, element) {
    return (element || document).querySelectorAll(selector);
  }
  
  global.$ = query;
  global.$$ = queryAll;
})(this, document);

(function loadComments() {
  var comment = $('#comments');
  var disqus_thread = $('#disqus_thread');
  var timer;
  var commentTop;
  
  function disqusScript() {
    var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/' + (typeof disqus_home !== 'undefined' ? 'count.js' : 'embed.js');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
  
  function duoshuoScript() {
    var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
  }
  if(typeof disqus_home !== 'undefined') {
    disqusScript();
  } else if(typeof disqus_shortname !== 'undefined') {
    timer = setInterval(function () {
      disqus_thread.innerHTML = '评论加载中...<br><br>注：如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理。';
      commentTop = comment.getBoundingClientRect().top;
      if(location.hash.indexOf('#disqus_thread') > -1 || Math.abs(commentTop) < 1000) {
        clearInterval(timer);
        disqusScript();
      }
    }, 400);
  } else if(typeof duoshuoQuery !== 'undefined') {
    timer = setInterval(function () {
      commentTop = comment.getBoundingClientRect().top;
      if(location.hash.indexOf('#comment') > -1 || Math.abs(commentTop) < 1000) {
        clearInterval(timer);
        duoshuoScript();
      }
    }, 400);
  }
})(this, document);