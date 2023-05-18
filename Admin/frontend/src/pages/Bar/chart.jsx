import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  Export,
} from "devextreme-react/chart";

const BarChart=()=>{
    const [reportData, setReportData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/barInventory/")
        .then((res)=>{
            
        })
    })

    return(
        <Chart id="chart" dataSource={reportData}>

            <CommonSeriesSettings
                argumentField="state"
                type="bar"
                hoverMode="allArgumentPoints"
                selectionMode="allArgumentPoints"
            />

            <Export enabled={true} />

        </Chart>
    );
};

export default BarChart;