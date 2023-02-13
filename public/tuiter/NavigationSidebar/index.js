import NavBarList from "./NavBarList.js";
const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item d-flex justify-content-center" href="/">
       <span><i class="col-xl-2 fab fa-twitter col-lg-12 col-md-12"></i></span>
        <span class="col-xl-10 align-self-center mx-2 d-none d-xl-block"></span>
        ${NavBarList(active)}
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}

export default NavigationSidebar;

function navigationComponent() {
    $('#wd-navigation').append(`
        <div class="row">
            <div class="col-2">
                ${NavigationSidebar('Explore')}
            </div>
        </div>

   `);
}
$(navigationComponent);

