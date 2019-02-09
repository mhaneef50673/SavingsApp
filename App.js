import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

export default class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'Jan',
          value: 100
        },
        {
          name: 'Feb',
          value: 200
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
      ],
      xAxisPadding: 5,
      chartWidth: Math.round(Dimensions.get('window').width) - 100,
      chartHeight: 300
    }
  }

  renderLines = () => {
    let maxValue = 0

    this.state.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value)
    })

    let gridValue = 0
    let gridScale = 100
    let gridLines = []
    while (gridValue <= maxValue) {
      var gridY = Math.round(
        this.state.chartHeight * (1 - gridValue / maxValue)
      )      
      gridValue += gridScale
      gridLines.push(
        <View
          key={gridValue}
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 0.6,
            top: gridY
          }}
        />
      )
    }

    return gridLines
  }

  renderBars = () => {
    const numOfBars = this.state.data.length
    const barSize = this.state.chartWidth / numOfBars - this.state.xAxisPadding

    let maxValue = 0

    this.state.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value)
    })

    return this.state.data.map((categ, index) => {
      const barHeight = Math.round(
        (this.state.chartHeight * categ.value) / maxValue
      )
      return (
        <View
          key={index}
          style={{
            backgroundColor: 'blue',
            marginLeft: 5,
            height: barHeight,
            width: barSize
          }}
        />
      )
    })
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: this.state.chartWidth,
            height: this.state.chartHeight + 100
          }}
        >
          <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
            {this.renderLines()}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}
            >
              {this.renderBars()}
            </View>            
          </View>
          <View style={{ flexDirection : 'row'}}>
              <Text style={{ textAlign: 'center', marginLeft: 5, width : this.state.chartWidth / 5 - this.state.xAxisPadding}}>Jan</Text>
              <Text style={{ textAlign: 'center', marginLeft: 5, width : this.state.chartWidth / 5 - this.state.xAxisPadding}}>Feb</Text>
              <Text style={{ textAlign: 'center', marginLeft: 5, width : this.state.chartWidth / 5 - this.state.xAxisPadding}}>Mar</Text>
              <Text style={{ textAlign: 'center', marginLeft: 5, width : this.state.chartWidth / 5 - this.state.xAxisPadding}}>Apr</Text>
              <Text style={{ textAlign: 'center', marginLeft: 5, width : this.state.chartWidth / 5 - this.state.xAxisPadding}}>May</Text>
          </View>
        </View>
      </View>
    )
  }
}
