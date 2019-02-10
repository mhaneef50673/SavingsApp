import React from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import BarChart from './BarChart'

export default class SavingsComponent extends React.Component {
  showIndicator = () => {
    return <ActivityIndicator size={75} color='green' />
  }

  renderView = () => {
    if (this.props.isLoading) {
      return this.showIndicator()
    } else {
      const data = this.props.data.toJS()
      return (
        <BarChart data={data.totalSavings.edges} title={this.props.title} />
      )
    }
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.renderView()}
      </View>
    )
  }
}
