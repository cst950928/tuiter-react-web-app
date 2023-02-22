const TabItem = ({tab}) => {
    return (
        <li className={`nav-item ${tab.hide ? 'd-none d-md-block' : ''}`}>
            <a className={`nav-link ${tab.active ? 'active' : ''}`} href={tab.hyperlink}>{tab.text}</a>
        </li>
    );
}

export default TabItem;