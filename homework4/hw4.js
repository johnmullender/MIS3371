/*
    Name: John Mullender
    Date created: May 1, 2026
    Date last edited: May 8, 2026
    Version: 4.3
    Description: Homework 4 creating a Patient Registration Form for the medical industry using basic JavaScript
*/

// ---------------------- VALIDATION FUNCTIONS ----------------------

//validating first name
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty";
        return false;
    } else {
        if (!fname.match(namePattern)) {
            document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
            return false;
        } else if (fname.length < 2) {
            document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
            return false;
        } else if (fname.length > 30) {
            document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
            return false;
        } else {
            document.getElementById("fname-error").innerHTML = "";
            return true;
        }
    }
}

//Validating Middle inital
function validateMname() {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;

    //makes middle inital uppercase
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;

    if (mname === "") {
        // optional: allow blank middle initial, return true if you want it optional
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }

    if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = "Middle inital must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//validating Last name
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty";
        return false;
    } else {
        if (!lname.match(namePattern)) {
            document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
            return false;
        } else if (lname.length < 2) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
            return false;
        } else if (lname.length > 30) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
            return false;
        } else {
            document.getElementById("lname-error").innerHTML = "";
            return true;
        }
    }
}

// Js code for validating Date of Birth
function validateDob() {
    const dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (!dob.value) {
        document.getElementById("dob-error").innerHTML = "Date of Birth is required.";
        return false;
    }

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// Js code for validating SSN
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML =
            "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Js code for validating Address 1
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML =
            "Please enter your address on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//Js code for validating city
function validateCity() {
    let city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// Js code for validating Zip Code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes any non-number and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML =
            "Zip Code cannot be left blank";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9);
    } else {
        zip = zip.slice(0,5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

//Js code for validating email
function validateEmail() {
    let email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "") {
        document.getElementById("email-error").innerHTML =
            "Email Address cannot be empty";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
            "Please enter a valid Email Address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//js code for validating
function validateState() {
    const state = document.getElementById("state").value;

    if (state === "") {
        document.getElementById("state-error").innerHTML = "Please select a state";
        return false;
    } else {
        document.getElementById("state-error").innerHTML = "";
        return true;
    }
}

// Js code for validating phone number
function validatePhonenum() {
    const phoneInput = document.getElementById("phonenum");
    const phone = phoneInput.value.replace(/\D/g,""); //removes all non-number characters

    if (phone.length !== 10) {
        document.getElementById("phonenum-error").innerHTML =
            "Phone Number must be 10 digits";
        return false;
    }

    const formattedPhone =
        phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phonenum-error").innerHTML = "";
    return true;
}

//js code for username validation
function validateUsername() {
    let username = document.getElementById("username").value;

    username = username.toLowerCase();
    document.getElementById("username").value = username;

    if (username.length === 0) {
        document.getElementById("username-error").innerHTML =
            "Username field cannot be empty";
        return false;
    }

    if (!isNaN(username.charAt(0))){
        document.getElementById("username-error").innerHTML =
            "Username cannot begin with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML =
            "Username can only contain letters, numbers, or underscores";
        return false;
    } else if (username.length < 5 ) {
        document.getElementById("username-error").innerHTML =
            "Username cannot be less than 5 characters";
        return false;
    } else if (username.length > 30) {
        document.getElementById("username-error").innerHTML =
            "Username cannot exceed 30 characters";
        return false;
    } else {
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}

//Js code for password validation
function validatePass() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    const errorMessage = [];

    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    if (pass === username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }
    if (pass.length < 10) {
        errorMessage.push("Password must be at least 10 characters long");
    }

    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
        .map(msg => `<span>${msg}</span><br>`).join("");

    // also use the span under password field if you want:
    const pass1Span = document.getElementById("pass1-error");
    if (pass1Span) {
        pass1Span.innerHTML = errorMessage.length > 0 ? "Please fix the password issues listed below." : "";
    }

    if (errorMessage.length > 0) {
        return false;
    }
    return true;
}

//js for confirm password validation js code
function confirmPass() {
    let pass1 = document.getElementById("pass").value;
    let pass2 = document.getElementById("c_pass").value;

    if (pass1 !== pass2){
        document.getElementById("pass2-error").innerHTML =
            "Passwords do not match";
        return false;
    } else {
        document.getElementById("pass2-error").innerHTML =
            "Passwords match";
        return true;
    }
}

// js code for the review button
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + (el.id || name) + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//show alert box when needed
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate all the stuff one the form
function validateEverything() {
    let valid = true;

    if (!validateFname()) valid = false;
    if (!validateMname()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateZcode()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhonenum()) valid = false;
    if (!validateUsername()) valid = false;
    if (!validatePass()) valid = false;
    if (!confirmPass()) valid = false;

    if (valid) {
        document.getElementById("submit").disabled = false;   // only matters if you set disabled in HTML
    } else {
        showAlert();
    }
}

// ---------------------- COOKIE HELPERS ----------------------

function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return decodeURIComponent(cookie.substring(cookieName.length, cookie.length));
        }
    }
    return "";
}

// mapping inputs to cookie names
var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mname", cookieName: "middleInital"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dob"},
    {id:"ssn", cookieName: "ssn"},
    {id:"address1", cookieName: "address1"},
    {id:"city", cookieName: "city"},
    {id:"zcode", cookieName: "zipCode"},
    {id:"email", cookieName: "email"},
    {id:"phonenum", cookieName: "phone"},
    {id:"username", cookieName: "userName"},
];

// ---------------------- LOCAL STORAGE HELPERS ----------------------

// only NON-SECURE fields go here (NO ssn, pass, c_pass)
const nonSecureFields = [
    "fname",
    "mname",
    "lname",
    "dob",
    "address1",
    "city",
    "zcode",
    "email",
    "phonenum",
    "username",
    "range"
];

