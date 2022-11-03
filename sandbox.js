const user={
    firstname: /^[a-z]+$/i,
    lastname: /^[a-z]+$/i,
    email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,10})(\.[a-z]{2,10})?$/,
    telephone: /^\d{11}$/,
    password: /^\w{8,29}$/
}
// submit form
const forms= document.querySelector('form');
forms.addEventListener('submit',((e)=>{
    e.preventDefault()
    
}));

const inputs= document.querySelectorAll('input');
inputs.forEach((item)=>{
item.addEventListener('keyup', ((e)=>{
validate(e.target, user[e.target.attributes.name.value])
}))
})
function validate(field, regex){
    if(regex.test(field.value)){
        field.className ='valid';
    }else{
        field.className= 'invalid'
    }
}