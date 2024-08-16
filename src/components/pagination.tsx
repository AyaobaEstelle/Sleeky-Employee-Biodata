// import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
// import { handleRoutePaginationChange } from "../config/config";

const handleRoutePaginationChange = (route: string) =>
  route
    .replace(/&page=\d+/g, "")
    ?.replace(/(\?|&)page=\d+/g, "")
    ?.replace("?page=NaN", "")
    ?.replace("&page=NaN", "");

const PagePagination = ({
  meta,
  handleOnPageChange,
}: {
  meta: any;
  handleOnPageChange?: (value: string) => void;
}) => {
  const router = useRouter();
  const [totalPages, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (value: any) => {
    if (handleOnPageChange) {
      return handleOnPageChange(value);
    }
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const filteredPage = handleRoutePaginationChange(router?.asPath);

    value !== undefined && filteredPage?.includes("?")
      ? router?.push(`${filteredPage}&page=${value}`)
      : router?.push(`${filteredPage}?page=${value}`);
  };

  useEffect(() => {
    setCurrentPage(meta?.current_page);
    setTotalPage(meta?.last_page);
  }, [meta]);

  const [showAllButtons, setShowAllButtons] = useState(false);
  const handlePageChange = (page: any) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxButtonsToShow = 3;
    const ellipsis = (
      <Button key="ellipsis" onClick={() => setShowAllButtons(true)}>
        ...
      </Button>
    );

    if (totalPages <= maxButtonsToShow || showAllButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <Button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}>
            {i}
          </Button>
        );
      }
    } else {
      const leftBoundary = Math.max(1, currentPage - 2);
      const rightBoundary = Math.min(
        leftBoundary + maxButtonsToShow - 1,
        totalPages
      );

      if (leftBoundary > 1) {
        pageNumbers.push(
          <Button key={1} onClick={() => handlePageChange(1)}>
            {1}
          </Button>
        );

        if (leftBoundary > 2) {
          pageNumbers.push(ellipsis);
        }
      }

      for (let i = leftBoundary; i <= rightBoundary; i++) {
        pageNumbers.push(
          <Button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}>
            {i}
          </Button>
        );
      }

      if (rightBoundary < totalPages) {
        if (rightBoundary < totalPages - 1) {
          pageNumbers.push(ellipsis);
        }

        pageNumbers.push(
          <Button key={totalPages} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </Button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <Button
        disabled={currentPage === 1}
        onClick={() => currentPage >= 0 && handlePageChange(currentPage - 1)}>
        {`<`}
      </Button>
      {renderPageNumbers()}
      <Button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}>
        {`>`}
      </Button>
    </div>
  );
};

export default PagePagination;
