const In= document.getElementsByTagName('input')[0];
const Bo= document.getElementsByTagName('button')[0];
const Er=document.getElementsByClassName('Error')[0];
const Num=document.getElementsByClassName('number')[0];
const UpDown=document.getElementsByClassName('UpDown')[0];
Bo.addEventListener('click',()=>addNum());


function rend(){
    return(Math.floor(Math.random()*100+1))
}
window.rendNum=rend();

const keyE=(e)=>{
    if(e.key==='Enter'){ addNum();

        In.value='';
        In.select();
    }
}

window.addEventListener('keydown',keyE);


const addNum=()=>{

    if(In.value>=1&&In.value<=100) {
        nError();
        const CD=document.createElement('div');
        const IVT=document.createTextNode(In.value);
        CD.appendChild(IVT);
        Num.appendChild(CD);
        disc();
    }
    else{
        error();
    }
}

const disc=()=>{
    if(rendNum>In.value){
        UpDown.innerText='rendom number is up'
    }
    else if( rendNum<In.value){
        UpDown.innerText='rendom number is down'
    }
    else{
        UpDown.innerText='Congratulations!'
        const CB=document.createElement('button');
        CB.innerText='restart?'
        CB.addEventListener('click',()=>{reset();
        CB.remove();
        })
        document.body.appendChild(CB);
    }
}

const error=()=>{
    Er.style.backgroundColor='red';
    Er.innerText='warning cheak input(input number : 1~100)';
}

const nError=()=>{
    Er.style.backgroundColor='transparent';
    Er.innerText='';
}
const reset=()=>{
    //location.reload();
    while(Num.hasChildNodes()){
        Num.removeChild(Num.firstChild);
    }
    nError();
    
    UpDown.innerText='';

    window.rendNum=rend();
    In.select();
       
}