function Paragraph(paramter: any) {
  const {contentEditable} =  paramter
  return (
    <div style={contentEditable}>
      这是一个段落
    </div>
  ) 
} 

export default Paragraph