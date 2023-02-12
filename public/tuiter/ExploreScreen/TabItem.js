const TabItem = (tab) => {
    return (`
        <li class="nav-item ${tab.hide ? 'd-none d-md-block' : ''}">
            <a class="nav-link ${tab.active ? 'active' : ''}" href=${tab.hyperlink}>${tab.text}</a>
        </li>
    `);
}

export default TabItem;