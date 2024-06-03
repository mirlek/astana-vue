<template>
  <CanvasJSChart :options="options" :styles="styleOptions"/>
</template>   

<script>
 import CanvasJSChart from '@canvasjs/vue-charts';

  export default {
    name: 'my-populationpiechart',
    data() {
      return {
        options: {
          theme: "light2",
          animationEnabled: true,
          backgroundColor: "#f9f9f9",       
          title:{
            text: "Population"
          },
          data: [{
            type: "pie",
            indexLabel: "{label} (#percent%)",
            yValueFormatString: "#,##0",
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span> {y}(#percent%)",
            dataPoints: [
              { label: 'Kazakh', y: 79.1  },
              { label: 'Russian', y: 12.85  },
              { label: 'Ukrainian', y: 1.32 },
              { label: 'Tatar', y: 1.08  },
              { label: 'Uzbek', y: 0.96  },
              { label: 'Other', y: 4.65 }
            ]
          }]
        },
        styleOptions: {
          width: "100%",
          height: "360px",
        }
      }
    }
  }
</script>
