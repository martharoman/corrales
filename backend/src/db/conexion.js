import sql from 'mssql';

const dbconfig = {
    user: 'corrales',
    password: 'pacochato',
    server: '127.0.0.1',
    database: 'Uno',
    options: {
        encrypt: false, // true for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
};

async function getConnection() {
    try {
        const pool = await sql.connect(dbconfig);
        //const result = await pool.request().query("select * from usuarios");
        //console.log(result);
        return pool;
    } catch (err) {
        console.log(err);
    }
};

getConnection();