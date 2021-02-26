$(document).ready(function () {
    console.log('Heloo World!')

    btn = document.querySelector('button')
    frm = document.querySelector('form')

    function click(){
        console.log("HOW Are YOu Guys!")

        frmData = new FormData(frm)

        console.log(frmData.get('name'))
    }
});