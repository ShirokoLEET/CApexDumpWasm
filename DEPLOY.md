# GitHub Pages 部署指南

本项目已配置为自动部署到 GitHub Pages。以下是设置步骤：

## 自动部署设置

### 1. 启用 GitHub Pages

1. 前往你的 GitHub 仓库设置页面 (`https://github.com/KiloxGo/CApexDumpWasm/settings`)
2. 滚动到 "Pages" 部分
3. 在 "Source" 下，选择 "GitHub Actions"
4. 保存设置

### 2. 配置仓库权限

确保 GitHub Actions 有正确的权限：

1. 前往 `Settings` > `Actions` > `General`
2. 在 "Workflow permissions" 下选择 "Read and write permissions"
3. 勾选 "Allow GitHub Actions to create and approve pull requests"

### 3. 推送代码

当你推送代码到 `master` 分支时，GitHub Actions 会自动：

- 安装 Node.js 依赖
- 构建 Vue.js 项目
- 处理 WebAssembly 文件
- 部署到 GitHub Pages

### 4. 访问网站

部署完成后，你的网站将在以下地址可用：

```
https://KiloxGo.github.io/CApexDumpWasm/
```

## 手动部署（可选）

如果你想要手动部署：

```bash
cd WASMLoader
npm install
npm run build
```

然后将 `WASMLoader/dist` 目录的内容上传到你的 GitHub Pages 分支。

## 技术配置详情

### 路径配置

- Vite 配置中的 `base` 路径设置为 `/CApexDumpWasm/`
- 这确保所有资源在 GitHub Pages 子路径下正确加载

### WebAssembly 支持

- 项目配置了正确的 WASM MIME 类型
- 添加了 Cross-Origin 头部以支持 SharedArrayBuffer
- `.nojekyll` 文件确保 GitHub Pages 不会处理特殊文件

### 构建优化

- WASM 文件被正确包含在构建输出中
- 资源文件名优化以避免缓存问题
- 自动复制脚本确保 WASM 文件在正确位置

## 故障排除

### 构建失败

1. 检查 GitHub Actions 日志 (`Actions` 标签页)
2. 确保所有依赖都在 `package.json` 中正确列出
3. 验证 Node.js 版本兼容性

### 404 错误

1. 确认 GitHub Pages 设置正确
2. 检查 `base` 路径配置
3. 确保构建输出包含 `index.html`

### WASM 加载问题

1. 确认 `.wasm` 文件在构建输出中
2. 检查浏览器控制台的错误信息
3. 确保在 HTTPS 环境中访问 (GitHub Pages 强制 HTTPS)
4. 验证 CORS 头部配置

### 常见错误及解决方案

**错误**: `Failed to instantiate WebAssembly module`
**解决**: 确保 WASM 文件路径正确，检查网络请求是否成功

**错误**: `SharedArrayBuffer is not defined`
**解决**: 确保页面在安全上下文中加载 (HTTPS)

**错误**: `Cross-Origin Request Blocked`
**解决**: 检查 CORS 头部配置，确保服务器支持 WASM

## 开发工作流

1. 本地开发：

   ```bash
   cd WASMLoader
   npm run dev
   ```

2. 本地预览构建：

   ```bash
   npm run preview
   ```

3. 推送到 GitHub，查看 Actions 状态：

   - 前往 `Actions` 标签页
   - 查看最新的工作流运行状态

4. 在 GitHub Pages URL 上测试：
   - 等待部署完成（通常需要几分钟）
   - 访问 `https://KiloxGo.github.io/CApexDumpWasm/`

## 更新流程

1. 修改代码
2. 提交并推送到 `master` 分支
3. GitHub Actions 自动触发构建和部署
4. 等待几分钟后访问更新后的网站

## 监控和维护

- 定期检查 GitHub Actions 运行状态
- 监控网站访问是否正常
- 更新依赖包时测试构建流程
- 关注 GitHub Pages 服务状态
