import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail/CardDetail";

import "../components/CardDetail/CardDetail.css"; // Impor gaya CSS Card

export default function DetailFilm() {
  const [detailData, setDetailData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(
          `https://imdb8.p.rapidapi.com/title/get-details`,
          {
            params: { tconst: id },
            headers: {
              "X-RapidAPI-Key": "ac8c799208msh88d8923c96bf91ep117735jsn9e73a01444bc",
              "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
            },
          }
        );
        if (response.status === 200) {
          setDetailData(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      fetchDetailData();
    }
  }, [id]);

  return (
    <div>
      {detailData ? (
        <CardDetail data={detailData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
