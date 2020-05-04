var song=document.querySelector('#music');
var pop=document.querySelector('#pop');
var boxes=document.querySelectorAll('.box');
var start=document.querySelector('#start');
var timer=document.querySelector('#timer');
var easy=document.querySelector('#easy');
var med=document.querySelector('#medium');
var diff=document.querySelector('#difficult');
var stat=document.querySelector('h4');
var best=document.querySelector('#best');
var stop=document.querySelector('#stop');
var s=0;var time2=0.000;var counter=0;var h;
const number=[[20,1,19,2,18,3,17,4,16,5,15,6,14,7,13,8,12,9,11,10],
        [10,2,11,18,12,7,13,6,14,5,15,4,16,3,17,9,1,19,8,20],
        [1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20],
        [3,1,2,18,19,20,4,6,5,15,17,16,7,9,8,14,12,13,10,11],
        [1,4,7,9,2,10,3,5,18,6,8,19,11,12,14,17,20,13,15,16],
        [9,2,10,3,11,4,12,5,13,6,14,7,20,17,1,18,15,16,19,8],[11,13,7,9,3,4,5,2,17,6,1,16,12,8,10,18,14,19,15,20]
]
const col=['#ffffff','#ffe5e5','#ffcccc','#ffb3b3','#ff9999','#ff8080','#ff6666','#ff4d4d','#ff3333','#ff1a1a','#ff0000','#e60000',
'#cc0000','#b30000','#990000','#800000','#660000','#4d0000','#330000','#1a0000']
function shuffle(){
	var r=Math.floor(Math.random()*number.length);
for (var i=0;i<boxes.length;i++)
		{boxes[i].value=number[r][i];
			boxes[i].style.backgroundColor=col[boxes[i].value-1];
		}}
		var counter=0;var s=0;timer.value=0;
		function enableall(){for(var i=0;i<boxes.length;i++)
{boxes[i].disabled=false;
	boxes[i].classList.remove('hide');
}}                 
function disableall(){for(var i=0;i<boxes.length;i++)
{boxes[i].disabled=true;
	boxes[i].classList.add('hide');
}}
var x;best.value=0;disableall();
easy.onclick=function fun(){s=1;easy.classList.add('dim');var y=h.parentElement;y.removeChild(h);}
med.onclick=function fun1(){s=2;med.classList.add('dim');var y=h.parentElement;y.removeChild(h);}
diff.onclick=function fun2(){s=3;diff.classList.add('dim');var y=h.parentElement;y.removeChild(h);	}
const starttime = (p) => {
    x = setInterval(function() {
    	var f=new Date();
        timer.value = (f.getTime()-p)/1000;
        console.log(timer);console.log(best);time2=timer.value;
    }, 1);}
   start.onclick=function fun3(){
	timer.value=0;time2=0;counter=0;
  enableall();shuffle();start.disabled=true;
    var d=new Date();var p= d.getTime();
	starttime(p);stat.innerHTML='';best.value=(JSON.parse(localStorage.getItem('bestscore'+parseInt(s)))||0);
     
}

function sounds(source){
	this.sound=document.createElement('audio');this.sound.src=source;
	this.play= function fun4(){this.sound.play();}
	this.pause=function fun5(){this.sound.pause();}}
	var music=new sounds('audio1.mp3');var pops=new sounds('audio2.mp3');var playsong= true;song.innerHTML='Music';let playsong1=false;
	pop.innerHTML='Disable Sounds';var mymusic={'Music':'Stop Music','Stop Music':'Music'};var mymusic1={'Enable Sound':'Disable Sounds','Disable Sounds':'Enable Sound'};
 song.onclick=function fun6(){playsong=!playsong;if(playsong==true){music.pause();}else{music.play();}song.innerHTML=mymusic[song.innerHTML];}
 pop.onclick=function fun9(){playsong1=!playsong1;pop.innerHTML=mymusic1[pop.innerHTML];}
boxes.forEach( (box) =>{box.onclick=function fun7(){if(playsong1==false){pops.play();}
	if(box.value==counter+1){if(s==1){if(parseInt(box.value)>20){box.classList.add('hide');box.disabled=true;}
	else{box.value=parseInt(box.value)+20;}}
if(s==2){if(parseInt(box.value)>40){box.classList.add('hide');box.disabled=true;}
else{box.value=parseInt(box.value)+20;}}
if(s==3){if(parseInt(box.value)>60){box.classList.add('hide');box.disabled=true;}
	else{box.value=parseInt(box.value)+20;}}counter++;}
if(counter==(20*(s+1))){timer.value=time2;if(s==1){easy.classList.remove('dim');}if(s==2){med.classList.remove('dim');}if(s==3){diff.classList.remove('dim');}
	clearInterval(x); 
	stat.innerHTML='CONGRATS! Score is '+ timer.value;
 if(timer.value<best.value||best.value==0)
	{localStorage.setItem('bestscore'+parseInt(s),JSON.stringify(timer.value));}
var c=(JSON.parse(localStorage.getItem('high'+parseInt(s)))|| []);
c.push(timer.value);localStorage.setItem('high'+parseInt(s),JSON.stringify(c));
}}})
stop.onclick=function fun8(){
	timer.value=time2;
	clearInterval(x);start.disabled=false;
	disableall();if(s==1){easy.classList.remove('dim');}if(s==2){med.classList.remove('dim');}if(s==3){diff.classList.remove('dim');}
	var b=(JSON.parse(localStorage.getItem('high'+parseInt(s)))||[]);
	b.sort(function(m,n){return parseFloat(m)-parseFloat(n);});
	h=document.createElement('table');document.body.appendChild(h);h.setAttribute('id','g');
    for(var i=0;i<b.length;i++)
    	{   if(i>4){break;}
    		var f=document.createElement('tr');h.appendChild(f);var o=document.createElement('td');var q=document.createElement('td');
            o.innerHTML=i+1;q.innerHTML=b[i];
            f.appendChild(o);f.appendChild(q);}}



