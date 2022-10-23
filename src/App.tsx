import React, { FC, useState } from 'react';

import { v1 } from 'uuid';

import style from './App.module.css';
import { EditableSpan } from './EditableSpan';
import { ReturnComponentType } from './types';

export const App: FC = (): ReturnComponentType => {
  const arr1 = [
    { id: v1(), title: 'boom1' },
    { id: v1(), title: 'boom11' },
    { id: v1(), title: 'boom111' },
  ];
  const arr2 = [
    { id: v1(), title: 'boom2' },
    { id: v1(), title: 'boom22' },
    { id: v1(), title: 'boom222' },
  ];
  const arr3 = [
    { id: v1(), title: 'boom3' },
    { id: v1(), title: 'boom33' },
    { id: v1(), title: 'boom333' },
  ];

  const [list1, setList1] = useState(arr1);
  const [list2, setList2] = useState(arr2);
  const [list3, setList3] = useState(arr3);

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
    setList1([{ id, title }, ...list1]);
    setList3(list3.filter(tl => tl.id !== id));
  };

  const moveToList2 = (id: string, title: string): void => {
    setList2([{ id, title }, ...list2]);
    setList1(list1.filter(tl => tl.id !== id));
  };

  const moveToList3 = (id: string, title: string): void => {
    setList3([{ id, title }, ...list3]);
    setList2(list2.filter(tl => tl.id !== id));
  };

  const MoveAllToList1 = (): void => {
    setList1([...list3, ...list1]);
    setList3([]);
  };

  const MoveAllToList2 = (): void => {
    setList2([...list1, ...list2]);
    setList1([]);
  };

  const MoveAllToList3 = (): void => {
    setList3([...list2, ...list3]);
    setList2([]);
  };

  return (
    <div className={style.app}>
      <div className={style.array}>
        <h3>Список 1</h3>
        <button type="button" onClick={MoveAllToList2}>
          Move All to
        </button>
        {list1.map(({ id, title }) => (
          <div key={id} className={style.list}>
            <span>{title}</span>
            <button type="button" onClick={() => moveToList2(id, title)}>
              move to
            </button>
          </div>
        ))}
      </div>
      <div className={style.array}>
        <h3>Список 2</h3>
        <button type="button" onClick={MoveAllToList3}>
          Move All to
        </button>
        <button type="button" onClick={addTitle}>
          add title
        </button>
        {list2.map(({ id, title }) => (
          <div key={id} className={style.list}>
            <EditableSpan title={title} id={id} changeTitle={onChangeSetTitle} />
            <div>
              <button type="button" onClick={() => moveToList3(id, title)}>
                move to
              </button>
              <button type="button" onClick={() => removeTitle(id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.array}>
        <h3>Список 3</h3>
        <button type="button" onClick={MoveAllToList1}>
          Move All to
        </button>
        {list3.map(({ id, title }) => (
          <div key={id} className={style.list}>
            <span>{title}</span>
            <button type="button" onClick={() => moveToList1(id, title)}>
              move to
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
