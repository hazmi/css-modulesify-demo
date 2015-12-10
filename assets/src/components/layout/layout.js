import React from "react"
import {Header} from "../header/header.js"
import {Table} from "../table/table.js"
import styles from "./layout.css"

export class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <Table data={this.props.data} />
      </div>
    )
  }
}
