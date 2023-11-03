import { Card } from "@/components/common/card";
import { TPosts } from "@/types";
import React, { FC } from "react";
import style from "./PostMenu.module.css";

type Props = {
  posts: TPosts[];
  title: string;
};

export const PostMenu: FC<Props> = ({ title, posts }) => {
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <ul className="post-menu">
        {posts?.map((item, i) => (
          <li key={`${item.id}-${i}`}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
