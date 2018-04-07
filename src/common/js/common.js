// 时间戳转化
export function formatDate(timestamp, type) {
  const d = new Date(timestamp)
  const year = d.getFullYear()
  const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1)
  const day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
  const hour = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  switch (type) {
    case 0:
      return `${year}-${month}-${day}`
    case 1:
      return `${year}年${month}月${day}日`
    case 2:
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  }
}

// html字符串去内联style
export function removeStyle(str) {
  str = str.replace(/\s+style="[^"]*"/ig, '') // 去掉<style>;
  str = str.replace(/<br[^>]*?>[\s\S]*?/ig, '')  // 去掉<br>;
  str = str.replace(/[ | ]*\n/g, '\n') // 去除行尾空白
  str = str.replace(/\n[\s| | ]*\r/g, '\n') // 去除多余空行
  str = str.replace(/(^\s*)|(\s*$)/g, '') // 去掉空格
  str = str.replace(/&nbsp;/ig, '') // 去掉&nbsp;
  return str
}
