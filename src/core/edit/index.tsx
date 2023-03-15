import { useEffect, memo } from "react"
import useMutaionObserve from '../../hooks/useMutaionObserve';
import useKeyDown from './../../hooks/useKeyDown';
import useCommand from './../../hooks/useCommand';

const Edit = memo(() => {

  useEffect(() => () => {
    const editDomNode = document.querySelector('#edit') as Element 
    const html = editDomNode?.innerHTML.trim()
    console.log('html', html)

    // 让换行从默认的 div 换成 p 
    // let contents = (`<div class='ql-editor' style="white-space: normal;">${html}<p><br></p></div>`);

    // 设置内容
    // this.setContents(contents);


  }) 
  // 监听 dom 事件
  useMutaionObserve() 
  // 监听 键盘事件
  useKeyDown()
  return (
    <div
      id="edit"
      style={{border: 0}}
      contentEditable="true">
      <p>这是一个编辑器</p>
      <p>开发阶段</p>
    </div>
  )
})

export default Edit