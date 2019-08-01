dcrumb" ).click(function() {
    $( this ).slideUp();
    });

$("#eg1").click(function(e) {
    $.SmartMessageBox({
          title : "Smart Alert!",
          content : "This is a confirmation box. Can be programmed for button callback",
          buttons : '[No][Yes]'
         }, function(ButtonPressed) {
               if (ButtonPressed === "Yes") {
                       $.smallBox({
                                 title : "Callback function",
                                 content : " You pressed Yes...",
                                 color : "#659265",
                                 iconSmall : "fa fa-check fa-2x fadeInRight animated",
                                 timeout : 4000
                               });
                           }
                   if (ButtonPressed === "No") {
                           $.smallBox({
                                     title : "Callback function",
                                     content : " You pressed No...",
                                     color : "#C46A69",
                                     iconSmall : "fa fa-times fa-2x fadeInRight animated",
                                     timeout : 4000
                                   });
                               }

                      });
      e.preventDefault();
})
