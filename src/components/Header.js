import logo from "../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44" />
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase">
        ReactArt
      </h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
};
export default Header;
