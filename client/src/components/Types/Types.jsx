import React from "react";
import * as actions from "../../redux/actions/index.js";
import {useDispatch, useSelector} from "react-redux";
import Type from "../Type/Type.jsx";

export default function Types() {
    let dispatch = useDispatch()
    let types = useSelector(state => state.types)

    React.useEffect(()=> {
        dispatch(actions.getTypes())
    }, [types])
    return (
        <div>
            <h2>All Pokemon's types</h2>
            {types.map(t => (
                <Type
                key={t.id}
                id={t.id}
                name={t.name}
                img={t.img}
                />
            ))
            }
        </div>
    )
};