const LS_KEY = "bingbongFormData";

// save a single field to localStorage when user leaves/changes it
function saveFieldToLocalStorage(fieldId) {
    const el = document.getElementById(fieldId);
    if (!el) return;

    let value;
    const type = el.type;

    if (type === "checkbox") {
        value = el.checked;
    } else if (type === "radio") {
        if (!el.checked) return;
        value = el.value;
    } else {
        value = el.value;
    }

    let data = {};
    try {
        data = JSON.parse(localStorage.getItem(LS_KEY)) || {};
    } catch (e) {
        data = {};
    }

    data[fieldId] = { value: value, type: type };
    localStorage.setItem(LS_KEY, JSON.stringify(data));
}

// load localStorage back into the form (after cookie match + user confirms it is them)
function loadLocalStorageToForm() {
    let data;
    try {
        data = JSON.parse(localStorage.getItem(LS_KEY)) || {};
    } catch (e) {
        data = {};
    }

    Object.keys(data).forEach(function(fieldId) {
        const el = document.getElementById(fieldId);
        if (!el) return;

        const stored = data[fieldId];

        if (el.type === "checkbox") {
            el.checked = !!stored.value;
        } else if (el.type === "radio") {
            if (el.value === stored.value) {
                el.checked = true;
            }
        } else {
            el.value = stored.value;

            // keep slider display synced
            if (el.id === "range") {
                const out = document.getElementById("range-slider");
                if (out) out.innerHTML = stored.value;
            }
        }
    });
}

// clear all localStorage data for this user
function clearFormLocalStorage() {
    localStorage.removeItem(LS_KEY);
}

// ---------------------- FETCH API: LOAD STATE LIST ----------------------
// Uses Fetch + try/catch to read states from a separate file (states.txt)
// Expected format of states.txt: each line "TX,Texas"
async function loadStateOptions() {
    const stateSelect = document.getElementById("state");
    if (!stateSelect) return; // if there is no state <select>, skip

    // Optional: clear existing options (except maybe the first placeholder)
    // stateSelect.innerHTML = "";

    try {
        const response = await fetch("states.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.status);
        }

        const text = await response.text();
        const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");

        lines.forEach(line => {
            const parts = line.split(",");
            const abbr = (parts[0] || "").trim();
            const name = (parts[1] || parts[0] || "").trim();

            if (!abbr && !name) return;

            const opt = document.createElement("option");
            opt.value = abbr;
            opt.textContent = name;
            stateSelect.appendChild(opt);
        });

    } catch (error) {
        console.error("Error loading state list with Fetch API:", error);
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = "Error loading states";
        stateSelect.appendChild(opt);
    }
}

// ---------------------- DOM-READY SETUP ----------------------

window.addEventListener("load", function () {
    // dynamic date
    const d = new Date();
    let text = d.toLocaleDateString();
    var todayEl = document.getElementById("today");
    if (todayEl) {
        todayEl.innerHTML = text;
    }

    // range slider + Local Storage display
    let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    if (slider && output) {
        output.innerHTML = slider.value;
        slider.oninput = function () {
            output.innerHTML = this.value;
        };
    }

    // cookies for inputs (prefill from cookies)
    inputs.forEach(function (input) {
        var inputElement = document.getElementById(input.id);
        if (!inputElement) return;

        var cookieValue = getCookie(input.cookieName);
        if (cookieValue !== "") {
            inputElement.value = cookieValue;
        }

        inputElement.addEventListener("input", function () {
            setCookie(input.cookieName, inputElement.value, 30);
        });
    });

    // LOCAL STORAGE: attach blur/change to all NON-SECURE fields
    nonSecureFields.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener("blur", function () {
            saveFieldToLocalStorage(id);
        });
        el.addEventListener("change", function () {
            saveFieldToLocalStorage(id);
        });
    });

    // Fetch API: load state list from external file
    loadStateOptions();

    // greet the user with name and message + localStorage behavior
    var firstName = getCookie("firstName");
    if (firstName !== "") {
        // ask if it is really them (Requirement #2 / #3)
        var isUser = confirm("Welcome back, " + firstName + "! Is this you?");

        if (isUser) {
            // cookie match + user confirms it's them -> load localStorage into form
            loadLocalStorageToForm();
        } else {
            // cookie match + user says it's NOT them -> clear cookies + localStorage
            inputs.forEach(function (input) {
                setCookie(input.cookieName, "", -1);
                var el = document.getElementById(input.id);
                if (el) el.value = "";
            });
            clearFormLocalStorage();
        }

        var welcome1 = document.getElementById("welcome1");
        var welcome2 = document.getElementById("welcome2");

        if (welcome1 && welcome2) {
            welcome1.innerHTML = "Welcome back, " + firstName + "!<br>";
            welcome2.innerHTML =
                "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

            var newUserLink = document.getElementById("new-user");
            if (newUserLink) {
                newUserLink.addEventListener("click", function (e) {
                    e.preventDefault();
                    // clear cookies
                    inputs.forEach(function (input) {
                        setCookie(input.cookieName, "", -1);
                    });
                    // clear localStorage
                    clearFormLocalStorage();
                    // clear form
                    inputs.forEach(function (input) {
                        var el = document.getElementById(input.id);
                        if (el) el.value = "";
                    });
                    if (slider) slider.value = 0;
                    if (output) output.innerHTML = "0";

                    location.reload();
                });
            }
        }
    }
});

// remember me button
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies AND localStorage
        deleteAllCookies();
        clearFormLocalStorage();
        console.log("All cookies and local storage deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement && inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
        clearFormLocalStorage();
    }
});