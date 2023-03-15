import { ReactElement } from 'react';
import Button from '../component/Button';
import Select, { SelectOptions } from './../component/Select/index';

interface CommandMapType {
  [Key: string]: {
    name: string,
    command: string,
    render?: () => ReactElement,
  }
}

export const commandMap: CommandMapType = {
  // 文档背景颜色
  backColor: {
    name: '背景颜色',
    command: 'backColor',
    render: () => {
      const options = [
        { label: '黑', value: 'black' },
        { label: '红', value: 'red' },
        { label: '橙', value: 'orange' },
        { label: '蓝', value: 'blue' },
        { label: '绿', value: 'green' },
        { label: '白', value: 'white' },
        { label: '灰', value: '#999' },
        { label: '浅灰', value: '#ddd' },
      ];
      return selectRender('backColor', options, '背景颜色');
    },
  },

  // 选中文字或插入点的粗体字效果  统一使用 <strong>
  bold: {
    name: '加粗',
    command: 'bold',
  },

  // 拷贝当前内容到剪切板
  copy: {
    name: '拷贝',
    command: 'copy',
  },

  // 通过传入一个布尔类型的参数来使能文档内容的可编辑性
  contentReadOnly: {
    name: '区域是否可以编辑',
    command: 'contentReadOnly',
    render: () => {
      const options = [
        { label: '是', value: true },
        { label: '否', value: false },
      ];
      return selectRender('contentReadOnly', options, '区域是否可以编辑');
    },
  },

  // 为选中内容创建一个 锚连接，但需要 url 做为参数传入
  createLink: {
    name: '创建link',
    command: 'createLink'
  },

  // 剪切当前文字到剪切板
  cut: {
    name: '剪切',
    command: 'cut'
  },

  // 给选中文字加上 <small> 标签，或在选中点插入该标签。(IE 浏览器不支持)
  decreaseFontSize: {
    name: 'small',
    command: 'decreaseFontSize',
  },

  // 删除选中部分
  delete: {
    name: '删除',
    command: 'delete',
  },

  // 在插入点或选中文字处修改字体名称
  fontName: {
    name: '字体名',
    command: 'fontName',
    render: () => {
      const options = [
        { label: '微软雅黑', value: 'Microsoft YaHei' },
        { label: '新罗马', value: 'Times New Roman' },
        { label: '宋体', value: 'SimSun' },
        { label: '平方', value: 'PingFang SC' },
        { label: '华文楷体', value: 'STKaiti' },
        { label: 'Arial', value: 'Arial' },
        { label: 'Calibri', value: 'Calibri' },
        { label: 'Comic Sans MS', value: 'Comic Sans MS' },
        { label: 'Verdana', value: 'Verdana' },
      ];
      return selectRender('fontName', options, '字体名');
    },
  },

  // 在插入点或者选中文字部分修改字体大小。需要提供一个 HTML 字体尺寸 (1-7) 作为参数。
  fontSize: {
    name: '字体大小',
    command: 'fontSize',
    render: () => {
      const options = [
        { label: '特小', value: '1' },
        { label: '小', value: '2' },
        { label: '正常', value: '3' },
        { label: '略大', value: '4' },
        { label: '大', value: '5' },
        { label: '很大', value: '6' },
        { label: '极大', value: '7' },
      ];
      return selectRender('fontSize', options, '字体大小');
    },
  },

  // 在插入点或者选中文字部分修改字体颜色。需要提供一个颜色值字符串作为参数
  foreColor: {
    name: '字体颜色',
    command: 'foreColor',
    render: () => {
      const options = [
        { label: '黑', value: 'black' },
        { label: '红', value: 'red' },
        { label: '橙', value: 'orange' },
        { label: '蓝', value: 'blue' },
        { label: '绿', value: 'green' },
        { label: '白', value: 'white' },
        { label: '灰', value: '#999' },
        { label: '浅灰', value: '#ddd' },
      ];
      return selectRender('foreColor', options, '字体颜色');
    },
  },

  // 删除光标所在位置的字符。和按下删除键一样。
  forwardDelete: {
    name: '删除',
    command: 'forwardDelete',
  },

  // 添加一个标题标签在光标处或者所选文字上。需要提供标签名称字符串作为参数（例如："H1"、"H6"）（IE 和 Safari 不支持）
  heading: {
    name: '标题',
    command: 'heading',
    render: () => {
      const options = [
        { label: 'H1', value: 'H1' },
        { label: 'H2', value: 'H2' },
        { label: 'H3', value: 'H3' },
        { label: 'H4', value: 'H4' },
        { label: 'H5', value: 'H5' },
        { label: 'H6', value: 'H6' },
      ];
      return selectRender('heading', options, '标题');
    },
  },

  // 更改选择或插入点的背景颜色。需要一个颜色值字符串作为值参数传递。UseCSS 必须开启此功能。（IE 浏览器不支持）
  hiliteColor: {
    name: '背景颜色',
    command: 'hiliteColor',
    render: () => {
      const options = [
        { label: '黑', value: 'black' },
        { label: '红', value: 'red' },
        { label: '橙', value: 'orange' },
        { label: '蓝', value: 'blue' },
        { label: '绿', value: 'green' },
        { label: '白', value: 'white' },
        { label: '灰', value: '#999' },
        { label: '浅灰', value: '#ddd' },
      ];
      return selectRender('foreColor', options, '字体颜色');
    },
  },

  // 缩进选择或插入点所在的行
  indent: {
    name: '缩进',
    command: 'indent',
  },

  // 在插入点插入一个水平线（删除选中的部分）
  insertHorizontalRule: {
    name: '水平线',
    command: 'insertHorizontalRule'
  },

  // 在插入点插入一个 HTML 字符串（删除选中的部分）。需要一个个 HTML 字符串作为参数。
  insertHTML: {
    name: '插入Html',
    command: 'insertHTML',
  },

  // 在插入点插入一张图片（删除选中的部分）。需要一个 URL 字符串作为参数。这个 URL 图片地址至少包含一个字符。空白字符也可以（IE 会创建一个链接其值为 null）
  insetImage: {
    name: '插入 img',
    command: 'insetImage',
  },

  // 在光标插入位置插入文本内容或者覆盖所选的文本内容。
  inserText: {
    name: '插入文本',
    command: 'inserText',
  },

  // 在光标插入点开启或关闭斜体字。 (Internet Explorer 使用 EM 标签，而不是 I )
  italic: {
    name: '斜体',
    command: 'italic',
  },

  justifyCenter: {
    name: '居中对齐',
    command: 'justifyCenter',
  },
  justifyFull: {
    name: '两端对齐',
    command: 'justifyFull',
  },
  justifyLeft: {
    name: '左对齐',
    command: 'justifyLeft',
  },
  justifyRight: {
    name: '右对齐',
    command: 'justifyRight',
  },
  removeFormat: {
    name: '清除样式',
    command: 'removeFormat',
  },

  // 对光标插入行或者所选行内容减少缩进量。
  outdent: {
    name: '减少缩进',
    command: 'outdent',
  },

  // 在光标位置粘贴剪贴板的内容，如果有被选中的内容，会被替换。剪贴板功能必须在 user.js 配置文件中启用。参阅 [1].
  paste: {
    name: '粘贴',
    command: 'paste',
  },

  // 撤销 还原
  undo: {
    name: '撤销',
    command: 'undo',
  },
  redo: {
    name: '重做',
    command: 'redo',
  },

  // 选择全部
  selectAll: {
    name: '选择全部',
    command: 'selectAll',
  },

  // 在光标插入点开启或关闭下角标。
  superscript: {
    name: '上标',
    command: 'superscript',
  },

  // 在光标插入点开启或关闭上角标。
  subscript: {
    name: '下标',
    command: 'subscript',
  },

  // 去除所选的锚链接的<a>标签
  unlink: {
    name: '删除锚连接',
    command: 'unlink',
  },

  // 在光标插入点开启或关闭下划线。
  underline: {
    name: '插入下划线',
    command: 'underline',
  },

  insertOrderedList: {
    name: '有序列表',
    command: 'insertOrderedList',
  },

  insertUnorderedList: {
    name: '无序列表',
    command: 'insertUnorderedList',
  }
}

