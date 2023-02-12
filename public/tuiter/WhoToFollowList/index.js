import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item d-flex align-items-center">
                <span class="fw-bold">Who to follow</span>
            </li>
        ${
            whos.map(who => {
                return (
                    WhoToFollowListItem(who)
                );
            }).join('')
        }
        </ul>
 `);
}

export default WhoToFollowList;