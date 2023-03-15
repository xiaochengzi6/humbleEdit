import React from 'react';
import './App.css';
import Edit from './core/edit';
import Toolbar from './core/toolbar';

function App() {
  return (
    <div className="App">
      {/* 工具栏  */}
      <Toolbar />

      {/* 编辑栏 */}
      <Edit />
    </div>
  );
}

export default App;
