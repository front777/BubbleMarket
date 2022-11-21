$(window).load(function(){
 setTimeout(function(){
 
  $(".win-onload").fadeOut('slow')
    
}, 2000)

}
)
  




$("#inside-slide span").click(
  function(){
    var a = $(this).text();
    $("#cat-val").text(a);
  }
)
$("#inside-region span").click(
  function(){
    var a = $(this).text();
    $("#reg-val").text(a);
  }
)



    let text = document.getElementById("changes-text");
 const onIntersection = (entries) => {
for(const entry of entries){
  

    if (entry.isIntersecting) {
  
      
setTimeout(function(){
     text.innerHTML = "Ucrania en el corazón para siempre.";
     setTimeout(function(){
     text.innerHTML = "Ukrayna sonsuza kadar kalbinde.";
    
     setTimeout(function(){
     text.innerHTML = "Ukraina w sercu na zawsze.";
     setTimeout(function(){
     text.innerHTML = "Ukraine für immer im Herzen.";
     setTimeout(function(){
     text.innerHTML = "L'Ucraina nel cuore per sempre.";
    
     setTimeout(function(){
     text.innerHTML = "乌克兰永远在心中。";
     setTimeout(function(){
     text.innerHTML = "永遠に心の中にウクライナ。";
     setTimeout(function(){
     text.innerHTML = "أوكرانيا في القلب إلى الأبد.";
     setTimeout(function(){
     text.innerHTML = "दिल में हमेशा के लिए यूक्रेन।";
     setTimeout(function(){
     text.innerHTML = "Украина в сердце навсегда.";
     text.style.fontFamily = "Montserrat, sans-serif"
     setTimeout(function(){
     text.innerHTML = "Україна в серці назавжди.";
     text.style.fontFamily = "Montserrat, sans-serif"
      
    },200);
      
    }, 200);
      
    }, 200);
      
    }, 200);
      
    }, 200);
      
    }, 250);
    }, 250);
      
    }, 250);
      
    }, 250);
    }, 250);
    
    },1000);
  
  }
      
    

   


}
}
const observer = new IntersectionObserver(onIntersection);
observer.observe(document.querySelector('#footer'));


$("#money").toggle(
  function(){
  $("#money").css({"background" : "	#3e9c35", "color" : "#084f09", })
  },
  function(){
  $("#money").css({"background" : "black", "color" : "white", })
  })

$('#bitcoin').toggle(
 function(){
 $("#bitcoin").css({"background" : "	#0d579b", "color" : "#f7931a", })
},
function(){
 $("#bitcoin").css({"background" : "black", "color" : "white",})
})


$('#etherium').toggle(
function(){
 $("#etherium").css({"background" : "#c99d66", "color" : "#3c3c3d"})
 
 
 
},
function(){
 $("#etherium").css({"background" : "black", "color" : "white"})
 
 
 
})





$("#open-c").toggle(function(){

  $("#categories").height(340)
  $(this).find(".fa-angle-down").css("transform", "rotate(180deg)")
  $("#open-c").css({"border-bottom-left-radius":"0px", "border-bottom-right-radius" : "0px"})
},

function(){

$("#categories").height(0)
$(this).find(".fa-angle-down").css("transform", "rotate(0deg)")
$("#open-c").css({"border-bottom-left-radius":"5px", "border-bottom-right-radius" : "5px"})
})




$("#open-r").toggle(function(){

$("#region").height(340)
$(this).find(".fa-angle-down").css("transform", "rotate(180deg)")
$("#open-r").css({"border-bottom-left-radius":"0px", "border-bottom-right-radius" : "0px"})
},

function(){

$("#region").height(0)
$(this).find(".fa-angle-down").css("transform", "rotate(0deg)")
$("#open-r").css({"border-bottom-left-radius":"5px", "border-bottom-right-radius" : "5px"})
})




 setInterval(function(){


   let i = document.getElementById("i-animation");
 i.classList.toggle("bring")


 }, 1000)