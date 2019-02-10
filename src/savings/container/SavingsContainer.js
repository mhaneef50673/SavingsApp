import React from 'react'
import SavingsComponent from '../component/SavingsComponent'

const chartData = {
  totalSavings: {
    edges: [
      {
        node: {
          id: '1',
          date: '2018-01-01',
          amount: 100
        }
      },
      {
        node: {
          id: '2',
          date: '2018-02-01',
          amount: 250
        }
      },
      {
        node: {
          id: '3',
          date: '2018-03-01',
          amount: 300
        }
      },
      {
        node: {
          id: '4',
          date: '2018-04-01',
          amount: 400
        }
      },
      {
        node: {
          id: '5',
          date: '2018-05-01',
          amount: 499
        }
      }
    ]
  }
}

export default class SavingsContainer extends React.Component {
  render () {
    return <SavingsComponent data={chartData.totalSavings.edges} title='Total Savings' />
  }
}
