const JWT = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.error('Auth Failed: No token provided or invalid format');
        return res.status(403).json({ message: 'Auth Failed: No token provided or invalid format' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const payload = JWT.verify(token, process.env.JWTCODE);
        req.user = { userId: payload.userId };
        next();
    } catch (error) {
        console.error('Auth Failed: Invalid token', error);
        res.status(401).json({ message: 'Auth Failed: Invalid token' });
    }
};

module.exports = auth;
