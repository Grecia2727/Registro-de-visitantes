function sendMail(){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
        'message': {
          "html": "<p>Example HTML content otro</p>",
          "text": "Example text content",
          "subject": "otro subject",
          "from_email": "lucero.g@laboratoria.la",
          "from_name": "Cliente Registrado",
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