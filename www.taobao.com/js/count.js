/**
 * Created by dandan on 2016/10/22.
 */
var interval=1000;
function showCountDown(year,month,day,obj){
    var now=new Date();
    var endDate=new Date(year,month-1,day);
    var leftTime=endDate.getTime()-now.getTime();
    var leftSecond=parseInt(leftTime/1000);
    var day1=Math.floor((leftSecond/(60*60*24)));
    var hour=Math.floor((leftSecond-day1*24*60*60)/3600);
    var minute=Math.floor((leftSecond-day1*24*60*60-hour*3600)/60);
    var second=Math.floor(leftSecond-day1*24*60*60-hour*3600-minute*60);

    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
    var oinput=document.getElementById(obj).getElementsByTagName("input");
    oinput[0].value=hour;
    oinput[1].value=minute;
    oinput[2].value=second;
}
window.setInterval(function(){showCountDown(2016,10,23,"count");},interval);