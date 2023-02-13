import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${posts.map(post => {
                return PostSummaryItem(post);
            }
            ).join('')}
        </ul>
    `);
}

export default PostSummaryList

function summaryComponent() {
    $('#wd-summary').append(`
        <div class="row">
            <div class="col-8">
                ${PostSummaryList()}
            </div>
        </div>

   `);
}
$(summaryComponent);