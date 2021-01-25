

//document.getElementById('bar').style.width = "100%"
let percent = 0
let timer = setInterval(() => {
    document.getElementById('bar').style.width = percent + "%"
    percent++
    if (percent > 101) {
        document.getElementById('pageLoading').classList.add('complete');
        clearInterval(timer)
    }
}, 30);