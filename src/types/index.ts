export type { Nullable } from './Nullable';
export type { ReturnComponentType } from './ReturnComponentType';

export type ListType = {
  id: string;
  title: string;
};
export type ListsType = ListType[];

export type ListWithEditingType = {
  list: ListsType;
  MoveAllToList: () => void;
  moveToList: (id: string, title: string) => void;
  onChangeSetTitle: (id: string, title: string) => void;
  addTitle: () => void;
  removeTitle: (id: string) => void;
  name: string;
};

export type ListWithoutEditingType = {
  list: ListsType;
  MoveAllToList: () => void;
  moveToList: (id: string, title: string) => void;
  name: string;
};
