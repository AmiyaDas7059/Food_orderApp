import React from 'react'
import MealsSummary from '../Meals/MealsSummary';

export default function Contact() {
    const heading = 'Contact Us';
    const para1 = 'We are the React Meals, the no1 cook food provided company in the city. We provide to our customer only fresh food. ';

    return (
        <div>
            <MealsSummary
                heading={heading}
                para1={para1}
            />
        </div>
    )
}
