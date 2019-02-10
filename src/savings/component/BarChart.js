import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styles from '../styles'

const colors = ['#3FE0D0', '#7EF9FF', '#73C2FB', '#57A0D3', '#0080FF']

const GridLine = ({ gridValue, gridY }) => {
  return (
    <View style={[styles.gridLine, { top: gridY }]}>
      <View style={styles.yAxisLabel}>
        <Text style={styles.textStyle}>{gridValue}</Text>
      </View>
    </View>
  )
}

const Bar = ({ barHeight, barSize, bgColor }) => {  
  return (
    <View
      style={[
        styles.barStyle,
        { height: barHeight, width: barSize, backgroundColor: bgColor }
      ]}
    />
  )
}

const XaxisLabel = ({ label, chartWidth, xAxisPadding }) => {
  return (
    <View style={[styles.xAxisLabel, { width: chartWidth / 5 - xAxisPadding }]}>
      <Text style={styles.textStyle}>{label}</Text>
    </View>
  )
}

export default class BarChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      xAxisPadding: 5,
      chartWidth: Math.round(Dimensions.get('window').width) - 120,
      chartHeight: Math.round(Dimensions.get('window').height) / 2
    }
  }

  getMaxValue = () => {
    let maxValue = 0

    this.props.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value)
    })

    return maxValue
  }

  renderLines = () => {
    let maxValue = this.getMaxValue()

    let gridValue = 0
    let gridScale = 100
    let gridLines = []
    while (gridValue <= maxValue) {
      let gridY = Math.round(
        this.state.chartHeight * (1 - gridValue / maxValue)
      )
      gridLines.push(
        <GridLine key={gridValue} gridValue={gridValue} gridY={gridY} />
      )
      gridValue += gridScale
    }

    return gridLines
  }

  renderBars = () => {
    const numOfBars = this.props.data.length
    const barSize = this.state.chartWidth / numOfBars - this.state.xAxisPadding

    let maxValue = 0

    this.props.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value)
    })

    return this.props.data.map((categ, index) => {
      const barHeight = Math.round(
        (this.state.chartHeight * categ.value) / maxValue
      )
      const bgColor = colors[index]
      return <Bar key={index} bgColor={bgColor} barSize={barSize} barHeight={barHeight} />
    })
  }

  renderXaxisLabel = () => {
    return this.props.data.map((categ, index) => {
      return (
        <XaxisLabel
          key={index}
          label={categ.name}
          chartWidth={this.state.chartWidth}
          xAxisPadding={this.state.xAxisPadding}
        />
      )
    })
  }

  render () {
    return (
      <View style={styles.chartContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
        <View style={styles.chartStyle}>
          <View
            style={[
              styles.chartLayoutContainer,
              { height: this.state.chartHeight }
            ]}
          >
            <View
              style={{
                flex: 1
              }}
            >
              {this.renderLines()}
              <View style={styles.barContainer}>{this.renderBars()}</View>
            </View>
          </View>
          <View style={styles.xAxisLabelContainer}>
            {this.renderXaxisLabel()}
          </View>
        </View>
      </View>
    )
  }
}
