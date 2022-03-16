const express = require('express');
const app = express;
const PORT = process.env.PORT || 1377;


app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () =>{
    console.log('App running on port ' + PORT);

})