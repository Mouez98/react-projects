import React from "react";
import Tour from "./Tour";
const Tours = ({ tours , removeTour}) => {
  //  let tour =  tours.map((tour) => {
  //     let { price, image, name, info ,id} = tour;
  //     return <Tour

  //                key={id} />;
  //   });
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
      })}
    </section>
  );
};

export default Tours;
