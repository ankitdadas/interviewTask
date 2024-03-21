import React from "react";
import MyChart from "./myChart";
import BarChart from "./barChart";
import PieChart from "./pieChart";

const Card = (props) => {
  const { title, desc, type } = props;
  console.log(type);
  return (
    <>
      <div className="cardHolder">
        <div className="cardTitle">
          {title}
          <p>{desc}</p>
        </div>
        {type == "hages" ? <BarChart /> : type == "pie" ? <PieChart /> : <MyChart />}
      </div>
    </>
  );
};

export default Card;
