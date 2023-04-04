const googleOAuthBaseUrl = "https://accounts.google.com/o/oauth2/v2/auth";

const googleOAuthUrl =
  `${googleOAuthBaseUrl}` +
  `?client_id=${process.env.GOOGLE_OAUTH_CLIENT_ID}` +
  `&redirect_uri=${process.env.GOOGLE_OAUTH_CLIENT_ID}` +
  `&response_type=code` +
  `&state=state_parameter_passthrough_value` +
  `&scope=https://www.googleapis.com/auth/drive.file` +
  `&prompt=consent` +
  `&include_granted_scopes=true`;
