const fileSelector = document.getElementById('fileInput');
fileSelector.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById('img');
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        var img = $('<img id="img">'); // Equivalent: $(document.createElement('img'))
        img.attr('src', reader.result);
        img.appendTo('#imgDiv');
    }, false);

    if (file) {
        // convert image file to base64 string
        // and is available in reader.result
        reader.readAsDataURL(file);
    }
  });

$("#submit").click(function() {
    var file = document.getElementById('fileInput').files[0];
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
    }
});

$("#copyButton").click(function() {
    var text = document.getElementById("content").innerText;
    navigator.clipboard.writeText(text);
});


