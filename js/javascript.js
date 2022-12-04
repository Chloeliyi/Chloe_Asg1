 function myMessage(inputText) {

    if (document.getElementById("name").value == "") {
        alert("Name is not written.")
    }
    else if (document.getElementById("email").value == "") {
        alert("Email is not written.")
    }
    else if (document.getElementById("message_form").value == "") {
        alert("Message is not written.")
    }
    else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(inputText.value.match(mailformat)) {
            alert("Thank You For Leaving Us An Message!")
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message_form").value = "";
            document.getElementById("message").innerHTML = "Thank You For Leaving Us An Message! We Will Contact You Shortly."
        }
        else {
            alert("Email address format is not correct.")
        }
    }
  }

  function Delete(secondValue) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message_form").value = "";
 }