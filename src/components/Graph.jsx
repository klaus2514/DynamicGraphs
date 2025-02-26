import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import '../styles/Graph.css';

const Graph = ({ metric, device }) => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
                );

                console.log(`API Response for ${metric}:`, response.data);

                // Extract timeseries and values correctly
                const { timeseries, values } = response.data;

                if (Array.isArray(timeseries) && Array.isArray(values) && timeseries.length === values.length) {
                    const formattedData = timeseries.map((time, index) => ({
                        date: `Point ${time}`,  // You can format time here if needed
                        value: values[index],
                    }));
                    setChartData(formattedData);
                } else {
                    console.error("Unexpected API structure:", response.data);
                    throw new Error("Unexpected API response format.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [metric, device]);

    const options = {
        title: { text: `${metric.toUpperCase()} for ${device}` },
        tooltip: { trigger: "axis" },
        xAxis: { type: "category", data: chartData.map((item) => item.date) },
        yAxis: { type: "value" },
        series: [
            {
                name: metric,
                type: "line",
                data: chartData.map((item) => item.value),
                smooth: true,
                lineStyle: { color: "#5470C6" },
                itemStyle: { color: "#5470C6" },
            },
        ],
        grid: { left: "10%", right: "10%", bottom: "10%", containLabel: true },
    };

    if (loading) return <p>Loading {metric.toUpperCase()} graph...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return <ReactECharts option={options} style={{ height: "400px", width: "100%" }} />;
};

export default Graph;
