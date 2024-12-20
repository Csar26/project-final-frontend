{
  /*spotyfi id = a2a7bc11bf074bdf94535cb0bf930795*/
}
class ThirdPartyApi {
  constructor(url, { clientId, clientSecret }) {
    this._url = url;
    this._clientId = clientId;
    this._clientSecret = clientSecret;
  }

  setToken(token) {
    this._token = token;
  }

  generateToken() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "__Host-device_id=AQCJvakZ00Fn3B_F6xgedAwvcDbM2eI82GaXYyJPHoA8YTwv4XTM5-rePCalY96avcB_hHySheQ8cqbqg-DHt8vH1Jlv_hJVUHo"
    );
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", this._clientId);
    urlencoded.append("client_secret", this._clientSecret);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("spotify-token", result.access_token);
      })
      .catch((error) => console.error(error));
  }
  search(query) {
    const token = localStorage.getItem("spotify-token");
    return fetch(`${this._url}search?q=${query}&type=artist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json());
  }
}

const thirdpartyapi = new ThirdPartyApi("https://api.spotify.com/v1/", {
  clientId: "a2a7bc11bf074bdf94535cb0bf930795",
  clientSecret: "fb576819019841cfb0ecfe9817b1aeeb",
});

export default thirdpartyapi;

