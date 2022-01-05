import React, { FC } from "react";
import { IRepos } from "../../interfaces/iterface";
import "./style.scss";

interface IProps {
  repos?: IRepos[];
}

export const Repos: FC<IProps> = ({ repos }) => {
  console.log(repos);

  return (
    <div className="repos">
      <div className="repos__list">
        {repos?.length ? (
          <>
            {repos?.map(({ name, forks, stargazers_count, id }: IRepos) => (
              <div key={id} className="repos__item">
                <div className="repos__name">{name}</div>
                <div className="repos__details">
                  <div className="repos__details__item">Forks: {forks}</div>
                  <div className="repos__details__item">
                    Stars: {stargazers_count}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <span className="no_items">No repositories!</span>
        )}
      </div>
    </div>
  );
};

export default Repos;
