import { Card } from "./Card";
import { cardDetails } from "../../helpers/cardDetails";
import React from "react";

export function Cards(): JSX.Element {
  return (
    <>
      <div className="grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((item, i) => (
          <React.Fragment key={i}>
            <Card
              title={item.title}
              content={item.content}
              imgPath={item.imgPath}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
