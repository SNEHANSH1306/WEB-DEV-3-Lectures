const express = require('express');
const logger = require('./middleware/logger');
const studentRoutes = require('./routes/studentRoutes');


const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());
app.use('/api', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
