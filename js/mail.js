$(document).ready(function() {

    $("#name").blur(function() {
        $(this).removeClass('error');
    });

    $("#email").blur(function() {
        $(this).removeClass('error');
    });

    $("#number").blur(function() {
        $(this).removeClass('error');
    });

    $("#website").blur(function() {
        $(this).removeClass('error');
    });

    $("#message").blur(function() {
        $(this).removeClass('error');
    });

    $("#submitButton").click(function() {
        var nameInput = $("#name").val();
        var emailInput = $("#email").val();
        var numberInput = $("#number").val();
        var websiteInput = $("#website").val();
        var messageInput = $("#message").val();
        var reasonInput = $("#reason").val();

        if (nameInput == '' || emailInput == '' || numberInput == '' || websiteInput == '' || messageInput == '') {
            if (nameInput == '') {
                $("#name").addClass('error');
            }

            if (emailInput == '') {
                $("#email").addClass('error');
            }

            if (numberInput == '') {
                $("#number").addClass('error');
            }

            if (websiteInput == '') {
                $("#website").addClass('error');
            }

            if (messageInput == '') {
                $("#message").addClass('error');
            }

            alert("Error: All fields must be filled out.");
        } else {

            var nameField = document.getElementById('name');
            nameField.disabled = true;
            var emailField = document.getElementById('email');
            emailField.disabled = true;
            var numberField = document.getElementById('number');
            numberField.disabled = true;
            var websiteField = document.getElementById('website');
            websiteField.disabled = true;
            var messageField = document.getElementById('message');
            messageField.disabled = true;
            var reasonField = document.getElementById('reason');
            reasonField.disabled = true;
            var mySubmitButton = document.getElementById('submitButton');
            mySubmitButton.disabled = true;

            $.post("php/contact.php", {
                name: nameInput,
                email: emailInput,
                phone: numberInput,
                website: websiteInput,
                type: reasonInput,
                message: messageInput
            }, function(data) {
                console.log(data);

                document.getElementById("contactForm").reset();
                $("#name").removeClass('error');
                $("#email").removeClass('error');
                $("#number").removeClass('error');
                $("#website").removeClass('error');
                $("#message").removeClass('error');

                if (data == "Message send was successful.") {
                    console.log("main.js: Message was sent");
                        
                    $("#name").addClass('success');
                    $("#email").addClass('success');
                    $("#number").addClass('success');
                    $("#website").addClass('success');
                    $("#message").addClass('success');
                    $("#submitButton").addClass('success');

                    nameField.disabled = false;
                    emailField.disabled = false;
                    numberField.disabled = false;
                    websiteField.disabled = false;
                    messageField.disabled = false;
                    reasonField.disabled = false;
                    mySubmitButton.disabled = false;

                    var submitbutton = document.getElementById('submitButton');
                    submitbutton.value = "Sent!";
                } else {
                    console.log("main.js: Message was not sent");
                    var submitbutton = document.getElementById('submitButton');
                    submitbutton.value = "Error!";
                }
            });
        }
    });
});
