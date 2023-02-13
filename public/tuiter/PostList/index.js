import posts from "./posts.js"
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        `
            <ul class="list-group">
                ${posts.map( post => {
                        return (PostItem(post));
                    }).join('')      
                }
            </ul>
        `
    );

}

export default PostList

function postComponent() {
    $('#wd-post-list').append(`
        <div class="row">
            <div class="col-8">
                ${PostList()}
            </div>
        </div>

   `);
}
$(postComponent);