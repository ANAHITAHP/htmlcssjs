document.getElementById('validationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');


  messageElement.textContent = '';
  messageElement.className = 'message';


  if (username.length < 5) {
      messageElement.textContent = "Username must be at least 5 characters long.";
      messageElement.classList.add('error');
      return;
  }


  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      messageElement.textContent = "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
      messageElement.classList.add('error');
      return;
  }

  messageElement.textContent = " Form submitted successfully! ";
  messageElement.classList.add('success');
});