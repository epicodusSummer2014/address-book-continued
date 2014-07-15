$(document).ready(function () {
  $("form#new-contact").submit(function(event) {
    var inputFirstName = $("input#new-firstname").val();
    var inputLastName = $("input#new-lastname").val();
    var inputAddress = $("input#new-address").val();

    var newContact = {firstName: inputFirstName, lastName: inputLastName,
                      address: inputAddress};
    console.log("Obect Information: " + newContact.firstName +
                  newContact.lastName + newContact.address);
    $("#second-column").show();
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName
                              + " " + newContact.lastName + "</span></li>");
    $("#new-contact").find("input").val("");

    $(".contact").last().click(function (){
      $("#third-column").show();

    $('#third-column h2').text(newContact.firstName + " " + newContact.lastName);
    $('#first-name').text(newContact.firstName);
    $('#last-name').text(newContact.lastName);

    $('#address').text(newContact.address);


    });


  event.preventDefault();
  });

});
