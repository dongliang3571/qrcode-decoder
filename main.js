const fileSelector = document.getElementById('fileInput');
fileSelector.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        createImgTag(reader.result);
        qrcode.decode(reader.result);
    }, false);

    if (file) {
        // convert image file to base64 string
        // and is available in reader.result
        reader.readAsDataURL(file);
    }
  });

$("#url").on('input', function() {
    createImgTag($(this).val());
    qrcode.decode($(this).val());
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

qrcode.callback = function (data) {
    $("#content").text(data);
}