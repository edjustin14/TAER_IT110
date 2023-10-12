
        function validateForm() {
            try {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
          
            var usernamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            var passwordPattern = /^[a-zA-Z0-9._-]{8,}$/;


            if (!usernamePattern.test(username)) {
                alert('Please enter a valid username address');
                document.getElementById("myForm").reset();
                return false;
            }

            if (!passwordPattern.test(password)) {
                alert('Please enter a valid password');
                document.getElementById("myForm").reset();
                return false;
            }
                      
            return true; // Form will submit if validation passes
        
        }  catch (error) {
            alert(error.message);

            return false; // prevent from submission on error

        }  finally {

            //additional action
        }
        }
            