$(document).ready(function() {
    $(".dide").click(function() {
        $(".dide").slideDown().hide()
        $(".wilder").show()
    });
    $(".wilder").click(function() {
        $(".wilder").slideUp()
        $(".dide").slideDown();
    });
    $(".aabu").click(function() {
        $(".aabu").slideDown().hide()
        $(".aguero").show()
    });
    $(".aguero").click(function() {
        $(".aguero").slideUp()
        $(".aabu").slideDown()
    });
    $(".lopp").click(function() {
        $(".lopp").slideDown().hide()
        $(".silva").show()
    });
    $(".silva").click(function() {
        $(".silva").slideUp()
        $(".lopp").slideDown()
    });
});
$(document).ready(function() {
    $("#work1-img").mouseover(function() {
        $("#work1-overlay").show();
    }).mouseout(function() {
        $("#work1-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work2-img").mouseover(function() {
        $("#work2-overlay").show();
    }).mouseout(function() {
        $("#work2-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work3-img").mouseover(function() {
        $("#work3-overlay").show();
    }).mouseout(function() {
        $("#work3-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work4-img").mouseover(function() {
        $("#work4-overlay").show();
    }).mouseout(function() {
        $("#work4-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work5-img").mouseover(function() {
        $("#work5-overlay").show();
    }).mouseout(function() {
        $("#work5-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work6-img").mouseover(function() {
        $("#work6-overlay").show();
    }).mouseout(function() {
        $("#work6-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work7-img").mouseover(function() {
        $("#work7-overlay").show();
    }).mouseout(function() {
        $("#work7-overlay").hide();
    });
});
$(document).ready(function() {
    $("#work8-img").mouseover(function() {
        $("#work8-overlay").show();
    }).mouseout(function() {
        $("#work8-overlay").hide();
    });
});


$(document).ready(function() {
    $("form#form4").submit(function(event) {
        event.preventDefault();
        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }

    });

})