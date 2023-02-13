const NavBarItem = (content, active) => {
    return (
        `
            <a class="list-group-item d-flex align-items-center justify-content-center ${active === content.text ? 'active' : ''}" href="${content.hyperlink}">
                ${content.icon}
                <span class="col-xl-10 align-self-center mx-2 d-none d-xl-block">${content.text}</span>
            </a>
        `

    )
}

export default NavBarItem;