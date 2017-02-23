$(document).ready(function() {
    $('.menuButton').click(function() {
        $('.menu').toggleClass('isOpen');
    });

    function mousePos(e) {
      console.log(e.key);
    }
});
