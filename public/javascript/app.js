$(document).ready(function(){

  // Add smooth scrolling to navigation links
  $("li > a").on('click', function(event) {

    console.log("clicked");
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//==============================================================================================
  // Code to animate portfolios
  
/*
  let movedFlag = false;
  
  $(document).on("scroll", myFunction);

  function myFunction() {
    
    // May use this to animate work projects
    // var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Test code for scroll properties
    // console.log("doc scrollHight", document.documentElement.scrollHeight);
    // console.log("doc scrollTop", document.documentElement.scrollTop);
    // console.log("body scrollTop", document.body.scrollTop);
    // console.log("body scrollHeight", document.body.scrollHeight);
    // console.log("client height", document.documentElement.clientHeight);

   
  
      //psuedo code notes 

      //starting totalOffset - elem.scrollHeight/2   start moving in
      // when body.scrollTop = totalOffset  elemets should be positioned properly
      // starting totalOffset + elem.scrollHeight/2   start moving out


    
    const port = document.getElementById('portfolio');
    const portOffset = port.offsetTop;


    const elem = document.getElementById('test-row');
    let totalOffset = elem.offsetTop + portOffset;

    let x = parseInt(document.body.scrollTop);            // where scroll is at in body
    let y = parseInt(totalOffset - elem.scrollHeight/2);  // distance half row heigh above top of test-row
    let z = parseInt(totalOffset + elem.scrollHeight/2);  // distance to center test-row
    let w = parseInt(totalOffset + elem.scrollHeight);    // distance to bottom of test-row
     
    if(x > y && x < totalOffset && !movedFlag)
    {   
        movedFlag = true;
        $("#test-info").animate({left: 0, opacity: '1'}, 1500);
        console.log("moving in");
    }
  
    if(x > z && x < w && movedFlag)
    {
        movedFlag = false
        $("#test-info").animate({left: '-100%', opacity: '0'}, 1500);
        //$("#test-info").css("left", $("#test-info").css("left") - 10 + "%");
        //console.log("left",  $("#test-info").css("left") );
        console.log("moving out");
    }

  }
*/

});


/*
    //Same as above but using Jquery.
    // .scrollHeight is a js property. so to get it in jquery we use .prop()
    let elem = $("#chat-box");
    elem.scrollTop(elem.prop('scrollHeight'));
  */  

  /*

    let elem = document.getElementById('test-row');
    elem.scrollTop = elem.scrollHeight;
    console.log("scrollTop", elem.scrollTop);




  */

  /*
    document.documentElement.clientHeight     // just height of client window (screen height)
    document.documentElement.scrollHeight);   // just height of document
    document.documentElement.scrollTop);      // just top of document
    document.body.scrollTop;                 // where the scroll bar is on body
    document.body.scrollHeight                // just height of body




  */