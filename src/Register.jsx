import React from 'react';

function Register(props) {
  const saveUserData = () => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirm_password = document.querySelector('input[name="confirm_password"]').value;

    // Add validation to ensure password and confirm_password match
    if (password !== confirm_password) {
      alert('Password and Confirm Password do not match.');
      return;
    }

    // Save user registration data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to the login page
    alert('Registration successful! You can now log in.');
    window.location.href = '/login.html';
  }

  return (
    <div className="container">
      <div className="text">Registration</div>
      <form onSubmit={(e) => { e.preventDefault(); saveUserData(); }}>
        <div className="data">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="data">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="data">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="data">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password" />
        </div>

        <div className="btn">
          <button type="submit">Register</button>
        </div>
        <div className="signup-link">
          Already a member?{' '}
          <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

