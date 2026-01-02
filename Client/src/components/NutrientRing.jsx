import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const NutrientRing = ({ label, consumed, target, color }) => {
  const remaining = Math.max(target - consumed, 0);

  const data = {
    datasets: [
      {
        data: [consumed, remaining],
        backgroundColor: [color, "#E5E7EB"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="w-50 mt-2 rounded-md shadow-[2px_4px_6px_-1px_rgba(0,0,0,0.2),-2px_-2px_4px_-1px_rgba(0,0,0,0.2)] p-4 flex flex-col items-center justify-center ">
      <Doughnut data={data} options={options} />
      <div>

      <h3>target: {target}g </h3>
      <h3 className="bg-green-400 rounded-md text-center"> {target-consumed}g </h3>
      <p>remaining</p>
      </div>
      <p className="text-xl font-semibold">{label}</p>
    </div>
  );
};

export default NutrientRing;
