export default function Earning({children}){
    return <>
        <div className="mx-3 p-10 bg-[#fdeee9] text-center rounded-xl shadow">
            <h1 className="text-[#ef5225] text-2xl font-bold">{children} <span className="text-xl">AED</span></h1>
            <p className="font-semibold">Total Earning</p>
        </div>
    </>
}