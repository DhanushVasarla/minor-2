
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          var fileExtension = input.files[0].type.split('/')[0];
          if (fileExtension === 'image') {
              $('.file-upload-image').attr('src', e.target.result);
              $('.file-upload-image').show();
              $('.file-upload-video').hide();
          } else if (fileExtension === 'video') {
              $('.file-upload-video').attr('src', e.target.result);
              $('.file-upload-video').show();
              $('.file-upload-image').hide();
          }
          $('.image-upload-wrap').hide();
          $('.file-upload-content').show();
          $('.file-upload-input').hide();
      }
      reader.readAsDataURL(input.files[0]);
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var iframe = document.getElementById("modal-iframe");
  iframe.src = "new_page.html";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  var iframe = document.getElementById("modal-iframe");
  iframe.src = "";
}
document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);
  xhr.onload = function() {
      if (xhr.status === 200) {
          document.getElementById('transcriptionResult').innerText = xhr.responseText;
      }
  };
  xhr.send(formData);
});