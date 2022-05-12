$(document).ready(function() {
    //declaring variables
    let myFirstName = $("#firstName").val();
    let myLastName = $("#lastName").val();
    let myMiddleName = $("#middleName").val();
    let myPhoneNumber = $("phoneNo").val();
    let dob = $("dob").val();
    let gender = $("#sex").val();
    let country = $("#country");
    let myState = $("#inputState").select2();
    let localGov = $("#localGov").select2();
    const url = "./states.json"


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
                    console.log(el);
                   myState.append(`<option>${el.state}</option>`);
                //    localGov.append(`<option>${el.lga[0]}</option>`);
                })
                

                

                
                
            } else {
                throw new Error('something went wrong');
            }
        } catch (error) {
            console.log(error);
        }finally {
            console.log('Data has been fetched')
        }
    })();












    $('#mytable').DataTable();

    $("#submit").click(function(){
        $("#tableBody").html(
             `
            <tr>
                <td>${myFirstName}</td>
                <td>${myLastName}</td>
                <td>${myMiddleName}</td>
                <td>${dob}</td>
                <td>${gender}</td>
                <td>${country}</td>
                <td>${myPhoneNumber}</td>
                <td>${myState}</td>
                <td>${localGov}</td>
            </tr>
            `
        )
    })
    
    






















});