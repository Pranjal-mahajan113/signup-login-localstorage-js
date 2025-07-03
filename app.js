// -------- SIGNUP FORM LOGIC --------
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    // Runs only if signup form is present on the page
    const submitbtn = document.getElementById("submitbtn");
    const nameerror = document.getElementById("nameerror");
    const emailerror = document.getElementById("emailerror");
    const passerror = document.getElementById("passerror");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Clear old errors
        nameerror.innerHTML = "";
        emailerror.innerHTML = "";
        passerror.innerHTML = "";

        // Run validations
        let isNamevalid = validateName();
        let isEmailvalid = validateEmail();
        let isPasswordvalid = validatePassword();

        if (isNamevalid && isEmailvalid && isPasswordvalid) {
            // All inputs are valid — save to localStorage
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Save email and password for login
            localStorage.setItem("savedUserEmail", email);
            localStorage.setItem("savedUserPassword", password);
            localStorage.setItem("savedUserName", name);

            alert("Account Created Successfully! Now login.");

            //  Optional: Redirect to login page
            window.location.href = "login.html";
        }
    }

    );

    function validateName() {
        let name = document.getElementById("name").value;
        if (name.length === 0) {
            nameerror.innerHTML = "Name is required";
            return false;
        }
        if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
            nameerror.innerHTML = "Write full Name";
            return false;
        }
        return true;
    }

    function validateEmail() {
        let email = document.getElementById("email").value;
        if (email.length === 0) {
            emailerror.innerHTML = "Email is required";
            return false;
        }
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            emailerror.innerHTML = "Enter Valid Email";
            return false;
        }
        return true;
    }

    function validatePassword() {
        let password = document.getElementById("password").value;
        if (password.length === 0) {
            passerror.innerHTML = "Password is required";
            return false;
        }
        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)) {
            passerror.innerHTML =
                "Password should contain 1 uppercase, 1 lowercase, 1 digit & 1 special character";
            return false;
        }
        return true;
    }
}


// -------- LOGIN FORM LOGIC --------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get saved values
        const savedEmail = localStorage.getItem("savedUserEmail");
        const savedPassword = localStorage.getItem("savedUserPassword");

        // Get input values
        const emailInput = document.getElementById("loginEmail").value;
        const passInput = document.getElementById("loginPassword").value;

        const emailError = document.getElementById("loginEmailError");
        const passError = document.getElementById("loginPassError");

        emailError.innerHTML = "";
        passError.innerHTML = "";
        //run validations





        // Validate
        if (emailInput === "" || passInput === "") {
            if (emailInput === "") emailError.innerHTML = "Email is required";
            if (passInput === "") passError.innerHTML = "Password is required";
            return;
        }

        // Match with saved credentials
        if (emailInput === savedEmail && passInput === savedPassword) {
            alert("Login successful!");
             window.location.href = "index.html";
            
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
}
