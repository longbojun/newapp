// dom操作相关的代码

/**
 * 添加class
 * @param el
 * @param className
 */
export function addClass(el, className) {
  // 首先判断DOM元素上是否有要添加的className
  if (hasClass(el, className)) {
    return
  }
  // 如果DOM元素上没有要添加的className
  // DOM元素上的className以空格分隔，放到新的数组newClass中
  let newClass = el.className.split(' ')
  // 再将新添加的className，push到新数组newClass中
  newClass.push(className)
  // 最后将数组newClass的数组元素以空格的形式转化为字符串，赋值给DOM的class上
  el.className = newClass.join(' ')
}

/**
 * 判断是否有class
 * @param el
 * @param className
 * @returns {boolean}
 */
export function hasClass(el, className) {
  // 创建正则，className可能在的位置class="classname1 classname2 classname3"
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  // 返回正则校验的结果
  return reg.test(el.className)
}

/**
 * 获取(设置)DOM上的data-属性的值
 * 如果val存在，就获取，否则就是设置
 * @param el
 * @param name
 * @param val（不传，即获取属性值）
 * @returns {*}
 */
export function getData(el, name, val) {
  // 定义前缀
  const prefix = 'data-'
  // 拼接
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
