var save_user_queriespreinscritos = data => {
    console.log(`INSERT INTO preinscritos VALUES ${data}`);
        return `INSERT INTO preinscritos (nombre, apellido, correo, telefono, curso) VALUES ${data}`;};
  exports.save_user_queriespreinscritos = save_user_queriespreinscritos; 
