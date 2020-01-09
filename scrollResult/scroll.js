import {
  Message
} from "element-ui"
/**
 *元素的滚动动画
 *
 * @export
 * @param {*} ele 滚动的元素
 * @param {*} value 子元素到父元素（滚动元素）的offsetTop
 * @param {number} [duration=500] 滚动的时间
 */
export function scrollAnimation(ele, value, duration = 500) {
  // 清除定时器
  clearInterval(this.p_timer)
  if (!ele || value === undefined) {
    !ele ? Message.error('请指定滚动元素') : Message.error('请指定滚动距离')
    return
  }
  // 滚动步长
  const step = ( value - ele.scrollTop ) / 50
  // 上一次的滚动距离  用来解决世界的scrollTop达到不了子元素的offsetTop问题
  let pre_scrollTop
  this.p_timer = setInterval(() => {
    // 给定个范围 step 大于0 0 < ele.scrollTop - value < step ，说明滚动到位了，如果只是大于的话会有下面的滚动区里不向上滚动的情况
    // 给定个范围 step 小于0 step < ele.scrollTop - value < 0 ，说明滚动到位了，如果只是大于的话会有下面的滚动区里不向上滚动的情况
    if (step > 0 && ele.scrollTop === value || ((ele.scrollTop - value) > 0 && (ele.scrollTop - value) < step) || pre_scrollTop === ele.scrollTop) {
      clearInterval(this.p_timer)
      // 解决因步长太大导致滚动位置出现大偏差问题
      ele.scrollTop = value
      return
    } else if(step < 0 && ele.scrollTop === value || ((ele.scrollTop - value) < 0 && (ele.scrollTop - value) > step)|| pre_scrollTop === ele.scrollTop) {
      clearInterval(this.p_timer)
      // 解决因步长太大导致滚动位置出现大偏差问题
      ele.scrollTop = value
      return
    }
    pre_scrollTop = ele.scrollTop
    ele.scrollTop += step
  }, 10)
}