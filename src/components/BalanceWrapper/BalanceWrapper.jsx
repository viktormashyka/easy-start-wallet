import Balance from "components/Balance/Balance";
import ToGoReport from "components/ToGoReport/ToGoReport";
import { ContainerBalance } from "./BalanceWrapper.styled";

export const BalanceWrapper = ({ children }) => {
  return (
    <ContainerBalance>
      <ToGoReport />
      <Balance />
      {children}
    </ContainerBalance>
  );
};