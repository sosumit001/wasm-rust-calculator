const wasm = import('../pkg')

let leftValue = document.querySelector('.left-value');
let rightValue = document.querySelector('.right-value');
let operation = {'+':'+','-':'-','*':'*','/':'/'}

let btn = document.querySelector('#result_value')
btn.addEventListener('click',()=>{
    let y = parseInt(rightValue.value);
    let x = parseInt(leftValue.value);
    var e = document.querySelector(".calculator-sel");
    var op = e.options[e.selectedIndex].text;

   if(op && x && y){
    wasm.then(module => {
        const result = module.calculate(x,y,operation[`${op}`]);
        let ele = document.querySelector('.calculator-result');
        ele.innerHTML = result;
        ele.style = "transform:scale(1)";
        rightValue.value = leftValue.value =''

        setTimeout(() => {
            ele.style = "transform:scale(0)";
        }, 4000);
    })
   }
   else {
    alert('not enough params!!')
   }
    
})
