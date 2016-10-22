/**
 * Created by dandan on 2016/10/22.
 */
var tb_li=document.getElementById("tb_new").getElementsByTagName("li");

var num=0;
setInterval(function(){
    for(var i=0;i<tb_li.length;i++){
        tb_li[i].style.display="none";
    }
    tb_li[num].style.display="block";
    num++;
    if(num>=4){
        num=0;
    }
},3000);