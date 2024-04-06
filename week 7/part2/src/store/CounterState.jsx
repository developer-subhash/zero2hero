import {atom, atomFamily, selector} from 'recoil';
import axios from 'axios';
import {TODOS} from './todos'

export const counterState = atom({
    key: 'counterState',
    default: 0
});

// selector is also used to create state but it is used when this state is depend on another state
export const isEvenState = selector({
    key: 'isEvenState',
    get: (props) => {
        const count = props.get(counterState);
        return count % 2;
    }
})


// asynchronous task
export const notifications = atom({
    key: 'networkatom',
    default: selector({ // need to use selector , can't use async directly in default
        key: 'networkatomselector',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications');
            return res.data;
        }
    })
})


export const totalNotifications = selector({
    key: 'totalNotifications',
    get: (props) => {
        const allnotifications = props.get(notifications);

        return allnotifications.network+ " " + allnotifications.jobs +" "+ allnotifications.notifications+" " + allnotifications.messaging;
    }
})


// atom family -> create an atom for a todo
// check recoiljs official docs for more ...
export const specificTodo = atomFamily({
    key: 'specificTodo',
    default: id => {
        return TODOS.find(todo => todo.id === id)
    }
})