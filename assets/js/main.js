document.addEventListener("DOMContentLoaded", function() {
    var myView = document.getElementById("form-view");
    if (myView) {
        var viewName = myView.getAttribute("data-view");
        handleView(viewName);
    }
});

function handleView(viewName) {
    switch(viewName) {
        case 'form':
            Validator({
                form: '#form',
                formGroupSelector: '.form-group',
                errorSelector: '.form-message',
                rules: [
                  Validator.isRequired('.input-group input[name="name"]', 'Không được bỏ trống'),
                ],
                onSubmit: function (data) {
                  // Call API
                  console.log(data);
                }
              });
      
            break;
    }
}