import { FC } from "react";
import { withTranslation } from "next-i18next";
import { format } from "@/utils";
import { I18n } from "next-i18next";
import style from "./showDate.module.css";

type Props = {
  dateString: string;
  i18n: I18n;
  className?: string;
};

const ShowDate: FC<Props> = ({ dateString, i18n, className }) => {
  const date = new Date(dateString);
  return (
    <time
      className={`${className ? className : style.date}`}
      dateTime={dateString}
    >
      {format(date, i18n.language)}
    </time>
  );
};

export default withTranslation()(ShowDate);
