import { useRecoilState } from "recoil"
import {counterState} from "../store/CounterState"

export default function CounterHandler(){
    const [counter, setCounterState] = useRecoilState(counterState);
    return (
        <div>
            <button onClick={() => {console.log('count++'); setCounterState(counter+1)}}>increase</button>
            <button onClick={() => {console.log('count--'); setCounterState(counter-1)}}>decrease</button>
        </div>
    )
}