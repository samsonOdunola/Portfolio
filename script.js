gsap.registerPlugin(CSSRule);
var sectionHead = document.getElementsByClassName("col-header");
let rule = CSSRulePlugin.getRule(".col-header::before");
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
var mobileBio = document.getElementById("mobile-bio")
var bioContent=document.getElementById("bio-content")
var mobileTools=document.getElementById("mobile-tools")
var toolsContent=document.getElementById("tools--content")
var mobileCourses=document.getElementById("mobile-courses")
var coursesContent=document.getElementById("courses-content")
var mobileContact=document.getElementById("mobile-contact")
var contactContent=document.getElementById("contact-content")



aboutMe.addEventListener("click", function(){
    gsap.to(".menu",{display:"block"}) 
    gsap.to(".menu",{width:"87.5%", duration:0.5 ,ease: "power4.in"})
    gsap.to(".menu-header",{display:"block", duration:0, delay:0.5})
    gsap.to(".info-container",{display:"flex", delay:0.5})
    gsap.to(".info-container",{opacity:1, delay:0.65})
    gsap.to(".info-container",{transform:"scale(1)", delay:0.4})
    
    
})
floatingMenuCloseBtn.addEventListener("click", ()=>{
    gsap.to(".info-container",{opacity:0, delay:0, duration:0.5})
    gsap.to(".info-container",{display:"none", delay:0.5, duration:0})
    gsap.to(".menu",{width:"0%", duration:0.5,ease: "power4.in", delay:0.3})
    gsap.to(".menu",{display:"none", duration:0, delay:0.8})
    gsap.to(".menu-header",{display:"none", duration:0, delay:0.9})
    gsap.to(".info-container",{transform:"scale(0.8)", delay:0.1})
})

hamburgerMenu.addEventListener("click", function(){
    this.style.display = "none"    
    mobileMenu.style.display = "block"
})
mobileCloseButton.addEventListener("click", ()=>{
    hamburgerMenu.style.display = "block"
    mainLogo.style.display ="block"
    mobileMenu.style.display = "none"
})


for(var i=0; i<sectionHead.length; i++){    
    sectionHead[i].addEventListener("click", function(){ 
        if(screen.width > 475){
            gsap.to(".main-text-container",{marginTop:"1%", duration:0.5, ease:"power1.out"})  
            gsap.to("#backBtn",{display:"block"})
            switch(this.id){
                case "webDevHeader":                
                    appCol.style.display = "none"
                    webDesignHead.style.display = "none"
                    gsap.to("#uiuxDesigner",{y:-100, duration:0})
                    gsap.to("#subhead",{y:-110, duration:1})
                    gsap.to("#uiuxDesigner",{opacity:0,duration:0})                
                    subHeading.innerHTML = "Explore some of my projects."
                    gsap.to(".column-container",{marginTop:"1vh", y:-100, duration:1})
                    gsap.to("#backBtn",{display:"block"})
                    gsap.to("#backBtn",{display:"block"}) 
                    gsap.to(".summary",{opacity:0, display:"none"})
                    gsap.to(".col-header",{width:"90vw"})
                    gsap.to(".explore-btn",{display:"none"})
                    gsap.to(rule,{cssRule:{display:"none"}})
                    gsap.to(".col-1",{width:"90vw"})  
                    gsap.to(".grid", {display:"flex"})
                    console.log("working")
                    break;
                case "designerHeader":
                    appCol.style.display = "none"
                    WebDevHeader.style.display = "none"                
                    break; 
                case "flutterDevHeader":
                    webDesignHead.style.display ="none"
                    WebDevHeader.style.display = "none"
                    break;
            }   

        }else{

        }            
    })    
};
mobileBio.addEventListener("click", ()=>{    
    if (bioContent.style.display === "block"){
        bioContent.style.display = "none";
    }else{
        bioContent.style.display="block"
    }
})
mobileTools.addEventListener("click", ()=>{    
    if (toolsContent.style.display === "block"){
        toolsContent.style.display = "none";
    }else{
        toolsContent.style.display="block"
    }
})
mobileCourses.addEventListener("click", ()=>{    
    if (coursesContent.style.display === "block"){
        coursesContent.style.display = "none";
    }else{
        coursesContent.style.display="block"
    }
})
mobileContact.addEventListener("click", ()=>{    
    if (contactContent.style.display === "block"){
        contactContent.style.display = "none";
    }else{
        contactContent.style.display="block"
    }
})
let width = screen.width;
console.log(width)





