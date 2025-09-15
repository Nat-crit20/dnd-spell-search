export interface Spell {
  index: string;
  level: number;
  name: string;
  url: string;
}
export interface SpellTableProps {
  spells: Spell[];
}
export interface FullSpell {
  name: string;
  school: {
    name: string;
  };
  casting_time: string;
  range: string;
  duration: string;
  components: string[];
  damage: {
    damage_type: {
      name: string;
    };
  };
}
