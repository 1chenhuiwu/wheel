const result = [{
  id: 1,
  type: 1,
  name: '收费与结算项',
  riskTip: '风险提示： 审核通过。温馨提示：请甲方注意账期较长。建议双方明确开具税票的时间节点',
  reason: '[价格条款]此条款为代理销售合同的核心条款，代理销售合同应列明准确、明晰的进货和销售价格，以及让利空间，以避免引起争议。',
  example: [],
  coordiates: [{
    x: 0,
    y: 0,
    h: 210,
    w: 20,
    pageNum: 1
  }]
}]
const list = JSON.parse(JSON.stringify(resultList))
/* 
  下面是我打印的做的测试，可以看到构造函数的指向是一样，数据的引用空间是不一样的，实现了深度克隆 
*/
console.log(list[0] === resultList[0], '数组中的最外层项') // false
console.log(list[0].coordiates === resultList[0].coordiates, '数组中坐标信息') // false
console.log(resultList[0].coordiates[0] === list[0].coordiates[0], '数组中的坐标信息对象') // false
console.log(resultList[0].example === list[0].example, '数组中的数组') // false
console.log(resultList[0].example.constructor === list[0].example.constructor, '构造函数指向') // true