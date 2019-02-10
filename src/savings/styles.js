import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  gridLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  yAxisLabel: {
    position: 'absolute',
    bottom: 1,
    left: -30
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  barContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  barStyle: {    
    marginLeft: 5
  },
  xAxisLabelContainer: { width: '70%', height: '5%', flexDirection: 'row' },
  xAxisLabel: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartContainer: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  chartLayoutContainer: {
    width: Math.round(Dimensions.get('window').width),
    flexDirection: 'row',
    paddingRight: '10%',
    paddingLeft: '20%'
  },
  titleText: { fontSize: 26, color: 'black', fontWeight: 'bold' },
  chartStyle: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
