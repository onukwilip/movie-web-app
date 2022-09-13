/*import React, { useState } from "react";
import { trending } from "../../dummyData";
import "./trending.css";
import Home from "./../homes/Home";

const Trending = () => {
  const [items, setItems] = useState(trending);
  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
};

export default Trending;*/
import React, { useState } from "react";
import { trending } from "../../dummyData";
import Home from "../homes/Home";
import "./style.css";
import "../homes/home.css";

const Trending = () => {
  const [items, setItems] = useState(trending);
  return (
    <>
      <section className="trending">
        <Home items={items} />
      </section>
    </>
  );
};

export default Trending;
