import GlobeIcon from "../../Assets/GlobeIcon";
import { HeaderContainer, LogoText } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <GlobeIcon />
      <LogoText>FindCity.com</LogoText>
    </HeaderContainer>
  );
};

export default Header;
