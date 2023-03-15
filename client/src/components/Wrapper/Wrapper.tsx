import Header from "../Header/Header";
import { ReactNode, FC } from "react";

interface Props {
  component: ReactNode;
}

const Wrapper: FC<Props> = ({ component }) => {
  return (
    <>
      <Header />
      {component}
    </>
  );
};

export default Wrapper;
