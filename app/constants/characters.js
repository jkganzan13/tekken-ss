const DIRECTION = {
  LEFT: 'Left',
  RIGHT: 'Right',
};

/* eslint-disable global-require */
const CHARACTERS = [
  {
    key: 'akuma',
    name: 'Akuma',
    img: require('images/thumbnails/akuma_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'alisa',
    name: 'Alisa',
    img: require('images/thumbnails/alisa_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'asuka',
    name: 'Asuka',
    img: require('images/thumbnails/asuka_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'bob',
    name: 'Bob',
    img: require('images/thumbnails/bob_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'devil-jin',
    name: 'Devil Jin',
    img: require('images/thumbnails/deviljin_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'dragunov',
    name: 'Dragunov',
    img: require('images/thumbnails/dragunov_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'eddy',
    name: 'Eddy',
    img: require('images/thumbnails/eddy_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'eliza',
    name: 'Eliza',
    img: require('images/thumbnails/eliza_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'feng',
    name: 'Feng',
    img: require('images/thumbnails/feng_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'gigas',
    name: 'Gigas',
    img: require('images/thumbnails/gigas_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'heihachi',
    name: 'Heihachi',
    img: require('images/thumbnails/heihachi_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'hwoarang',
    name: 'Hwoarang',
    img: require('images/thumbnails/hwoarang_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'jack-7',
    name: 'Jack 7',
    img: require('images/thumbnails/jack7_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'jin',
    name: 'Jin',
    img: require('images/thumbnails/jin_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'josie',
    name: 'Josie',
    img: require('images/thumbnails/josie_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'katarina',
    name: 'Katarina',
    img: require('images/thumbnails/katarina_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'kazumi',
    name: 'Kazumi',
    img: require('images/thumbnails/kazumi_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'kazuya',
    name: 'Kazuya',
    img: require('images/thumbnails/kazuya_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'king',
    name: 'King',
    img: require('images/thumbnails/king_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'kuma',
    name: 'Kuma',
    img: require('images/thumbnails/kuma_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'lars',
    name: 'Lars',
    img: require('images/thumbnails/lars_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'law',
    name: 'Law',
    img: require('images/thumbnails/law_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'lee',
    name: 'Lee',
    img: require('images/thumbnails/lee_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'leo',
    name: 'Leo',
    img: require('images/thumbnails/leo_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'lili',
    name: 'Lili',
    img: require('images/thumbnails/lili_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'lucky-chloe',
    name: 'Lucky Chloe',
    img: require('images/thumbnails/luckychloe_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'master-raven',
    name: 'Master Raven',
    img: require('images/thumbnails/raven_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'miguel',
    name: 'Miguel',
    img: require('images/thumbnails/miguel_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'nina',
    name: 'Nina',
    img: require('images/thumbnails/nina_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'panda',
    name: 'Panda',
    img: require('images/thumbnails/panda_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'paul',
    name: 'Paul',
    img: require('images/thumbnails/paul_thumbnail.png'),
    ss: DIRECTION.RIGHT,
  },
  {
    key: 'shaheen',
    name: 'Shaheen',
    img: require('images/thumbnails/shaheen_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'steve',
    name: 'Steve',
    img: require('images/thumbnails/steve_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'ling',
    name: 'Xiaoyu',
    img: require('images/thumbnails/xiaoyu_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  {
    key: 'yoshimitsu',
    name: 'Yoshimitsu',
    img: require('images/thumbnails/yoshimitsu_thumbnail.png'),
    ss: DIRECTION.LEFT,
  },
  // {
  //   key: 'noctis',
  //   name: 'Noctis',
  //   img: require('images/thumbnails/yoshimitsu_thumbnail.png'),
  //   ss: DIRECTION.LEFT,
  // },
];

export const CHARACTER_NAMES = CHARACTERS.map(c => c.name);
export default CHARACTERS;
