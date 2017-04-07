    
function add(){
    
    let address = document.getElementById('address').value;
    let contact_no = document.getElementById('contact_no').value;
    let birthday = document.getElementById('birthday').value;
    let email = document.getElementById('email').value;
    let some_words = document.getElementById('some_words').value;
    let key = prompt("Please enter your name", "Hina Thukral");
     let array = new Array(key,address,contact_no,birthday,email,some_words);
     if (address == "") {
        alert("Address must be filled out");
        return false;
    }
    else if(contact_no == "") {
        alert("Contact Number must be filled out");
        return false;
    }
    else if(birthday == "") {
        alert("Birthday must be filled out");
        return false;
    }
    else if(email == "") {
        alert("Email must be filled out");
        return false;
    }
    else if(some_words == ""){
        alert("Some Words must be filled out");
        return false;
    }
    else{
     localStorage.setItem(key,JSON.stringify(array));
     document.getElementById("thankyou").innerHTML = "Thank you for submitting your information";
     currentform.reset();
    }
}
function output(){
         let n = prompt("Enter name you search for info", "hina");
         let storedNames = JSON.parse(localStorage.getItem(n));
         console.log(storedNames);
        document.getElementById("result1").innerHTML = "Name:  " + storedNames[0];
        document.getElementById("result2").innerHTML = "Address:  " + storedNames[1];
        document.getElementById("result3").innerHTML = "Contact Number:   " + storedNames[2];
        document.getElementById("result4").innerHTML = "Birthday:   " + storedNames[3];
        document.getElementById("result5").innerHTML = "Email Id:  " +storedNames[4];
        document.getElementById("result6").innerHTML = "Words For Me:   " + storedNames[5];
        
}
