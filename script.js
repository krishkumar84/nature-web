

const texts = ["web Designer","web Devlepor","Graphic Designer","Youtuber"];
let index = 0;
let textIndex = 0;
let currentText = "";
let backspace = false;
const element = document.getElementById("typing-text");

function type() {
    if (backspace) {
        currentText = currentText.slice(0, -1);
        element.innerHTML = currentText;
        if (currentText.length === 0) {
            backspace = false;
            textIndex++;
            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    } else {
        currentText += texts[textIndex].charAt(index);
        element.innerHTML = currentText;
        index++;
        if (index === texts[textIndex].length) {
            index = 0;
            backspace = true;
        }
    }
    setTimeout(type, 100);

    
}

type();
/* Aside*/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList;i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active")

            }
            this.classList.add("active")
        })
      }
      const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
     navTogglerBtn.addEventListener("click",() =>
     {
        asideSectionTogglerBtn();
     })
     function asideSectionTogglerBtn()
     {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++ )
        {
            allSection[i].classList.toggle("open");
        }
     }
     /*
     // Get the navbar element
var navbar = document.getElementById("navbar");

// Add event listener to the window's scroll event
window.addEventListener("scroll", function() {
  // Get the current scroll position of the document
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  // Check if the scroll position is more than 50
  if (scrollPosition > 50) {
    // If yes, add the "shrink" class to the navbar
    navbar.classList.add("shrink");
  } else {
    // If not, remove the "shrink" class from the navbar
    navbar.classList.remove("shrink");
  }
});
*/

      
      