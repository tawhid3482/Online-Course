import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";

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
        const isExits = selectCourse.find(item => item.id === cart.id)
        const count = cart.credit;
        if (isExits) {
            return alert('You cannont select one course in multipul time')
        }
        else {
            selectCourse.forEach(item => {
                count = count + item.credit
            })
            const remainingCredit = 20 - count
            if (count > 20) {
                return alert('tk ses ar hobe na')
            }
            else {
                setRemaining(remainingCredit)
                setTotalTime(count)
            }
            const newCridit = [...selectCourse, cart]
            setSelectCourse(newCridit)


        }
    }

    return (
        <div className="flex gap-5 p-0 mt-5 w-11/12">
            <div className="grid grid-cols-3  gap-4 mx-auto">
                {
                    carts.map(cart => <Cart key={cart.id} handleCart={handleCart} cart={cart}></Cart>)
                }

            </div>
            <div className="">
                <Course selectCourse={selectCourse} remaining={remaining} totalTime={totalTime}></Course>
            </div>
        </div>
    );
};

export default Home;