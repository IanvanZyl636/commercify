import axios from "axios";
import querystring from "querystring";
import jwt from "jsonwebtoken";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo";
const GOOGLE_PUBLIC_KEYS_URL = "https://www.googleapis.com/oauth2/v3/certs";

const SCOPES = ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"];

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_SECRET;
const REDIRECT_URI = process.env.GOOGLE_OAUTH_REDIRECT_URL;

function getAuthUrl(): string {
  const params = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(" "),
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
  };
  const query = querystring.stringify(params);
  return `${GOOGLE_AUTH_URL}?${query}`;
}

async function getToken(code: string): Promise<any> {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  };
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const response = await axios.post(GOOGLE_TOKEN_URL, querystring.stringify(data), { headers });

  return response.data;
}

async function getUserInfo(accessToken: string): Promise<any> {
  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await axios.get(GOOGLE_USERINFO_URL, { headers });
  return response.data;
}

async function verifyJWT(accessToken: string) {
  try {
  } catch (error) {
    throw error;
  }
}

const googleOAuth = { getAuthUrl, getToken, getUserInfo, verifyJWT };

export default googleOAuth;
