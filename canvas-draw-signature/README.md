# draw-pad
- 我的只兼容了移动端，西法的兼容了PC端
## canvas 注意事項
- 正确的设置canvas的宽高有两种  
  1. \<canvas width="300px" height="300px"></canvas>
  2. 获取到canvas这个元素，然后canvas.width = 100;canvas.height = 100
- 其他的css的行内式，外链式都会拉伸canvas