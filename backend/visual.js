const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 4000;
app.use(cors())
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost', // Cambia si usas un servidor remoto
  user: 'root', // Usuario de tu base de datos
  password: 'Minguinai123', // Contraseña de tu base de datos
  database: 'On_tour' // Nombre de tu base de datos
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Conexión exitosa a MySQL desde Express!');
});

// Ejemplo de consulta
app.get('/cursos', (req, res) => {
  const query = 'SELECT * FROM Curso'; // Reemplaza con tu tabla
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error en la consulta');
    } else {
      res.json(results);
    }
  });
});
app.get('/cursos/:cursoid', (req, res) => {
  // Obtener el ID del curso de los parámetros de la URL
  const cursoid = req.params.cursoid;

  // Realizar una consulta a la base de datos con el ID del curso
  const query = 'SELECT * FROM Curso WHERE id = ?';

  // Suponiendo que ya tienes una conexión a la base de datos configurada
  db.query(query, [cursoid], (err, results) => {
    if (err) {
      console.error('Error al consultar el curso:', err);
      return res.status(500).json({ message: 'Error al consultar el curso' });
    }

    if (results.length === 0) {
      // Si no se encuentra el curso
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    // Si se encuentra el curso, devolver los resultados
    res.status(200).json({ curso: results[0] });
  });
});
app.get('/cursos/add'){
  
}
// Ruta para agregar actividades
app.post('/activities/add', (req, res) => {
  // Desestructurar datos del cuerpo de la solicitud
  const { act_nombre, act_Desc, act_img, act_amount, act_type} = req.body;

  // Validación de los datos recibidos
  if (!act_nombre || !act_Desc || !act_img || !act_amount || !act_type) {
    return res.status(400).json({ message: 'Faltan datos necesarios para agregar la actividad' });
  }

  // Consulta SQL para insertar datos en la tabla "actividad"
  const query = `INSERT INTO actividad (
    act_nombre,
    act_Desc,
    act_img,
    act_amount,
    act_type
    ) VALUES (?, ?, ?, ?, ?)`;

  // Ejecutar la consulta con los valores proporcionados en la solicitud
  db.query(query, [act_nombre, act_Desc, act_img, act_amount, act_type], (err, results) => {
    if (err) {
      console.error('Error al insertar la actividad:', err);
      return res.status(500).json({ message: 'Error al insertar la actividad', error: err.message });
    }

    // Responder con un mensaje de éxito
    res.status(200).json({ message: 'Actividad agregada exitosamente', data: results });
  });
});

app.get('/activities',(req,res)=>{
  const query = 'Select * from actividad'
  db.query(query,(err,results) =>{
    if(err){
      console.error('Error en la consulta:',err);
      res.status(500).send('Error en la consulta');
    }else{
      res.json(results);
    }
  })
})
// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
