import React from "react";
import { Link } from "react-router-dom";

function RecipieList({ recipies }) {
  console.log(recipies);
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {recipies.map((recipie) => {
        const { id, title, method, cookingTime, img } = recipie;
        return (
          <li key={id}>
            <div className="card  w-full bg-base-100 shadow-xl">
              <figure>
                <img src={img} alt={title} className="h-[240px] object-cover w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2x l">
                  {title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{method.substring(0, 100)}...</p>
                <Link to={`./recipie/${id}`} className="btn btn-outline btn-succes">
                  Read more
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipieList;
