/* eslint-disable react/prop-types */
import "../styles/headerStyle.css";
export default function Header() {
  return (
    <header className="header bg-gray-600 dark:bg-slate-800">
      <ul>
        <Item href="/inicio" text="INICIO" />
        <Item href="/" text="PLANETAS" />
        <Item href="/rovers" text="ROVERS" />
        <Item href="/info" text="INFO" />
      </ul>
    </header>
  );
}

function Item({ href, text }) {
  return (
    <li>
      <a className="" href={href}>
        {text}
      </a>
    </li>
  );
}
