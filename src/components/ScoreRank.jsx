/*
 * @Author: qiangqiang.cao
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { getUserByPointsRankApi } from '../api/user';

export default function ScoreRank() {
    const [scoreRank, setScoreRank] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getUserByPointsRankApi();
            setScoreRank(res.data);
        }
        fetchData();
    }, [])

    const scoreRankList = scoreRank.map((item, index) => {
        return <ScoreItem key={index} item={item} rank={index + 1}/>
    })
    
    return (
        <Card title="积分排行榜">
            {scoreRankList}
        </Card>
    );
}

