import { describe, expect, test } from "@jest/globals";
import googleOAuth from "./google";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", async () => {
    const token = {
      access_token:
        "ya29.a0Ael9sCNxJyaBGv_aBxUDqpE5_ACAhzf7ph2gn6Opux8rAJHZn4KBiE7zRyEPJSjgdwMXGRV2KBU0fiWTpB4v1jdbMiicucTLnMe0SHmJe_cvzqow5vaCsXV7IZpxTrGvG4jmglMA3LEYHyjKBfKomrNjZ6h5aCgYKASoSARASFQF4udJhE4s0U7INoH7xb-htWlIp7Q0163",
      expires_in: 3599,
      refresh_token: "1//03myUka8aaiYaCgYIARAAGAMSNwF-L9Ir6Vc3UzhFVqMO2B9Dyt-kXJqdK9DEnmAU3jFjwdUga78ShbvnW3Dt1FxGj6BSbY6vzfc",
      scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
      token_type: "Bearer",
      id_token:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjZGEzNjBmYjM2Y2QxNWZmODNhZjgzZTE3M2Y0N2ZmYzM2ZDExMWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDgxNjU3OTY3OTQtNzJsNnYxM2F2YTVodWc2YWVhcmFodDdyMTJ1bXJzdnEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxMDgxNjU3OTY3OTQtNzJsNnYxM2F2YTVodWc2YWVhcmFodDdyMTJ1bXJzdnEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTEwMDgwMTIzOTg4MzcwMDgyMDkiLCJlbWFpbCI6InZhbnp5bGkxMDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJwcnMzMW9KdzhMY2g3d2xaalpGTWRnIiwibmFtZSI6IklhbiB2YW4gWnlsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGFMTzh4OExRcm1ZWnk1VndTbzBGQldPdk5jV3FWRUtnMUVQR0lDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IklhbiIsImZhbWlseV9uYW1lIjoidmFuIFp5bCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjgwNjgyNjEwLCJleHAiOjE2ODA2ODYyMTB9.Z0_NwKjCAqnEIYBVNNQ71T5xwSSULPlNo83qddHBTdWEhu-hFwgW2qu5woyL2THz_Gd-9ho8blpm1sdi8UWvnzxga5V1pEE6j-FZ-W5FBLgnuPoYjPRx44zv5IcO-R7tCYkV473HWQhTVrdVDYN1zkUDuu9GAcfiqZ7Ko4l5QSuCTjfmNo0KAOJugPbMiEgCd-37fN9M57r8cCUTZQOia3nQgRSJcoK44wdIEBuqBOLtHCwTkPCSH8bMQyK1CySnuk-8Q_NXGDU9cfpzHmvwcwzjokWtEdjpDvthAmpPcxX75UEc1Od29E6olpPR945mpyfjTp5bb-P40GrDnIOFcQ",
    };

    const resp = await googleOAuth.verifyJWT(token.id_token);
  });
});
