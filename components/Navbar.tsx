import Link from "next/link";

const Navbar = () => {
    const links = [
        {
            link: "/",
            name: "Indie Gamer",
        },
        {
            link: "/reviews",
            name: "Reviews",
        },
        {
            link: "/about",
            name: "About",
        },
    ];

    return (
        <nav>
            <ul className="flex gap-2">
                {links.map((l, i) => (
                    <Link
                        key={l.name}
                        href={l.link}
                        className={`text-orange-800 transition duration-300 ease-out hover:ease-in hover:bg-red-900 hover:text-white 
                        ${i === 0 ? "font-orbitron font-bold" : ""}
                        ${i === 1 ? "ml-auto" : ""}
                        `}
                    >
                        {l.name}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
