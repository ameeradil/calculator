// things I have learned:
//  1/ eval() function take string and perform math operation for that string


//  2/ The trick of return at the end of the function is really important
//      It helps on stoping the excution for the next line of code

// 3/ Usually one of your programming errors you do not save a variable to use it later


const buttons = document.querySelectorAll('button')
const input = document.querySelector('input')



input.value = ''
const deleteOne = function(){
    let newInput = input.value.slice(0, input.value.length - 1)
    input.value = newInput
}

const claculate = function(){
    let result
    let operation = input.value.replaceAll(/÷/g,'/').replaceAll(/X/g,'*')
    result = eval(operation)
    input.value = result
}

for(let button of buttons){
    button.addEventListener('click', ()=>{
        if(button.innerText === 'x'){
            deleteOne()
            return //nice trick
        }

        if(button.innerText === '='){
            claculate()
            return
        }
        input.value += button.innerText
    })  
}

document.addEventListener('')
