/*!
* resetScreenSize.js content v1.0
*
* Copyright 2021
*
* Designed and built by JiangHongyu
*/

import appConfig from './appConfig'
import $ from 'jquery';

export function pageResize(callback) {
  let init = () => {
    console.log("起始宽高：" + window.innerWidth + "," + window.innerHeight);

    let _el = document.getElementById('canvas'); // 'app';
    let _html = $("html"); // 当前页根元素<html>

    let hScale = window.innerHeight / appConfig.screen.height;
    let wScale = window.innerWidth / appConfig.screen.width;
    let pageH = window.innerHeight;
    let pageW = window.innerWidth;

    let isWider = (window.innerWidth / window.innerHeight) >= (appConfig.screen.width / appConfig.screen.height);
    console.log("宽屏：" + isWider);

    if (isWider) {
      _el.style.height = window.innerHeight + 'px'; // '100%';
      _el.style.width = pageH * appConfig.screen.width / appConfig.screen.height + 'px';
      _el.style.top = '0px';
      _el.style.left = (window.innerWidth - pageH * appConfig.screen.width / appConfig.screen.height) * 0.5 + 'px';
      console.log("Wider-调整后宽高：" + _el.style.width + "," + _el.style.height);
    } else {
      _el.style.width = window.innerWidth + 'px'; // '100%';
      _el.style.height = pageW * appConfig.screen.height / appConfig.screen.width + 'px';
      _el.style.left = '0px';
      _el.style.top = 0.5 * (window.innerHeight - pageW * appConfig.screen.height / appConfig.screen.width) + 'px';
      console.log("UnWider-调整后宽高：" + _el.style.width + "," + _el.style.height);
    }
    console.log("调整前的根字体：" + _html.css("fontSize"));
    console.log(_el.style.width);
    console.log(appConfig.screen.scale);
    console.log(parseFloat(_el.style.width)/appConfig.screen.scale);
    _html.css({fontSize: (parseFloat(_el.style.width) / appConfig.screen.scale) + 'px'});
    console.log("调整后的根字体：" + _html.css("fontSize"));
  };


  /*
  获取移动端屏幕是否翻转
  判断windows中是否有这个属性orientationchange 因为orientationchange会遇到兼容性问题，有的浏览器不支持  resize窗体发生改变就会触发这个事件
   */
  let resizeEvt = 'orientationchange' in window ? 'orientation' : 'resize';
  // 判断addEventListener是否存在，addEventListener的第三个参数true 代表捕获 false是冒泡
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, init, false);
  // DOMContentLoaded可以检测dom是否加载完成
  document.documentElement.addEventListener('DOMContentLoaded', init, false); // DOMContentLoaded可以检测dom是否加载完成
  init();
}


let init = () => {
  console.log("起始宽高：" + window.innerWidth + "," + window.innerHeight);

  let _el = document.getElementById('canvas');

  let _html = $("html"); // 当前页根元素<html>

  let hScale = window.innerHeight / appConfig.screen.height;
  let wScale = window.innerWidth / appConfig.screen.width;
  let pageH = window.innerHeight;
  let pageW = window.innerWidth;

  let isWider = (window.innerWidth / window.innerHeight) >= (appConfig.screen.width / appConfig.screen.height);

  if (_el != null) {
    if (isWider) {
      _el.style.height = window.innerHeight + 'px'; // '100%';
      _el.style.width = pageH * appConfig.screen.width / appConfig.screen.height + 'px';
      _el.style.top = '0px';
      _el.style.left = (window.innerWidth - pageH * appConfig.screen.width / appConfig.screen.height) * 0.5 + 'px';
      console.log("Wider-调整后宽高：" + _el.style.width + "," + _el.style.height);
    } else {
      _el.style.width = window.innerWidth + 'px'; // '100%';
      _el.style.height = pageW * appConfig.screen.height / appConfig.screen.width + 'px';
      _el.style.left = '0px';
      _el.style.top = 0.5 * (window.innerHeight - pageW * appConfig.screen.height / appConfig.screen.width) + 'px';
      console.log("UnWider-调整后宽高：" + _el.style.width + "," + _el.style.height);
    }
    _el.style.height = window.innerHeight + 'px'; // '100%';
    _el.style.width = window.innerWidth + 'px';
    _el.style.top = '0px';
    _el.style.left = '0px';

    console.log("调整前的根字体：" + _html.css("fontSize"));
    let size = (parseFloat(_el.style.width) + parseFloat(_el.style.height)) / appConfig.screen.scale * 0.74;
    console.log(size + "---" + (parseFloat(_el.style.width) / appConfig.screen.scale));
    console.log(parseFloat(_el.style.width)/appConfig.screen.scale + parseFloat(_el.style.height)/ appConfig.screen.scale/2)

    //_html.css({fontSize: (parseFloat(_el.style.width) / appConfig.screen.scale) + 'px', overflowY: 'hidden'});
    _html.css({fontSize: (parseFloat(_el.style.width) / appConfig.screen.scale) + 'px'});
    //_html.css({fontSize: size + 'px'});
    console.log("调整后的根字体：" + _html.css("fontSize"));
  } else {
    console.warn('can not find the dom named with [canvas]');
  }
};
export function pageResize4BigScreen(callback) {
  /*
  获取移动端屏幕是否翻转
  判断windows中是否有这个属性orientationchange 因为orientationchange会遇到兼容性问题，有的浏览器不支持  resize窗体发生改变就会触发这个事件
   */
  let resizeEvt = 'orientationchange' in window ? 'orientation' : 'resize';
  // 判断addEventListener是否存在，addEventListener的第三个参数true 代表捕获 false是冒泡
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, init, false);
  // DOMContentLoaded可以检测dom是否加载完成
  document.documentElement.addEventListener('DOMContentLoaded', init, false);
  init();
}
export function pageResize4BigScreenDestroy(callback) {
  let resizeEvt = 'orientationchange' in window ? 'orientation' : 'resize';
  // 判断addEventListener是否存在，addEventListener的第三个参数true 代表捕获 false是冒泡
  window.removeEventListener(resizeEvt, init, false);
  // DOMContentLoaded可以检测dom是否加载完成
  document.documentElement.removeEventListener('DOMContentLoaded', init, false);
}
