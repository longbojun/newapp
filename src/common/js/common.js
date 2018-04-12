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

/**
 * 手机号码正则：
 *130 131 132 133 134 135 136 137 138 139
 *147
 *150 151 152 153（缺少154） 155 156 157 158 159
 *173 176 177 178
 *180 181 182 183 184 185 186 187 188 189
 *199
 * @returns {RegExp}
 */
export function regPhone() {
  return /^((13[0-9])|(147)|(15([0-3]|(5-9)))|(17[3678])|(18[0-9])|(199))\d{8}$/
}
/**
 * 身份证验证
 * 15位和18位身份证验证（年龄在1800-2099）
 */
export function regID() {
  return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
}
