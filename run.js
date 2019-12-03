// server.js

const express = require('express')
const app = express()
const http = require('http').Server(app)
const nodemailer = require("nodemailer");


//base de datos

const { Pool } = require("pg")

const pool = new Pool({
    user: "federico",
    host: "database-2.cjrwmnawywri.us-east-1.rds.amazonaws.com",
    database: "smartsolutions",
    password: "smartsolutions",
    port: 5432,
  });


  const getUsers = async () => {
      try {
            res = await pool.query('SELECT correo from usuario_usuario')
            console.log(res.rows);
            for(var correo in res.rows){

           
            transporter.sendMail(selectMail(res.rows[correo].correo), function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("El mensaje se ha enviado: " + info.response);
                }
            });
        }      
      }
      catch(e){
          console.log("hola: "+ e)
      }
  }

//base de datos


app.use('/style', express.static(__dirname + '/style'));
app.get('/', (req, res) => res.sendFile(__dirname + '/base.html'));

app.get('/subscripcion', (req, res) => {
    getUsers();
});

//app.get('/subscripcion', (req, res) => {
    //res.sendFile(__dirname + '/base.html');
 //   alert("Se ha suscrito satisfactoriamente al boletín de Antusu!")
 //   sendMessage();
//});

//smartsolutions2503@gmail.com
//contraseña

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smartsolutions2503@gmail.com',
        pass: 'elmejorgrupo123'

    }
});

const options = {
    from: 'smartsolutions2503@gmail.com',
    to: 'f.marroquin10@uniandes.edu.co',
    subject: 'prueba Node.js',
    text: 'Haz sido suscrito exitosamente al boletín de noticias de Antusu - Smart Solutions'
}
function selectMail(mail) {
    return {
        from: 'smartsolutions2503@gmail.com',
        to: mail,
        subject: 'prueba Node.js',
        text: 'Hola, tenemos una nueva recomendación para ti", ven a visitarnos :3'
    }
}

function sendMessages(mails) {
    mails.forEach(function (mail) {
        transporter.sendMail(selectMail(mail), function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("El mensaje se ha enviado: " + info.response);
            }
        });
    });
}


function sendMessage() {
    transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("El mensaje se ha enviado: " + info.response);
        }
    });
}



http.listen(8000, () => {
    console.log('listening on port 8000');
});
