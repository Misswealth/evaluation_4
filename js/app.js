$(document).ready(function() {
    //declaring variables
    let myFirstName = $("#firstName").val();
    let myLastName = $("#lastName").val();
    let myMiddleName = $("#middleName").val();
    let myPhoneNumber = $("phoneNo").val();
    let dob = $("dob").val();
    let gender = $("#sex").val();
    let country = $("#country").val();
    let state = $("inputState").val();
    let localGov = $("#localGov").val();


    //form validation
    $("#myform").validate({
        rules: {
            firstName: {
            required: true,
          },
          lastName: {
            required: true,
            },
          phoneNo: {
              required: true,
            },
          dob: {
            required: true,
            },
            sex: {
                required: true,
            },
            country: {
                required: true,
            },
            inputState: {
                required: true,
            },
            localGov: {
                required: true,
            },
        }
        
    });

    $("submit").click(function(){
    
    })
    
    






















});