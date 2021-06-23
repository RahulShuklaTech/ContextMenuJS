const middle = document.querySelector(".middle")
const menu = document.querySelector(".menu")

 
    middle.addEventListener('contextmenu', function(e) {
      menu.style.display = "block";
      console.log(e.clientY,e.clientX)
      const div = e.target.getBoundingClientRect();
      console.log(middle)
      menu.style.top = e.clientY - div.top +"px";
      menu.style.left = e.clientX - div.left +"px"
      e.preventDefault();
    });
   
    document.addEventListener("click", (e) => {
        menu.style.display = "none";
        console.log(menu.style.display)
    })