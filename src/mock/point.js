import { getRandomArrayElement, getRandomInt } from '../utils';
import { TYPES, DESTINATIONS, POINTS_COUNT, PHOTOS_COUNT, MAX_OFFER_ID, MAX_PRICE, DATES } from '../const';
import { nanoid } from 'nanoid';

const createPoint = () =>({
  type: getRandomArrayElement(TYPES),
  destination: getRandomArrayElement(DESTINATIONS),
  cost: getRandomInt(MAX_PRICE),
  date:getRandomArrayElement(DATES),
  offers:{
    id: getRandomInt(MAX_OFFER_ID)
  },
  desctiption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  photosSrc:[`https://loremflickr.com/248/152?random=${getRandomInt(PHOTOS_COUNT)}`],
});

const mockPoints = Array.from( {length: POINTS_COUNT} , createPoint);

const getRandomPoint = () => {
  const point = getRandomArrayElement(mockPoints);
  return {
    ...point,
    id: nanoid(),
  };
};

export {getRandomPoint};