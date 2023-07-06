import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./components/Welcome";
import { SOME_ACTION_REQUEST } from "./reducers/reducer";

export default React.memo(() => {

    /**
     * TODO: this is just an example, replace this for a real scenario or delete it.
     */

    const dispatch = useDispatch()

    const state = useSelector( (state: any) => state )

    useEffect(() => {
        dispatch({ type: SOME_ACTION_REQUEST })
    }, [])

    return (
        <div>
            <Welcome />
            <ul>
                {state.home.list.map((elem: string, i: number) => <li key={i}>{elem}</li> )}
            </ul>
        </div>
    )
})