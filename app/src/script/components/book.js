const btn = document.querySelector('.btn__bot');

// console.log(input.value);
btn.addEventListener('click', (e) => {    
    e.preventDefault()
    const date = document.querySelector('#form-date').value;
    const time = document.querySelector('#form-time').value;
    const address = document.querySelector('#form-address').value;
    const name = document.querySelector('#form-name').value;
    const number = document.querySelector('#form-number').value;
    const email = document.querySelector('#form-email').value;
    fetch(`https://api.telegram.org/bot1572870805:AAHUc6vOrWzByKZjlW7iI_O4mQuWqqd4ex8/sendMessage?chat_id=576592925_mode=html&text= Date: ${date} %0ATime: ${time} %0AAddress: ${address} %0AName: ${name} %0ANumber: ${number} %0AEmail: ${email} `)
    // .then(response => {
        
    // }) 
    // console.log(input.value);
})
