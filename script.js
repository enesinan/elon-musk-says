
function ato() {
    domtoimage.toBlob(document.getElementById('screenshot'))
        .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
}

var text = document.getElementById("dynamic")
var input = document.getElementById("myInput")

eve();
function eve()
{
  input.addEventListener('keyup',cm)
}
function cm(e)
{
  text.innerText=e.target.value
}