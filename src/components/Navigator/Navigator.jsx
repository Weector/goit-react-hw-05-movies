import { Navigation, NavItem } from './navigator.styled';

const Navigator = () => {
  return (
    <Navigation>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </Navigation>
  );
};

export default Navigator;
