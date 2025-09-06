import Spell from "@/app/components/spell";
import { getSpell } from "@/app/lib/getSpell";
import Link from "next/link";

export default async function SpellPage({ params }) {
  const { name } = await params;
  // const spell = await getSpell(name);

  return (
    <div>
      {/* <h1>Spell Name {spell.name}</h1>
      <p>Level: {spell.level}</p>
      <p>{spell.desc[0]}</p>
      <p>{spell.range}</p> */}
      <p>Spell Card</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
