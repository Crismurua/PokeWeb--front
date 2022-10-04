import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { sortName, sortAttack } from "../../redux/actions";
import { ASCENDENT, DESCENDENT } from "../../redux/actions/actionTypes.js";

export default function OrderBar() {
    const sortedName = useSelector(state => state.sortName);
    const sortedAttack = useSelector(state => state.sortAttack)
    const dispatch = useDispatch();
    const handleName = e => {
        e.preventDefault();
        dispatch(sortName(e.target.value))
    }

    const handleAttack = e => {
        e.preventDefault();
        dispatch(sortAttack(e.target.value))
    }

    return (
        <div >
                <div>
                    <h4>SORTERS</h4>
                    <select value={sortedName} onChange={handleName}>
                        <option value={ASCENDENT} >A-Z</option>
                        <option value={DESCENDENT} >Z-A</option>
                    </select>
                </div>

                <div>
                <select value={sortedAttack} onChange={handleAttack}>
                        <option value={ASCENDENT} >min - max</option>
                        <option value={DESCENDENT} >max - min</option>
                    </select>
                </div>
                    

                </div>
    )

}