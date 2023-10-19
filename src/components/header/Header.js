const Header = (props) => {
  return (
    <header className="app-header-name">
      <img
        src={props.keyConceptsImage}
        className="hero-img-style"
        alt="Medal badge with a star"
      />
      <h1 className="text-style header-text-style">Key React Concepts</h1>
      <p className="text-style">
        Selected key React concepts you should know about
      </p>
    </header>
  );
};
export default Header;
