
{/*spotyfi id = a2a7bc11bf074bdf94535cb0bf930795*/}
class ThirdPartyApi {
  constructor(url) {
    this._url = url;
    this._token = "a2a7bc11bf074bdf94535cb0bf930795";
  }

  setToken(token) {
    this._token = token;
  }

  async getFetchData(artistId) {
    const url = `${this._url}/${artistId}`;

    try {
      const res = await fetch(`${this._url}home`, {
        headers: {
          authorization: this._token || `Bearer ${this._token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching artist data", error);
      throw error;
    }
  }
}

const thirdpartyapi = new ThirdPartyApi("https://thirdpartyapi.spotify.com/v1/artists/{id}");

export default thirdpartyapi;


