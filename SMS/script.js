
function showLogin() {
    document.getElementById('loginDetails').style.display = 'block';
    document.getElementById('registerDetails').style.display = 'none';
}

function showRegister() {
    document.getElementById('loginDetails').style.display = 'none';
    document.getElementById('registerDetails').style.display = 'block';
}

function register(event) {
    event.preventDefault(); 
    alert('Registration successful!');
    showLogin(); 
}

function login(event) {
    event.preventDefault(); 
    alert('Login successful!');
}



const coursePrices = {
    'M.P.C': 30000,
    'BI.P.C': 25000,
    'M.E.C': 20000
};

const languagePrices = {
    'Telugu': 5000,
    'Sanskrit': 4500,
    'Hindi': 4000
};
function getDetails() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('emailid').value;
    const address = document.getElementById('address').value;
    const language = document.querySelector('input[name="language"]:checked');
    const selectedLanguage = language ? language.value : '';

    // Fetch selected course details
    const selectedCourse = document.querySelector('.course-a.selected');
    const courseName = selectedCourse ? selectedCourse.querySelector('.course-name').textContent.trim() : '';
    const coursePrice = coursePrices[courseName];

    // Calculate total fee
    let totalFee = coursePrice; 
    if (selectedLanguage && languagePrices[selectedLanguage]) {
        totalFee += languagePrices[selectedLanguage];
    }

    // Prepare output HTML
    const outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = `
        <h3>Student Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Selected Course:</strong> ${courseName}</p>
        <p><strong>Total Fee:</strong> ${totalFee}/-</p>
    `;
}

// Function to handle course selection
document.addEventListener('DOMContentLoaded', function() {
    const courseButtons = document.querySelectorAll('.choose-btn');
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all course-a elements
            document.querySelectorAll('.course-a').forEach(course => {
                course.classList.remove('selected');
            });
            // Add 'selected' class to the parent course-a div of the clicked button
            this.parentNode.classList.add('selected');
        });
    });
});
