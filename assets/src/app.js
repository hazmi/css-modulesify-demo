import React from "react"
import ReactDOM from "react-dom"
import {Layout} from "./components/layout/layout.js"

var data = [
  [1, "Leicester City", 32],
  [2, "Arsenal", 30],
  [3, "Manchester City", 29],
  [4, "Manchester United", 29],
  [5, "Tottenham Hotspur", 26],
  [6, "Crystal Palace", 23],
  [7, "West Ham United", 23],
  [8, "Liverpool", 23],
  [9, "Everton", 22],
  [10, "Watford", 22],
  [11, "Stoke City", 22],
  [12, "Southampton", 21],
  [13, "West Bromwich Albion", 19],
  [14, "Chelsea", 15],
  [15, "Swansea City", 14],
  [16, "Norwich City", 13],
  [17, "AFC Bournemouth", 13],
  [18, "Newcastle United", 13],
  [19, "Sunderland", 12],
  [20, "Aston Villa", 6]
]

ReactDOM.render(
  <Layout 
    title="English Premier League"
    subtitle="Week 15"
    data={data}
    />, document.getElementById('page')
)
