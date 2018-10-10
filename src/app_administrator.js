
// // Inicio de sesión de usuario/administrator existente
// let login = (email, password) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .catch((error) => {
//         let errorCode = error.code;
//         let errorMessage = error.message;
//         if (error.message === 'The password is invalid or the user does not have a password.') {
//           validInputs2.innerHTML = "email o password incorrectos";
//         } else if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
//           validInputs2.innerHTML = "Usuario no registrado";
//         }
//       });
//   }

//   // Validación de autenticación de usuarios
// const validation = () => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         let displayName = user.displayName;
//         let email = user.email;
//         let emailVerified = user.emailVerified;
//         let photoURL = user.photoURL;
//         let isAnonymous = user.isAnonymous;
//         let uid = user.uid;
//         let providerData = user.providerData;
//       }
//       if (user.emailVerified) {
//         // window.location.href = 'timeline.html';
//         alert('Bienvenido administrador, te logueaste correctamente')
//       } else {
//         alert('Por favor valida tu correo');
//       }
//     });
//   }


