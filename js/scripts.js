$(document).ready(function () {
  $("form#new-contact").submit(function(event) {
    var inputFirstName = $("input#new-firstname").val();
    var inputLastName = $("input#new-lastname").val();
    var newContact = {firstName: inputFirstName, lastName: inputLastName, phone: [] , email: [],
                      address: []}
    $(".new-email").each(function(){
      var inputemail= $(this).find("#new-email").val();
      var newEmail = {email: inputemail}
      newContact.email.push(newEmail);
    });
    $(".new-phone").each(function(){
      var inputPhone = $(this).find("#new-phone").val();
      var newPhone= {phoneNumber: inputPhone}
      newContact.phone.push(newPhone);
    });
    $(".new-address").each(function() {
      var inputStreet = $(this).find("#new-street").val();
      var inputCity = $(this).find("#new-city").val();
      var inputState = $(this).find("#new-state").val();
      var newAddress = { street: inputStreet, city: inputCity, state: inputState}
      newContact.address.push(newAddress);
    });
    $("#second-column").show();
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName
                              + " " + newContact.lastName + "</span></li>");
    $("#new-contact").find("input").val("");

    $(".contact").last().click(function (){
      $("#third-column").show();
      $('#third-column h2').text(newContact.firstName + " " + newContact.lastName);
      $('#first-name').text(newContact.firstName);
      $('#last-name').text(newContact.lastName);
      $('.address').text("");
      newContact.address.forEach(function(address){
          $('.address').append("<div class='list'>"+address.street +"<br>"+ address.city+"<br>" + address.state +"</div>");
        });
      newContact.phone.forEach(function(phone){
          $('.phone').append("<div>" + phone.phoneNumber + "</div>")
      });
      newContact.email.forEach(function(email){
          $('.email').append("<div>" + email.email + "</div>")
      })
    });
     event.preventDefault()
  });
    $("#email-button").click(function(event){
      $("#new-emails").append("<div class='new-email'>"+
                                  "<div class='form-group'>"+
                                  "<label for='new-email'>Email</label>"+
                                  "<input type='email' class='form-control' id='new-email'>" +
                                  "</div>")
      event.preventDefault();
    })
    $("#phone-button").click(function(event){
      $("#new-phones").append("<div class='new-phone'>"+
                                  "<div class='form-group'>"+
                                  "<label for='new-phone'>Phone</label>"+
                                  "<input type='number' class='form-control' id='new-phone'>" +
                                  "</div>")
      event.preventDefault();
    })
    $("#add-button").click(function(event){
      $("#new-addresses").append("<div class='new-address'>"+
                                  "<div class='form-group'>"+
                                  "<label for='new-street'>Street</label>"+
                                  "<input type='text' class='form-control' id='new-street'>"+
                                  "<label for='new-city'>City</label>"+
                                  "<input type='text' class='form-control' id='new-city'>" +
                                  "<label for='new-state'>State</label>" +
                                  "<input type='text' class='form-control' id='new-state'>" +
                                  "</div>");
      event.preventDefault();
    });
});
