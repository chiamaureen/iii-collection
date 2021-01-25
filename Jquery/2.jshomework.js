let score = 0
const resetGame = () => score = 0
$(document).ready(function () {
    //點擊鍵盤後計分
    $("[class^=cir]").click(function () {
        //console.log($(this).attr('data-label'))
        let number = $(this).attr('data-label')
        score += parseInt(number * 10)
        $('.score').text("score : " + score)
    })
    $(document).on("keydown", function (e) {
        let code = e.which;
        //console.log(e)
        //鍵盤按r的時候
        if (code === 82) {
            $('.score').text("score : 0")
            resetGame()
            $('.spot').remove()
            $('.target').removeClass('moving')
        }
        //鍵盤按k的時候
        if (code === 75) {
            $('.target').toggleClass('moving')
        }
    })

    //滑鼠的圖案
    $(window).mousemove(function (e) {
        $('.mouseSymbol').css('left', e.pageX - 18 + 'px').css('top', e.pageY - 6 + 'px')
    })

    //點擊後的圓點
    $('.target').click(function (e) {
        let spot = $(`<div class=spot></div>`)
        spot.css('left', e.pageX - $(this).offset().left + 'px').css('top', e.pageY - $(this).offset().top + 'px')
        $(this).append(spot)
    })
})
