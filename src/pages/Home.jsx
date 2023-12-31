import React from "react";
import useFetch from "../hooks/useFetch";
import RecipieList from "../components/RecipieList";

function Home() {
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  console.log(recipies);
  return <>{recipies && <RecipieList recipies={recipies} />}</>;
}

export default Home;
