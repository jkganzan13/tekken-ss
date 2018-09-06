export const moveListColumns = [
  {
    title: 'Command',
    dataIndex: 'notation',
    key: 'notation',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'Hit Level',
    dataIndex: 'hit_level',
    key: 'hit_level',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'Damage',
    dataIndex: 'damage',
    key: 'damage',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'Speed',
    dataIndex: 'speed',
    key: 'speed',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'Block frames',
    dataIndex: 'on_block',
    key: 'on_block',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'Hit frames',
    dataIndex: 'on_hit',
    key: 'on_hit',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'CH frames',
    dataIndex: 'on_ch',
    key: 'on_ch',
    render: text => (text === 'null' ? '' : text),
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
    render: text => (text === 'null' ? '' : text),
  },
];
