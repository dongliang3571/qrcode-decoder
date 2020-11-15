const fileSelector = document.getElementById('fileInput');
fileSelector.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById('img');
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        createImgTag(reader.result);
    }, false);

    if (file) {
        // convert image file to base64 string
        // and is available in reader.result
        reader.readAsDataURL(file);
    }
  });

$("#submit").click(function() {
    var file = document.getElementById('fileInput').files[0];
    var url = $("#url").val();
    const reader = new FileReader();

    qrcode.callback = function (data) {
        console.log(data);
        gl = data;
        $("#content").text(data);
    }

    reader.addEventListener("load", function () {
        qrcode.decode(reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        qrcode.decode()
    } else if (url) {
        qrcode.decode(url);
    }
});

$("#url").on('input', function() {
    createImgTag($(this).val());
});

$("#copyButton").click(function() {
    var text = document.getElementById("content").innerText;
    navigator.clipboard.writeText(text);
});

function createImgTag(url) {
    var img = $("#img");
    if (img.length == 0) {
        img = $('<img id="img">'); // Equivalent: $(document.createElement('img'))
        img.appendTo('#imgDiv');
    }

    img.attr('src', url);
}