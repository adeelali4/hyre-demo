import Link from "next/link";
import Earning from "../components/Earning";
import History from "../components/History";
import LineChart from "../components/MyChart";

export default function Earnings() {
    const pay = [
        {
            date: "Monday",
            earning: 5000
        },
        {
            date: "Tuesday",
            earning: 7000
        },
        {
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


    const lineData = {
        labels: [
          'S',
          'M',
          'T',
          'W',
          'T',
          'F',
          'S'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [1, 2, 1, 2.5, 1.4, 2, 1.8],
          backgroundColor: [
            'rgb(239, 82, 21)',
          ],
          hoverOffset: 4
        }]
      };

  return (
    <>
        <div className="flex justify-between mb-4">
            <div>
                <h3 className="font-semibold text-xl mb-4">Overview</h3>
            </div>
            <div>
                <button className="mx-2 px-4 py-3 bg-orange-500 text-white text-sm rounded-xl">Withdraw</button>
            </div>
        </div>
        <div className="mb-4 grid grid-cols-6 gap-x-8">
            {/* <div className="bg-orange-500 col-span-1"></div> */}
            <div className="col-span-4">
                <LineChart>{lineData}</LineChart>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="font-semibold text-xl mb-4">Total Earning</h3>
            <div className="grid grid-cols-3">
                {pay.map((x) => <Earning>{x.earning}</Earning>)}
            </div>
        </div>
        <div className="flex justify-between mb-4 overflow-y-auto">
            <h3 className="font-semibold text-xl">History</h3>
            <p className="text-xs font-semibold mx-3">View All &gt;</p>
        </div>
        <div>
            <div className="grid grid-cols-2">
                {history.map((x) => <History>{x}</History>)}
            </div>
        </div>
    </>
  )
}