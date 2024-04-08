//start setting box
/* open setting Box and used icon*/
let usedBox = document.querySelector(".Up i");
usedBox.onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open")
};
// end open box
// choose color from opation colors list
let colorLi = document.querySelectorAll(".colors-list li");
let locaColor = localStorage.getItem("choose-color");
if (locaColor !== null) {
  document.documentElement.style.setProperty("--main--color", locaColor);
  document.querySelectorAll(".colors-list li").forEach(removeForAll => {
    removeForAll.classList.remove("active")
    if (locaColor === removeForAll.dataset.color) {
      removeForAll.classList.add("active")
    }
  })
}
colorLi.forEach(li => {
  li.addEventListener("click", (ele) => {
    document.documentElement.style.setProperty("--main--color", ele.target.dataset.color);
    localStorage.setItem("choose-color", ele.target.dataset.color)
    // ele.target.parentElement.querySelectorAll(".active").forEach(removeActiveClass => {
    //   removeActiveClass.classList.remove("active")
    // })
    // ele.target.classList.add("active")
    handlerActive(ele);
  })
})
// end choose colors

// stert stop randome image
let backoption = true;
let localimg = localStorage.getItem("imgsrandom");
//if local Not Empty
if (localimg !== null) {
  // remove class active for button
  document.querySelectorAll(".randoms span").forEach(removeforActive => {
    //remove active for All
    removeforActive.classList.remove("active")
  })
  //if value inner local equal
  if (localimg === 'true') {
    backoption = true;
    document.querySelector(".randoms .yes").classList.add("active")
  } else {
    backoption = false;
    document.querySelector(".randoms .No").classList.add("active")
  }
}

let stopimgs = document.querySelectorAll(".randoms span");
stopimgs.forEach(span => {
  span.addEventListener("click", (e) => {
    handlerActive(e)
    // e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    //   ele.classList.remove("active")
    // })
    // e.target.classList.add("active");
    //if event.target dataset equal
    if (e.target.dataset.background === 'yes') {
      roadomize();
      localStorage.setItem("imgsrandom", true)
    } else {
      clearInterval(backgroudInterval)
      localStorage.setItem("imgsrandom", false)
    }
  })
})
// // // start landing
let landingChange = document.querySelector(".landing");
//array image used in changed
let arrCahngeImage = ["pic0.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
// landingChange.style.backgroundImage = 'url("imgs/' + arrCahngeImage[1] + '")'
// landingChange.style.backgroundImage = 'url("imgs/' + arrCahngeImage[0] + '")'
function roadomize() {
  if (backoption === true) {
    backgroudInterval = setInterval(() => {
      //get random number
      let randomImage = Math.floor(Math.random() * arrCahngeImage.length)
      //image get for number random
      landingChange.style.backgroundImage = 'url("imgs/' + arrCahngeImage[randomImage] + '")'
    }, 1000);
  }
}
roadomize();
// end landing

// // start section skills
let skill = document.querySelector(".skills");
window.onscroll = function () {
  let scrolsoffsettop = skill.offsetTop;
  let scroloutheigth = skill.offsetHeight;
  let windowinnerheight = this.innerHeight;
  let windowscroll = this.pageYOffset;
  if (windowscroll > (scrolsoffsettop + scroloutheigth - windowinnerheight)) {
    let all = document.querySelectorAll(".skill-progrres span");
    all.forEach(skil => {
      skil.style.width = skil.dataset.wide;
    })
  }
}
// end section skills

// start gallery
let gallery = document.querySelectorAll(".gallery img");
gallery.forEach(img => {
  img.addEventListener("click", (Evnt) => {
    let creatOverlay = document.createElement("div");
    creatOverlay.className = "overlay-popup";
    document.body.appendChild(creatOverlay);

    let createPopupBox = document.createElement("div");
    createPopupBox.className = "popup-Box";

    let popupimgbox = document.createElement("img");
    popupimgbox.src = img.src;

    if (img.alt !== null) {
      let heding = document.createElement('h4');
      let createparagraphforhead = document.createTextNode(img.alt)
      heding.appendChild(createparagraphforhead)
      createPopupBox.appendChild(heding)
    }

    createPopupBox.appendChild(popupimgbox);
    creatOverlay.appendChild(createPopupBox);


    let closebutton = document.createElement('span')
    closebutton.className = "close-box";
    let createtextinbutton = document.createTextNode("x");
    closebutton.appendChild(createtextinbutton)
    createPopupBox.appendChild(closebutton)
  })
})
document.addEventListener("click", (evn) => {
  if (evn.target.className === "close-box") {
    evn.target.parentNode.remove();
    d
  }
})
// end gallery
document.addEventListener("click", (evn) => {
  if (evn.target.className === "close-box") {
    evn.target.parentNode.remove();
    document.querySelector(".overlay-popup").remove();
  }
});


//  let toSection = document.querySelectorAll(".nav-bullts .bullts");
//  let alllinks = document.querySelectorAll(".navbar li a");
// function scrolltosomewhere(ev) {
//   ev.addEventListener("Click", (e) => {
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior:"smooth"
//     })
//   })
// }
// scrolltosomewhere(toSection)
// scrolltosomewhere(alllinks)
//handlerACtiveClass

function handlerActive(ele) {
  ele.target.parentElement.querySelectorAll(".active").forEach(removeActiveClass => {
    removeActiveClass.classList.remove("active")
  })
  ele.target.classList.add("active")
}
// start bullts 
let bullts = document.querySelectorAll(".show-bullt span");
let styleNavbullots = document.querySelector(".nav-bullts");
let localbullts = localStorage.getItem("showorhide");
if (localbullts !== null) {
  bullts.forEach(span => {
    span.classList.remove("active")
  })
  if (localbullts === 'block') {
    styleNavbullots.style.display = 'block';
    document.querySelector(".show-bullt  .yes").classList.add("active");
  } else {
    styleNavbullots.style.display = 'none';
    document.querySelector(".show-bullt .No").classList.add("active");
  }
}
bullts.forEach(span => {
  span.addEventListener("click", (ev) => {
    if (span.dataset.display === 'block') {
      styleNavbullots.style.display = 'block';
      localStorage.setItem("showorhide", 'block')
    } else {
      styleNavbullots.style.display = 'none';
      localStorage.setItem("showorhide", 'none')
    }
    handlerActive(ev)
  })
})
// End bullts

// reset options
let resetOptions = document.querySelector(".reset-options")
resetOptions.onclick = function () {
  localStorage.removeItem("choose-color")
  localStorage.removeItem("imgsrandom")
  localStorage.removeItem("showorhide")
  window.location.reload()
}


let buttonMenu = document.querySelector(" .togle-menu ")
let nabarstylemenu = document.querySelector(".navbar")

buttonMenu.onclick = function (e) {
  e.stopPropagation()
  this.classList.toggle("menu-show")
  nabarstylemenu.classList.toggle("open")
}

document.addEventListener("click", (e) => {
  if (e.target !== buttonMenu) {
    if (nabarstylemenu.classList.contains("open")) {
      buttonMenu.classList.toggle("menu-show");
      nabarstylemenu.classList.toggle("open")
    }
  }
})

nabarstylemenu.onclick = function (e) {
  e.stopPropagation()
}























// document.addEventListener("click", (e) => {
//   if (e.target !== buttonMenu && e.target !== nabarstylemenu) {
//     if (nabarstylemenu.classList.contains("open")) {
//       buttonMenu.classList.toggle("menu-show")
//       nabarstylemenu.classList.toggle("open")
//     }
//   }
// })





