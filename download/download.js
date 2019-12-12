let eleLink = document.createElement('a')
// 没个卵用决定不了文件的名字
eleLink.download =  "合同名字"
eleLink.target = '_blank'
eleLink.style.display = 'none'
eleLink.href = this.downloadUrl
// 触发点击
document.body.appendChild(eleLink)
eleLink.click()
// 然后移除
document.body.removeChild(eleLink)