// 初始化手绘面板
function initSingature() {
  this.canvas = this.$refs.canvas
  // 设置canvas的高度和宽度
  this.canvas.width = 692
  this.canvas.height = 692
  this.ctx = this.canvas.getContext('2d')
  this.ctx.strokeStyle = this.colors[this.color]
  this.ctx.lineWidth = this.drawLineWidth
  this.drawing = false
  this.mousePos = {
    x: 0,
    y: 0
  }
  this.lastPos = this.mousePos
}

// 渲染canvas
function renderCanvas() {
  if (this.drawing) {
    this.ctx.moveTo(this.lastPos.x, this.lastPos.y)
    this.ctx.lineTo(this.mousePos.x, this.mousePos.y)
    this.ctx.stroke()
    this.lastPos = this.mousePos
  }
}

// 获取点击的位置
function getTouchPos(canvasDom, touchEvent) {
  const rect = canvasDom.getBoundingClientRect()
  const obj = {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  }
  // console.log(obj)
  return obj
}

// 绘画开始
function drawTouchStart(e) {
  // console.log('绘画开始')
  clearTimeout(this.drawEndTimer)
  this.drawing = true
  this.mousePos = this.getTouchPos(this.canvas, e)
  this.lastPos = this.getTouchPos(this.canvas, e)
  this.renderCanvas()
}

// 绘画中
function drawTouchMove(e) {
  this.mousePos = this.getTouchPos(this.canvas, e)
  this.renderCanvas()
}

// 绘画结束
function drawTouchEnd() {
  // console.log('绘画结束')
  this.aiCheck()
  this.drawing = false
}

// 清空绘画
function clearDrawPad() {
  // 如果没有beginPath这个方法那么下次开始绘画的时候会显示出上次绘画的线条
  this.ctx.beginPath()
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  this.ctx.closePath()
}

export {
  initSingature,
  renderCanvas,
  getTouchPos,
  drawTouchMove,
  drawTouchEnd,
  drawTouchStart,
  clearDrawPad
}
