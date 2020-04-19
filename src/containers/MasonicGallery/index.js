// Concurrent Mode example
import React from 'react';
import { Masonry } from 'masonic';
import { Card, Img } from './styles';
import cats from './cats';

const FakeCard = React.memo(
  props => (
    <Card>
      <Img alt="kitty" src={getImage(props.data.id)} />
      <span children={getName(props.data.id)} />
    </Card>
  ),
  (p, n) => p.id === n.id,
);

const images = {};

const getImage = id => {
  if (images[id] === void 0) images[id] = randomChoice(cats);
  return images[id];
};

const getName = () => {
  return 'abc';
};

const randomChoice = items => items[Math.floor(Math.random() * items.length)];

const getFakeItems = (cur = 0) => {
  const fakeItems = [];
  for (let i = 5000 * cur; i < cur * 5000 + 5000; i++)
    fakeItems.push({ id: i });
  return fakeItems;
};

const items = getFakeItems();

const MasonicGallery = () => {
  return (
    <Masonry
      items={items}
      columnGutter={8}
      columnWidth={172}
      overscanBy={6}
      render={FakeCard}
    />
  );
};
export default MasonicGallery;
