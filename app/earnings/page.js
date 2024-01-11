import Link from "next/link";
import Earning from "../components/Earning";
import History from "../components/History";
import LineChart from "../components/MyChart";
import SmallCalendar from "../components/SmallCalendar";

export default function Earnings() {
    const pay = [
        {
            id: 1,
            date: "Monday",
            earning: 5000
        },
        {
            id: 2,
            date: "Tuesday",
            earning: 7000
        },
        {
            id: 3,
            date: "Wednesday",
            earning: 3000
        }
    ];

    const history = [
        {
            id: 1,
            image: "https://img.freepik.com/premium-vector/laptop-with-plant-lamp-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3594.jpg",
            title: "Creating Awesome Mobile Apps",
            ref: "Hyr15724324",
            date: "June 22, 2022 at 13:00 - 14:00",
            amount: 5000
        },
        {
            id: 2,
            image: "https://img.freepik.com/premium-vector/laptop-with-plant-lamp-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3594.jpg",
            title: "Creating Awesome Mobile Apps",
            ref: "Hyr15724337",
            date: "June 22, 2022 at 15:00 - 16:00",
            amount: 7000
        },
        {
            id: 3,
            image: "https://img.freepik.com/premium-vector/laptop-with-plant-lamp-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3594.jpg",
            title: "Creating Awesome Mobile Apps",
            ref: "Hyr15724347",
            date: "June 22, 2022 at 18:00 - 19:00",
            amount: 3000
        },
        {
            id: 4,
            image: "https://img.freepik.com/premium-vector/laptop-with-plant-lamp-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3594.jpg",
            title: "Creating Awesome Mobile Apps",
            ref: "Hyr15724398",
            date: "June 22, 2022 at 20:00 - 21:00",
            amount: 8000
        }
    ];

    const progress = {
        total: 100,
        completed : 65
    }


    const lineData = [1, 2, 1, 2.5, 1.4, 2, 1.8];

  return (
    <>
        <div className="flex justify-between mb-2 items-center">
            <div>
                <h3 className="font-semibold text-xl">Overview</h3>
            </div>
            <div>
                <button className="mx-2 px-4 py-2 bg-[#ef5225] text-white text-sm rounded-xl">Withdraw</button>
            </div>
        </div>
        <div className="mb-6 grid grid-cols-6 gap-x-4">
            <div className=" col-span-1 bg-[#ef5225] p-4 text-white rounded-xl">
                <p className="mb-5 font-semibold text-sm">Running Task</p>
                <p className="text-3xl font-bold mb-4">{progress.completed}</p>
                <div className="grid grid-cols-2 items-center">
                    <div className="progress-bar col-span-1" style={{background:`radial-gradient(closest-side, #ef5225 88%, transparent 80% 100%),conic-gradient(#fff ${(progress.completed/progress.total)*100}%, #f0bfb2 0)`}}>
                        <p className="text-center pt-[32%]">{(progress.completed/progress.total)*100}%</p>
                    </div>
                    <div className="col-span-1 text-sm ml-2">
                        <p className="text-xl font-semibold">{progress.total}</p>
                        <p>Task</p>
                    </div>  
                </div>
            </div>
            <div className="col-span-3 grid grid-cols-4 bg-[#fdeee9] p-4 rounded-xl">
                <p className="mb-4 font-semibold text-sm col-span-1">Activity</p>
                <p className="mb-4 text-xs col-span-1 col-start-4 text-right">This Week</p>
                <div className="bg-white rounded-xl col-span-4 line-chart">
                    <LineChart>{lineData}</LineChart>
                </div>
            </div>
            <div className="col-span-2 bg-[#fdeee9] rounded-xl p-4">
                <SmallCalendar/>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="font-semibold text-xl mb-4">Total Earning</h3>
            <div className="grid grid-cols-3">
                {pay.map((x) => <Earning key={x.id}>{x.earning}</Earning>)}
            </div>
        </div>
        <div className="flex justify-between mb-4 overflow-y-auto items-center">
            <h3 className="font-semibold text-xl">History</h3>
            <p className="text-xs font-semibold mx-3">View All &gt;</p>
        </div>
        <div>
            <div className="grid grid-cols-2">
                {history.map((x) => <History key={x.id}>{x}</History>)}
            </div>
        </div>
    </>
  )
}