var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tabLinks){
       tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContents){
       tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//side Menu
var sideMenu = document.getElementById("sideMenu");

function openMenu(){
   sideMenu.style.right ="0";
}
function closeMenu(){
   sideMenu.style.right ="-200px";
}


//contact form submission 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzUJfpmImkrciozzh4lPf3-tdANjH_LczziO-wZ5AYPwSgd-A632_xgFnyIbbZb9F2HrQ/exec'
  const form = document.forms['submit-to-google-sheet']
  
  //   confirmation msg
  const msg= document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      msg.innerHTML = "Message sent successfully !"
      setTimeout(() => {
         msg.innerHTML =""
      },5000 );
      form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

