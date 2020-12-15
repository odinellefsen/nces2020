import React from 'react'
import PropTypes from 'prop-types'
import Welcome from '../alert/Welcome'
import { MainArea, Flex } from './Charts.style'
import StackedBarChartHistorical from './StackedBarChartHistorical'
import HistoricalData from "./../data/stackedBarTab8"
import {createAccumulatedHistoricalData} from './Tools'

const HistoricalCharts = props => {
  console.log("sel R: ", props.selectedCountries)
  return (
    <MainArea>
      {props.scenarioSelection.showWelcome === true && (
        <Welcome closeWelcome={props.closeWelcome} />
      )}
      <Flex>
        <StackedBarChartHistorical
          stackedBar={HistoricalData}
          selectedCountries={props.selectedCountries}
        ></StackedBarChartHistorical>
        
      </Flex>
    </MainArea>
  )
}

export default HistoricalCharts