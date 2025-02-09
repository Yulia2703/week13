const button = document.querySelector(".button");
const birthdayInput = document.getElementById('start');
const error = document.getElementById('error');
const result = document.getElementById('result');

button.addEventListener("click", ()=>{
    const birthdayInputValue = birthdayInput.value;
 if(!birthdayInput) {
    error.style.display = "block";
    result.textContent="";
    return
 }
 else{
    error.style.display = "none";
 }
 const date = new Date();
 let birthdate = new Date(birthdayInputValue);
 if(birthdate<=date) {
    birthdate.setFullYear(date.getFullYear()+1);
  }
  let difference =Math.ceil ((birthdate-date)/(1000*3600*24));
  result.textContent = "До Вашего дня Рождения осталось дней:"+difference
})

