/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-16 09:47:52
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-16 10:41:48
 * @FilePath: \client\src\components\IssueItem.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React, { useEffect } from 'react'
import styles from '../css/IssueItem.module.css';
import { formatDate } from '../utils/tools';
import { useSelector,useDispatch } from 'react-redux';
import { getUserById } from '../api/user';
import { Tag } from 'antd';

export default function IssueItem(props) {
    const dispatch = useDispatch();
    const typeList = useSelector(state => state.type.typeList);
    const [userInfo, setUserInfo] = useState({});
    const colorArr = ["#108ee9", "#2db7f5", "#f50", "green", "#87d068", "blue", "red", "purple"];
    useEffect(() => {
        if(!typeList.length){
            dispatch(getTypeList());
        }
        async function fetchData(){
            const res = await getUserById(props.issueInfo.userId);
            setUserInfo(res.data);
        }
        fetchData();
    }, []);
    const type = typeList.find(item => item._id === props.issueInfo.typeId);

  return (
    <div className={styles.container}>
        <div className={styles.issueNum}>
            <div>{props.issueInfo.issueNum}</div>
            <div>回答</div>
        </div>
        <div className={styles.issueNum}>
            <div>
                {props.issueInfo.scanNumber}
            </div>
            <div className={styles.issueContainer}>
                <div className={styles.top}>{props.issueInfo.issueTitle}</div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <Tag color={colorArr[typeList.indexOf(type) % colorArr.length]}>{type?.typeName}</Tag>
                    </div>
                    <div className={styles.right}>
                        <Tag color="volcano">{userInfo.userName}</Tag>
                        <span>{formatDate(props.issueInfo.issueDate,'year')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
