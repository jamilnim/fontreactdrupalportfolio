import React from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import "./Strength.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ChartDataLabels
);

// --- Pie Chart Data ---
const pieData = {
  labels: ["React", "Laravel", "JavaScript", "PHP", "CMS", "AWS"],
  datasets: [
    {
      label: "labels",
      data: [25, 20, 15, 10, 10, 20],
      backgroundColor: [
        "#001f3f", // Navy Blue
        "#0074D9", // Bright Blue
        "#339CFF", // Light Azure
        "#7FDBFF", // Sky Blue
        "#CDEFFF", // Pale Blue
        "#00509E", // Deep Blue
      ],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  plugins: {
    legend: { display: false },
    datalabels: {
      color: "#000",
      formatter: (value, context) => {
        const label = context.chart.data.labels[context.dataIndex];
        const sum = context.chart.data.datasets[0].data.reduce(
          (a, b) => a + b,
          0
        );
        const percent = ((value / sum) * 100).toFixed(0) + "%";
        return `${label}\n${percent}`;
      },
      font: {
        weight: "bold",
        size: 12,
      },
      align: "center",
      anchor: "center",
    },
  },
};

// --- Bar Chart Data ---
const barData = {
  labels: [
    "Leadership",
    "Salesmanship",
    "Product Knowledge",
    "Communication",
    "Transparency",
  ],
  datasets: [
    {
      label: "Skill Score",
      data: [8, 7, 9, 9, 10],
      backgroundColor: ["#001f3f", "#0074D9", "#339CFF", "#7FDBFF", "#CDEFFF"],
      borderRadius: 4,
    },
  ],
};

const barOptions = {
  indexAxis: "y",
  scales: {
    x: {
      max: 10,
      ticks: { stepSize: 1, color: "#ccc" },
      grid: { color: "#eee" },
    },
    y: {
      ticks: { color: "#bbb" },
      grid: { display: false },
    },
  },
  plugins: {
    legend: { display: false },
  },
  responsive: true,
  maintainAspectRatio: false,
};

// --- Job Timeline Line Chart ---
const jobData = [
  { year: "2009 ITPS", company: "ITPS" },
  { year: "2013 H&M (PM)", company: "H&M (PM)" },
  { year: "2019 H&M (SM)", company: "H&M (SM)" },
  { year: "2020 H&M (GPD)", company: "H&M (GPD)" },
  { year: "2023 Global Role", company: "Global Role" },
];

const lineData = {
  labels: jobData.map((job) => job.year),
  datasets: [
    {
      label: "Career Path",
      data: jobData.map((_, index) => index + 1),
      borderColor: "#0074D9",
      backgroundColor: "#0074D9",
      pointBackgroundColor: "#0074D9",
      tension: 0.4,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => jobData[context.dataIndex].company,
      },
    },
  },
  scales: {
    x: {
      title: { display: true, text: "Year", color: "#339CFF" },
      ticks: { color: "#0074D9" },
    },
    y: {
      display: false,
    },
  },
};

function Strength() {
  return (
    <section className="strength-section">
      <h2 className="strength-title">
        <span>Strength</span> Overview
      </h2>

      <div className="chart-row">
        <div className="strength-card">
          <h2>Tech Strength Share</h2>
          <Pie
            className="pie"
            data={pieData}
            options={pieOptions}
            plugins={[ChartDataLabels]}
          />
        </div>
        <div className="strength-card bar">
          <h2>Soft Skill Self-Grading</h2>
          <div style={{ height: "350px", width: "400px" }}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        <div className="strength-card line">
          <h2 style={{ marginBottom: "5rem" }}>Job Timeline</h2>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </section>
  );
}

export default Strength;
