const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells(school: string) {
  let response;
  if (school === "all") {
    response = await fetch(BASE_URL + `/api/2014/spells`);
  } else {
    response = await fetch(BASE_URL + `/api/2014/spells/?school=${school}`);
  }
  const data = await response.json();

  return data.results;
}

export async function getSpell(spellIndex: string) {
  const spellData = await fetch(BASE_URL + `/api/2014/spells/` + spellIndex);
  const spell = await spellData.json();

  return spell;
}
