"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

  export default function LineChart({children}){

    const lineData = {
      labels: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      datasets: [{
          label: 'My First Dataset',
          data: children,
          fill: false,
          borderColor: 'rgb(0 , 0, 0)',
          backgroundColor: [
            'rgb(239, 82, 21)',
          ],
          hoverOffset: 10,
          tension: 0.4
        }]
    };

    return <Line
        data={lineData}
        options={{
            scales : {
                y:{
                    ticks: {
                      stepSize: 1,
                    },
                    suggestedMin: 1,
                    suggestedMax: 3
                }
            }
        }}
      />
}