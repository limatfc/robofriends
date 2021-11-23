import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {
  // const cardComponent = robots.map((user, i) => {
  //   return (
  //     <Card
  //       key={i}
  //       id={robots[i].id}
  //       name={robots[i].name}
  //       email={robots[i].email}
  //     />
  //   );
  // })

  let cardComponent2 = [];

  for (let i = 0; i < robots.length; i++) {
    cardComponent2.push(<Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
    />)
  }
  return (
    cardComponent2
  )
}

export default CardList;

