import Card from '../UI/Card';
import classes from './AvalibleMeals.module.css' 
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 229,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 165,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 129,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 189,
    },
];


const AvalibleMeals= ()=>{

    const MealList = DUMMY_MEALS.map(meal=> <MealItem 
         key={meal.id}
         id ={meal.id}
         name={meal.name} 
         description={meal.description}
         price={meal.price}/>
    )
    return <section className={classes.meals}>
        <Card>
            <ul>
                {MealList}
            </ul>
        </Card>
    </section>
};
export default AvalibleMeals