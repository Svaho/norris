import React, { useState } from "react";

export default function Favorites(props) {
  const [visible, setVisible] = useState(false);
  const { favorites, removeFromFavorites } = props;

  return (
    <div>
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "HIDE FAVORITES" : "SHOW FAVORITES"}
        </button>
      </div>
      {visible && (
        <div>
          <h2>FAVORITE FACTS</h2>
          {favorites.map((f) => (
            <div key={f.id}>
              <span>{f.value}</span>
              <button onClick={() => removeFromFavorites(f.id)}>REMOVE</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
