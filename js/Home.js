$( document ).ready(function() {

  $(window).scroll(function(){
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) $('.navbar').css('background-color','Black');
    else $('.navbar').css('background-color','Transparent');
  }); 

  

  });

  function includeHeader(){
        
    fetch("header.html").then(response=>{
        return response.text();
    }).then(response=>{
        document.getElementById("headerP").innerHTML=response;
    });
}
includeHeader();

function includeFooter(){
        
  fetch("footer.html").then(response=>{
      return response.text();
  }).then(response=>{
      document.getElementById("footerP").innerHTML=response;
  });
}
includeFooter();

AOS.init();

