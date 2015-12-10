import React from "react"
import styles from "./header.css"

export class Header extends React.Component {
  render() {
    return (
      <hgroup className={styles.hgroup}>
        <h1 className={styles.h1}>{this.props.title}</h1>
        <h2 className={styles.h2}>{this.props.subtitle}</h2>
      </hgroup>
    )
  }
}
