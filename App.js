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
      ],
      xAxisPadding: 5,
      chartWidth: Math.round(Dimensions.get('window').width) - 120,
      chartHeight: Math.round(Dimensions.get('window').height)/2
    }
  }

  getMaxValue = () => {
    let maxValue = 0

    this.state.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value)
    });

    return maxValue;
  }

  renderLines = () => {
    let maxValue = this.getMaxValue();

    let gridValue = 0
    let gridScale = 100
    let gridLines = []
    while (gridValue <= maxValue) {
      var gridY = Math.round(
        this.state.chartHeight * (1 - gridValue / maxValue)
      )                 
      gridLines.push(
        <View
          key={gridValue}
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: StyleSheet.hairlineWidth,
            top: gridY
          }}
        >
        <View style={{ position : "absolute", bottom: 1, left: -10}}>
            <Text>{gridValue}</Text>
          </View>
        </View>
      )
      gridValue += gridScale;
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

  renderXaxisLabel = () => {
    return this.state.data.map((categ, index) => {
      return (
        <View key={index} style={{  marginLeft:5, 
              width : this.state.chartWidth / 5 - this.state.xAxisPadding, 
              alignItems: "center", justifyContent:"center" }}>
          <Text style={{ textAlign: 'center'}}>{categ.name}</Text>
        </View> 
      )     
    })
  }

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: Math.round(Dimensions.get('window').width), height: this.state.chartHeight, flexDirection: 'row'
            , paddingRight: "10%", paddingLeft: "10%"}}>          
          <View style={{ width: "90%", height: "100%", flexDirection: 'column'}}>
            {this.renderLines()}
            <View style={{ flex: 1, position: 'absolute',flexDirection: 'row', justifyContent: 'flex-end',
            alignItems: 'flex-end'}}>
              {this.renderBars()}
            </View>
          </View>          
        </View>
        <View style={{ width: "80%", height:"5%",  flexDirection : 'row'}}>
          {this.renderXaxisLabel()}
        </View>
      </View>
    )
  }
}
