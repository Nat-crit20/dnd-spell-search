"use client";

import { useEffect, useState } from "react";
import { getSpell } from "../lib/getSpell";

interface Spell {
  index: string;
}

const Spell: React.FC<Spell> = ({ index }) => {
  const [spell, setSpell] = useState();
  useEffect(() => {
    // Need to use an async function
    const spell = getSpell(index);
    console.log(spell);
  });
  return (
    <div>
      <p>Spells</p>
      <p>{index}</p>
    </div>
  );
};
export default Spell;
