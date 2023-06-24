 const form = document.getElementById('contact-form');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const errorMessages = document.getElementsByClassName('error');

      function validateForm() {
        // Clear any existing error messages
        for (let i = 0; i < errorMessages.length; i++) {
          errorMessages[i].textContent = '';
        }

        let isValid = true;

        // Validate name field
        if (nameInput.value.trim() === '') {
          nameInput.nextElementSibling.textContent = 'Name is required';
          isValid = false;
        }

        // Validate email field
        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
        if (!emailPattern.test(emailInput.value)) {
          emailInput.nextElementSibling.textContent = 'Please enter a valid email address';
          isValid = false;
        }

        // Validate message field
        if (messageInput.value.trim() === '') {
          messageInput.nextElementSibling.textContent = 'Message is required';
          isValid = false;
        }

        return isValid;
      }

      form.addEventListener('submit', (event) => {
        // Prevent the form from submitting if it's invalid
        if (!validateForm()) {
          event.preventDefault();
        }
      });