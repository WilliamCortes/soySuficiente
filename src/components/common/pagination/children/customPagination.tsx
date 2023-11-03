import { FC } from "react";
import { createPagination } from "@utils/jobOffers";
import style from "./customPagination.module.scss";

type TPaginationProps = {
  total: number;
  current: number;
  pageSize: number;
  loading: boolean;
  onChange: (page: number, pageSize: number) => void;
  prevText?: string;
  nextText?: string;
  prevTitle?: string;
  nextTitle?: string;
  numberOfButtons?: number;
};

export const CustomPagination: FC<TPaginationProps> = ({
  total,
  current,
  pageSize,
  loading,
  onChange,
  prevText,
  nextText,
  prevTitle,
  nextTitle,
  numberOfButtons = 5
}) => {
  const { buttons, first, last } = createPagination({
    total,
    current,
    pageSize,
    numberOfButtons
  });

  const handleClick = (page: number) => {
    if (page === current) return;
    onChange(page, pageSize);
  };

  return (
    <div className={style.pagination}>
      {first !== current && (
        <button
          className={`${(first === current || loading) && style.disabled} ${prevText && style.textBtn} ${
            style.prevBtn
          }`}
          title={prevTitle}
          disabled={first === current || loading}
          onClick={() => handleClick(current - 1)}
        >
          <i className="las la-angle-left" />
          {prevText && <span>{prevText}</span>}
        </button>
      )}
      <ul>
        {!buttons.includes(first) && (
          <li>
            <button
              className={`${current === first && style.active} ${loading && style.disabled} ${style.btn}`}
              disabled={loading}
              title={`${first}`}
              onClick={() => handleClick(first)}
            >
              {loading && current === first ? <i className={`las la-spinner ${style.spinner}`} /> : first}
            </button>
            <i className={`las la-ellipsis-h ${style.ellipsis}`} />
          </li>
        )}
        {buttons.map((page, index) => (
          <li key={`${page}-${index}`}>
            <button
              className={`${current === page && style.active} ${loading && style.disabled} ${style.btn}`}
              disabled={loading}
              title={`${page}`}
              onClick={() => handleClick(page)}
            >
              {loading && current === page ? <i className={`las la-spinner ${style.spinner}`} /> : page}
            </button>
          </li>
        ))}
        {!buttons.includes(last) && (
          <li>
            <i className={`las la-ellipsis-h ${style.ellipsis}`} />
            <button
              className={`${current === last && style.active} ${loading && style.disabled} ${style.btn}`}
              disabled={loading}
              title={`${last}`}
              onClick={() => handleClick(last)}
            >
              {loading && current === last ? <i className={`las la-spinner ${style.spinner}`} /> : last}
            </button>
          </li>
        )}
      </ul>
      {last !== current && (
        <button
          className={`${(last === current || loading) && style.disabled} ${nextText && style.textBtn} ${style.nextBtn}`}
          disabled={last === current || loading}
          title={nextTitle}
          onClick={() => handleClick(current + 1)}
        >
          {nextText && <span>{nextText}</span>}
          <i className="las la-angle-right" />
        </button>
      )}
    </div>
  );
};
