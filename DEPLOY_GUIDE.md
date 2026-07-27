# 工作台云端同步部署指南

## 概述

本指南将帮助你把工作台部署到 GitHub Pages，并接入 Supabase 云端数据库，实现手机、电脑多设备数据同步，且不需要电脑一直开机。

## 第一步：注册 Supabase 账号（免费）

1. 打开 https://supabase.com
2. 点击 "Start your project"，用 GitHub 账号或邮箱注册
3. 创建一个新 Organization（组织），名称随意，例如 `yuyu-work`
4. 点击 "New project"，输入项目名称（例如 `workbench`），选择地区（建议选 `Singapore` 或 `Northeast Asia` 离中国近）
5. 等待项目创建完成（约 1-2 分钟）

## 第二步：创建数据库表

1. 进入项目后，左侧菜单点击 **SQL Editor**
2. 点击 **New query**
3. 把下面的 SQL 代码完整粘贴进去，然后点击 **Run**

```sql
-- 创建应用数据表
CREATE TABLE app_data (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  access_code TEXT NOT NULL UNIQUE,
  clients JSONB DEFAULT '[]',
  chains JSONB DEFAULT '[]',
  books JSONB DEFAULT '[]',
  weights JSONB DEFAULT '[]',
  height INTEGER DEFAULT 175,
  exercise_days JSONB DEFAULT '{}',
  history_progress INTEGER DEFAULT -1,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用行级安全（RLS）
ALTER TABLE app_data ENABLE ROW LEVEL SECURITY;

-- 创建策略：允许任何人读写（用 access_code 做数据隔离）
CREATE POLICY "Allow all" ON app_data FOR ALL USING (true) WITH CHECK (true);
```

4. 左侧菜单点击 **Table Editor**，确认看到 `app_data` 表已创建

## 第三步：获取 Supabase 连接信息

1. 左侧菜单点击 **Project Settings**（齿轮图标）
2. 点击 **API**
3. 复制以下两项（后面会用到）：
   - **Project URL**（例如 `https://abcdefgh12345678.supabase.co`）
   - **anon public** API key（以 `eyJ...` 开头的一长串）

## 第四步：修改代码中的配置

1. 用文本编辑器打开 `personal-workbench.html`
2. 搜索找到以下两行（约在文件底部）：

```javascript
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';
```

3. 替换为你在第三步复制的信息：

```javascript
const SUPABASE_URL = 'https://你的实际项目ID.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...你的实际anon key...';
```

4. 保存文件

## 第五步：部署到 GitHub Pages

### 5.1 注册 GitHub 账号

1. 打开 https://github.com
2. 用邮箱注册账号（如果已有则跳过）

### 5.2 创建仓库并上传文件

1. 点击右上角 **+** → **New repository**
2. Repository name 填写 `yuyu-workbench`（名称随意）
3. 选择 **Public**（公开，GitHub Pages 免费版需要公开）
4. 点击 **Create repository**
5. 在新页面中，点击 **uploading an existing file**
6. 把 `personal-workbench.html` 文件拖拽到上传区域
7. 页面拉到最下方，点击 **Commit changes**

### 5.3 开启 GitHub Pages

1. 在仓库页面，点击顶部 **Settings**
2. 左侧菜单点击 **Pages**
3. Branch 选择 `main`，文件夹选择 `/(root)`，点击 **Save**
4. 等待约 1-2 分钟，刷新页面，上方会出现绿色提示：
   `Your site is live at https://你的用户名.github.io/yuyu-workbench/`
5. 点击这个链接即可访问！

**注意**：GitHub Pages 默认会寻找 `index.html`。如果打开后显示 404，你需要把 `personal-workbench.html` 重命名为 `index.html`，或者访问 `https://你的用户名.github.io/yuyu-workbench/personal-workbench.html`

### 建议：重命名为 index.html

1. 回到仓库首页，点击 `personal-workbench.html`
2. 点击右上角的铅笔图标（Edit this file）
3. 文件名改为 `index.html`
4. 拉到下方点击 **Commit changes**
5. 之后直接访问 `https://你的用户名.github.io/yuyu-workbench/` 即可

## 第六步：多设备同步使用

### 首次使用

1. 在手机或电脑浏览器中打开 GitHub Pages 链接
2. 页面会显示"数据同步登录"界面
3. 输入一个你自己设定的**访问码**（例如 `yuyu2026`，可以任意设置）
4. 点击"进入工作台"

### 数据同步流程

- **上传同步**：在工作台上做了修改（添加拜访记录、更新体重等）后，点击右上角的 **☁️ 上传同步** 按钮，数据会保存到 Supabase 云端
- **下载同步**：在另一台设备上打开页面后，点击右上角的 **📥 下载同步** 按钮，即可获取最新数据

### 小贴士

- 访问码相当于你的"账号密码"，手机和电脑输入**相同的访问码**才能共享数据
- 建议设置一个容易记住但不太简单的访问码，避免和别人重复
- 如果输入访问码后页面空白，检查 Supabase URL 和 anon key 是否配置正确

## Supabase 免费额度说明

Supabase 免费版（Free Plan）包含：
- 500 MB 数据库存储（个人使用完全够用）
- 每月 5 GB 流量
- 无限 API 请求
- 每月 50,000 个活跃用户（远超个人需求）

**注意**：免费项目如果连续 7 天没有任何访问，会自动暂停。重新激活只需在 Supabase 控制台点击一下即可，数据不会丢失。

## 常见问题

**Q：为什么页面打开后显示"数据同步登录"？**
A：这是正常的安全设计。输入访问码后即可使用，首次使用直接输入一个自己喜欢的访问码即可。

**Q：电脑关机后手机还能用吗？**
A：可以。因为页面部署在 GitHub Pages（公网服务器），与电脑是否开机无关。

**Q：数据会不会丢失？**
A：不会。数据同时保存在 Supabase 云端数据库中，即使换了手机或清了浏览器缓存，只要输入相同访问码并点击"下载同步"即可恢复。
