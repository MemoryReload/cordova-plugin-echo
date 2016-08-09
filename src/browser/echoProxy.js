
function toastInfo(str,interval){
  var toast = undefined,
  toastId = undefined;

  if (str && typeof(str) === 'string' && str.length > 0) {
    toastId = 'toast' + Date.now();
    toast = document.createElement('div');
    toast.appendChild(document.createTextNode(str));
    toast.id = toastId;
    toast.style.width = '30%';
    toast.style.borderStyle = 'solid';
    toast.style.borderColor = '#777777';
    toast.style.borderRadius = '5px';
    toast.style.borderWidth = '2px';
    toast.style.margin = '0 auto';
    toast.style.marginTop = '30px';
    toast.style.backgroundColor = '#999999';
    toast.style.padding = '5px';
    toast.style.fontSize = '1.5em';
    toast.style.fontWeight = 'bold';
    toast.style.textAlign = 'center';
    toast.style.zIndex = 2147483647;

    document.body.appendChild(toast);

    setTimeout(function() {
      document
      .body
      .removeChild(document.getElementById(toastId));
    }, interval);
  }
};

module.exports={
  print: function(success,fail,args){
    var str=args[0];
    console.log(str);
    success();
  },
  error: function(success,fail,args){
    var code=args[0];
    var str=args[1];
    var err='Erro('+code+','+str+')';
    console.log(err);
    toastInfo(err,3000);
    success();
  }
};

require('cordova/exec/proxy').add('Echo',module.exports);
