"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Spell {
  index: string;
  level: number;
  name: string;
  url: string;
}
interface SpellTableProps {
  spells: Spell[];
  currentSpellLevel: number;
}

const SpellTab: React.FC<SpellTableProps> = ({ currentSpellLevel, spells }) => {
  const [spellList, setSpellList] = useState<Spell[]>();

  useEffect(() => {
    setSpellList(() => {
      console.log("Spell Table////////////////", spells);
      return spells.filter((spell) => {
        return spell.level === currentSpellLevel;
      });
    });
  }, [currentSpellLevel, spells]);
  return (
    <div>
      <p>Spells Level {currentSpellLevel}</p>
      {spellList ? (
        <div>
          {spellList.map((spell) => {
            return (
              <div key={spell.name}>
                <Link href={`/spell/${spell.name}`}>
                  <p>{spell.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Loading... </p>
        </div>
      )}
    </div>
  );
};
export default SpellTab;
