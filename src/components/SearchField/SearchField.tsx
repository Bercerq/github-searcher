import React, { FC } from "react";
import "./styles.scss";

interface IProps {
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
  value?: string;
}

export const SearchField: FC<IProps> = ({
  handleSearch,
  placeholder,
  value,
}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleSearch(e)}
      type="text"
      name="userName"
    />
  );
};
