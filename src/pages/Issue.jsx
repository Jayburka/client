/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-10 21:40:06
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-15 20:36:32
 * @FilePath: \client\src\pages\Issue.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react'
import PageHeader from '../components/PageHeader'
import styles from '../css/Issue.module.css';
import { useEffect, useState } from 'react';
import { getIssueList } from '../api/issue';
export default function Issue() {
  
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    currentPage: 1,
  });
  // 问答列表
  const [issueList, setIssueList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await getIssueList({
        current: pageInfo.currentPage,
        pageSize: pageInfo.pageSize,
        issueStatus: true,
      });
      const { data } = res;
      if (data?.data?.length > 0) {
        setIssueList(data.data);
        setPageInfo({
          currentPage: data.currentPage,
          pageSize:data.eachPage,
          total: data.count,
        });
      }
    }
    fetchData();
  }, [pageInfo.currentPage, pageInfo.pageSize]);

  return (
    <div className={styles.Container}>
        <PageHeader title="问答列表" />
        {/* 问答列表  */}
        <div className={styles.issueContainer}>
            <div className={styles.leftSide}>
               
            </div>
            {/* 右侧内容 */}
            <div className={styles.rightSide}>
               
            </div>
        </div>
     </div>
  )
}
