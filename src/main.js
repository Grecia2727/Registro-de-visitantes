// Conectanto ID del HTML con el JS
const registerVisitatorButton = document.getElementById('register-Visitator-Button');
const registerAdministratorButton = document.getElementById('register-Administrator-Button');
const registerVisited = document.getElementById('register-visited');
const registerAdmin = document.getElementById('register-admin');
const registerVisitor = document.getElementById('register-visitor');

const formVisitante = document.getElementById('form-visitante');
const formAdministrator = document.getElementById('form-administrador');
 

// Botones al ingresar
const visitorButton = document.getElementById('visitor-Button');
const adminButton = document.getElementById('admin-Button');
const registerChoose = document.getElementById('register-choose');


// Boton como Visitante
visitorButton.addEventListener('click', () => {
  formVisitante.classList.replace('none','block');
  formAdministrator.classList.add('none');
})

// Boton como Administrador
adminButton.addEventListener('click', () => {
  formAdministrator.classList.remove('none');
  formAdministrator.classList.add('block');
  formVisitante.classList.replace('block', 'none');
})


// Registrar datos del visitante en Firebase
registerVisitatorButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const celular = document.getElementById('celular').value;
  const aQuienVisita = document.getElementById('a-quien-visita').value;
  const company = document.getElementById('company').value;

  console.log(name.value);
  console.log(company);
  const data = firebase.database().ref().child('visitator');
  data.push({
    name: name,
    celular: celular,
    aQuienVisita: aQuienVisita,
    company: company,
    // foto: dataURL,
  })
  // console.log(name);
  alert("Estimado visitante su Registro fue exitoso")
})


// Registrar datos del Administrador en Firebase
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
 

function sendMail(){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
      'message': {
        "html": "<p>Example HTML content otro</p>",
        "text": "Buenos días, deseo reunirme contigo en este instante. Saludos",
        "subject": "reservar visita",
        "from_email": "cliente.g@laboratoria.la",
        "from_name": "Cliente de ejemplo",
        "to": [
            {
                "email": "gutierrezanicamalucero@gmail.com",
                "name": "Grecia Gutierrez",
                "type": "to"
            }
        ],
        "headers": {
            "Reply-To": "gutierrezanicamalucero@gmail.com"
        }
        
    },
    "async": false,
    "ip_pool": "Main Pool",
    "send_at": "2018-10-06 10:00:00"
    }
  });
}




// Modal de Boton Visitante
$('#exampleModalVisitante').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// Modal de Boton Administrador
$('#exampleModalAdministrador').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('#exampleModalVisitante').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
