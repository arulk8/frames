function arul() {
    var frame = captureVideoFrame('my-video', 'png');

    // Show the image 
    var img = document.getElementById('my-screenshot');
    console.log(img);
    img.setAttribute('src', frame.dataUri);

    // Upload the image 
    var formData = new FormData();
    formData.append('file', frame.blob, 'my-screenshot.' + frame.format);
}