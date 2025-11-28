import Card from "../Components/Card/card";
import BasicLineChart from "../Components/Graph/linechart";
import PieChartWithCustomizedLabel from "../Components/Graph/piechart";

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

            <div className="grid grid-cols-12 grid-rows-9 gap-4">
                <div className="col-span-3"><Card/></div>
                <div className="col-span-3 col-start-4"><Card/></div>
                <div className="col-span-3 col-start-7"><Card/></div>
                <div className="col-span-3 col-start-10"><Card/></div>
                <div className="col-span-9 row-span-2 row-start-2"><BasicLineChart/></div>
                <div className="col-span-9 row-span-2 col-start-1 row-start-4">6</div>
                <div className="col-span-3 row-span-4 col-start-10 row-start-2"><PieChartWithCustomizedLabel/></div>
                <div className="col-span-12 row-span-4 row-start-6">8</div>
            </div>

        </div>
    );
}