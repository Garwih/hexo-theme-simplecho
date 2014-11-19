//Mod
(function(){
  'use strict';
  var odiv = document.getElementsByTagName('*');
  var header, user;
  for(var i = 0; i<odiv.length; i++){
    if(odiv[i].className == 'ds-meta'){
      alert(odiv[i]);
      header = odiv[i];
      user = header.getElementsByTagName('a');
      if( user.getAttributeNode('data-user-id').value == '<%= theme.duoshuo_id %>' ){
        var mod = document.createElement('strong');
        var mod_text = document.createTextNode('Mod');
        mod.appendChild(mod_text);
        header.appendChild(mod);
      }
    }
  }
}());