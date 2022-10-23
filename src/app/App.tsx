import React, { FC, useState } from 'react';

import { v1 } from 'uuid';

import { ARR_1, ARR_2, ARR_3 } from '../constants';

import style from 'app/App.module.css';
import { ListWithEditing, ListWithoutEditing } from 'components';
import { ListsType, ReturnComponentType } from 'types';
import { moveAllTasks } from 'utils/moveAllTasks';
import { moveToList } from 'utils/moveToList';

export const App: FC = (): ReturnComponentType => {
  const [list1, setList1] = useState<ListsType>(ARR_1);
  const [list2, setList2] = useState<ListsType>(ARR_2);
  const [list3, setList3] = useState<ListsType>(ARR_3);

  const onChangeSetTitle = (id: string, title: string): void => {
    setList2(list2.map(l => (l.id === id ? { ...l, title } : l)));
  };

  const addTitle = (): void => {
    setList2([{ id: v1(), title: 'New title' }, ...list2]);
  };

  const removeTitle = (id: string): void => {
    setList2(list2.filter(tl => tl.id !== id));
  };

  const moveToList1 = (id: string, title: string): void => {
    moveToList(id, title, setList1, list1, setList3, list3);
  };
  const moveToList2 = (id: string, title: string): void => {
    moveToList(id, title, setList2, list2, setList1, list1);
  };
  const moveToList3 = (id: string, title: string): void => {
    moveToList(id, title, setList3, list3, setList2, list2);
  };

  const moveAllTasksToList1 = (): void => {
    moveAllTasks(setList1, list1, list3, setList3);
  };

  const moveAllTasksToList2 = (): void => {
    moveAllTasks(setList2, list2, list1, setList1);
  };

  const moveAllTasksToList3 = (): void => {
    moveAllTasks(setList3, list3, list2, setList2);
  };

  return (
    <div className={style.app}>
      <ListWithoutEditing
        name="Список 1"
        list={list1}
        moveAllToList={moveAllTasksToList2}
        moveToList={moveToList2}
      />
      <ListWithEditing
        name="Список 2"
        list={list2}
        moveAllToList={moveAllTasksToList3}
        moveToList={moveToList3}
        onChangeSetTitle={onChangeSetTitle}
        addTitle={addTitle}
        removeTitle={removeTitle}
      />
      <ListWithoutEditing
        name="Список 3"
        list={list3}
        moveAllToList={moveAllTasksToList1}
        moveToList={moveToList1}
      />
    </div>
  );
};
