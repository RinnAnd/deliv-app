import Header from "../Header/Header";
import { FC } from "react";

interface Props {
  component: FC
}

const Wrapper: FC<Props> = ({ component }) => {
  return (
    <>
        <Header />
        {component}
    </>
  )
}

export default Wrapper