import Clock from "./images/clock.png"
import ToDoImage from "./images/todo.png"
import Sparx from "./images/sparkx.png"
import Image from "next/image"

export default function Goals() {
    return (
        <div className="p-20 bg-gray-200 h-screen">
            <h1 className="text-8xl pb-5 text-gray-900">Goals</h1>
            <div className="grid grid-cols-6 gap-4 pt-4 pb-5 text-2xl pl-1">
                <div className="col-span-1 text-red-500">Type</div>
                <div className="col-span-3 text-red-500">Goal</div>
                <div className="col-span-2 text-red-500">Sparx collected</div>
            </div>
            <hr className="border border-gray-900"></hr>
            <div className="grid grid-cols-6 gap-4 pt-4 pb-5 text-2xl pl-1 text-gray-900">
                {/* <div className="col-span-1"><img src={Clock} alt="clock icon" width="30" height="30" /></div> */}
                <div className="col-span-1"><Image src={Clock} width="30" height="30" /></div>
                <div className="col-span-3 ">100 hours of Leetcode</div>
                <div className="col-span-2 flex items-center">90 / 100<Image src={Sparx} width="30" height="30" className="inline pl-2" /></div>
            </div>
            <div className="grid grid-cols-6 gap-4 pt-4 pb-5 text-2xl pl-1 text-gray-900">
                <div className="col-span-1"><Image src={ToDoImage} width="30" height="30"/></div>
                <div className="col-span-3 ">Do DSA Homework</div>
                <div className="col-span-2 flex items-center">0 / 65<Image src={Sparx} width="30" height="30" className="inline pl-2" /></div>
            </div>

            <div className="grid grid-cols-6 gap-4 pt-4 pb-5 text-2xl pl-1 text-gray-900">
                {/* <div className="col-span-1"><img src={Clock} alt="clock icon" width="30" height="30" /></div> */}
                <div className="col-span-1"><Image src={Clock} width="30" height="30" /></div>
                <div className="col-span-3 ">100 hours of Leetcode</div>
                <div className="col-span-2 flex items-center">90 / 100<Image src={Sparx} width="30" height="30" className="inline pl-2" /></div>
            </div>
        </div>
    )
}
