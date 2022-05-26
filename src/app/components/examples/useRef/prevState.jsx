import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
        const prevState = useRef("");
    const [otherState, setOutherState] = useState("false");
    const toggleOutherState = () => {
        setOutherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State: {prevState.current}</p>
            <p>Current State: {otherState}</p>
            <button className = "btn, btn-primary" onClick={toggleOutherState}>Toggle other state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
