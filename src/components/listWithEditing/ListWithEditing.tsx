import React, { FC } from 'react';

import style from 'app/App.module.css';
import { EditableSpan } from 'components';
import { ReturnComponentType, ListWithEditingType } from 'types';

export const ListWithEditing: FC<ListWithEditingType> = React.memo(
  ({
    list,
    moveAllToList,
    moveToList,
    onChangeSetTitle,
    addTitle,
    removeTitle,
    name,
  }: ListWithEditingType): ReturnComponentType => {
    return (
      <div className={style.array}>
        <h3>{name}</h3>
        <button type="button" onClick={moveAllToList}>
          Move All to
        </button>
        <button type="button" onClick={addTitle}>
          add title
        </button>

        {list.map(({ id, title }) => (
          <div key={id} className={style.list}>
            <EditableSpan title={title} id={id} changeTitle={onChangeSetTitle} />
            <div>
              <button type="button" onClick={() => moveToList(id, title)}>
                move to
              </button>
              <button type="button" onClick={() => removeTitle(id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  },
);
