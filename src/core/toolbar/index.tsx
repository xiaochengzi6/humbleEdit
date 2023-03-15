
import { commands, generaToolBar } from './../../utils/index';
import useCommand from './../../hooks/useCommand';
import { memo } from 'react';

const Toolbar = () => {
  useCommand()

  return (
    <div className="hb-toolbar">
      { generaToolBar() }
    </div>
  )
}


export default memo(Toolbar) 