var exec=require("cordova/exec");

  module.exports={
  //print something to the native console
  print: function(str){
    exec(null,null,"Echo","print",[str]);
  },
  //print error message to the native console
  error: function(code,str){
    exec(null,null,"Echo","error",[code,str]);
  }
}
