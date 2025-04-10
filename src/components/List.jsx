/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react';

function List() {

    const list = [
    ]
    let listItem = list.map((item, index) => {
        return (
            <li className="list-group-item " style={{height: '40px',marginTop: '10px',lineHeight: '40px'}} key={index}>
                <span>
                    {item.name}
                </span>
                <button className="btn btn-danger float-end">删除</button>
            </li>
        )
    })
    return(
        <div>
            <ul style={{marginTop: '30px'}}>
                {listItem}
            </ul>
        </div>
    ) 

}

export default List;


