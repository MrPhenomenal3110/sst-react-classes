import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import categoryReducer, { loadCategories } from '../../store/categoryReducer';

function Categories() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCategories);
    }, [])

    console.log(categories)

    return (
    <div>
        <h2>Categories</h2>
        <div>
            {categories.map((category) => {
                return(
                    <div>
                        {category}
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Categories