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