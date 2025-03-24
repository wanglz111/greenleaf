# Greenleaf

Greenleaf 是一个基于 Next.js 15 构建的现代化 Web 应用程序。该项目采用了最新的 React 19 和 TypeScript 技术栈，并集成了国际化支持。

## 技术栈

- **框架**: Next.js 15.2.3
- **UI 库**: React 19.0.0
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **国际化**: next-intl
- **性能监控**: Vercel Speed Insights
- **图标**: Lucide React

## 项目结构

```
greenleaf/
├── src/
│   ├── app/          # Next.js 应用路由和页面
│   ├── components/   # React 组件
│   ├── messages/     # 国际化消息文件
│   ├── styles/       # 样式文件
│   ├── i18n.ts       # 国际化配置
│   └── middleware.ts # Next.js 中间件
├── public/           # 静态资源
└── ...配置文件
```

## 开发

### 环境要求

- Node.js
- Yarn 包管理器

### 安装依赖

```bash
yarn install
```

### 开发服务器

```bash
yarn dev
```

项目将在 http://localhost:3000 启动。

### 构建

```bash
yarn build
```

### 生产环境运行

```bash
yarn start
```

## 特性

- 🚀 基于 Next.js 15 的现代 Web 应用
- 🌍 内置国际化支持
- 💅 使用 Tailwind CSS 的响应式设计
- 📊 Vercel Speed Insights 性能监控
- 🔍 ESLint 代码质量检查
- 📱 移动端优先设计

## 许可证

私有项目