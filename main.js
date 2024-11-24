let inpBox = document.querySelector('input');
let subBtn = document.querySelector('.btn-warning');
let otp = document.querySelector('p');
let cursor = document.querySelector('img');

subBtn.addEventListener('click', function(){
    let number = Number(inpBox.value);
    // console.log(number)
    otp.innerHTML = '';
    for(let i = 1; i <= 10; i++){
        const result = number * i;
        // console.log(result);
        otp.innerHTML += `<p>${number} x ${i} = ${result}</p>`
        let closeBtn = document.querySelector('.btn-danger');
        closeBtn.addEventListener('click', function(){
            otp.innerHTML = '';
        })
    }
});

window.addEventListener('mousemove', function(event){
    const top = event.pageY
    const left = event.pageX
    cursor.style.top = `${top}px`
    cursor.style.left = `${left}px`
})