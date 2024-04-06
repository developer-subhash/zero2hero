import { useRecoilValue } from "recoil";
import CounterHandler from "./CounterHandler";
import { counterState, isEvenState, specificTodo, totalNotifications } from "../store/CounterState";

export default function Counter(){
    const count = useRecoilValue(counterState);
    const isEven = useRecoilValue(isEvenState);

    const notifications = useRecoilValue(totalNotifications);
    console.log('asynchronously fetched data ' + notifications);

    const todo = useRecoilValue(specificTodo(2));
    console.log(todo);
    return (
        <div>
            counter : {count}
            <CounterHandler />
            { !isEven ? <h1>even count</h1> : null}
        </div>
    )
}