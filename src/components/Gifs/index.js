import axios from "axios";
import React, { useState } from "react";

export default function Gifs() {
  const [data, setData] = useState([]);

  const submitHandle = (event) => {
    event.preventDefault();
    axios
      .get("http://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "dc6zaTOxFJmzC",
          q: "mario",
          limit: 12,
        },
      })
      .then((response) => {
        setData(response.data.data);
      });
  };

  return (
    <div className="gif-container">
      <form onSubmit={submitHandle}>
        <div className="form-group">
          <input
            type="text"
            placeholder="masukkan link gif"
            className="form-control"
          />
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
      <div className="row">
        {data.map((dataList) => {
          return (
            <div key={dataList.id} className="col-md-4">
              <img src={dataList.images.original.url} className="gif-display" alt="gif"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
