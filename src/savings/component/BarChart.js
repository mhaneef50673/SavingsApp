import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styles from '../styles'

const colors = ['#7EF9FF', '#3FE0D0', '#73C2FB', '#57A0D3', '#0080FF']
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

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
      maxValue = Math.max(maxValue, element.node.amount)
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
      maxValue = Math.max(maxValue, element.node.amount)
    })

    let prevVal, prevDiff, currVal, currDiff
    let savingsVelocity = 0
    let bgColor = null
    return this.props.data.map((element, index) => {
      const barHeight = Math.round(
        (this.state.chartHeight * element.node.amount) / maxValue
      )
      currVal = element.node.amount
      currDiff = prevVal != null ? currVal - prevVal : null
      if ((prevDiff != null) & (currDiff != null)) {
        savingsVelocity = currDiff - prevDiff
      }
      if (savingsVelocity < 0) {
        bgColor = 'red'
      } else {
        bgColor = colors[index]
      }
      prevVal = currVal
      prevDiff = currDiff
      return (
        <Bar
          key={index}
          bgColor={bgColor}
          barSize={barSize}
          barHeight={barHeight}
        />
      )
    })
  }

  renderXaxisLabel = () => {
    return this.props.data.map((element, index) => {
      const label = month[new Date(element.node.date).getMonth()]
      return (
        <XaxisLabel
          key={index}
          label={label}
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
          <View style={styles.indicatorContainer}>
            <View style={styles.indicator} />
            <Text style={styles.textStyle}>Decrease in Savings Velocity</Text>
          </View>
        </View>
      </View>
    )
  }
}
