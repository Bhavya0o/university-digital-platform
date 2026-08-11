const jwt = require("jsonwebtoken");

const JWT_SECRET = "mysecretkey"; // later move to .env

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader) {
            return res.json({
                success: false,
                message: "No token provided"
            });
        }

        // Format: Bearer TOKEN
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.json({
                success: false,
                message: "Invalid token format"
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded; // attach user data
        next();

    } catch (error) {
        return res.json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;