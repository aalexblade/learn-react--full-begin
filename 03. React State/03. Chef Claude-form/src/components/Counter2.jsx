
import React from "react"

function CounterTwo(){

    const [count, setCount] = React.useState(0)

    function add (){
        setCount((prevCount)=>  prevCount +1)
        console.log(count)
    }

    function subtract (){
        setCount((prevCount)=>  prevCount -1)
    }

    return(
        <>
       
            <button
                className="minus"
                onClick={subtract}
                aria-label="Decrease count"
            >-</button>

            <h2 className="count">{count}</h2>

            <button
                className="plus"
                onClick={add}
                aria-label="Increase count"
            >+</button>
       
    </>
    )
}

export default CounterTwo