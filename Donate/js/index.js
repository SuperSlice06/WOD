$(document).ready(function() {
    let rowMoneyLeft        = $('.row-money-left');
    let colProgressBar      = $('.col-progress-bar');

    colProgressBar.hover(mouseEnter, mouseLeave);

    function mouseEnter(){
        rowMoneyLeft.removeClass('hidden');
    }

    function mouseLeave(){
        rowMoneyLeft.addClass('hidden');
    }
});