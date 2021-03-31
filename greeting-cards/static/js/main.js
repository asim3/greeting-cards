function get_input_text() {
    return document.getElementById('card_name').value
}


function draw(canvas_id) {

    var ctx = document.getElementById(canvas_id).getContext('2d');
    ctx.font = '48px Cairo';
    var x = 500
    var y = 400
    ctx.fillText(get_input_text(), x, y);
}


function download_card(canvas_id) {
    var canvas = document.getElementById(canvas_id);
    var data_URL = canvas.toDataURL();

    const file_name = 'بطاقة المعايدة'
    const element = document.createElement('a')
    element.setAttribute("href", data_URL)
    element.setAttribute("download", file_name + ".png")
    document.body.appendChild(element)
    element.click()
    element.remove()
}


draw('card_canvas')
