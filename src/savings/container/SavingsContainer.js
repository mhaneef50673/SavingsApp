import React from 'react'
import SavingsComponent from '../component/SavingsComponent'
import { connect } from 'react-redux'
import { fetchTotalSavings } from '../actions'
import chartData from '../data'

export class SavingsContainer extends React.Component {
  componentDidMount () {
    this.props.fetchTotalSavings()
  }
  render () {    
    return (
      <SavingsComponent
        data={this.props.chartData}
        isLoading={this.props.isLoading}
        title='Total Savings'
      />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.getIn(['savingsReducer', 'data', 'loading'], true),
  chartData: state.getIn(['savingsReducer', 'data', 'chartData'], null)
})

export default connect(
  mapStateToProps,
  { fetchTotalSavings }
)(SavingsContainer)
