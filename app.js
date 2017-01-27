
function encrypt(key, msg){
  var result = '';
  for(index=0; index < msg.length;
    index++){
      myChar = msg[index];
      indexOnKey = key.indexOf(myChar.toLowerCase());
      if(indexOnKey < 0){
        result += myChar;
      }
      else{
        result += indexOnKey;
      }
    }
    return result;
  }

  function init_js(){
    var output = document.getElementById('output');
    var msg = document.getElementById('msg').value;
    var key_control = document.getElementById('clave');
    var key = key_control.options[key_control.selectedIndex].value;

    var result = encrypt(key, msg);
    output.innerHTML = result
  }

  window.init_js = init_js;
