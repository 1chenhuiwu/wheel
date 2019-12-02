let apperLongTouchStatusTimer = null
let hideLongTouchStatusTimer = null
let aaperLongTouchStatustime = 1000 // 按住此时间，出现长按状态
let hideLongTouchStatusTime = 1000 // 松开此时间，隐藏长按状态

// 开始事件
function touchstart() {
  apperLongTouchStatusTimer = setTimeout(() => {
    // 业务逻辑
  }, aaperLongTouchStatustime)
}

// 移动事件
function touchmove() {
  // 如果移动就算不按，就清除掉长按状态定时器
  clearTimeout(apperLongTouchStatusTimer)
}

// 结束事件
function touchend() {
  // 清除出现长按状态定时器
  clearTimeout(apperLongTouchStatusTimer)

  // 隐藏长按状态定时器
  hideLongTouchStatusTimer = setTimeout(() => {
    // 业务逻辑
  }, hideLongTouchStatusTime)
}

export {
  touchstart, touchmove, touchend
}
