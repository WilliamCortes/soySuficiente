import { FC } from "react";
import { TFunction, withTranslation } from "next-i18next";

import { CustomPagination } from "./children/customPagination";

type BaseProps = {
  t: TFunction;
};

type ComposedProps = BaseProps & {
  loading: boolean;
  totalRows: number;
  appliedFilters: any;
  setFilters: (payload: any) => Promise<void>;
};

const numberOfButtons: number = 5;

const JobOffersPagination: FC<ComposedProps> = ({
  t,
  loading,
  totalRows,
  appliedFilters,
  setFilters,
}) => {
  const onChangePagination = (page: number, pageSize: number) => {
    if (pageSize !== paginationOptions.pageSize) return;

    setFilters({
      ...appliedFilters,
      paginator: { page, pageSize },
    });
  };

  const paginationOptions = {
    total: totalRows,
    current: appliedFilters?.paginator?.page,
    pageSize: appliedFilters?.paginator?.pageSize,
    loading,
    onChange: onChangePagination,
    numberOfButtons,
    prevTitle: t<string>("pagination.prevPage"),
    nextTitle: t<string>("pagination.nextPage"),
  };

  return <CustomPagination {...paginationOptions} />;
};

export default withTranslation("filters")(JobOffersPagination);
