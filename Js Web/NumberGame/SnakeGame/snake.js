
let i,j,board;

board='<table border=0 >'
for (i=0; i<23; i++){
    board+='<tr>'
    for(j=0; j<33; j++){
        board+=`<td id="${i} ${j}"></td>`
    }
    
    board+='</tr>'
  
}
board+='</table>'

document.write(board);
for(i=0; i<23; i++){
    for(j=0; j<33; j++){
        if((i==0||i==22)||(j==0||j==32)){
            let ID= document.getElementById(`${i} ${j}`)   
            ID.style.background='black';
        }
    }
}

let x=16;
let y=11;
let len=1;
let eatNumber=0;

let sHead=document.getElementById(`${y} ${x}`);
sHead.style.backgroundColor='red';
function start(){
    snake();
    window.removeEventListener('keydown',start);
}
window.addEventListener('keydown',start);
window.addEventListener('keydown',(e)=>keymove(e));

const ND=document.getElementsByClassName('eatNumber')[0];
ND.textContent=`먹은 갯수: ${eatNumber}개`;

let direction=0;
let lenght=1;
function snake(){
    let speed=75
    window.timer=setInterval(() => {
        move(direction);
        
    }, speed);
    
    ball();
}
const keymove=(e)=>{
    if(e.keyCode==38&&direction!=1)direction=0;//up
    else if(e.keyCode==40&&direction!=0)direction=1;//down
    else if(e.keyCode==37&&direction!=3)direction=2;//left
    else if(e.keyCode==39&&direction!=2)direction=3;//right

}

const move=(direction)=>{ 
    len--;
    preHead=document.getElementById(`${y} ${x}`)
    switch(direction){
        case 0:
            y--; break;
        case 1:
            y++; break;
        case 2:
            x--; break;
        case 3:
            x++; break;
    }
    sHead=document.getElementById(`${y} ${x}`);
    if(wall(x,y)){
        location.reload();
        return;
    }
    sHead.style.backgroundColor='red';
    preHead.style.backgroundColor='transparent';
    
    
}


const wall=(x,y)=>{
    if((y==0||y==22)||(x==0||x==32)){
        clearInterval(timer);
        alert(`${eatNumber}개!`);
        return 1;
    }
    if(ey==y&&ex==x){
        ball(1);
        eatNumber++;
        
        ND.textContent=`먹은갯수: ${eatNumber}개`;
        console.log(eatNumber);
    }
}


const ball= (n)=>{
    if(n)BC.remove();
    window.ey=Math.floor((Math.random()*100)%20+1);
    window.ex=Math.floor((Math.random()*100)%30+1);

    
    let Neat=document.getElementById(`${ey} ${ex}`);
    
    const CD=document.createElement('div');
    
    CD.className='Ball';
    Neat.appendChild(CD);
    window.BC= document.querySelector('.Ball');
    
}



  
