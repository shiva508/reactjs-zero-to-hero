import { useState } from "react";

const Player = ({ playerName, playerSymbol, isActive }) => {
  const [updatedName, setUpdatedName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  const editPlayerHandler = () => {
    setIsEditing((editing) => !editing);
  };
  const onPlayerEditHandler = (event) => {
    setUpdatedName(event.target.value);
  };
  let playerNameContent = <span className="player-name">{updatedName}</span>;
  if (isEditing) {
    playerNameContent = (
      <input
        type="text"
        required
        className="player-name"
        value={updatedName}
        onChange={onPlayerEditHandler}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={editPlayerHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
export default Player;
