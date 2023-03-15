
// 处理 data 数据

const text = '<div><p>hello, word</p></div>'

HtmlParster(text)
export function HtmlParster(html: string) {
  const value = matchHtml(html) 
}

function matchHtml(dom: string){
  const domReg = /(?<=(<span[^>]*?>)).*?(?=(<\/span>))/g
  const value = dom.match(domReg)
  console.log(value)
}
