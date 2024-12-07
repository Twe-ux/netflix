import logo from "../img/logoNetflix.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={logo} alt="" />
      </div>
    </header>
  );
};
export default Header;
