import { Outlet } from "react-router-dom";
import { AuthHeader } from "./AuthHeader/AuthHeader";
import { Wallpaper } from "./Wallpaper/Wallpaper";
import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";
import { StAuthLayoutContent } from "./StAuthLayout.styled";

export function AuthLayouts() {
  return (
    <StMainContainer>
      <AuthHeader />
      <StAuthLayoutContent>
        <Outlet />
        <Wallpaper />
      </StAuthLayoutContent>
    </StMainContainer>
  );
}
