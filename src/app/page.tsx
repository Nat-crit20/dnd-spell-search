"use client";
import SpellTable from "./components/speltable";
import { useEffect, useState } from "react";
import { Spell } from "./lib/types";

import { getAllSpells } from "./lib/getSpell";
import SchoolDropdown from "./components/schooldropdow";
import SpellTab from "./components/spelltab";

export default function Home() {
  const [spells, setSpell] = useState<Spell[]>();
  const [school, setSchool] = useState<string>("all");
  useEffect(() => {
    const fetchSpells = async () => {
      const spells = await getAllSpells(school);
      // console.log(spells);
      return setSpell(spells);
    };
    fetchSpells();
    console.log("Home", spells);
  }, [school]);

  const handleSchoolChange = (school: string) => {
    console.log("////////////", school);
    setSchool(school);
  };
  const spellJSX = [];
  let i = 0;
  while (i <= 9) {
    spellJSX.push(
      <SpellTab
        key={`school-${i}`}
        className="p-3 w-100"
        spells={spells}
        currentSpellLevel={i}
      />
    );
    i++;
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-5 gap-16 sm:p-5">
      <SchoolDropdown changeSchool={handleSchoolChange} />

      {/* {spells ? <SpellTable spells={spells} /> : "Loading..."} */}
      {spells ? <div className="flex">{spellJSX}</div> : "Loading..."}
    </div>
  );
}
