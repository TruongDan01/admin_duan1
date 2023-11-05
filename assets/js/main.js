document.addEventListener("DOMContentLoaded", function () {
  var myView = document.getElementById("form-view");
  if (myView) {
    var viewName = myView.getAttribute("data-view");
    handleView(viewName);
  }
});

function handleView(viewName) {
  switch (viewName) {
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
          var sortDescriptionInput = document.getElementById('sort_description');
          var sortDescription = quillSortEditor.root.innerHTML;
          sortDescriptionInput.value = sortDescription;
          console.log(sortDescriptionInput.value)

          document.querySelector(this.form).submit();
        }
      });

      break;
  }
}