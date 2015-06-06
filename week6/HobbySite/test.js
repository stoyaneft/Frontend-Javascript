'use strict'

url = "http://www.atpworldtour.com/Rankings/Rankings-Home.aspx"

// $.ajax({
//         url: url,
//         success: function(result) {
//             var html = jQuery('<div>').html(result);
//             console.log(html);

//         }
//     });

$.ajax({
  url: url,
  dataType: 'jsonp',
  success: function (data) {
    console.log(data)
  }
});
