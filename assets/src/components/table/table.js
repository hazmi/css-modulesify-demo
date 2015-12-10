import React from "react"
import styles from "./table.css"

export class Table extends React.Component {
  render() {
    let rows = this.props.data.map(function(item) {

      return (
        <tr key={item[0]}>
          <td className={styles.td}>{item[0]}</td>
          <td className={styles.td}>{item[1]}</td>
          <td className={styles.td}>{item[2]}</td>
        </tr>
      )
    })

    return (
      <table className={styles.table} width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

