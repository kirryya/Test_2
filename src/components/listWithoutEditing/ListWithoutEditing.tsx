import React, { FC } from 'react';

import style from 'app/App.module.css';
import { ListWithoutEditingType, ReturnComponentType } from 'types';

export const ListWithoutEditing: FC<ListWithoutEditingType> = ({
  list,
  MoveAllToList,
  moveToList,
  name,
}: ListWithoutEditingType): ReturnComponentType => {
  return (
    <div className={style.array}>
      <h3>{name}</h3>
      <button type="button" onClick={MoveAllToList}>
        Move All to
      </button>

      {list.map(({ id, title }) => (
        <div key={id} className={style.list}>
          <span>{title}</span>
          <button type="button" onClick={() => moveToList(id, title)}>
            move to
          </button>
        </div>
      ))}
    </div>
  );
};
