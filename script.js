$(document).ready(function() {
    $('#moreButton').mouseover(function() {
        $(this).text("Scroll down"); 
    }).mouseout(function() {
        $(this).text("More"); 
    });


    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
      
        if (scrollPos > 400) {
            $('.navbar').removeClass('bg-transparent');
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
            $('.navbar').addClass('bg-transparent');
        }
    });

    $(document).keypress(function(event){
        if(event.key === "1"){
            window.location.href="index.html#home";
        }
        else if(event.key === "2"){
            window.location.href="index.html#journal";
        }
        else if(event.key === "3"){
            window.location.href="index.html#contact";
        }
    });

    $("#submitEmailAddress").click(function(event){
        event.preventDefault();
        var email = $('#emailAddress').val();
        if(validateEmail(email)){
            alert("You will receive a message to your email address within a day");
            $("#emailAddress").val("");
        } else {
            alert("Invalid email");
        }
    });

    function validateEmail(email){
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }
});
const audio = new Audio("click.mp3");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});