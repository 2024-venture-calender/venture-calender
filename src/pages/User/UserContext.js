import React, { useReducer, createContext, useContext} from 'react';

const initialRegists = [
    {
        email: 'test@example.com',
        pw: 'test2323@@@',
        name: '안홍영',
        phone: '01022887027'
    },
    {
        email: 'abc@example.com',
        pw: 'abc123@@@',
        name: '박세연',
        phone: '01012345678'
    },
    {
        email: 'abcd@example.com',
        pw: 'abcd123@@@',
        name: '도영익',
        phone: '01011111111'
    },
    {
        email: 'abcde@example.com',
        pw: 'abcde123@@@',
        name: '진윤재',
        phone: '01022222222'
    }
];



function registReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.regist);
    }
}



const RegistStateContext = createContext();
const RegistDispatchContext = createContext();
const RegistNextIdContext = createContext();

export function RegistProvider({ children }) {
const [state, dispatch] = useReducer(registReducer, initialRegists);
// const nextId = useRef(5);

return (
    <RegistStateContext.Provider value={state}>
    <RegistDispatchContext.Provider value={dispatch}>
        {/* <RegistNextIdContext.Provider value={nextId}> */}
        {children}
        {/* </RegistNextIdContext.Provider> */}
    </RegistDispatchContext.Provider>
    </RegistStateContext.Provider>
);
}

export function useRegistState() {
    const context = useContext(RegistStateContext);
    return context;
}

export function useRegistDispatch() {
    const context = useContext(RegistDispatchContext);
    return context;
}

export function useRegistNextId() {
    const context = useContext(RegistNextIdContext);
    return context;
}