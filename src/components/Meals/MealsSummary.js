 import classes from './MealsSummary.module.css'
 
 const MealsSummary = (props) =>{

    return(
        <section className={classes.summary}>
            <h2>{props.heading} </h2>
            <p>
                {props.para1}
            </p>
            <p>
                {props.para2}
            </p>
            <a href={props.link1to}>{props.link1}</a>
            <a href={props.link2to}>{props.link2}</a>
        </section>
    )
};

export default MealsSummary;