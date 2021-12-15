import React from "react";
import styles from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {

            return <span className={props.currentPage === p ? styles.selectedPage : ""}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}> {p} </span>
        })}
    </div>
}