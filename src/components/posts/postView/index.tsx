import { FC } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { TPosts } from "@/types";
import ShowDate from "@/components/common/ShowDate";
import { BlurImage } from "@/components/common/BlurImage";
import { useIsScrolled } from "@/hooks";
import { PostMenu } from "../postMenu";
import style from "./postView.module.css";

type Props = TPosts & {
  suggested: TPosts[];
};

export const PostView: FC<Props> = ({
  title,
  content,
  image,
  createdAt,
  description,
  imgBlurHash,
  suggested,
}) => {
  //TODO: Show categoryId and profileId
  //TODO: The content has html tags look like Slate
  const scrolled = useIsScrolled();

  const { t } = useTranslation("common");
  return (
    <div className={style.container}>
      <small className={`${style.header} ${scrolled && style.scrolled}`}>
        <Image
          src="/logoS.png"
          alt="Soy Suficiente Logo"
          width={30}
          height={30}
          style={{ marginRight: 20 }}
          priority
        />

        {title}
      </small>
      <section className={style.content}>
        <ShowDate dateString={createdAt} />
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className={style.img_container}>
          <BlurImage
            placeholder="blur"
            blurDataURL={imgBlurHash}
            className={style.img}
            width={1024}
            height={500}
            src={image}
            alt={title}
          />
        </div>
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <article className={style.suggested}>
          <PostMenu posts={suggested} title={t("common:post.suggested")} />
        </article>
      </section>
    </div>
  );
};
