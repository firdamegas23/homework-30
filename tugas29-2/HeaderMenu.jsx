const listMenu = [
    { code: "home", name: "Home" },
    { code: "about", name: "About" },
    { code: "contact", name: "Contact" }
];


function HeaderMenu() {
    return (
        <header>
            <nav>
                {listMenu.map((menu) => (
                    <a key={menu.code} href="#">{menu.name}</a>
                ))}
            </nav>
        </header>
    );
}

export default HeaderMenu;

