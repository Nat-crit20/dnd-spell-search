"use client";

import { useEffect, useState } from "react";
import { getSpell } from "../lib/getSpell";
import Link from "next/link";

interface Spell {
  index: string;
  level: number;
  name: string;
  url: string;
}
interface SpellTableProps {
  spells: Spell[];
}
interface FullSpell {
  name: string;
  school: {
    name: string;
  };
  casting_time: string;
  range: string;
  duration: string;
  components: string[];
}

const SpellTable: React.FC<SpellTableProps> = ({ spells }) => {
  const [currentSpellLevel, setCurrentSpellLevel] = useState<number>(0);
  const [spellList, setSpellList] = useState<FullSpell[]>();

  useEffect(() => {
    setSpellList(() => {
      console.log("Spell Table", spells);
      return spells.filter((spell) => {
        return spell.level === currentSpellLevel;
      });
    });
  }, [currentSpellLevel, spells]);

  const changeLevel = (level: number) => {
    setCurrentSpellLevel(level);
  };
  return (
    <div>
      <button className="bg-red-200" onClick={() => changeLevel(0)}>
        Cantrip
      </button>
      <button className="bg-red-200" onClick={() => changeLevel(1)}>
        Level 1
      </button>
      <button className="bg-red-200" onClick={() => changeLevel(2)}>
        Level 2
      </button>
      <button className="bg-red-200" onClick={() => changeLevel(3)}>
        Level 3
      </button>
      <button className="bg-red-200" onClick={() => changeLevel(4)}>
        Level 4
      </button>
      {spellList ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th>Spell Name</th>
              <th>School</th>
              <th>Casting Time</th>
              <th>Range</th>
              <th>Duration</th>
              <th>Components</th>
            </tr>
          </thead>
          <tbody>
            {spellList.map((spell) => {
              return (
                <tr key={spell.name}>
                  <Link href={`/spell/${spell.name}`}>
                    <td>{spell.name}</td>
                  </Link>
                  {/* <td>{spell.school.name}</td>
                  <td>{spell.casting_time}</td>
                  <td>{spell.range}</td>
                  <td>{spell.duration}</td>
                  <td>{spell.components.join(" ")}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <p>Loading... </p>
        </div>
      )}
    </div>
  );
};
export default SpellTable;
