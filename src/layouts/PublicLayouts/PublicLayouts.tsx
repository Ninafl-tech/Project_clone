import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { StPublicLayoutDivWrapper } from "./StPublicLayoutDiv.styled";
import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";
import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div>
      <Header />
      <StPublicLayoutDivWrapper>
        <StMainContainer>
          <Outlet />
        </StMainContainer>
      </StPublicLayoutDivWrapper>
      <Footer />
    </div>
  );
}
