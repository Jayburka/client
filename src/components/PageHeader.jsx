/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-15 20:06:17
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-15 20:20:27
 * @FilePath: \client\src\components\PageHeader.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react'
import styles from '../css/PageHeader.module.css';

export default function PageHeader(props) {
  return (
    <div className={styles.row}>
        <div className={styles.pageHeader}>
            {props.title}
        </div>
        {/* 分类组件*/}
        <div className={styles.PageHeaderRight}>

        </div>
    </div>
  )
}
