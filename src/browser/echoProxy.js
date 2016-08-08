module.exports={
  print: function(str){
    this.toastInfo(str,3000);
  },
  error: function(code,str){
    this.toastInfo('Erro('+code+','+str+')');
  },
  toastInfo: function(str,interval)
  {
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
  }
};

require('cordova/exec/proxy').add('echoProxy',module.exports);
