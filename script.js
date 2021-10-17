let key=document.querySelectorAll('[data-key]'), total=0, b=''
let signs=document.querySelectorAll('[data-sign]')
let tArea=document.querySelector('.ta'), flag=0, sign='+', format
let ans=document.querySelector('.ans')
let clear=document.querySelector('.clear')

clear.addEventListener('click', ()=>{
    tArea.textContent=tArea.textContent.toString().slice(0,-1)
    format=tArea.textContent
})

key.forEach(e=>{
    e.addEventListener('mousedown', ()=>{
        num(e.dataset.key)
    })
})

signs.forEach(e=>{
    e.addEventListener('mousedown', ()=>{
        if(flag) symbol(e.dataset.sign), flag=0
    })
})

function num(data){
    tArea.textContent+=data, b+=data
    ans.textContent=eval(sign), flag=1
}

function symbol(si){
    total=Number(ans.textContent), tArea.textContent+=si
    b='', sign=si
}

function eval(sign){
    switch(sign){
        case '+':
            return total+parseFloat(b) 
        case '-':
            return total-parseFloat(b)
        case '*':
            return total*parseFloat(b)
        case '/':
            return total/parseFloat(b)
        case '^':
            return Math.pow(total, parseInt(b)) 
    }
}