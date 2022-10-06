import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { sortName, sortAttack } from "../../redux/actions";
import { ASCENDENT, DESCENDENT } from "../../redux/actions/actionTypes.js";
import "./OrderBar.css";

export default function OrderBar() {
    const sortedName = useSelector(state => state.sortName);
    const sortedAttack = useSelector(state => state.sortAttack)
    const dispatch = useDispatch();
    
    const handleName = e => {
        
        dispatch(sortName(e.target.value))
    }

    const handleAttack = e => {
        
        dispatch(sortAttack(e.target.value))
    }



    return (
        <div className="order-container">
                    
                
                    <h4>SORTERS</h4>
                    <select value={sortedName} onChange={handleName}>
                        <option >NAME</option>
                        <option value={ASCENDENT} >A-Z</option>
                        <option value={DESCENDENT} >Z-A</option>
                    </select>
                

                
                <select value={sortedAttack} onChange={handleAttack}>
                        <option >ATTACK</option>
                        <option value={ASCENDENT} >min - max</option>
                        <option value={DESCENDENT} >max - min</option>
                    </select>

                
                    

                </div>
    )

}