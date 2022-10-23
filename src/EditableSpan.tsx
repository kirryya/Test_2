import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpaPropsType = {
    title: string
    changeTitle: (id: string, title: string) => void
    id: string
}

export const EditableSpan = React.memo(({title, id, changeTitle}: EditableSpaPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(title)

    const onEditMode = () => {
        setEditMode(true)
        setValue(title)
    }
    const offEditMode = () => {
        setEditMode(false)
        changeTitle(id, value)
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onKeyPressSetTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            offEditMode()
        }
    }

    return editMode
            ?
            <input value={value}
                   onChange={onChangeSetTitle}
                   onBlur={offEditMode}
                   onKeyPress={onKeyPressSetTitle}
                   autoFocus/>
            : <span onDoubleClick={onEditMode}>{value}</span>

});

