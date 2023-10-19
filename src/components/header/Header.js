import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Coramde Rule</h1>
        <div className="nav-links">
          <ul className="ul-list">
            <li className="li-list">Conditions</li>
            <li className="li-list">Rules</li>
            <li className="li-list">Execute Rules</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
