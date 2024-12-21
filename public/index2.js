
// Get the form element
const form = document.getElementById('report-form');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const disappearanceDate = document.getElementById('disappearance-date').value;
    const disappearanceLocation = document.getElementById('disappearance-location').value;
    const disappearanceDescription = document.getElementById('disappearance-description').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const hairColor = document.getElementById('hair-color').value;
    const eyeColor = document.getElementById('eye-color').value;
    const distinguishingFeatures = document.getElementById('distinguishing-features').value;
    const reporterName = document.getElementById('reporter-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const emailAddress = document.getElementById('email-address').value;
    const firNumber = document.getElementById('fir-number').value;

    // Validate the input values
    if (!name || !age || !gender || !dob || !address || !disappearanceDate || !disappearanceLocation || !disappearanceDescription || !height || !weight || !hairColor || !eyeColor || !distinguishingFeatures || !reporterName || !phoneNumber || !emailAddress || !firNumber) {
        alert('Please fill in all the required fields.');
        return;
    }

    // Create a JSON object to store the report details
    const reportDetails = {
        name,
        age,
        gender,
        dob,
        address,
        disappearanceDate,
        disappearanceLocation,
        disappearanceDescription,
        height,
        weight,
        hairColor,
        eyeColor,
        distinguishingFeatures,
        reporterName,
        phoneNumber,
        emailAddress,
        firNumber
    };

    // Send the report details to the server using fetch API
   // Replace the fetch call in index2.js with:
fetch('http://localhost:5000/api/reports', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(reportDetails)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
});
