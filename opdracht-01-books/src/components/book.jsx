import { useState } from "react";
const Book = ({ image, title, author }) => {
  const [timesRead, setTimesRead] = useState(0);
  function incrementReadCount() {
    setTimesRead(timesRead+1);
  }
  return (
    <section>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={incrementReadCount}>keer gelezen{timesRead}</button>
    </section>
  );
};

export default Book;
