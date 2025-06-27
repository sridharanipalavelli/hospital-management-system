// Function to register a new patient
function registerPatient() {
    var patientName = document.getElementById('patientName').value;
    var patientAge = document.getElementById('patientAge').value;

    // Example: Adding the patient to the list
    var patientItem = document.createElement('li');
    patientItem.textContent = patientName + ' - Age: ' + patientAge;
    document.getElementById('patientList').appendChild(patientItem);

    // Clear the form fields after registration
    document.getElementById('patientName').value = '';
    document.getElementById('patientAge').value = '';
}

// Function to register a new doctor
function registerDoctor() {
    var doctorName = document.getElementById('doctorName').value;
    var doctorSpecialty = document.getElementById('doctorSpecialty').value;

    // Example: Adding the doctor to the list
    var doctorItem = document.createElement('li');
    doctorItem.textContent = doctorName + ' - Specialty: ' + doctorSpecialty;
    document.getElementById('doctorList').appendChild(doctorItem);

    // Clear the form fields after registration
    document.getElementById('doctorName').value = '';
    document.getElementById('doctorSpecialty').value = '';
}

// Function to book a new appointment
function bookAppointment() {
    var appointmentPatient = document.getElementById('appointmentPatient').value;
    var appointmentDoctor = document.getElementById('appointmentDoctor').value;
    var appointmentDate = document.getElementById('appointmentDate').value;

    // Example: Adding the appointment to the list
    var appointmentItem = document.createElement('li');
    appointmentItem.textContent = 'Patient: ' + appointmentPatient + ', Doctor: ' + appointmentDoctor + ', Date: ' + appointmentDate;
    document.getElementById('appointmentList').appendChild(appointmentItem);

    // Clear the form fields after booking appointment
    document.getElementById('appointmentPatient').value = '';
    document.getElementById('appointmentDoctor').value = '';
    document.getElementById('appointmentDate').value = '';
}

// Function to prescribe medication
function prescribeMedication() {
    var prescriptionPatient = document.getElementById('prescriptionPatient').value;
    var prescriptionDoctor = document.getElementById('prescriptionDoctor').value;
    var prescriptionMedication = document.getElementById('prescriptionMedication').value;

    // Example: Adding the prescription to the list
    var prescriptionItem = document.createElement('li');
    prescriptionItem.textContent = 'Patient: ' + prescriptionPatient + ', Doctor: ' + prescriptionDoctor + ', Medication: ' + prescriptionMedication;
    document.getElementById('prescriptionList').appendChild(prescriptionItem);

    // Clear the form fields after prescribing medication
    document.getElementById('prescriptionPatient').value = '';
    document.getElementById('prescriptionDoctor').value = '';
    document.getElementById('prescriptionMedication').value = '';
}

// Function to record billing information
function recordBilling() {
    var billingPatient = document.getElementById('billingPatient').value;
    var billingAmount = document.getElementById('billingAmount').value;
    var billingPaid = document.getElementById('billingPaid').checked ? 'Paid' : 'Not Paid';

    // Example: Displaying billing information in a list
    var billingItem = document.createElement('li');
    billingItem.textContent = 'Patient: ' + billingPatient + ', Amount: ' + billingAmount + ', Status: ' + billingPaid;
    document.getElementById('billingList').appendChild(billingItem);

    // Clear the form fields after recording billing
    document.getElementById('billingPatient').value = '';
    document.getElementById('billingAmount').value = '';
    document.getElementById('billingPaid').checked = false;
}

// Function to show/hide sections based on navigation
function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Display the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to show patient registration form
function showPatientForm() {
    var patientForm = document.getElementById('patientForm');
    if (patientForm.style.display === 'none') {
        patientForm.style.display = 'block';
    } else {
        patientForm.style.display = 'none';
    }
}

// Function to show doctor registration form
function showDoctorForm() {
    var doctorForm = document.getElementById('doctorForm');
    if (doctorForm.style.display === 'none') {
        doctorForm.style.display = 'block';
    } else {
        doctorForm.style.display = 'none';
    }
}
