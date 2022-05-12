$(document).ready(function() {
    //declaring variables
    let myFirstName = $("#firstName");
    let myLastName = $("#lastName");
    let myMiddleName = $("#middleName");
    let myPhoneNumber = $("phoneNo");
    let dob = $("dob");
    let gender = $("#sex");
    let country = $("#country");
    let myState = $("#inputState").select2();
    let localGov = $("#localGov").select2();
    const url = "./states.json"

    //initialization of datatable
    $('#mytable').DataTable();


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

    //fetching json file
    (async () => {
        try {
            const res = await fetch(url)
            if (res.status === 200) {
                const data = await res.json();
                // console.log(data);
                data.states.forEach(el => {
                    console.log(el.lga[0]);
                   myState.append(`<option>${el.state}</option>`);
                });   
            } else {
                throw new Error('something went wrong');
            }
        } catch (error) {
            console.log(error);
        }finally {
            console.log('Data has been fetched')
        }
    })();













    $("#submit").click(function(){
        $("#tableBody").html(
             `
            <tr>
                <td>${myFirstName.val()}</td>
                <td>${myLastName.val()}</td>
                <td>${myMiddleName.val()}</td>
                <td>${dob.val()}</td>
                <td>${gender.val()}</td>
                <td>${country.val()}</td>
                <td>${myPhoneNumber.val()}</td>
                <td>${myState.val()}</td>
                <td>${localGov.val()}</td>
            </tr>
            `
        )
    })
    
    






















});