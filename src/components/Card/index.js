// index.js
import React from "react";
import "./index.css";
export default function index({ data, onClick }) {
return (
<div className="card" onClick={onClick}>
{data ? (
<>
<figure>
            {data.i && data.i.imageUrl ? (
              <img src={data.i.imageUrl} alt={data.l} />
            ) : (
              <p>Gambar tidak tersedia</p>
            )}
          </figure>

<div className="card-info">
<h3>{data.l}</h3>
<p>{data.q}</p>

</div>
</>
) : (
<p>Loading...</p>
)}
</div>
);
}