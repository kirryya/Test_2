import { Dispatch } from 'react';

import { ListsType } from 'types';

export const MoveAllTasks = (
  setListIn: Dispatch<ListsType>,
  listIn: ListsType,
  listFrom: ListsType,
  setListFrom: Dispatch<ListsType>,
): void => {
  setListIn([...listFrom, ...listIn]);
  setListFrom([]);
};
