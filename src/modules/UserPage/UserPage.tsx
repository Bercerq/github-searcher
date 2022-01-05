import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { Header } from "../../components/Header/Header";
import UsersInfo from "../../components/UsersInfo/UsersInfo";
import Repos from "../../components/Repos/Repos";

import { IItems, IRepos } from "../../interfaces/iterface";

import { SearchRepos } from "../../components/SearchRepos/SearchRepos";

function UserPage() {
  const [user, setUser] = useState<IItems>();
  const [repos, setRepos] = useState<IRepos[]>();
  const [value, setValue] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${Object.values(params)[0]}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    if (!value)
      axios
        .get(`https://api.github.com/users/${Object.values(params)[0]}/repos`)
        .then((response) => {
          setRepos(response.data);
        });
  }, [value]);

  return (
    <>
      <Header />
      <UsersInfo user={user} />
      <SearchRepos
        setRepos={setRepos}
        setValue={setValue}
        value={value}
        userLogin={user?.login}
        repos={repos}
      />
      <Repos repos={repos} />
    </>
  );
}
export default UserPage;
