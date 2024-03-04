import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
