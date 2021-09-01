const express = require('express');
const apiRoutes=require('./routes/apiRoutes');
const htmlRoutes=require('./routes/htmlRoute');



const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

//Port to Listen 
app.listen(PORT, () =>
  console.log(`Example app listening at https://localhost:${PORT}`)
);