import logo from '../assets/investment-calculator-logo.png';
const Header = function ({ children }) {
  return (
    <header id="header">
      {/* The below would have been prefered if we were using the image stored in the public folder */}
      {/* <img src="../../public/investment-calculator-logo.png" /> */}
      <img src={logo} alt="Logo showing a money bag" />
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
