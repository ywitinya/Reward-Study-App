export default function Goals() {
    return (
        <div className="p-20 bg-gray-200">
            <h1 className="text-8xl pb-5 text-gray-900">Goals</h1>
            <div className="grid grid-cols-6 gap-4 pt-4 pb-5 text-2xl pl-1">
                <div className="col-span-1 bg-red-500">Type</div>
                <div className="col-span-3 bg-blue-300">Goal</div>
                <div className="col-span-2 bg-green-300">Sparx collected</div>
            </div>
            <hr className="border border-gray-900"></hr>
            <div className="grid grid-cols-6 gap-4 pt-4 pb-5 text-2xl pl-1 text-gray-900">
                <div className="col-span-1">Time</div>
                <div className="col-span-3 ">100 hours of Leetcode</div>
                <div className="col-span-2">90 / 100</div>
            </div>
        </div>
    )
}
