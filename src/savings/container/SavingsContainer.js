import React from 'react'
import SavingsComponent from '../component/SavingsComponent'

const chartData = [
  {
    name: 'Jan',
    value: 100
  },
  {
    name: 'Feb',
    value: 250
  },
  {
    name: 'Mar',
    value: 300
  },
  {
    name: 'Apr',
    value: 400
  },
  {
    name: 'May',
    value: 200
  }
]

export default class SavingsContainer extends React.Component {
  render () {
    return <SavingsComponent data={chartData} title="Total Savings" />
  }
}
