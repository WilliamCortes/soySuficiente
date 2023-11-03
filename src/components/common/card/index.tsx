import { TPosts } from "@/types";
import React, { FC } from "react";
import style from "./card.module.css";
import Link from "next/link";
import { BlurImage } from "../BlurImage";
import ShowDate from "../ShowDate";

export const Card: FC<TPosts> = ({
  title,
  image,
  createdAt,
  description,
  imgBlurHash,
  slug,
}) => {
  return (
    <Link href={`/post/${slug}`} className={style.container}>
      <div className={style.img_container}>
        <BlurImage
          placeholder="blur"
          blurDataURL={imgBlurHash}
          className={style.img}
          width={300}
          height={170}
          src={image}
          alt={title}
        />
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <ShowDate dateString={createdAt} className={style.date} />
        <p>{description}</p>
      </div>
    </Link>
  );
};
