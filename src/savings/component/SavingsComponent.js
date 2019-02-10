import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import BarChart from './BarChart'

export default class SavingsComponent extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BarChart data={this.props.data} title={this.props.title} />
      </View>
    )
  }
}
