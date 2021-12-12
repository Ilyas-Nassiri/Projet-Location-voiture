

$(document).ready(function(){

    /* Display images (carousel) */
    
    $(".carousel").flipster({
      style: 'wheel',
      spacing: 0
    });


    /* Filter images based on Type Car */

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.image').show(400);
        }else{
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }

    });
    $(window).scroll(function(){
      var sticky = $('.navbar'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) $('.navbar').css('background-color','Black');
      else $('.navbar').css('background-color','Transparent');
    }); 

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

  
// Details Modal
var modal_detail = document.getElementById("modal-detail");

// Get the button that opens the modal
var btn_detail = document.getElementsByClassName("btn-detail");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for(var btn of btn_detail ){
    btn.onclick = function() {
    modal_detail .style.display = "block";
    document.body.style.background = "#353333";
    }
}

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal_detail .style.display = "none";
}


// Booking Modal
var modal_booking = document.getElementById("modal-booking");

// Get the button that opens the modal
var btn_booking = document.getElementsByClassName("btn-booking");

// Get the <span> element that closes the modal
var span_close = document.getElementsByClassName("close-booking")[0];

// When the user clicks the button, open the modal 
for(var btn of btn_booking){
    btn.onclick = function() {
    modal_booking.style.display = "block";
    document.body.style.background = "#353333";
    }
}



// When the user clicks on (x), close the modal
span_close.onclick = function() {
    modal_booking.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_detail ) {
    modal_detail .style.display = "none";
  };

  if (event.target == modal_booking ) {
    modal_booking.style.display = "none";
  }
};


});


function includeHeader(){
        
  fetch("header.html").then(response=>{
      return response.text();
  }).then(response=>{
      document.getElementById("headerP").innerHTML=response;
  });
}
includeHeader();



