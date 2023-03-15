
import { useEffect } from 'react';

function useKeyDown() {
  useEffect(() => {
    document.addEventListener('keydown', (event)=> {
      console.log('监听 键盘事件', event)
    })
  })
}

export default useKeyDown