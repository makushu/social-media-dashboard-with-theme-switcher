



$(document).ready(function(){
  $(".darkMode").toggle(
    function(){$(".likes-group").css({"background-color": "#001a33"});},
    function(){$(".likes-group").css({"background-color": "#ccccff"});
   
  });
});


$(document).ready(function(){
  $(".darkMode").toggle(
    function(){$(".followers-group").css({"background-color": "#001a33"});},
    function(){$(".followers-group").css({"background-color": "#ccccff"});
  });
});


$(document).ready(function(){
  $(".darkMode").toggle(
    function(){$("body").css({"background-color": "#000066"});},
    function(){$("body").css({"background-color": "#ffffff"});
    
  });
});


