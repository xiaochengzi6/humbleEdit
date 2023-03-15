/**
 * 存在的问题： 不能持有对dom节点的引用
 */

const startTagReg = /^<([a-zA-Z0-9\-]+)(?:([ ]+[a-zA-Z0-9\-]+=[^> ]+))*>/;
const attributeReg = /^(?:[ ]+([a-zA-Z0-9\-]+=[^> ]+))/;
const endTagReg = /^<\/([a-zA-Z0-9\-]+)>/;
const commentReg = /^<!\-\-[^(-->)]*\-\->/;
const docTypeReg = /^<!doctype [^>]+>/;

type Token = {
  type: string
  value: string 
}

interface ParsTions {
  onStartTag: (token: Token) => void
  onAttribute: (token: Token) => void 
  onEndTag: () => void 
  onText: (token: Token) => void 
}

interface AstObj {
  tagName?: string
  attributes?: unknown[]
  text?: string
  children: AstObj[]
}

function parse(html: string, options: ParsTions){
  function advance(num: number){
    html = html.slice(num)
  }

  while(html){
    if(html.startsWith('<')){
      const commentMatch = html.match(commentReg)
      if(commentMatch){
      
        advance(commentMatch[0].length)
        continue
      }

      const docTypeMatch = html.match(docTypeReg)
      if(docTypeMatch){
      
        advance(docTypeMatch[0].length)
        continue
      }

      const endTagMatch = html.match(endTagReg)
      if(endTagMatch) {
        options.onEndTag()
        advance(endTagMatch[0].length)
        continue
      }

      const startTagMatch = html.match(startTagReg)
      if(startTagMatch){
        options.onStartTag({
          type: 'tagStart',
          value: startTagMatch[1]
        })
        advance(startTagMatch[1].length + 1)

        let attributeMath 
        while(attributeMath = html.match(attributeReg)){
          options.onAttribute({
            type: 'attribute',
            value: attributeMath[1]
          })
          advance(attributeMath[0].length)
        }
      }
      advance(1)
      continue
    }else{
      let textEndIndex = html.indexOf('<')
      options.onText({
        type: 'text',
        value: html.slice(0, textEndIndex)
      })
      textEndIndex = textEndIndex === -1 ? html.length : textEndIndex
      advance(textEndIndex)
    }
  }
}

function htmlParser(str: string){
  const ast: AstObj = {
    children: []
  }
  let curparent = ast 
  let prevParent: AstObj
  const domTree = parse(str, {
    onStartTag(token){
      const tag = {
        tagName: token.value,
        attributes: [],
        text: '',
        children: []
      }
      curparent.children.push(tag)
      prevParent = curparent
      curparent = tag 
    },
    onAttribute(token){
      const [name, value] = token.value.split('=')
      curparent.attributes?.push({
        name,
        value: value.replace(/^['"]/, '').replace(/['"]$/, '')
      })
    },
    onEndTag(){
      curparent = prevParent
    },
    onText(token){
      curparent.text = token.value 
    }
  })
  return ast.children[0]
}

export default htmlParser