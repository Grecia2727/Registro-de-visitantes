// Conectanto ID del HTML con el JS;
const registerVisitatorButton = document.getElementById('register-Visitator-Button');
const registerAdministratorButton = document.getElementById('register-Administrator-Button');
const registerVisited = document.getElementById('register-visited');
const registerAdmin = document.getElementById('register-admin');
const registerVisitor = document.getElementById('register-visitor');
const adminChoose = document.getElementById('admin-choose');
const loginAdmin = document.getElementById('login-admin');

// Botones al ingresar
const visitorButton = document.getElementById('visitor-Button');
const adminButton = document.getElementById('admin-Button');
const registerChoose = document.getElementById('register-choose');

// otros botones y secciones del HTML
const validInputs2 = document.getElementById('valid-inputs2');
const emailLogin = document.getElementById('email-admin-login');
const passwordLogin = document.getElementById('password-admin-login')
const loginButton = document.getElementById('loginButton');
const newRegisterAdminButton = document.getElementById('newRegisterAdmin-Button');
const newLoginAdminButton = document.getElementById('newLoginAdmin-Button');
const vistaReporteVisitantes = document.getElementById('vista-reporte-visitantes');
const publications = document.getElementById ('publications');

// Boton como Visitante
visitorButton.addEventListener('click', () => {
  registerVisitor.classList.replace('none', 'block');
  registerAdmin.classList.replace('block', 'none');
  adminChoose.classList.replace('block', 'none');
  loginAdmin.classList.replace('block', 'none');
  registerChoose.classList.replace('block', 'none');
  vistaReporteVisitantes.classList.replace('block', 'none');
})

// Boton como Administrador
adminButton.addEventListener('click', () => {
  adminChoose.classList.replace('none', 'block');
  registerVisitor.classList.replace('block', 'none');
  registerAdmin.classList.replace('block', 'none');
  loginAdmin.classList.replace('block', 'none');
  registerChoose.classList.replace('block', 'none');
  vistaReporteVisitantes.classList.replace('block', 'none');
})

// Boton Registrar nuevo administrador
newRegisterAdminButton.addEventListener('click', () => {
  registerVisitor.classList.replace('block', 'none');
  registerAdmin.classList.replace('none', 'block');
  adminChoose.classList.replace('block', 'none');
  loginAdmin.classList.replace('block', 'none');
  registerChoose.classList.replace('block', 'none');
  vistaReporteVisitantes.classList.replace('block', 'none');
})

// Boton Loguearse como Administrador
newLoginAdminButton.addEventListener('click', () => {
  registerVisitor.classList.replace('block', 'none');
  registerAdmin.classList.replace('block', 'none');
  adminChoose.classList.replace('block', 'none');
  loginAdmin.classList.replace('none', 'block');
  registerChoose.classList.replace('block', 'none');
  vistaReporteVisitantes.classList.replace('block', 'none');
})

// Boton: Ingresa (Administrador ingresa con su password y usuario)
loginButton.addEventListener('click', () => {
  // e.preventDefault(); ...se usa cuando el botón es button y no es input.
  const emailAdminLogin = document.getElementById('email-admin-login').value;
  const passwordAdminLogin = document.getElementById('password-admin-login').value;
  if (emailAdminLogin === 'grecia@gmail.com' && passwordAdminLogin === 'grecia@gmail.com') {
    registerVisitor.classList.replace('block', 'none');
    registerAdmin.classList.replace('block', 'none');
    adminChoose.classList.replace('block', 'none');
    loginAdmin.classList.replace('block', 'none');
    registerChoose.classList.replace('block', 'none');
    vistaReporteVisitantes.classList.replace('none', 'block');
  }

  else if (emailAdminLogin === '123' && passwordAdminLogin === '123') {
    registerVisitor.classList.replace('block', 'none');
    registerAdmin.classList.replace('block', 'none');
    adminChoose.classList.replace('block', 'none');
    loginAdmin.classList.replace('block', 'none');
    registerChoose.classList.replace('block', 'none');
    vistaReporteVisitantes.classList.replace('none', 'block');
  }
  else {
    alert('Los datos ingresados no son válidos')
  }
});


// Guardo datos del Registro del Administrador en Firebase
registerAdministratorButton.addEventListener('click', () => {
  const nameAdmin = document.getElementById('name-admin').value;
  const celularAdmin = document.getElementById('celular-admin').value;
  const emailAdmin = document.getElementById('email-admin').value;
  const passwordAdmin = document.getElementById('password-admin').value;
  console.log(nameAdmin, celularAdmin, emailAdmin, passwordAdmin);
  const data = firebase.database().ref().child('administrator');
  data.push({
    nameAdmin: nameAdmin,
    celularAdmin: celularAdmin,
    emailAdmin: emailAdmin,
    password: passwordAdmin
  })
  alert("Estimado colaborador su Registro fue exitoso")
})


// Imprimir la foto del visitante
const printData = (url) =>{
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('class', 'img-fluid');
}


window.onload = inicializar;
  var formVisitante;
  var refMostrarVisitante;
  var tbodyTablaVisitante;
  const ref = firebase.database().ref("visitator");
  ref.on("child_added", snap => {
    printData(snap.val().name, snap.val().celular, snap.val().aQuienVisita, snap.val().company, snap.val().photo, snap.val().date, snap.val().hour, publications);
  })


  function inicializar(){
    tbodyTablaVisitante = document.getElementById("tbody-tabla-visitante");
    refMostrarVisitante = firebase.database().ref().child("visitator");
    mostrarvisitantesDeFirebase();
  }

const mostrarvisitantesDeFirebase = () => {
  refMostrarVisitante.on("value", function(snap){
    let datos = snap.val();
    filasAMostrar="";
    for(var key in datos){
      filasAMostrar +="<<tr>" +
                        "<td>" + datos[key].aQuienVisita +  "</td>"  +
                        "<td>" + datos[key].celular +  "</td>"  +
                        "<td>" + datos[key].company +  "</td>"  +
                        "<td>" + datos[key].name +  "</td>"  +
                        "<td>" + datos[key].date +  "</td>"  +
                        "<td>" + datos[key].hour +  "</td>"  +
                        "<td>" + "<img src=photo>" +  "</td>"  +
                        "<td> </td>"  +
                      "<tr>";
    }
    tbodyTablaVisitante.innerHTML = filasAMostrar;
  })
}

