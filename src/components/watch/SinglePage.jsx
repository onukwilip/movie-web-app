import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../dummyData";
import Upcomming from "../Upcomming/Upcomming";
import "./style.css";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [rec, setRec] = useState(recommended);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span>| {item.time} |</span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi voluptatibus id necessitatibus temporibus, aperiam hic
                  totam aspernatur voluptatem sequi maxime ex porro earum
                  doloribus tempore est quam. Corrupti sequi ducimus excepturi
                  earum ipsam possimus officia iure odit minima, expedita
                  consequatur pariatur porro repudiandae qui natus reiciendis
                  obcaecati suscipit vero inventore quas accusantium sunt eos
                  impedit odio? Quisquam doloribus temporibus fuga harum
                  voluptas. Corporis voluptas exercitationem aliquid fuga
                  officia hic iusto iure cum, molestias, beatae a recusandae
                  minus veniam! Illo placeat aliquam odio voluptate ex tempora
                  saepe obcaecati laudantium, facere consectetur sequi quia
                  facilis distinctio sint quod eveniet vel nulla quasi.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi voluptatibus id necessitatibus temporibus, aperiam hic
                  totam aspernatur voluptatem sequi maxime ex porro earum
                  doloribus tempore est quam. Corrupti sequi ducimus excepturi
                  earum ipsam possimus officia iure odit minima, expedita
                  consequatur pariatur porro repudiandae qui natus reiciendis
                  obcaecati suscipit vero inventore quas accusantium sunt eos
                  impedit odio? Quisquam doloribus temporibus fuga harum
                  voluptas. Corporis voluptas exercitationem aliquid fuga
                  officia hic iusto iure cum, molestias, beatae a recusandae
                  minus veniam! Illo placeat aliquam odio voluptate ex tempora
                  saepe obcaecati laudantium, facere consectetur sequi quia
                  facilis distinctio sint quod eveniet vel nulla quasi.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi voluptatibus id necessitatibus temporibus, aperiam hic
                  totam aspernatur voluptatem sequi maxime ex porro earum
                  doloribus tempore est quam. Corrupti sequi ducimus excepturi
                  earum ipsam possimus officia iure odit minima, expedita
                  consequatur pariatur porro repudiandae qui natus reiciendis
                  obcaecati suscipit vero inventore quas accusantium sunt eos
                  impedit odio? Quisquam doloribus temporibus fuga harum
                  voluptas. Corporis voluptas exercitationem aliquid fuga
                  officia hic iusto iure cum, molestias, beatae a recusandae
                  minus veniam! Illo placeat aliquam odio voluptate ex tempora
                  saepe obcaecati laudantium, facere consectetur sequi quia
                  facilis distinctio sint quod eveniet vel nulla quasi.
                </p>
              </div>
              <div className="social">
                <h3>Share : </h3>
                <img
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="Facebook Icon"
                />
                <img
                  src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"
                  alt="Twitter Icon"
                />
                <img
                  src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
                  alt="Linkedin Icon"
                />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Recommended Movies" />
        </>
      ) : null}
    </>
  );
};

export default SinglePage;
