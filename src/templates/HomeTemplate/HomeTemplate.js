import { Fragment } from "react";
import { Route } from 'react-router-dom';

export const HomeTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => { 
				//props.location, props.history, props.match
        return <Fragment>

            <div>
                <Component {...propsRoute} />
            </div>

        </Fragment>

    }} />
}