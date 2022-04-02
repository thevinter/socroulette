import RSelect from 'react-select';
import FilterLabel from './label';
import { useEffect, useState } from 'react';

// TODO: rename
export default function LongList({ id, label, itemList, onChange }) {
  const items = itemList.map((item) => ({ value: item, label: item }));
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(
    () =>
      onChange(
        id,
        selectedItems.map((item) => item.label)
      ),
    [selectedItems, onChange, id]
  );
  return (
    <div style={{ marginBottom: '20px' }}>
      <FilterLabel label={label} />
      <RSelect
        isMulti
        menuPortalTarget={typeof window === 'undefined' ? null : document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        options={items}
        value={selectedItems}
        onChange={setSelectedItems as any}
      />
    </div>
  );
}
