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
    var url = 'http://www.google.com/search?q=' + site.value + '%20' + q.value;
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
