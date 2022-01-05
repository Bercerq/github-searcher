import React, { FC } from "react";
import "./style.scss";

interface IProps {
  totalCount?: number;
  findTitle: string;
}
export const FindCount: FC<IProps> = ({ totalCount, findTitle }) => {
  return (
    <span className="total_count">
      Find {totalCount} {findTitle}
    </span>
  );
};
