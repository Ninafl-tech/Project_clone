import { HomeNavigation } from "./HomeNavigation/HomeNavigation";
import { StHomeView } from "./StHomeview.styled";
import { HomeContent } from "./HomeContent/HomeContent";
import { StHomeMainSection } from "./StHomeview.styled";

export default function HomeView() {
  return (
    <StHomeView>
      <StHomeMainSection>
        <HomeNavigation />
        <HomeContent />
      </StHomeMainSection>
    </StHomeView>
  );
}
