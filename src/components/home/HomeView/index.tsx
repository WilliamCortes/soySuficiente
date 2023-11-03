import React, { FC } from "react";
import style from "./HomeView.module.css";
import { TFunction, withTranslation } from "next-i18next";
import { TPosts } from "@/types";
import { PostMenu } from "@/components/posts/postMenu";

type Props = {
  t: TFunction;
  posts: TPosts[];
};

const HomeView: FC<Props> = ({ t, posts }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{t("common:title")}</h1>

      <div className={style.description}>
        <h2>{t("common:home.title")}</h2>
        <p className={style.title}>{t("common:home.description")}</p>
      </div>

      <div>
        <PostMenu title={t("common:home.title-all")} posts={posts} />
      </div>
    </div>
  );
};

export default withTranslation("common")(HomeView);
