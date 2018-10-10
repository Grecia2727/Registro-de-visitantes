function sendEmailMandrill(extaerDatavisitator){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": `<p> Hoy ${extaerDatavisitator.date} a las ${extaerDatavisitator.hour} se Registró la
                   visita de ${extaerDatavisitator.name}.
                   Esta persona te está esperando, en este preciso instante.
                   comunicate con el cliente llamandolo a su número de celular ${extaerDatavisitator.celular}.
                   Atte.
                   Empresa Co-working
                   </p>`,
          "text": "Quedamos a la espera de tu confirmación, para recibir la visita",
          "subject": `Visita de ${extaerDatavisitator.name}`,
          "from_email": "lucero.g@laboratoria.la",
          "from_name": "Visita Registrada",
          "to": [
              {
                  "email": "gutierrezanicamalucero@gmail.com",
                  "name": "Recipient Name",
                  "type": "to"
              }
          ],
          "headers": {
              "Reply-To": "gutierrezanicamalucero@gmail.com"
          }
          
      },
      "async": false,
      "ip_pool": "Main Pool",
      "send_at": "2018-08-06 10:00:00"
      }
    });
  }