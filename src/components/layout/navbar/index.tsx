import Image from "next/image";
import style from "./navbar.module.css";
import { BtnTheme } from "../btnTheme";
type Props = {};

export const Navbar = (props: Props) => {
  return (
    <header className={style["header"]}>
      <div className={style["nav_container"]}>
        <div>
          <figure className={style["nav_logo"]}>
            <Image
              src="/logoS.png"
              alt="Soy Suficiente Logo"
              width={40}
              height={40}
              priority
            />
          </figure>
        </div>
        <nav className={style["nav_menu"]}>
          <ol>
            <li>
              <button className={style["nav_button"]}>Categorias</button>
            </li>

            <li>
              <button className={style["nav_button"]}>Cerrar Sesión</button>
            </li>
          </ol>
        </nav>
        <BtnTheme />
      </div>
    </header>
  );
};
