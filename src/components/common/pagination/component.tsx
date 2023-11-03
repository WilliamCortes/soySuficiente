import { FC } from "react";
import { TFunction, withTranslation } from "next-i18next";
import { isBrowser } from "react-device-detect";
import { TRequestSearch } from "#types/filter.core";
import withFiltersHoc from "@components/filters/withFiltersHoc";
import { CustomPagination } from "./children/customPagination";

type BaseProps = {
  t: TFunction;
};

type ComposedProps = BaseProps & {
  loading: boolean;
  totalRows: number;
  appliedFilters: TRequestSearch;
  setFilters: (payload: TRequestSearch) => Promise<void>;
};

const numberOfButtons: number = isBrowser ? 5 : 3;

const JobOffersPagination: FC<ComposedProps> = ({ t, loading, totalRows, appliedFilters, setFilters }) => {
  const onChangePagination = (page: number, pageSize: number) => {
    if (pageSize !== paginationOptions.pageSize) return;

    setFilters({
      ...appliedFilters,
      paginator: { page, pageSize }
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
    nextTitle: t<string>("pagination.nextPage")
  };

  return <CustomPagination {...paginationOptions} />;
};

export default withTranslation("filters")(withFiltersHoc<BaseProps>(JobOffersPagination));
