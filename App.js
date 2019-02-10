import React from 'react'
import SavingsContainer from './src/savings/container/SavingsContainer'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <SavingsContainer />
      </Provider>
    )
  }
}
