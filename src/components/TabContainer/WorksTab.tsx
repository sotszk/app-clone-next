import { memo, ReactNode } from "react";

const SlowWorkPost = ({ index }: { index: number }) => {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li>Work #{index + 1}</li>;
};

const WorksTab = () => {
  let items: ReactNode[] = [];

  for (let i = 0; i < 500; i++) {
    items.push(<SlowWorkPost index={i} />);
  }

  return <ul>{items}</ul>;
};

export default memo(WorksTab);
