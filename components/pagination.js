import React from 'react'
import style from '../styles/pagination.module.scss';
import PageNumber from './page-number'
import { withRouter } from 'next/router'

class Pagination extends React.Component {
  calculatePageNumbers() {
    let pages = [];
    for (let i = 1; i <= this.props.totalPages; i++) {
      if (
        i === 1 ||
        i === this.props.totalPages ||
        (i > this.props.currentPage - 4 && i < this.props.currentPage + 4)
      ) {
        pages.push(i);
      }
    }
    return pages;
  }
  render () {
    return (
      <div className={style.wrapper}>
        {this.calculatePageNumbers().map((page) => 
          <PageNumber key={page} value={page} query={this.props.query} link={page !== this.props.currentPage} />
        )}
      </div>
    )
  }
}

export default withRouter(Pagination)