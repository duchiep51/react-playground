import * as React from "react";

// type WhenProps = {
//     children: React.ReactNode,
//     isTrue?: boolean,
//     limit?: number,
// };

const RenderWhen = ({ limit, isTrue, children }) => {
  const list = [];

  if (isTrue !== true) {
    return null;
  }

  React.Children.map(children, (child) => {
    const { isTrue: isChildTrue } = child?.props || {};

    if (isChildTrue === true && list.length < limit) {
      list.push(child);
    }
  });

  return <>{list}</>;
};

RenderWhen.defaultProps = {
  limit: 1,
  isTrue: true,
};

RenderWhen.If = ({ children, isTrue }) => children;

export default RenderWhen;


