const date = new Date().getDate() + 'day ' + new Date().getMonth() + 'month ' + new Date().getFullYear() + 'year ';
const hour = new Date().getHours() + 'h ' + new Date().getMinutes() + 'min ' + new Date().getSeconds() + 'sec';



// Guardo datos del Registro del visitante en Firebase
registerVisitatorButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const celular = document.getElementById('celular').value;
  const aQuienVisita = document.getElementById('a-quien-visita').value;
  const company = document.getElementById('company').value;

  // Capturando foto del Visitante quien registra visita
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL();
  console.log(dataURL);

  console.log(name.value);
  console.log(company.value);
  const data = firebase.database().ref().child('visitator');
  data.push({
    name: name,
    celular: celular,
    aQuienVisita: aQuienVisita,
    company: company,
    photo: dataURL,
    date: date,
    hour: hour,
  })
  alert("Estimado visitante su Registro fue exitoso")

  let ref = firebase.database().ref('/visitator');
  ref.once('value', (data) => {
    data.forEach(visitator => {
      let visitor = visitator.key,
        extraerDatavisitator = visitator.val();
      sendEmailMandrill(extraerDatavisitator);
    })
  })
})




