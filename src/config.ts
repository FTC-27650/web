import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "FIRST-27650",
	subtitle: "",
	lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 200, // 主题颜色的默认色调，范围从0到360。例如：红色: 0, 青色: 200, 蓝绿色: 250, 粉色: 345
		fixed: false, // 向访问者隐藏主题颜色选择器
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的署名文本
			text: "", // 要显示的署名文本
			url: "", // （可选）指向原作或艺术家页面的URL链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，从1到3
	},
	favicon: [
		// 留空此数组以使用默认favicon
		// {
		//   src: '/favicon/icon.png',    // favicon的路径，相对于/public目录
		//   theme: 'light',              // （可选）'light'或'dark'，仅在亮色和暗色模式有不同的favicon时设置
		//   sizes: '32x32',              // （可选）favicon的大小，仅在有多种尺寸的favicon时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Team 27650",
	bio: "Build More Than Robots",
	links: [
		{
			name: "Bilibili",
			icon: "ant-design:bilibili-filled", // 访问 https://icones.js.org/ 获取图标代码
			// 如果尚未包含相应的图标集，您需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/151675070",
		},
		{
			name: "mail",
			icon: "material-symbols:attach-email",
			url: "mailto:first27650@163.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/FTC-27650/",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）被覆盖，请参见astro.config.mjs文件。
	// 请选择暗色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
