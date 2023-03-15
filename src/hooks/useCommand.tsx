import { commands } from "../utils"
import { useEffect } from 'react';

function useCommand() {
  // 注意：这里需要在组件卸载的时候去执行，不然就会导致多次渲染从而失效的问题
  useEffect(() => () => {
    commands.forEach((command) => {
      const commandNode = document.querySelector(`#${command}`)
      commandNode?.addEventListener('click', () => {
        document.execCommand(commandNode.id, false, undefined)
        /** 
         * todo
         * 这里针对不同的 command 做出改变
         */
      })
    })
  }, [])
}

export default useCommand