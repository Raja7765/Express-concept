const cors = require('cors');

const configureCors = () => {
    return cors({
        origin: (origin, callback) => {
            const allowedOrigins = [
                'http://localhost:3000',
                'https://yourcustomdomain:3000' // production domain
            ];

            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },

        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept-Version'
        ],
        exposedHeaders: ['X-Total-Count', 'Content-Range'],
        credentials: true, // enable support for cookies
        preflightContinue: false,
        maxAge: 600,
        optionsSuccessStatus: 204
    });
};

module.exports = { configureCors };
