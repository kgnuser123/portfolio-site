document.getElementById('mainContactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Data collect karna
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Yahan aap apna backend API call (Fetch/Axios) laga sakte hain
    console.log("Form Submitted:", formData);

    alert('Thank you! Your message has been sent successfully.');
    
    // Form clear karna
    this.reset();
});