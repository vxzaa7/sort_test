

  $("#share_box").click(function(){
    $(".mask").fadeIn();
    $(".pop_share_wrap").fadeIn();
    console.log(1232);
  });



$(".pop_share_close,.mask").click(function(){
    $(".mask").fadeOut();
    $(".pop_share_wrap").fadeOut();
  });




function copyEvent()
    {
        var str = document.getElementById("input");
        str.select()
        document.execCommand("Copy");
        alert("成功")
    }
