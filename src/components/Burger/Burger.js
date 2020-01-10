import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

const burger = props => {
  //  console.log(props.ingredients);
  const transformedIngredients1 = Object.values(props.ingredients);
  const transformedIngredients2 = Object.keys(props.ingredients).map(igKey => {console.log(igKey)});
  //console.log("transformedIngredients1:" + transformedIngredients1);
  console.log("transformedIngredients2:" + transformedIngredients2);
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  console.log('aaa:'+Object.keys(props.ingredients));
  //console.log("transformedIngredients:" + {transformedIngredients});

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
