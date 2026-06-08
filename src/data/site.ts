export type ProjectLink = { label: string; href: string };
export type Project = {
  title: string;
  blurbEN: string;
  blurbZH: string;
  tags: string[];
  links: ProjectLink[];
};

export type Hobby = {
  emoji: string;
  nameEN: string;
  nameZH: string;
  descEN: string;
  descZH: string;
};

export type Links = {
  github: string;
  linkedin: string;
  email: string;
};

export const site = {
  name: 'Xiaomeng Li / 李晓蒙',
  headlineEN: 'Computer Science & Data Science student building AI testing tools, full-stack apps, and learning systems.',
  headlineZH: '计算机与数据科学学生，关注 AI 测试工具、全栈应用和学习系统。',
};

export const projects: Project[] = [
  {
    title: 'LeetCode Learning System',
    blurbEN: 'A Python-based algorithm notebook with failure logs, spaced repetition review, and GitHub Actions reminders.',
    blurbZH: '基于 Python 的算法学习系统，包含错题复盘、记忆曲线复习和 GitHub Actions 提醒。',
    tags: ['Python', 'Automation', 'GitHub Actions'],
    links: [
      { label: 'Code', href: 'https://github.com/lanselylee/leetcode-learning-system' },
    ],
  },
  {
    title: 'My World',
    blurbEN: 'A personal portfolio site that blends software projects, writing, and visual storytelling.',
    blurbZH: '个人作品集网站，融合软件项目、写作与视觉叙事。',
    tags: ['Next.js', 'TypeScript', 'MUI'],
    links: [
      { label: 'Live', href: 'https://my-world-3eqr3yhgw-xiaomenglis-projects.vercel.app/' },
      { label: 'Code', href: 'https://github.com/lanselylee/My_World' },
    ],
  },
  {
    title: 'Pokemon Collection App',
    blurbEN: 'A Java application for managing a personal Pokemon collection with object-oriented design.',
    blurbZH: 'Java 宝可梦收藏管理应用，展示面向对象设计和基础应用架构。',
    tags: ['Java', 'OOP', 'Course Project'],
    links: [{ label: 'Code', href: 'https://github.com/lanselylee/pokemon-collection-app' }],
  },
  {
    title: 'Sudoku React Game',
    blurbEN: 'A Sudoku game built with React, Context API, and Vite, focused on state management and game logic.',
    blurbZH: 'React + Context API + Vite 数独游戏，重点是状态管理和游戏逻辑。',
    tags: ['React', 'Vite', 'Game Logic'],
    links: [{ label: 'Code', href: 'https://github.com/lanselylee/-Junrui---Duan-_-Xiaomeng---Li--Project2' }],
  },
];

export const hobbies: Hobby[] = [
  { emoji: '🥟', nameEN: 'Cooking (Hunan)', nameZH: '烹饪（湘菜）', descEN: 'Spicy experiments.', descZH: '剁椒 / 外婆菜 / 小笼包实验室' },
  { emoji: '📷', nameEN: 'Photography', nameZH: '摄影', descEN: 'Streets and misty trails.', descZH: '街拍与雾林步道' },
  { emoji: '🥾', nameEN: 'Hiking', nameZH: '徒步', descEN: 'Switchbacks and summits.', descZH: '之字坡与小峰顶' },
  { emoji: '✍️', nameEN: 'Writing', nameZH: '写作', descEN: 'Horror & suspense.', descZH: '恐怖悬疑小品' },
];

export const now: string[] = [
  'Building data products & serverless bits',
  'Practicing LeetCode + English interviews',
  'Exploring cafés (no cold brew!)',
];

export const links: Links = {
  github: 'https://github.com/lanselylee',
  linkedin: 'https://www.linkedin.com/in/xiaomeng-li',
  email: 'lixiaomengus@gmail.com',
};


