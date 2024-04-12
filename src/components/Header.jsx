/* eslint-disable react/prop-types */
import "../styles/headerStyle.css";
export default function Header() {
  return (
    <header>
      <ul>
        <Item href="/inicio" text="INICIO" />
        <Item href="/" text="PLANETAS" />
        <Item href="/roberts" text="ROBERTS" />
      </ul>
    </header>
  );
}

function Item({ href, text }) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}
