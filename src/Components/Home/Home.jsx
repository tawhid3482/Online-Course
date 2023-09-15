import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import toast from "react-hot-toast";

const Home = () => {
    const [carts, setCarts] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalTime, setTotalTime] = useState(0)

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    const handleCart = (cart) => {
        const isExits = selectCourse.find(item => item.id == cart.id)
        let count = cart.credit

        if (isExits) {
            return toast.error('You already selected sorry')
        }
        else {
            selectCourse.forEach((item) => {
                count = count + item.credit;
              });
            const creditRemaining = 20 - count
            if( count > 20){
                return toast.error('oops sorry your credit finish')
            }else{
                setTotalTime(count)
                setRemaining(creditRemaining)
            }
            
        }
        const newCridit = [...selectCourse, cart]
        setSelectCourse(newCridit)
    }

    return (
        <div className="flex flex-col md:flex-row gap-1 p-0 my-5 ">
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mx-auto">
                {
                    carts.map(cart => <Cart key={cart.id} handleCart={handleCart} cart={cart}></Cart>)
                }

            </div>

            <div className=" flex justify-center w-64 bg-slate-100  p-4 rounded-xl ml-5">
                <Course selectCourse={selectCourse} remaining={remaining} totalTime={totalTime}></Course>
            </div>
        </div>
    );

}

export default Home;