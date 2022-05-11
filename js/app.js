$(document).ready(function() {
    // $('#example').DataTable( {
    //     "states": "data/arrays.txt"
    // } );
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
        
    })
    
    






















});