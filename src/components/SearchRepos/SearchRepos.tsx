import { FC } from "react";
import { SearchField } from "../SearchField/SearchField";
import { FindCount } from "../UsersCount/FindCount";
import "./style.scss";

interface IProps {
  setRepos(repos: any): void;
  setValue(value: string): void;
  value: string;
  userLogin?: string;
  repos: any;
}

export const SearchRepos: FC<IProps> = ({
  setRepos,
  setValue,
  value,
  userLogin,
  repos,
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setRepos(
      repos.filter(function (el: any) {
        return (
          el?.name?.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        );
      })
    );
  };

  const handleClearValues = () => {
    setValue("");
  };

  return (
    <div className="search">
      <SearchField
        value={value}
        handleSearch={handleSearch}
        placeholder={`Search for ${userLogin} Repositories`}
      />
      {repos?.length >= 1 && (
        <FindCount findTitle="repositories" totalCount={repos?.length} />
      )}
      {value?.length >= 1 && (
        <button className="clear_button" onClick={handleClearValues}>
          CLEAR VALUE
        </button>
      )}
    </div>
  );
};
