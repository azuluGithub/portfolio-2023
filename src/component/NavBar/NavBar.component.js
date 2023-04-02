import Logo from '../Logo';

import './NavBar.style.scss';

const NavBar = () => {

    const menuList = [
        {
            id: "home",
            name: "home",
            url: "#home",
            type: "text",
        },
        {
            id: "about",
            name: "about",
            url: "#about",
            type: "text",
        },
        {
            id: "skills",
            name: "skills",
            url: "#skills",
            type: "text",
        },
        {
            id: "projects",
            name: "projects",
            url: "#projects",
            type: "text",
        },
        {
            id: "contact",
            name: "contact",
            url: "#contact",
            type: "text",
        },
    ];


    const renderLogo = () => {
        return <Logo />;
    }

    const renderMenuItem = ({ id, name, url }) => {
        return (
            <li className='NavBar-NavItem' key={id}>
                <a href={url}>{ name }</a>
            </li>
        );
    }

    const renderNavigation = () => {
        return (
            <ul className='NavBar-NavList'>
                { menuList.length && menuList.map(renderMenuItem) }
            </ul>
        );
    }

    const renderComponent = () => {
        return (
            <header className="NavBar">
                <div className='ContainerWrapper NavBar-Container'>
                    { renderLogo() }
                    { renderNavigation() }
                </div>
            </header>
        );
    }

    return renderComponent();
}

export default NavBar;
