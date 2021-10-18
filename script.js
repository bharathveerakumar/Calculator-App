let key=document.querySelectorAll('[data-key]'), total=0, eqn=''
let signs=document.querySelectorAll('[data-sign]')
let tArea=document.querySelector('.ta'), flag=0, sign='+', format, temp
let ans=document.querySelector('.ans')
let clear=document.querySelector('.clear')
let ac=document.querySelector('.ac')

let sig={
    '+':1, '-':1, '*':1, '/':1, '%':1, '^':1,
}

//clearing the last character of the equation
clear.addEventListener('mousedown', ()=>{
    clear1(), clear.classList.add('ani')
})
clear.addEventListener('mouseup', ()=>{
    clear.classList.remove('ani')
})

//clearing the whole equation
ac.addEventListener('mousedown', ()=>{
    eqn='', clear1();
    ac.classList.add('ani')
})
ac.addEventListener('mouseup', ()=>{
    ac.classList.remove('ani')
})

//number keys
key.forEach(e=>{
    e.addEventListener('mousedown', ()=>{
        num(e.dataset.key)
        e.classList.add('ani')
    })
    e.addEventListener('mouseup', ()=>{
        e.classList.remove('ani')
    })
})

//operator keys
signs.forEach(e=>{
    e.addEventListener('mousedown', ()=>{
        symbol(e.dataset.sign)
        e.classList.add('ani')
    })
    e.addEventListener('mouseup', ()=>{
        e.classList.remove('ani')
    })
})

//keys from keyboard input
window.addEventListener('keydown', (e)=>{
    let code=e.key
    if((Number(code)>=0&&Number(code)<=9)||code==='.'||code==='('||code==')'){
        let key=document.querySelector(`[data-key="${code}"]`)
        num(code)
        key.classList.add('ani')
        setTimeout(()=>{
            key.classList.remove('ani')
        }, 100)
    }
    else if(code in sig){
        let key=document.querySelector(`[data-sign="${code}"]`)
        symbol(code)
        key.classList.add('ani')
        setTimeout(()=>{
            key.classList.remove('ani')
        }, 100)
    }
    else if(code==='Backspace'){
        clear1(), clear.classList.add('ani')
        setTimeout(()=>{
            clear.classList.remove('ani')
        }, 100)
    }
    else if(code==='='){
        ans.textContent=eval(eqn), eqn=''
        tArea.textContent=''
    }
})

function num(data){
    eqn+=data;
    tArea.textContent+=data;
    ans.textContent=eval(eqn)
}

function symbol(si){
    eqn+=si;
    tArea.textContent+=si;
}

function clear1(){
    eqn=eqn.slice(0,-1)
    tArea.textContent=eqn
    let eqn1=eqn;
    if(eqn.slice(-1) in sig) eqn1=eqn.slice(0, -1)
    ans.textContent=eval(eqn1)
}
