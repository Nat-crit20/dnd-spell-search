"use client";

import { useState } from "react";

const SchoolDropdown = ({ changeSchool }) => {
  //   const [currentSelect, setSelectedSchool] = useState("Abjuration");
  return (
    <div>
      <label htmlFor="School">Please select a school of magic</label>
      <select
        onChange={(e) => changeSchool(e.target.value)}
        name="School"
        id="school"
      >
        <option value="all">All</option>
        <option value="Abjuration">Abjuration</option>
        <option value="Conjuration">Conjuration</option>
        <option value="Divination">Divination</option>
        <option value="Enchantment">Enchantment</option>
        <option value="Evocation">Evocation</option>
        <option value="Illusion">Illusion</option>
        <option value="Necromancy">Necromancy</option>
        <option value="Transmutation">Transmutation</option>
      </select>
    </div>
  );
};

export default SchoolDropdown;
