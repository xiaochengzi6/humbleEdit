import { useEffect } from "react"

const OBSERVER_CONFIG = {
  attributes: true,
  characterData: true,
  characterDataOldValue: true,
  childList: true,
  subtree: true,
}

const useMutaionObserve = () => {
   useEffect(() => {
    return () => {
      const observer = new MutationObserver((mutations: MutationRecord[]) => {
        console.log('触发 dom', mutations)
        /** 
         * 这里去监听 dom 发生的变化 用于处理数据
        */
      })
      const editNode = document.querySelector('#edit') as Element
      observer.observe(editNode, OBSERVER_CONFIG)
    }
  }, [])
}


export default useMutaionObserve