# 深度克隆
- 现在就写了深度克隆的JSON.parse JSON.stringify 的深度克隆方法，数据结构是Array和Object，不会出现问题；这种深度克隆，存在问题如下
  1. 他无法实现对函数 、RegExp等特殊对象的克隆
  2. 稀疏数组复制错误
  3. 会抛弃对象的constructor,所有的构造函数会指向Object
  4. 对象有循环引用,会报错
    