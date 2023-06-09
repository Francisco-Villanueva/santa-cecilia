import { useSongPlaying } from "../../hooks/useSongPlaying";
import "./Footer.css";

export function Footer() {
  const { song, reproductionStatus } = useSongPlaying();
  return (
    <footer className="footer">
      {JSON.stringify(song, null, 2)}
      {JSON.stringify(reproductionStatus, null, 2)}
      {/* <h
        Prueba técnica de React ⚛️ － <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  );
}
