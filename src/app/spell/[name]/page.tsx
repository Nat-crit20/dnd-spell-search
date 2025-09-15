"use client";
import { getSpell } from "@/app/lib/getSpell";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpellPage({ params }) {
  const [spell, setCurrentSpell] = useState();

  //
  useEffect(() => {
    const updateSpellInfo = async () => {
      console.log(params, "These are the params");
      let { name } = await params;
      name = name.split("%20").join("-");
      console.log(name, "Name of param/////////////////////////////////////");
      const spell = await getSpell(name.toLowerCase());
      console.log("Spell info /////////", spell);
      setCurrentSpell(spell);
    };
    updateSpellInfo();
  }, []);

  return (
    <div>
      {spell ? (
        <div>
          <h1>{spell.name}</h1>
          <div>
            <div>
              <p>LEVEL</p>
              <p>{spell.level}</p>
            </div>
            <div>
              <p>CASTING TIME</p>
              <p>{spell.casting_time}</p>
            </div>
            <div>
              <p>RANGE/AREA</p>
              <p>{spell.range}</p>
            </div>
            <div>
              <p>COMPONENTS</p>
              <p>{spell.components.join(" ")}</p>
            </div>
            <div>
              <p>DURATION</p>
              <p>{spell.duration}</p>
            </div>
            <div>
              <p>SCHOOL</p>
              <p>{spell.school.name}</p>
            </div>
            {spell.damage ? (
              <div>
                <p>DAMAGE/EFFECT</p>
                <p>{spell.damage.damage_type.name}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <p>{spell.desc[0]}</p>
            <p>{spell.higher_level[0]}</p>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}

      <p>Spell Card</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
