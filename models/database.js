// dependencies
var mysql = require('mysql');
var queries = require('./queries');
// run query to db
var dbConfig = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
};

var runQuery = function(Query,Data,callback){
   var connection = mysql.createConnection(dbConfig);
   connection.connect(function(err) {
      if (err) throw err;
   });
   
   connection.query(Query,Data,function(err, res){
         if (err) throw err;
         if (callback){
            callback(res);
         }
      }
   );
        connection.end();
}

// module
var DB = function(config){
   config = config || {};
}

// Authentication


// Users-Admin
// DB.prototype.list_users_admin = function(data,callback){
//    var Query = queries.list_users_querieadmin;
//    var Data  = [data];
//    runQuery(Query,Data,function(res){
//       callback(res);
//    });
// }
DB.prototype.save_users_preinscritos = function(datacliente,data,callback){
   var Query = queries.save_user_queriespreinscritos(datacliente);
   var Data  = [data];
   runQuery(Query,Data,function(res){
      callback(res);
   });
}
// DB.prototype.edit_users_admin = function(data,dni,callback){
//    var Query = queries.edit_user_queriesadmin(dni);
//    var Data  = [data];
//    runQuery(Query,Data,function(res){
//       callback(res);
//    });
// }
// DB.prototype.update_users_admin = function(data,newcustomer,dni,callback){
//    var Query = queries.update_user_queriesadmin(newcustomer,dni);
//    var Data  = [data];
//    runQuery(Query,Data,function(res){
//       callback(res);
//    });
// }
// DB.prototype.delete_users_admin = function(data,dni,callback){
//    var Query = queries.detele_user_queriesadmin(dni);
//    var Data  = [data];
//    runQuery(Query,Data,function(res){
//       callback(res);
//    });
// }
// DB.prototype.listsave_alarmas_admin = function(data,id,callback){
//    var Query = queries.listsave_alarmas_adminquerie(id);
//    var Data  = [data];
//    runQuery(Query,Data,function(res){
//       callback(res);
//    });
// }




module.exports = DB;