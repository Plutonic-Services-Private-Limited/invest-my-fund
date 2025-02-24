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
        const submitButton = document.getElementById(`${formId}_submit`);
        submitButton.innerText = 'Loading...';
        submitButton.disabled = true;

        fetch('https://investmyfunds.in/imf-api/v1/contact-us/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Referer': 'https://www.investmyfunds.in/',
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    const errorData =  response.json();
                   alert("Please fill all fields.");
                }else {
                    alert("Submit successful");
                    submitButton.innerText = 'Register';
                    submitButton.disabled = false;
                    document.getElementById(`${formId}_name`).value = '';
                    document.getElementById(`${formId}_email`).value = '';
                    document.getElementById(`${formId}_country`).value = '';
                    document.getElementById(`${formId}_phone_no`).value = '';
                    document.getElementById(`${formId}_message`).value = '';
                    return  response.json()
                }

            })
            .catch(error => {
                submitButton.innerText = 'Register';
                submitButton.disabled = false;
                document.getElementById(`${formId}_responseMessage`).innerText = 'Error sending message.';
            });
    });
}

// Initialize both forms
handleFormSubmit('contact1');
handleFormSubmit('contact2');