export default function Earning({children}){
    return <>
        <div className="mx-3 p-10 bg-orange-50 text-center rounded-xl shadow">
            <h1 className="text-orange-500 text-2xl font-bold">{children} <span className="text-xl">AED</span></h1>
            <p className="font-semibold">Total Earning</p>
        </div>
    </>
}