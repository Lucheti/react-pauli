import React from "react";
import "./UserList.scss";
import { UserListItem } from "../UserListItem/UserListItem";
import { UserModel } from "../../../../types/UserModel";
import { WrappedPromise } from "../../../../requests/Suspense";
import { useDragAndDrop, useResource } from "../../../Utils/CustomHooks";

interface Props {
  resource: WrappedPromise<UserModel[]>;
  editable?: boolean;
  filter?: (data: UserModel[]) => UserModel[];
}

const defaultFilter = (data: UserModel[]) => data;

export const UserList: React.FC<Props> = ({
  resource,
  editable,
  filter = defaultFilter
}) => {
  const [data, setData] = useResource(resource);
  const [onDrag, handleDrop] = useDragAndDrop<UserModel>(
    data!,
    setData,
    (user1, user2) => user1.id === user2.id
  );

  React.useEffect(() => {
    if (data && filter !== defaultFilter) {
      const filteredData = filter(data);
      if (!data.reduce( (acc, elem) => acc && !!filteredData.find( elem2 => elem.id === elem2.id) , true)) {
        setData(filteredData);
      }
    }
  }, [data]);

  return (
    <div
      className={"data-list"}
      onDropCapture={handleDrop}
      onDragOver={evt => evt.preventDefault()}
    >
      {data &&
        data.map((user: UserModel, i: number) => (
          <UserListItem
            key={user.mail + i}
            user={user}
            spaced={i !== data.length - 1}
            onDrag={onDrag}
            editable={editable}
          />
        ))}
    </div>
  );
};
