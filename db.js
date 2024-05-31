const { Client } = require('pg');

// Connection information
const connectionConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'visitors',
    password: 'toor',
    port: 2005, 
};

// Create a new PostgreSQL client
const client = new Client(connectionConfig);

// Connect to the PostgreSQL database
client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
        // You can execute queries here
    })
    .catch(error => {
        console.error('Error connecting to PostgreSQL database:', error);
    });


  client.query('SELECT * FROM v',(result,error)=>{
    if (error) throw error;
    else
    console.log(result.rows);
  
  });


    module.exports = client;


