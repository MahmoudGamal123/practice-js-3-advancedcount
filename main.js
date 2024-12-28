const btns = document.querySelectorAll('.increase');
colors = ['red', 'green', 'yellow', 'blue', 'magenta']



function changeColor(){
    randomNumber = parseInt(Math.random()*6)
    return colors[randomNumber]
}

btns.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let card = item.closest('.card')
        card.style.backgroundColor = changeColor()
        let para = card.querySelector('p')
        let count = parseInt(para.textContent)
        para.textContent = count+1
    })
   
})

// btns[0].addEventListener('click',()=>{
//     let card = btns[0].closest('.card')
//     card.style.backgroundColor = changeColor()
//     let para = card.querySelector('p')
//     let count = parseInt(para.textContent)
//     para.textContent = count+1
// })
// btns[1].addEventListener('click',()=>{
//     let card = btns[1].closest('.card')
//     card.style.backgroundColor = changeColor()
//     let para = card.querySelector('p')
//     let count = parseInt(para.textContent)
//     para.textContent = count+1
// })
// btns[2].addEventListener('click',()=>{
//     let card = btns[2].closest('.card')
//     card.style.backgroundColor = changeColor()
//     let para = card.querySelector('p')
//     let count = parseInt(para.textContent)
//     para.textContent = count+1
// })
// btns[3].addEventListener('click',()=>{
//     let card = btns[3].closest('.card')
//     card.style.backgroundColor = changeColor()
//     let para = card.querySelector('p')
//     let count = parseInt(para.textContent)
//     para.textContent = count+1
// })
    
    