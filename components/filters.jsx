import {useCallback, useState} from "react";
import General from "./filters/general";
import Miscellaneous from "./filters/miscellaneous";
import Physical from "./filters/physical";
import FilterList from "./filter_list";
import Geography from "./filters/geography";
import TriCheckbox from "./tricheckbox";
import Kinks from "./filters/kinks";
import Illnesses from "./filters/illnesses";
import Desires from "./filters/desires";



export default function Filter({setFilters}) {

  return (
    <div>
      <General setFilters={setFilters} />
      <Physical setFilters={setFilters} />
      <Geography setFilters={setFilters} />
      <Miscellaneous setFilters={setFilters} />
      <Illnesses setFilters={setFilters} />
      <Kinks setFilters={setFilters} />
      <Desires setFilters={setFilters} />
    </div>
  )
}

