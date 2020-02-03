import { Message } from "element-ui"

/**
 *元素的滚动动画
 *
 * @export
 * @param {*} ele 滚动的元素
 * @param {*} value 子元素到父元素（滚动元素）的offsetTop
 */
export function scrollAnimation(ele, value) {

  // 清除定时器
  clearInterval(this.pTimer)
  if (!ele || value === undefined) {
    !ele ? Message.error("请指定滚动元素") : Message.error("请指定滚动距离")
    return
  }

  // 滚动步长
  const step = (value - ele.scrollTop) / 50

  // 上一次的滚动距离  用来解决世界的scrollTop达到不了子元素的offsetTop问题
  let preScrollTop

  // 理论上每次滚动后的scrollTop，为了解决下一条时，每次实际的步长就加了一半的问题，比如18 + 2 = 19 ，我也是很无奈啊，不知道为啥
  let theroyScrollTop = ele.scrollTop

  this.pTimer = setInterval(() => {

    // 给定个范围 step 大于0 0 < ele.scrollTop - value < step ，说明滚动到位了，如果只是大于的话会有下面的滚动区里不向上滚动的情况
    // 给定个范围 step 小于0 step < ele.scrollTop - value < 0 ，说明滚动到位了，如果只是大于的话会有下面的滚动区里不向上滚动的情况
    if (
      (step > 0 && ele.scrollTop === value) ||
      (ele.scrollTop - value > 0 && ele.scrollTop - value < step) ||
      preScrollTop === ele.scrollTop
    ) {
      clearInterval(this.pTimer)
      this.pTimer = null

      // 解决因步长太大导致滚动位置出现大偏差问题
      ele.scrollTop = value

      return
    } else if (
      (step < 0 && ele.scrollTop === value) ||
      (ele.scrollTop - value < 0 && ele.scrollTop - value > step) ||
      preScrollTop === ele.scrollTop
    ) {
      clearInterval(this.pTimer)
      this.pTimer = null

      // 解决因步长太大导致滚动位置出现大偏差问题
      ele.scrollTop = value

      return
    }

    preScrollTop = ele.scrollTop
    theroyScrollTop = ele.scrollTop = theroyScrollTop + step
  }, 10)
}
