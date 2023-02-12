// import TodoList from "../../labs/a5/todos/TodoList";
import NavBarList from "./NavBarList.js";
const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item d-flex justify-content-center" href="/">
       <span><i class="col-xl-2 fab fa-twitter col-lg-12 col-md-12"></i></span>
        <span class="col-xl-10 align-self-center mx-2 d-none d-xl-block"></span>
        ${NavBarList()}
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}

// $('#wd-navigation').append(NavigationSidebar());
export default NavigationSidebar;

function exploreComponent() {
    $('#wd-navigation').append(`
        <div class="row">
            <div class="col-4">
                ${NavigationSidebar()}
            </div>
        </div>
        
   `);
}
$(exploreComponent);

