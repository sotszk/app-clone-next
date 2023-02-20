import React from "react";

const TabButton = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  const handleClick = () => {
    onClick();
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default TabButton;
