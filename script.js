document.addEventListener('DOMContentLoaded', function () {
const enviarBtn = document.getElementById('enviarBtn');


enviarBtn.addEventListener('click', function () {

  const formData = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    fechaNacimiento: document.getElementById('fechaNacimiento').value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };

  fetch('https://jsonplaceholder.typicode.com/users', options)
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
});