import { Dispatch } from 'react';

import { ListsType } from 'types';

export const moveToList = (
  id: string,
  title: string,
  setListIn: Dispatch<ListsType>,
  listIn: ListsType,
  setListFrom: Dispatch<ListsType>,
  listFrom: ListsType,
): void => {
  setListIn([{ id, title }, ...listIn]);
  setListFrom(listFrom.filter(tl => tl.id !== id));
};
