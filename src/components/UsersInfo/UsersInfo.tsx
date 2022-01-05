import React, { FC } from "react";

import { IItems } from "../../interfaces/iterface";

import "./style.scss";

interface IProps {
  user?: IItems;
}

export const UsersInfo: FC<IProps> = ({ user }) => {
  return (
    <div className="user">
      <div className="user__image">
        <img src={user?.avatar_url} alt="avatar" />
      </div>
      <div className="user__info">
        <div className="info_item">Username: {user?.login}</div>
        {user?.email && <div className="info_item">Email: {user.email}</div>}
        {user?.location && (
          <div className="info_item">Location: {user.location}</div>
        )}
        {user?.created_at && (
          <div className="info_item">
            Join Date: {new Date(user.created_at).toLocaleDateString()}
          </div>
        )}
        <div className="info_item">Followers: {user?.followers}</div>
        <div className="info_item">Following: {user?.following}</div>
      </div>
    </div>
  );
};

export default UsersInfo;
