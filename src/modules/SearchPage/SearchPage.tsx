import React, { useEffect, useState } from "react";
import axios from "axios";

import { List } from "../../components/List/List";
import Loader from "../../components/Loader/Loader";

import useDebounce from "../../utils/hooks/useDebounce";

import { SearchField } from "../../components/SearchField/SearchField";
import { FindCount } from "../../components/UsersCount/FindCount";
import { Header } from "../../components/Header/Header";

import { IUser } from "../../interfaces/iterface";

function SearchPage() {
  const [value, setValue] = useState("");
  const [searchUsers, setSearchUsers] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(value, 500);

  //Get users
  useEffect(() => {
    if (value) {
      setLoading(true);
      axios
        .get(`https://api.github.com/search/users?q=${value}`)
        .then((response) => {
          setSearchUsers(response.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [debounced]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue!(e.target.value);
  };

  return (
    <>
      <Header>
        <SearchField
          handleSearch={handleSearch}
          placeholder={"Search for Users"}
        />
        {searchUsers && searchUsers?.total_count >= 1 && (
          <FindCount findTitle="users" totalCount={searchUsers?.total_count} />
        )}
      </Header>
      {loading ? (
        <Loader />
      ) : (
        searchUsers?.items && <List usersData={searchUsers?.items} />
      )}
    </>
  );
}

export default SearchPage;
