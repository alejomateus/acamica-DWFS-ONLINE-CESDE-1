const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3000;
app.use(helmet());
app.disable('x-powered-by');

// app.set('trust proxy', function (ip) {
//     //elejimos un rango de ip 
//     if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; 
//     else return false;
// });


// app.use(express.json({ limit: '100kb' }));

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutos
//     max: 100 // limita cada IP a 100 solicitudes por ventanas
// });

//Aplicamos el middleware para las restricciones
// app.use(limiter);
app.get('/api/action', function (req, res) {
    res.json(200, 'ok')
})
app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});

