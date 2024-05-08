  const Password = document.querySelector("#txtPassword");
  const Checkbox = document.querySelector("#show");


  // Checkbox.addEventListener('click',function(){
  //   const type =Password.getAttribute("type")=== "password" ? "text" : "password";
  //   Password.setAttribute("type",type);
  // });


  document.addEventListener("DOMContentLoaded",  function() {
    const form = document.querySelector("#loginForm");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#txtPassword");
    const showPasswordCheckbox = document.querySelector("#show");
    const selectedUserType = document.querySelector('input[name="userType"]:checked');
    
    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent default form submission
       
        let userTypeValue = selectedUserType.value
        // Validate email input
        const emailValue = emailInput.value.trim();
        emailValue.toLowerCase();
        if (!emailValue) //will be handled by the html required field so this is just a precaution
          {
            alert("Email is required");
            return;
          }
        if(emailValue.indexOf('@') === -1)
          {
            alert("ERROR: Email must have the '@' symbol.");
            emailInput.value="";
            emailInput.focus(); 
            return; //allow data to be entered again
          }

        // Validate password input
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue)
           {
            alert("Password is required");
            return;
          }
           //Data Validation done

          loginFormData = {
            username : emailValue,
            password: passwordValue,
            userType: userTypeValue
          };

        try {
          // Send POST request to server
          const response = await fetch("/userLogin", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(loginFormData)
          });
  
          if (response.ok) {
             // Login successful
            const responseData = await response.json();
            const loginMessage= responseData.message;
              alert(loginMessage);
              const userTypeSignal =responseData.userTypeSignal;
              userTypeSignal === 0 ? window.location.href = "/homePage": window.location.href = "/seller";
          } else {
              // Login failed
              const errorMessage = await response.text();
              alert(errorMessage);
          }
      } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
      }
  });

    // Toggle password visibility
    showPasswordCheckbox.addEventListener("change", function() {
        const isChecked = this.checked;
        passwordInput.type = isChecked ? "text" : "password";
    });
});
