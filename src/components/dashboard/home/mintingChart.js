"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Dot,
} from "recharts";
import { useMemo } from "react";

// Custom dot for accessibility + styling
const CustomDot = (props) => {
  const { cx, cy, stroke, payload } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      stroke={stroke}
      strokeWidth={2}
      fill="#0f172a"
      aria-label={`Point: ${payload.value}`}
    />
  );
};

const NftMintingChart = () => {
  const data = useMemo(
    () => [
      {
        date: "05 Mar",
        OG: 60000,
        Burner: 40000,
      },
      {
        date: "05 Mar",
        OG: 10000,
        Burner: 8000,
      },
      {
        date: "05 Mar",
        OG: 58000,
        Burner: 60000,
      },
      {
        date: "05 Mar",
        OG: 12000,
        Burner: 10000,
      },
      {
        date: "05 Mar",
        OG: 40000,
        Burner: 60000,
      },
      {
        date: "05 Mar",
        OG: 90000,
        Burner: 70000,
      },
      {
        date: "05 Mar",
        OG: 20000,
        Burner: 10000,
      },
      {
        date: "05 Mar",
        OG: 80000,
        Burner: 70000,
      },
    ],
    []
  );

  return (
    <section
      className="p-10 bg-black/20 backdrop-blur-[80px] border border-[#19E3D4]/16 rounded-[22px]  w-full max-w-full shadow-xl"
      aria-label="NFT Minting Trend Chart"
    >
      <h2 className="text-white text-lg font-semibold mb-4">
        NFT Minting Trend (OG + Burner)
      </h2>

      <ResponsiveContainer width="100%" height={360} backgroundColor="">
        <LineChart data={data}>
          <defs>
            <linearGradient id="ogColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34D399" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#34D399" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="burnerColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
          <XAxis dataKey="date" tick={{ fill: "#94A3B8", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#94A3B8", fontSize: 12 }}
            tickFormatter={(val) => val.toLocaleString()}
            label={{
              value: "No. of NFTs minted",
              angle: -90,
              position: "insideLeft",
              fill: "#94A3B8",
              fontSize: 14,
              dx: -10,
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              borderColor: "#334155",
              color: "#fff",
            }}
            labelStyle={{ color: "#94A3B8" }}
            formatter={(value) => value.toLocaleString()}
          />

          <Line
            type="monotone"
            dataKey="OG"
            stroke="#34D399"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Burner"
            stroke="#60A5FA"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default NftMintingChart;
