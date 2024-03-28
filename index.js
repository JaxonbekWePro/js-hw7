let email_name = prompt('Введите имя')

let email_surname = prompt('Введите свою фамилию')

let type_email = prompt('Введите одного из них gmail.com или icloud.com')

if(type_email){
    
    alert(email_name + email_surname + '@' + type_email)
} 

