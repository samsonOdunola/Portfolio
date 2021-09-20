// gsap.registerPlugin(CSSRule);
var sectionHead = document.getElementsByClassName("col-header");
// let rule = CSSRulePlugin.getRule(".col-header::before");
var webDesignHead = document.getElementById("Designer");
var WebDevHeader = document.getElementById("webDev")
var appCol = document.getElementById("flutterDev")
var mainUiUX = document.getElementById("uiuxDesigner");
var subHeading = document.getElementById("subhead")
var hamburgerMenu = document.getElementById("mobileMenuBtn")
var mainLogo = document.getElementById("mainLogo")
var mobileMenu = document.getElementById("mobileMenu")
var mobileCloseButton = document.getElementById("closeBtn")
var aboutMe = document.getElementById("aboutMeBtn")
var floatingMenu = document.getElementById("menu");
var floatingMenuCloseBtn = document.getElementById("close-btn")



aboutMe.addEventListener("click", function(){
    console.log("working")    
    floatingMenu.style.display="block"
})
floatingMenuCloseBtn.addEventListener("click", ()=>{
    floatingMenu.style.display="none"    
})

hamburgerMenu.addEventListener("click", function(){
    this.style.display = "none"
    mainLogo.style.display ="none"
    mobileMenu.style.display = "block"
})
mobileCloseButton.addEventListener("click", ()=>{
    hamburgerMenu.style.display = "block"
    mainLogo.style.display ="block"
    mobileMenu.style.display = "none"
})


// for(var i=0; i<sectionHead.length; i++){    
//     sectionHead[i].addEventListener("click", function(){               
//         switch(this.id){
//             case "webDevHeader":                
//                 appCol.style.display = "none"
//                 webDesignHead.style.display = "none"
//                 gsap.to("#uiuxDesigner",{y:-100, duration:0})
//                 gsap.to("#subhead",{y:-110, duration:1})
//                 gsap.to("#uiuxDesigner",{opacity:0,duration:0})                
//                 subHeading.innerHTML = "Explore some of my projects."
//                 gsap.to(".column-container",{marginTop:"1vh", y:-100, duration:1})
//                 gsap.to("#backBtn",{display:"block"})
//                 gsap.to("#backBtn",{display:"block"}) 
//                 gsap.to(".summary",{opacity:0, display:"none"})
//                 gsap.to(".col-header",{width:"90vw"})
//                 gsap.to(".explore-btn",{display:"none"})
//                 gsap.to(rule,{cssRule:{display:"none"}})
//                 gsap.to(".col-1",{width:"90vw"})  
//                 gsap.to(".grid", {display:"flex"})
//                 console.log("working")
//                 break;
//             case "designerHeader":
//                 appCol.style.display = "none"
//                 WebDevHeader.style.display = "none"                
//                 break; 
//             case "flutterDevHeader":
//                 webDesignHead.style.display ="none"
//                 WebDevHeader.style.display = "none"
//                 break;
//         }   
//         gsap.to(".main-text-container",{marginTop:"1%", duration:0.5, ease:"power1.out"})  
//         gsap.to("#backBtn",{display:"block"})
           
                       
//     })    
// };






