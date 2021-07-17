window.onload = function(){
    const self = document.createElement("p");
    self.innerText = "헬로우"
    self.style.position ="absolute"
    self.style.top ="40px"
    self.style.left="60px"

    self.style.zIndex = 10000
    self.style.color = "white"
    document.getElementsByClassName("New_Albom_Img")[0].addEventListener("mouseover", function (){
        document.getElementsByClassName("New_Albom_Img_Box")[0].appendChild(self);
    })
    
    document.getElementsByClassName("New_Albom_Img")[0].addEventListener("mouseout", function(){
        document.getElementsByClassName("New_Albom_Img_Box")[0].removeChild(self);
    })
}