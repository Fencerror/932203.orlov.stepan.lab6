let dog = document.querySelector("#dog");
let cat = document.querySelector("#cat");

leftPage = () => {
  cat.style.width = "90%";  
  dog.style.width = "10%";  
}

rightPage = () => {
  cat.style.width = "10%";  
  dog.style.width = "90%";  
}

bothPage = () => {
  cat.style.width = "50%";  
  dog.style.width = "50%";
}
