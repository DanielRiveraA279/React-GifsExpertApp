import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categorias, setcategorias] = useState(["One Punch"]);

  // const handleAdd = (value) => {
  //   setcategorias([
  //     ...categorias,
  //     value
  //   ])

  //   //setcategorias(c => [...c, value]);

  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setcategorias={setcategorias} />
      <hr />

      <ol>
        {categorias.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ol>
    </div>
  );
};
