/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-10 21:40:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-17 15:47:48
 * @FilePath: \client\src\pages\Issue.jsx
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React from 'react'
import PageHeader from '../components/PageHeader'
import styles from '../css/Issue.module.css';
import { useEffect, useState } from 'react';
import { getIssueList } from '../api/issue';
import IssueItem from '../components/IssueItem';
import { Pagination } from 'antd';
import AddIssue from '../components/AddIssue';
import Recommend from '../components/Recommend';
import ScoreRank from '../components/ScoreRank';
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

  let List = []
  for(let i = 0; i < issueList.length; i++) {
    List.push(
        <IssueItem issue={issueList[i]} key={i}/>
    )
  }
  function handlePageChange(page, pageSize) {
    setPageInfo({ ...pageInfo, currentPage: page, pageSize: pageSize });
  }
  return (
    <div className={styles.Container}>
        <PageHeader title="问答列表" />
        {/* 问答列表  */}
        <div className={styles.issueContainer}>
            <div className={styles.leftSide}>
               {List}
               <div className="paginationContainer">
                  <Pagination
                    showQuickJumper
                    defaultCurrent={1}
                    current={pageInfo.currentPage}  
                    pageSize={pageInfo.pageSize}
                    total="10"
                    onChange={handlePageChange}
                  />
               </div>
            </div>
            {/* 右侧内容 */}
            <div className={styles.rightSide}>
               <AddIssue />
               <div style={{
                        marginBottom : "30px"
                    }}><Recommend/>
                </div>
                <div style={{
                        marginBottom : "30px"
                    }}><ScoreRank/>
                </div>
            </div>
        </div>
     </div>
  )
}
