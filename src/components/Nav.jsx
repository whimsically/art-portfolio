import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="mx-auto flex items-center justify-between flex-wrap bg-purple-500 p-4 w-9/12 rounded shadow-md my-2 text-purple-50">
            <NavLink
                as={NavLink}
                to={'/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
        >
                Home
            </NavLink>

            <NavLink
                as={NavLink}
                to={'/Portfolio'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
        >
                Portfolio
            </NavLink>

            <NavLink
                as={NavLink}
                to={'/Contact'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
        >
                Contact
            </NavLink>
        </nav>
    )
}

export default Nav