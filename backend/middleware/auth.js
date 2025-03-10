import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Expecting "Bearer <token>"
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    console.log("Token", token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach userId to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default auth