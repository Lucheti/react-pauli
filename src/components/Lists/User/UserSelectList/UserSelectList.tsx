import React from "react";
import { UserModel } from "../../../../types/UserModel";
import { UserListItem } from "../UserListItem/UserListItem";
import "./UserSelectList.scss";
import { useDragAndDrop } from "../../../Utils/CustomHooks";


interface Props {
  onSelect: (list: UserModel[]) => void
  initialData: UserModel[]
}

export const UserSelectList: React.FC<Props> = ({ onSelect, initialData }) => {
  const [data, setData] = React.useState<UserModel[]>(initialData);
  const [onDrag, handleDrop] = useDragAndDrop<UserModel>(
    data!,
    setData,
    (user1, user2) => user1.id === user2.id
  );

  React.useEffect(() => onSelect(data), [data])

  return (
    <div
      className={"dropable-list"}
      onDropCapture={() => handleDrop()}
      onDragOver={evt => evt.preventDefault()}
    >
      {!data.length && <p> Arrastre los operadores aqui </p>}
      {!!data.length &&
        data.map((user: UserModel, i: number) => (
          <UserListItem
            key={user.mail + i}
            user={user}
            spaced={i !== data.length - 1}
            onDrag={onDrag}
          />
        ))}
    </div>
  );
};
