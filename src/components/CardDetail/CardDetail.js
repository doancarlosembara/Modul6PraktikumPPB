// CardDetail.js
import React from "react";
import "./CardDetail.css";


const CardDetail = ({ data }) => {
  return (
    <div className="cardDetail">
      <h3>{data.title}</h3>
      {data.image && data.image.url && (
        <img src={data.image.url} alt={data.title} />
      )}
      {data.runningTimeInMinutes && (
        <p>Durasi: {data.runningTimeInMinutes} menit</p>
      )}
      {data.numberOfEpisodes && (
        <p>Jumlah Episode: {data.numberOfEpisodes}</p>
      )}
      {data.seriesStartYear && <p>Tahun Mulai: {data.seriesStartYear}</p>}
      {data.seriesEndYear && <p>Tahun Selesai: {data.seriesEndYear}</p>}
      {/* ... tambahkan tampilan untuk properti lainnya sesuai kebutuhan */}
    </div>
  );
};

export default CardDetail;
