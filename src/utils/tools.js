/*
 * @Author: qiangqiang.cao
 * @Date: 2025-04-16 10:06:56
 * @LastEditors: OBKoro1
 * @LastEditTime: 2025-04-16 10:07:37
 * @FilePath: \client\src\utils\tools.js
 * Copyright (c) 2023 - 2024, Shanghai Rural Commercial Bank Co., LTD. ALL rights reserved.
 */
/**
 * 放置一些工具函数
 */

/**
 * 格式化时间戳
 * @param {*} timestamp
 * @returns
 */
export function formatDate(timestamp, part) {
    if (!timestamp) {
      return;
    }
    let date = new Date(parseInt(timestamp));
  
    let year = date.getFullYear(); // 年
    let month = date.getMonth() + 1; // 月
    let day = date.getDate(); // 日
  
    let hour = date.getHours(); // 时
    let minutes = date.getMinutes(); // 分
    let seconds = date.getSeconds(); // 秒
  
    let weekArr = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    let week = weekArr[date.getDay()];
  
    // 需要给一位数前面加 0
    // 9 点 ----> 09:45:03
  
    if (month >= 1 && month <= 9) {
      // month += '0'; // a += b ----> a = a + b
      month = "0" + month;
    }
  
    if (day >= 0 && day <= 9) {
      day = "0" + day;
    }
  
    if (hour >= 0 && hour <= 9) {
      hour = "0" + hour;
    }
  
    if (minutes >= 0 && minutes <= 9) {
      minutes = "0" + minutes;
    }
  
    if (seconds >= 0 && seconds <= 9) {
      seconds = "0" + seconds;
    }
  
    var str = "";
  
    switch (part) {
      case "year": {
        str = `${year}-${month}-${day}`;
        break;
      }
      case "time": {
        str = `${hour}:${minutes}:${seconds} `;
        break;
      }
      case "year-time": {
        str = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
        break;
      }
      case "time-week": {
        str = `${hour}:${minutes}:${seconds} ${week}`;
        break;
      }
      default: {
        str = `${year}-${month}-${day} ${hour}:${minutes}:${seconds} ${week}`;
      }
    }
  
    return str;
  }
  
  