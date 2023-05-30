import React from "react";
import { Icon as Icons } from "@iconify/react";

interface IconsProps {
  icon: string;
  className?: string;
  width?: number;
  rotate?: number ;
  hFlip?: boolean;
  vFlip?: boolean;
  style?: React.CSSProperties
}

const Icon: React.FC<IconsProps> = ({
  icon,
  className,
  width,
  rotate,
  hFlip,
  vFlip,
  style
}) => {
  return (
    <>
      <Icons
        style={style}
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icon;
