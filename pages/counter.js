import { useState } from "react";
import boxlayout from "../styles/Container-layout.module.css";


const Counter = () => {

    const [count, setCount ] = useState(0);
    const [text, setText ] = useState('');
    const [emoji, setEmoji] = useState('');
    const [color, setColor] = useState('');


    console.log({text})


    const increment = () => {
        setCount(count + 1)
        setText('Number has increased!')
        setEmoji('🤩')
        setColor('red')
    }

    const decrement = () => {
        setCount(count - 1)
        setText('Number has decreased!')
        setEmoji('😱')
        setColor('green')
    }
    const reset = () => {
        setCount(0);
        setText('Number reset!')
        setEmoji('🥸')
        setColor('blue')
    }

    return(
        <>
        <div className={ boxlayout.sortboxes}>
            <div className={ boxlayout.display } style={{backgroundColor:color}}>
                <p>Display: {count}</p>
            </div>
            <div className={ boxlayout.textalert }>
                <p>{text}</p><p>{emoji}</p>
            </div>
            <section className={ boxlayout.buttons }>
                <div className={ boxlayout.animate }>
                    <button className={ boxlayout.incrementbtn } onClick={increment}> Increment</button>
                </div>
                <div className={ [boxlayout.animate, ] }>
                    <button className={ boxlayout.decrementbtn } onClick={decrement}> Decrement</button>
                </div>
                <div className={ boxlayout.animate }>
                    <button className={ boxlayout.resetbtn } onClick={reset}> Reset</button>
                </div>
            </section>
        </div>
        </>
    )
}

export default Counter;