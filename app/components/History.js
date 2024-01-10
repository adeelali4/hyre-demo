"use client"
export default function History({children}){
    console.log(children)
    return <>
        <div className="m-3 p-4 mt-0 bg-orange-50 rounded-xl shadow grid grid-cols-5">
            <div className="col-span-1">
                <img src={children.image} className="w-28 h-28 rounded-xl" />
            </div>
            <div className="col-span-3 mx-2 my-3">
                <h1 className="text font-semibold">{children.title}</h1>
                <div className="mx-2">
                    <h2 className="text-xs font-semibold my-2 mx-1">Ref#{children.ref}</h2>
                    <h2 className="text-xs font-semibold mx-1 text-gray-500">{children.date}</h2>
                </div>
            </div>
            <div className="col-span-1">
                <h1 className="font-bold mt-[45%]">{children.amount} AED</h1>
            </div>
        </div>
    </>
}