export const commands = [
  // 撤销的命令考虑内置到监听键盘事件中
  'undo',
  'redo',

  'fontName',
  'fontSize',
  'heading',
  'bold',
  'italic',
  'underline',
  'createLink',
  'backColor',
  'foreColor',
  'insertOrderedList',
  'insertUnorderedList',

  // todo 
  // 以下命令考虑不要显示在 toolbar 中

  // 一般用于公式感觉可以不用
  // 'superscript',
  // 'subscript',

  // 文本对齐的方式，这里感觉可以换成 word 中的形式
  // 'justifyCenter',
  // 'justifyFull',
  // 'justifyLeft',
  // 'justifyRight',

  // 感觉用处不是很大
  // 'removeFormat',

  // 感觉不需要插入水平线。。。
  // 'insertHorizontalRule',

];
const selectRender = (command: string, options: SelectOptions[] = [], title = '') => {
  return (
    <Select
      command={command}
      options={options}
      title={title}
    />
  )
}

export const generaToolBar = () => {
  const toolbar = commands.map((commandName) => {
    try {
      const { command, name, render } = commandMap[commandName]
      return render != null
        ? render()
        : (<Button
          command={command}
          name={name}
          key={command}
        />)
    } catch (e) {
      console.log('commandName', commandName)
    }
  })


  return toolbar
}