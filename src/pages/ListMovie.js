// ListMovie.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function ListMovie() {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("Marvel");
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://imdb8.p.rapidapi.com/auto-complete",
          {
            params: { q: query },
            headers: {
              "X-RapidAPI-Key": "ac8c799208msh88d8923c96bf91ep117735jsn9e73a01444bc",
              "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (!isLoaded) {
      fetchData(query);
    }
  }, [isLoaded, query]);

  const onSearch = (e) => {
    if (e.key === "Enter") {
      setIsLoaded(false);
      setQuery(e.target.value);
    }
  };

  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Cari film berdasarkan judul"
        onKeyDown={(e) => onSearch(e)}
      />
      <h3 className="title">Pencarian : {query}</h3>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.d.map((item, index) => (
            // Tambahkan Link ke halaman detail di sekitar Card
            <Link to={`/detail/${item.id}`} key={index}>
              <Card data={item} onClick={() => handleClick(item)} />
            </Link>
          ))}
        </div>
      )}
      <Modal
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />
    </main>
  );
}
