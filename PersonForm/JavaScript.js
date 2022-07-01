$(document).ready(function () {

    $('#firstName').keyup(function () {
        fname_check();
    });

    $('#lastName').keyup(function () {
        lname_check();
    });

    $('#email').keyup(function () {
        email_check();
    });

    $('#age').keyup(function () {
        age_check();
    });

    $('#tel').keyup(function () {
        tel_check();
    });

    $('#lastname').after(function () {
        var gender = document.forms.form_check.gridRadios;
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked == true)
                return true;
        }
        document.getElementById('#gender_error').innerHTML = "please select any one"
        return false;
    });

    function validateGender() {
        var gender = $('.gen');
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked == true)
                return true;
        }
        $('#gender_error').innerHTML = "please select any one"
        return false;
    }


    function fname_check() {
        var fname_val = $('#firstName').val();
        var pattern = /^[a-zA-Z]*$/;
        if (fname_val == '') {
            $('#fname_error').show();
            $('#fname_error').html("Please fill the First Name");
            $('#fname_error').focus();
            $('#fname_error').css("color", "red");
            return false;
        } else {
            $('#fname_error').hide();
        }
        if (!pattern.test(fname_val)) {
            $('#fname_error').show();
            $('#fname_error').html("First Name should contain only characters");
            $('#fname_error').focus();
            $('#fname_error').css("color", "red");
            return false;
        } else {
            $('#fname_error').hide();
        }
    }
    function lname_check() {
        var lname_val = $('#lastName').val();
        var pattern = /^[a-zA-Z]*$/;
        if (lname_val == '') {
            $('#lname_error').show();
            $('#lname_error').html("Please fill the Last Name");
            $('#lname_error').focus();
            $('#lname_error').css("color", "red");
            return false;
        } else {
            $('#lname_error').hide();
        }
        if (!pattern.test(lname_val)) {
            $('#lname_error').show();
            $('#lname_error').html("First Name should contain only characters");
            $('#lname_error').focus();
            $('#lname_error').css("color", "red");
            return false;
        } else {
            $('#lname_error').hide();
        }
    }

    function email_check() {
        var email_val = $('#email').val();
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!pattern.test(email_val)) {
            $('#email_error').show();
            $('#email_error').html("Please enter valid email id");
            $('#email_error').css("color", "red");
            return false;
        } else {
            $('#email_error').hide();
        }
    }

    function age_check() {
        var age_val = $('#age').val();
        if ((age_val <= 0) || (age_val >= 150)) {
            $("#age_error").show();
            $("#age_error").html("Please enter valid age");
            $('#age_error').css("color", "red");
            return false;
        } else {
            $('#age_error').hide();
        }
    }

    function tel_check() {
        var tel_val = $('#tel').val();
        var pattern = /^[0-9]{10}$/;
        if (!pattern.test(tel_val)) {
            $('#tel_error').show();
            $('#tel_error').html("Enter 10 digit valid telphone number");
            $('#tel_error').css("color", "red");
            return false;
        } else {
            $('#tel_error').hide();
        }
    }

    $('#add1').keyup(function () {
        var add1 = $('#add1').val();
        console.log(add1);
        if (add1 == '') {
            $('#add1_error').show();
            $('#add1_error').html("Please enter address");
            $('#add1_error').css("color", "red");
            return false;
        } else {
            $('#add1_error').hide();
        }
    });

    //$('#sub').click(function () {
    //    if ($("input:visible").prop("required", true)) {
    //        var fname = $('#firstName').val();
    //        var lname = $('#lastName').val();
    //        var gender = $('input[name="gridRadios"]:checked').val();
    //        var age = $('#age').val();
    //        var email = $('#email').val();
    //        var dob = $('#dob').val();
    //        var address = $('#add1').val();
    //        var city = $('#city').val();
    //        alert("your name: " + fname + " " + lname + " gender " + gender + "age is: " + age + "email id is : " + email + " Date of birth: " + dob + " City: " + city);
    //        return true;
    //    } 
    //});

    //$('#sub').click(function () {
    //    if ( fname_check() || $('#lastName').val() === "" || $('input[name="gridRadios"]:checked').val() === "" || $('#age').val() === "" ||
    //        $('#email').val() === "" || $('#email').val() === "" || $('#city').val() === "" || $('#dob').val() === "" || $('#zip').val() === "" ||
    //        $('#tel').val() === "" || $('#country').val() === "" || $('#state').val() === "") {
    //        alert("please fill form")
    //    } else {
    //        alert("Your Name: " + $('#firstName').val() + " " + $('#lastName').val() + " Gender: " + $('input[name="gridRadios"]:checked').val() + " email: " + $('#email').val() + " address: " + $('#add1').val()
    //            + " City : " + $('#city').val() + " Birth Date: " + $('#dob').val() + " Age : " + $('#age').val() + " Pincode: " + $('#zip').val() + " Contact: " +
    //            $('#tel').val() + " Country: " + $('#country').val() + " State: " + $('#state').val());
    //    } 
    //});


    $('#sub').click(function () {
        $('#firstName').trigger('keyup');
        validateGender();

    });



});






































//function lname_check() {
//    var lname_val = $(this).val('');
//    var pattern = /^[a-zA-Z]*$/;
//    if (lname_val == '') {
//        $('.sp').show();
//        $('.sp').html("Please fill the Last Name");
//        $('.sp').focus();
//        $('.sp').css("color", "red");
//        return false;
//    } else {
//        $('.sp').hide();
//    }
//    if (!pattern.test(lname_val)) {
//        $('.sp').show();
//        $('.sp').html("First Name should contain only characters");
//        $('.sp').focus();
//        $('.sp').css("color", "red");
//        return false;
//    } else {
//        $('.sp').hide();
//    }
//}
