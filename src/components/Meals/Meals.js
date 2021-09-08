import { Fragment } from "react";
import AvalibleMeals from "./AvalibleMeals";
import MealsSummary from "./MealsSummary";

const Meals = ()=>{
    const heading = 'Delicious Food, Delivered To You';
    const para1 = 'Chooses Your favorite meal from our board selection of avalible meals and enjoy a delicious lunch or dinner at home.';
    const para2 = 'All our meals are cooked with high quality ingrediance. just-in-time and of course by experienced chefs.';
    return(
        <Fragment>
            <MealsSummary 
            heading={heading}
            para1= {para1}
            para2 = {para2}
            link1='About us'
            link2='Contact us'
            link1to ="/about"
            link2to = "/contact"/>
            <AvalibleMeals />
        </Fragment>
    );

}
export default Meals;