/**
 * 时间日期相关操作
 */


/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成 2018/09/23 11:54:16
 * @param datetime 国际化日期格式
 */
export function format (datetime) {
  return formatWithSeperator(datetime, "/", ":");
}

/**
 * 时间格式化
 * 将 2018-09-23T11:54:16.000+0000 格式化成类似 2018/09/23 11:54:16
 * 可以指定日期和时间分隔符
 * @param datetime 国际化日期格式
 */
export function formatWithSeperator (datetime, dateSeprator, timeSeprator) {
  if (datetime != null) {
    const dateMat = new Date(datetime);
    const year = dateMat.getFullYear();
    const month = dateMat.getMonth() + 1;
    const day = dateMat.getDate();
    const hh = dateMat.getHours();
    const mm = dateMat.getMinutes();
    const ss = dateMat.getSeconds();
    const timeFormat = year + dateSeprator + month + dateSeprator + day + " " + hh + timeSeprator + mm + timeSeprator + ss;
    return timeFormat;
  }
}

/**
 *
 * @param objD Date()时间对象
 */
function fnW(str) {
  let num;
  str >= 10 ? num = str : num = "0" + str;
  return num;
}

export function showLocale() {
  let date = new Date();
  let year = date.getFullYear(); //当前年份
  let month = date.getMonth(); //当前月份
  let data = date.getDate(); //天
  let hours = date.getHours(); //小时
  let minute = date.getMinutes(); //分
  let second = date.getSeconds(); //秒
  let day = date.getDay(); //获取当前星期几
  let ampm = hours < 12 ? 'AM' : 'PM';

  if  (day==0)  day="星期日";
  if  (day==1)  day="星期一";
  if  (day==2)  day="星期二";
  if  (day==3)  day="星期三";
  if  (day==4)  day="星期四";
  if  (day==5)  day="星期五";
  if  (day==6)  day="星期六";

  let str =  year + '年' + (month + 1) + '月' + data + "日 - "
    + "    " +fnW(hours) + "时" + fnW(minute) + "分" + fnW(second) + "秒"
    + "    " + " " + day;
  return str;

}


