"use client";
import SpellTable from "./components/speltable";
import { useEffect, useState } from "react";
import { Spell } from "./lib/types";

import { getAllSpells } from "./lib/getSpell";
import SchoolDropdown from "./components/schooldropdow";

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

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SchoolDropdown changeSchool={handleSchoolChange} />

      {spells ? <SpellTable spells={spells} /> : "Loading..."}
    </div>
  );
}
