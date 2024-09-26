document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Obtener las credenciales almacenadas en localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    // Comparar las credenciales ingresadas con las almacenadas
    if (username === storedUsername && password === storedPassword) {
        // Redirigir a la página deseada
        window.location.href = 'indexButtons.html';
    } else {
        alert('Credenciales incorrectas');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    // Almacenar las credenciales en localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    
    // Limpiar los campos del formulario de registro
    document.getElementById('registerForm').reset();
    
    // Alternar a la vista de login
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});