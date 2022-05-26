import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        console.log(localStorage);
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        console.log(localStorage);
    };
    return (
        <>
        <CardWrapper>
            {isAuth ? <Component {...props} /> : <SmallTitle>SimpleComponent</SmallTitle>}
            <button className="btn btn-primary mx-2" onClick={onLogin}>OnLogin</button>
            <button className="btn btn-primary mx-2" onClick={onLogOut}>OnLogOut</button>
        </CardWrapper>
        </>
    );
};

export default withFunction;
