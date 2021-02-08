import React from 'react'
import style from '../styles/pagination.module.scss';
import { withRouter } from 'next/router'

class Pagination extends React.Component {
  state = {
  }
  componentDidUpdate(prevProps) {
    //if (this.props.value !== prevProps.value) {
      //this.setState({inputValue: this.props.value});
    //}
  }
  render () {
    return (
      <div className={style.wrapper}>
        page numbers here
      </div>
    )
  }
}

export default withRouter(Pagination)