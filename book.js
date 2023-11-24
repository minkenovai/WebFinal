$(document).ready(function(){
    function showAlert() {
        var alertBox = document.getElementById('alertBox');
        alertBox.style.display = 'block';
    }
      
    function hideAlert() {
        var alertBox = document.getElementById('alertBox');
        alertBox.style.display = 'none';
        var flight = document.getElementById('flightBlock');
            flight.style.display = 'none';
    }

    
    function validateDate(date) {
        // Check if the date is in a valid format
        var inputDate = new Date(date);
        if (isNaN(inputDate.getTime()) || date === '') {
        return false;
        }
        return true;
    }

    function validateName(input) {
        return input.trim() !== ''; 
    }

    function validatePhone(phone) {
        var phone = document.getElementById('input3').value;
        if (phone.length == 11) {
            return true;
        }
        return false;
    }
    
    document.getElementById('submitForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var dateInput = document.getElementById('input1').value;
        var dateInput2 = document.getElementById('input2').value;
        var name = document.getElementById('input4').value;
        var lastname = document.getElementById('input5').value;
        var phoneNumber = document.getElementById('input3').value;
        if (validateDate(dateInput) && validateDate(dateInput2) && validateName(name) && validateName(lastname) && validatePhone(phoneNumber)) {
            showAlert();
            var flightBlock = document.getElementById('flightBlock');
            flightBlock.style.display = 'none';
        } else {
            hideAlert();          
        }
    });
})