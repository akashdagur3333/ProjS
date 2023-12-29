const db = require("./database");
// Perform a query
const Query = async (QueryData, value) => {
  try {
    const data = await new Promise((resolve, reject) => {
      db.query(QueryData, value, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
          return;
        }
        resolve(results);
      });
    });
    return data;
  } catch (error) {
    console.error("Error in Query function:", error);
    throw error;
  }
};

// Process the results here

// Close the connection
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing connection:', err);
//   } else {
//     console.log('Connection closed successfully.');
//   }
// });

module.exports = Query;
