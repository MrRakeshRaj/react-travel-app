import { Card } from "./Card";
import { cardDetails } from "../../data/cardDetails";
import React from "react";

export function Cards(): JSX.Element {
  return (
    <>
      <div className="flex flex-nowrap w-[1100px] h-[380px]">
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
