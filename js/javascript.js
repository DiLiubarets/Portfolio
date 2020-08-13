$(document).ready(function () {
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");
  console.log("work")

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);

    for (var pair of data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
  }

  function success() {
    console.log("success")
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    console.log("error")
    status.innerHTML = "Oops! There was a problem.";
  }
});
