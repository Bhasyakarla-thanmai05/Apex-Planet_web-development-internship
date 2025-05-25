document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      if (!form.checkValidity()) {
        formMessage.textContent = 'Please fill out all required fields correctly.';
        formMessage.style.color = 'red';
        return;
      }

      formMessage.textContent = 'Sending...';
      formMessage.style.color = 'black';

      setTimeout(() => {
        formMessage.textContent = 'Thank you for contacting me! I will get back to you soon.';
        formMessage.style.color = 'green';
        form.reset(); // Clear the form
      }, 1500);
    });
  }
});
