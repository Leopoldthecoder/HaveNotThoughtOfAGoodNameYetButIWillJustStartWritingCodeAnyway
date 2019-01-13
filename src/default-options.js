export default {
  // boolean, 添加空格
  spacing: true,

  // boolean, 全角符号与字母数字之间允许有空格
  spaceBetweenFullwidthPunctuationAndAlphabets: false,

  // boolean, 允许连续感叹号
  successiveExclamationMarks: false,

  // boolean, 使用全角符号替换半角符号，作用于 ! ( ) "', . : ; ?
  replaceHalfwidthWithFullwidth: true,

  // string: 'none' | '...' | 'all'，允许的省略号
  ellipsisTolerance: 'none',

  // string: 'double' | 'single' | 'none'，使用直角引号替换的弯引号
  replaceWithCornerQuotes: 'double',

  // boolean, 数字周围使用半角括号
  halfwidthParenthesisAroundNumbers: true
}
