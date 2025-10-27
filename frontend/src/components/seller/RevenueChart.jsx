import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 200 },
  { month: "Feb", revenue: 250 },
  { month: "Mar", revenue: 400 },
  { month: "Apr", revenue: 350 },
  { month: "May", revenue: 500 },
  { month: "Jun", revenue: 450 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h3 className="text-gray-700 font-semibold mb-2">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
