// Function to handle form submission
function handleFormSubmit(formId) {
    document.getElementById(formId).addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const formData = {
            name: document.getElementById(`${formId}_name`).value,
            email: document.getElementById(`${formId}_email`).value,
            country: document.getElementById(`${formId}_country`).value,
            phone_no: document.getElementById(`${formId}_phone_no`).value,
            message: document.getElementById(`${formId}_message`).value,
            page: "Contact Us"
        };
        console.log('formData', formData);

        // Send data to the API
        fetch('https://investmyfunds.in/imf-api/v1/contact-us/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Referer': 'https://www.investmyfunds.in/',
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                // Handle success
                document.getElementById(`${formId}_responseMessage`).innerText = 'Message sent successfully!';
                console.log(data);
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
                document.getElementById(`${formId}_responseMessage`).innerText = 'Error sending message.';
            });
    });
}

// Initialize both forms
handleFormSubmit('contact1');
handleFormSubmit('contact2');