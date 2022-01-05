import React, { FC } from "react";
import { useHistory } from "react-router";
import { IItems } from "../../interfaces/iterface";

import "./style.scss";

interface IProps {
  usersData: any;
}

export const List: FC<IProps> = ({ usersData }) => {
  const history = useHistory();
  const handleClickToUser = (login: string) => () => {
    history.push(`user/${login}`);
  };

  return usersData?.map((data: IItems, index: number) => (
    <div className="item" key={data.id} onClick={handleClickToUser(data.login)}>
      <div>
        <div className="item__image">
          <img src={data.avatar_url} alt="user_avatar" />
        </div>
        <div>{data.login}</div>
      </div>
      <div>Repo: {index}</div>
    </div>
  ));
};
