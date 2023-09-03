const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'))
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Envia el archivo index.html ubicado en la raíz del proyecto
    res.sendFile(path.join(__dirname, '../index.html'));
  });

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});