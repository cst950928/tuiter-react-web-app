import TabItem from "./TabItem.js";
import tabs from "./tabs.js";
const TabList = () => {
    return (`
        ${tabs.map(tab => {
            return TabItem(tab);
        }
       ).join('')}
    `);
};

export default TabList