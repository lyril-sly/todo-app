import style from "./index.module.css";

function Header() {
    return(
        <header className={style.header}>
        <h1 className={style.headerh1}>TODO</h1>
        </header>
    );
}

export default Header;