import fetch from 'isomorphic-unfetch';

const res = await fetch('http://localhost:4444/login2', {
  credentials: 'include', // Incluye la cookie en la cabecera
});

const data = await res.json();