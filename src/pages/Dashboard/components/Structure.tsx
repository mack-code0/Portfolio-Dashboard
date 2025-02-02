import { GoDotFill } from "react-icons/go"
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const data = [
    {
        name: "Completed",
        value: 70, // Percentage value
        fill: "#1ca86c", // Purple color
    },
];

const Structure = () => {
    return (<>
        <div className="flex items-center justify-between mb-3">
            <h1 className="text-[18px] text-primText font-[500]">Structure</h1>
            <button className="text-primText text-[12px]">View details</button>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
            <div className="relative" style={{ textAlign: "center", width: 250, height: 250 }}>
                <div className="absolute w-full h-full top-0 right-0 flex flex-col items-center justify-center">
                    <p className="text-primText text-[20px]">2</p>
                    <p className="text-primText/70 text-[10px]">Assets</p>
                </div>
                <RadialBarChart
                    width={250}
                    height={250}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="90%"
                    barSize={20}
                    data={data}
                    startAngle={90}
                    endAngle={-270} // Full circle (clockwise)
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background={{ fill: "#1ca86b16" }}
                        dataKey="value"
                    />
                </RadialBarChart>
            </div>
            <div className="flex justify-center space-x-4">
                <div className="flex items-center space-x-1">
                    <GoDotFill className="text-[#1ca86c]" />
                    <p className="text-primText/80 text-[12px]">NVDA</p>
                </div>
                <div className="flex items-center space-x-1">
                    <GoDotFill className="text-[#1ca86b16]" />
                    <p className="text-primText/80 text-[12px]">XTB</p>
                </div>
            </div>
        </div>
    </>
    );
};

export default Structure;
