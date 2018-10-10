function sendEmailMandrill(extraerDatavisitator){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": `<div>
          <p>Estimado colaborador, te comunicamos que el cliente ${extraerDatavisitator.name} , 
          de la empresa ${extraerDatavisitator.company}, desea reunirse contigo en este instante. 
         Por favor, comunicate con el área de Recepción para confirmar su ingreso o al numero ${extraerDatavisitator.celular} del cliente.</p>
         Atte.
         Empresa Co-Working
         </div>`,

          "text": "Example text content",
          "subject": `Visita de ${extraerDatavisitator.name}`,
          "from_email": "lucero.g@laboratoria.la",
          "from_name": "Registro de visitantes",
          "to": [
              {
                  "email": "gutierrezanicamalucero@gmail.com",
                  "name": "Grecia G.A.",
                  "type": "to"
              }
          ],
          "headers": {
              "Reply-To": "gutierrezanicamalucero@gmail.com"
          }
          
      },
      "async": false,
      "ip_pool": "Main Pool",
      "send_at": "2018-10-10 10:00:00"
      }
    });
  }