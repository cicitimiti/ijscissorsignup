const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".img1"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(img1 => {
img1.addEventListener("click", () => {
  let pwFields = img1.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          img1.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      img1.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})
