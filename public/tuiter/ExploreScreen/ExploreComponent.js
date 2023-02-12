import PostSummaryList from "../PostSummaryList/index.js";
import TabList from "./TabList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <form class="form-inline m-0 row d-flex align-items-center">
                    <div class="form-group col-11 p-0">
                        <div class="ps-0 pe-0 position-relative">
                            <input type="text" class="form-control wd-rounded ps-5" placeholder="Search Tuiter">
                                <div class="position-absolute bottom-0 mb-1 ms-3 wd-gray-color"><i class="fas fa-search"></i></div>
                        </div>
                    </div>
                    <div class="col-1 form-group d-flex justify-content-end pe-0 align-items-center">
                        <a class="d-flex align-items-center wd-no-underline" href="explore-settings.html"><i class="fa fa-cog fa-2x ml-auto wd-color-primary"></i></a>
                    </div>
                </form>
            </div>
            <ul class="nav mt-2 mb-2 nav-tabs">
                ${TabList()}
            </ul>
            <div class="position-relative mb-2">
                <img src="../images/spacex.jpeg" class="card-img-top" alt="...">
                <div class="position-absolute bottom-0 left-0 p-1">
                    <p class="mb-0 fw-bold h2 wd-dark-color">SpaceX's Starship</p>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
