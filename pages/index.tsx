import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [, setAccessToken] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;

    if (hash) {
      const splitToken = hash.split("=")[1].split("&")[0];

      axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            splitToken,
          {
            headers: {
              authorization: `token ${splitToken}`,
              accept: "application/json",
            },
          }
        )
        .then((data: any) => {
          setAccessToken(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const GOOGLE_CLIENT_ID: string = process.env
    .NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;

  const onClickGoogle = () => {
    window.location.assign(oAuthURL);
  };

  return <button onClick={onClickGoogle}>구글 로그인</button>;
}