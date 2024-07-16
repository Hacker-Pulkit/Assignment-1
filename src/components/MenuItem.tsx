import React from "react";

interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ setActive, active, item, onClick }) => {
  const isActive = active === item;
  const handleClick = () => {
    setActive(item);
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`menu-item ${isActive ? "active-class" : ""}`}
    >
      {item}
    </div>
  );
};

export default MenuItem;
