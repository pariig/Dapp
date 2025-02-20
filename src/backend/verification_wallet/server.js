const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { ethers } = require("ethers");

const app = express();
app.use(cors());
app.use(express.json());

const users = {}; // Store nonce per user
const SECRET_KEY = process.env.JWT_SECRET || "your_fallback_secret";


// Generate nonce for the user
app.get("/api/auth/nonce", (req, res) => {
  const { address } = req.query;
  if (!address) return res.status(400).json({ error: "Address required" });

  const nonce = `Sign this message to log in: ${Math.random().toString(36)}`;
  users[address] = nonce;
  res.json({ nonce });
});

// Verify signed message
app.post("/api/auth/verify", async (req, res) => {
  const { address, signature } = req.body;
  const nonce = users[address];

  if (!nonce) return res.status(400).json({ error: "No nonce found" });

  try {
    const signerAddress = ethers.verifyMessage(nonce, signature);
    if (signerAddress.toLowerCase() === address.toLowerCase()) {
      const token = jwt.sign({ address }, SECRET_KEY, { expiresIn: "1h" });
      return res.json({ message: "Login successful", token });
    }
  } catch (error) {
    return res.status(400).json({ error: "Invalid signature" });
  }
  
  res.status(400).json({ error: "Verification failed" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
