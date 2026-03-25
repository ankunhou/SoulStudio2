import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// 主应用组件 - SoulStudio 应用入口
function App() {
  // 计数状态 - 用于演示 React 状态管理
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 中心内容区域 - 主要展示和交互区域 */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="主要视觉元素" />
          <img src={reactLogo} className="framework" alt="React 框架标识" />
          <img src={viteLogo} className="vite" alt="Vite 构建工具标识" />
        </div>

        <div>
          <h1>开始使用</h1>
          <p>
            编辑 <code>src/App.tsx</code> 并保存以测试 <code>HMR（热模块替换）</code>
          </p>
        </div>

        {/* 计数按钮 - 演示状态更新 */}
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          计数: {count}
        </button>
      </section>

      {/* 装饰性刻度线 */}
      <div className="ticks"></div>

      {/* 下一步指南区域 */}
      <section id="next-steps">
        {/* 文档部分 */}
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>文档</h2>
          <p>您的问题，我们来解答</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                探索 Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                了解更多
              </a>
            </li>
          </ul>
        </div>

        {/* 社区联系部分 */}
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>联系我们</h2>
          <p>加入 Vite 社区</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      {/* 底部间距区域 */}
      <section id="spacer"></section>
    </>
  )
}

export default App
