import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


const formatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short",
});

const data = [
  { month: "Jan", balance: 5000 },
  { month: "Feb", balance: 15000 },
  { month: "Mar", balance: 20000 },
  { month: "Apr", balance: 25000 },
  { month: "May", balance: 30000 },
  { month: "Jun", balance: 42000 },
  { month: "Jul", balance: 32000 },
  { month: "Aug", balance: 42000 },
  { month: "Sep", balance: 20000 },
  { month: "Oct", balance: 42000 },
  { month: "Nov", balance: 42000 },
  { month: "Dec", balance: 60000 },
];

const InteractiveChart = () => {
  const [state, setState] = useState({
    activeFilter: "YTD"
  })

  return (<>
    <div className="flex items-center justify-between mb-3">
      <h1 className="text-[18px] text-primText font-[500]">Balance</h1>

      <div className="flex border border-[#66666660] rounded-[6px] overflow-hidden">
        {[
          "1D",
          "1W",
          "1M",
          "3M",
          "1Y",
          "YTD",
        ].map((btn, idx) =>
          <button
            onClick={() => setState(prev => ({ ...prev, activeFilter: btn }))}
            className={`${state.activeFilter === btn && "text-primText/100 bg-[#66666660]"} text-[12px] px-4 py-1 text-primText/60`} key={idx}>{btn}</button>)}
      </div>
    </div>
    <div style={{ width: "100%", height: "250px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34D399" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis tickLine={false} axisLine={false} dataKey="month" tick={{ fill: "#808080", fontSize: 12 }} dy={10} />
          <YAxis tickFormatter={val => `$${val > 0 ? formatter.format(val) : val}`} tickLine={false} axisLine={false} tick={{ fill: "#808080", fontSize: 12 }} />
          <CartesianGrid strokeWidth={.5} vertical={false} stroke="#66666660" />
          <Tooltip contentStyle={{ background: "#18181B", border: "none", borderRadius: "8px", color: "#fff" }} />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#34D399"
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </>
  );
};

export default InteractiveChart;
