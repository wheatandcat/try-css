import React from "react";

type Props = {
  el: React.ReactNode;
  code: string;
};

const ListItem: React.FC<Props> = (props) => {
  return (
    <div className="flex pb-16">
      {props.el}
      <div>
        <pre>{props.code}</pre>
      </div>
    </div>
  );
};

export default ListItem;
