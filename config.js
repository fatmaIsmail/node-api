
// // const config = {
//     //     // user: process.env.DB_USER,
//     //     // password: process.env.DB_PASSWORD,
//     //     server: process.env.DB_SERVER,
//     //     database: process.env.DB_NAME,
//     //     options: {
//         //         encrypt: true,
//         //         trustServerCertificate: true
//         //     }
//         // };
        
        
//         require("./file/dotenv.env").config(); 

// const sql = require('mssql');

// const config = {
//     server: process.env.DB_SERVER,
//     database: process.env.DB_NAME,
//     options: {
//         trustedConnection: true, // Enables Windows Authentication
//         enableArithAbort: true,
//         trustServerCertificate: true, // Useful for local development with self-signed certificates
//     }
// };

// async function connectToDatabase() {
//     try {
//       // Establish a connection to the SQL Server
//       await sql.connect(config);
//       console.log('Connected to SQL Server successfully!');
//     } catch (err) {
//       console.error('Connection failed:', err);
//     }
//   }
  
//   connectToDatabase();
    
    
//      module.exports = {config , connectToDatabase};






let tasks =[

  {id : "1",
  title : "task 1",
  decription :"task 1 ...."},

  {id : "2",
  title : "task 2",
  decription :"task 2...."}
  
  ]
  module.exports = { tasks };
