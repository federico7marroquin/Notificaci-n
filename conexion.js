
const { Pool } = require("pg")

const pool = new Pool({
    user: "federico",
    host: "database-2.cjrwmnawywri.us-east-1.rds.amazonaws.com",
    database: "smartsolutions",
    password: "smartsolutions",
    port: 5432,
  });

 var res; 

  const getUsers = async () => {
      try {
            res = await pool.query('SELECT correo  from usuario_usuario')
            let nn = res.rows
            for(var nnn in  nn){
                console.log(nn[nnn].value);
            }
            for( var nuevo in res.rows){
                console.log(res.rows[nuevo].correo);

            }
            


      }
      catch(e){
          console.log("hola: "+ e)
      }
  }

  getUsers();