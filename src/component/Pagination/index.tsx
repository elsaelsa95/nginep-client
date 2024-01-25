"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import { HtmlHTMLAttributes, useMemo } from "react";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pages = useMemo(() => {
    let pages: string[] = [];
    if (totalPage < 5) {
      for (let index = 1; index <= totalPage; index++) {
        pages.push(index.toString());
      }
      return pages;
    }

    if (currentPage < totalPage - 3) {
      pages = [
        `${currentPage}`,
        `${currentPage + 1}`,
        `${currentPage + 2}`,
        "...",
        `${totalPage}`,
      ];

      return pages;
    }

    pages = [
      `1`,
      "...",
      `${totalPage - 3}`,
      `${totalPage - 2}`,
      `${totalPage - 1}`,
      `${totalPage}`,
    ];

    return pages;
  }, [currentPage, totalPage]);

  if (totalPage < 2) return null;

  return (
    <div className={style.container}>
      {currentPage > 1 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={style.icon}
          onClick={(e) => {
            e.preventDefault();
            onPageChange?.(currentPage - 1);
          }}
        />
      )}
      {pages.map((page, i) => (
        <PaginationPage
          key={i}
          label={page}
          isActive={page != "..." && parseInt(page, 10) === currentPage}
          onClick={
            page === "..."
              ? undefined
              : (e) => {
                e.preventDefault();
                onPageChange?.(parseInt(page, 10));
              }
          }
        />
      ))}
      {currentPage < totalPage && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className={style.icon}
          onClick={(e) => {
            e.preventDefault();
            onPageChange?.(currentPage + 1);
          }}
        />
      )}
    </div>
  );
}

function PaginationPage({
  label,
  isActive,
  ...props
}: {
  label: string;
  isActive?: boolean;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={style.page} data-active={isActive} {...props}>
      {label}
    </div>
  );
}
