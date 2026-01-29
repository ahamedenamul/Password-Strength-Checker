const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("togglePassword");
const strengthMeter = document.getElementById("strengthMeter");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// Requirements এলিমেন্ট
const reqLength = document.getElementById('req-length');
const reqUppercase = document.getElementById('req-uppercase');
const reqLowercase = document.getElementById('req-lowercase');
const reqNumber = document.getElementById('req-number');
const reqSpecial = document.getElementById('req-special');



// Function to toggle password visibility useing if else condition

/* passwordToggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "👁️";
    }
}); */

// Function to toggle password visibility using Ternary Operator 

togglePassword.addEventListener('click', function() {
    const isPassword = passwordInput.type === 'password';
    
    passwordInput.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? '👁️' : '🙈';
});

// Checking while typing in password input

passwordInput.addEventListener("input", function() {
    const password = this.value;
    checkPasswordStrength(password);
});

// Main function to check password strength

function checkPasswordStrength(password) {
    let strength = 0;

    // If password is empty
    if (password.length === 0) {
        resetStrengthMeter();
        return;
    }
    
    // Check each condition and increase strength

    // 1. Length check (8 or more)

    if (password.length >= 8) {
        strength ++;
        reqLength.classList.add('met');
    } else {
        reqLength.classList.remove('met;'); 
    }

    // 2. Whether there are uppercase letters (A-Z)

    if (/[A-Z]/.test(password)) {
        strength ++;
        reqUppercase.classList.add('met');
    } else {
        reqUppercase.classList.remove('met');
    }

    // 3. Whether there are lowercase letters (a-z)

    if (/[a-z]/.test(password)) {
        strength ++;
        reqLowercase.classList.add('met');
    } else {
        reqLowercase.classList.remove('met');
    }

    // 4. Whether there are numbers (0-9)
    
    if (/[0-9]/.test(password)) {
        strength ++;
        reqNumber.classList.add('met');
    } else {
        reqNumber.classList.remove('met');
    }

    // 5. Whether there are special characters (!@#$%^&*)

    if (/[^A-Za-z0-9]/.test(password)) {
        strength ++;
        reqSpecial.classList.add('met');
    } else {
        reqSpecial.classList.remove('met');
    }

    // Determine strength level
    updateStrengthMeter(strength)

}

// Updating the strength meter

function updateStrengthMeter(strength) {
    // Remove old class
    strengthMeter.classList.remove("weak", "medium", "strong");

    if (strength <= 2) {
        // Weak password
        strengthMeter.classList.add("weak");
        strengthText.textContent = '❌ দুর্বল পাসওয়ার্ড';
    } else if (strength <= 4) {
        // Medium password
        strengthMeter.classList.add("medium");
        strengthText.textContent = '⚠️ মাঝারি পাসওয়ার্ড';
    } else {
        // Strong password
        strengthMeter.classList.add("strong");
        strengthText.textContent = '✅ শক্তিশালী পাসওয়ার্ড';
    }
}

// Reset the strength meter

function resetStrengthMeter() {
    strengthMeter.classList.remove("weak", "medium", "strong");
    strengthText.textContent = '';

};