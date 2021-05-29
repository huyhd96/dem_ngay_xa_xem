document.getElementById('loveDay').innerHTML = window.localStorage.getItem('loveday')
document.getElementById('yourname').innerHTML = window.localStorage.getItem('yourname')
document.getElementById('namefriend').innerHTML = window.localStorage.getItem('namefriend')
document.getElementById('footer').style.display = window.localStorage.getItem('display')

function showDialog() {
    let showDialog = document.getElementById('myDialog')
    showDialog.show()
}

function closeDialog() {
    let showDialog = document.getElementById('myDialog')
    let today = new Date().getTime()
    let d = document.getElementById("day").value
    let m = document.getElementById('month').value
    let y = document.getElementById('year').value
    let name1 = document.getElementById('name1').value
    let name2 = document.getElementById('name2').value
    if (d == '' || m == '' || y == '' || name1 == '' || name2 == '') {
        alert('Vui lòng nhập đầy đủ thông tin')
    } else {
        let getDay = new Date(y, m, d, 0, 0, 0).getTime()
        count = Math.floor((today - getDay) / (24 * 60 * 60 * 1000))
        if (count < 0) {
            alert('xem lại ngày tháng bạn vừa nhập')
        } else {
            window.localStorage.setItem('display', 'block')
            window.localStorage.setItem('loveday', count)
            window.localStorage.setItem('yourname', name1)
            window.localStorage.setItem('namefriend', name2)
            showDialog.close()
        }
    }
}

function clearData() {
    document.getElementById('container').style.display = 'none'
    document.getElementById('test').style.display = 'block'
    window.localStorage.clear()
}