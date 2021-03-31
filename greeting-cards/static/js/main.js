$(function () {
    function get_input_text() {
        return document.getElementById('card_name').value
    }


    function draw() {
        canvas_id = 'card_canvas'
        var ctx = document.getElementById(canvas_id).getContext('2d');
        var image = document.getElementById("canvas_image");
        ctx.drawImage(image, 0, 0);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '28px Cairo';
        var x = 450
        var y = 550
        ctx.fillText(get_input_text(), x, y);
    }


    function download_card() {
        canvas_id = 'card_canvas'
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


    $('#save').on('click', download_card)
    $('#card_name').on('keyup', draw)

    draw()
});