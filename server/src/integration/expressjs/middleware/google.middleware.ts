import jwt from "jsonwebtoken";
import axios from "axios";
import { NextFunction, Request, Response } from "express";

const GOOGLE_PUBLIC_KEYS_URL = "https://www.googleapis.com/oauth2/v3/certs";

const verifyGoogleAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const accessToken = authHeader.substring(7); // Remove "Bearer " prefix

  try {
    // Fetch Google OAuth 2 public keys
    const { data } = await axios.get<{ keys: jwt.JwtHeader[] }>(GOOGLE_PUBLIC_KEYS_URL);
    const publicKeys = data.keys.reduce((keys: any, key) => {
      if (!key.kid) {
        return {};
      }

      keys[key.kid] = key;
      return keys;
    }, {});

    // Verify access token
    const decoded = jwt.verify(accessToken, publicKeys, {
      algorithms: ["RS256"],
      audience: "your-google-oauth2-client-id",
    }) as jwt.JwtPayload;

    // // Set the authenticated user on the request object
    // req.user = {
    //   id: decoded.sub!,
    //   name: decoded.name!,
    //   email: decoded.email!,
    // };

    next();
  } catch (err) {
    console.error("Error verifying access token:", err);
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default verifyGoogleAccessToken;
