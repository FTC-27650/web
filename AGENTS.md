# Potential Barnacle - 项目上下文文档

## 项目概述

Potential Barnacle 是一个基于 Astro 的静态博客模板项目，名为 Fuwari。这是一个现代化的博客平台，具有响应式设计、深色/浅色模式切换、搜索功能和丰富的 Markdown 扩展语法支持。

### 核心技术栈

- **框架**: Astro 5.13.10 (静态站点生成器)
- **UI 框架**: Svelte 5.39.8 (用于交互组件)
- **样式**: Tailwind CSS 3.4.19 + Stylus
- **语言**: TypeScript 5.9.3
- **包管理器**: pnpm 9.14.4
- **代码格式化**: Biome 2.2.5
- **搜索功能**: Pagefind 1.4.0
- **Markdown 处理**: Expressive Code, remark/rehype 插件生态

### 项目结构

```
src/
├── assets/           # 静态资源文件
├── components/       # 可复用组件
│   ├── control/      # 控制组件 (按钮、分页等)
│   ├── misc/         # 杂项组件
│   └── widget/       # 小部件组件
├── constants/        # 常量定义
├── content/          # 内容文件
│   ├── posts/        # 博客文章
│   └── spec/         # 特殊页面内容
├── i18n/            # 国际化配置
├── layouts/         # 布局模板
├── pages/           # 页面路由
├── plugins/         # 自定义插件
├── styles/          # 样式文件
├── types/           # TypeScript 类型定义
└── utils/           # 工具函数
```

## 构建和运行命令

### 开发环境

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (localhost:4321)
pnpm dev

# 类型检查
pnpm type-check

# 代码格式化
pnpm format

# 代码检查和修复
pnpm lint
```

### 生产构建

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 运行 Astro 检查
pnpm check
```

### 内容管理

```bash
# 创建新文章
pnpm new-post <filename>

# 示例: pnpm new-post my-first-post
# 这将在 src/content/posts/ 目录下创建新的 Markdown 文件
```

## 开发约定

### 代码风格

- 使用 **Biome** 进行代码格式化和检查
- 缩进使用 **Tab** (在 biome.json 中配置)
- JavaScript/TypeScript 使用 **双引号**
- 强制类型检查 (strictNullChecks: true)

### 路径别名

项目中配置了以下路径别名 (在 tsconfig.json 中):
- `@components/*` -> `src/components/*`
- `@assets/*` -> `src/assets/*`
- `@constants/*` -> `src/constants/*`
- `@utils/*` -> `src/utils/*`
- `@i18n/*` -> `src/i18n/*`
- `@layouts/*` -> `src/layouts/*`
- `@/*` -> `src/*`

### 组件开发

- Astro 组件 (.astro) 用于页面和布局
- Svelte 组件 (.svelte) 用于交互式功能
- 使用 TypeScript 进行类型检查
- 遵循 Astro 的 Islands 架构模式

### 内容管理

- 博客文章存储在 `src/content/posts/` 目录下
- 使用 frontmatter 定义文章元数据
- 支持 Markdown 扩展语法 (Admonitions, GitHub 卡片等)
- 支持数学公式 (KaTeX)

### 配置文件

- 主配置: `src/config.ts` (站点信息、导航、个人信息等)
- Astro 配置: `astro.config.mjs` (构建配置、插件设置)
- 样式配置: `tailwind.config.cjs`
- 代码检查: `biome.json`

### 国际化

- 支持多语言 (zh_CN, en, ja, ko, es, th, vi, id, tr)
- 语言配置在 `src/i18n/` 目录下
- 可在文章 frontmatter 中指定语言

## 部署

项目支持部署到多种平台:
- Vercel (推荐)
- Netlify
- GitHub Pages
- 其他支持静态站点的平台

部署前需要修改 `astro.config.mjs` 中的 `site` 配置为实际的域名。

## 自定义功能

### Markdown 扩展

- Admonitions (提示框)
- GitHub 仓库卡片
- Expressive Code 增强代码块
- 数学公式支持
- 自动生成目录 (TOC)

### 主题定制

- 支持深色/浅色模式切换
- 可自定义主题颜色 (在 config.ts 中调整 hue 值)
- 可配置横幅图片和个人信息

### 搜索功能

- 使用 Pagefind 提供客户端搜索
- 构建时自动生成搜索索引
- 支持中文搜索优化

## 注意事项

1. 项目强制使用 pnpm 作为包管理器 (通过 preinstall 脚本)
2. 构建时会自动运行 Pagefind 生成搜索索引
3. 图片资源建议放在 `src/assets/` 或 `public/` 目录下
4. 新文章需要设置正确的 frontmatter 才能正确显示