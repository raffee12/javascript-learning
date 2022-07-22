const text = document.querySelector('.loading-text')

const img = document.querySelector('.bg')

let lead = 0

let init = setInterval(blurring, 30)

function blurring(){
   lead ++
 if(lead > 99){
    clearInterval(init)
    
 }
 text.innerText = `${lead} %`
}
