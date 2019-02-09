import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Classical music",
          value: 100
        },
        {
          name: "Alternative rock",
          value: 200
        },
        {
          name: "Pop",
          value: 300
        },
        {
          name: "Jazz",
          value: 400
        },
		{
          name: "Jazz",
          value: 200
        }
      ],
      xAxisPadding: 5,
      chartWidth: Math.round(Dimensions.get("window").width) - 100,
      chartHeight: 300
    };
  }

  renderLines = () => {
    let maxValue = 0;    

    this.state.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value);      
    });

    let gridValue = 0;
    let gridScale = 100;
    let gridLines = [];
    while (gridValue <= maxValue) {
      var gridY = Math.round(this.state.chartHeight * (1 - gridValue / maxValue));
      console.log(gridY);
      gridValue += gridScale;
      gridLines.push(
        <View
          key={gridValue}
          style={{
            borderBottomColor: "red",
            borderBottomWidth: StyleSheet.hairlineWidth,            
            top: gridY,                                  
          }}
        >               
        </View>
      );
    }

    return gridLines;
  };

  renderBars = () => {
    debugger;
    const numOfBars = this.state.data.length;
    const barSize = this.state.chartWidth / numOfBars - this.state.xAxisPadding;

    let maxValue = 0;

    this.state.data.forEach(element => {
      maxValue = Math.max(maxValue, element.value);
    });

    return this.state.data.map((categ, index) => {
      const barHeight = Math.round(
        this.state.chartHeight * categ.value / maxValue
      );
      return (
        <View
          key={index}
          style={{
            backgroundColor: "blue",
            marginLeft: 5,
            marginBottom: 0,
            height: barHeight,
            width: barSize,
            zIndex: 100           
          }}
        />
      );
    });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: this.state.chartWidth,
            height: this.state.chartHeight + 100,
          }}
        >
          <View style={{ flex: 1, flexDirection : 'column-reverse' }}>
          {this.renderLines()}   
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end"                
              }}
            >
              {this.renderBars()}              
            </View>         
          </View>
        </View>        
      </View>
    );
  }
}
