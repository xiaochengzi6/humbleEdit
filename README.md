## 构思
1. 先实现一个简单的 demo 看看是否可行 (可行)

根据多篇文档的指导 先将其大致划分为三个部分，M(Module) V(View) C(Controller) 那么由 react 去实现 view 层次，controller 和 Module 还没有什么头绪，总体的流程是这样的：
- 用户在可编辑区域编辑 触发 dom tree 发生变化
- 监听 dom 发生的变化
- 发生变化后 diff 出发生变化的节点或文本 根据 规则 去生成合适的 数据格式
- 将数据格式转为html结构



## 想法

1. 用户在操作编辑器的时候是需要将用户的数据拿去做处理最后在显示在屏幕上（这一步的操作主要是为了统一不同浏览器之间的差异问题，统一的数据模型和统一是文档模型）这里数据体量上来后会不会造成延迟的出现，我觉得可以在复制粘贴上使用先展示后计算的方法，让用户先看到数据，而后在重新计算后 innerhtml 到页面