const projects = [
  {
    id: '001',
    NAME: 'David Yang Blog',
    type: 'personal site',
    address: 'https://blog.yangdexiong.cn/',
    github: 'https://github.com/creeep123/creeep123.github.io',
    techStack: [],
    intro:
      'My personal website mainly recording my personal life, this is a test text,this is a test text,this is a test text,this is a test text,this is a test text',
    IMAGE:
      'https://gitee.com/yxon123/gitee-sources/raw/master//Images/blog.jpg',
  },
  {
    id: '002',
    NAME: 'eat-what-app',
    type: 'tool',
    address: 'https://eat-what-app.vercel.app/',
    github: 'https://github.com/creeep123/eat-what-app',
    techStack: ['svelte', 'vercel'],
    intro: '',
    IMAGE:
      'https://gitee.com/yxon123/gitee-sources/raw/master//Images/eat-what-app.vercel.app.jpeg',
  },
  {
    id: '003',
    NAME: 'iCrowd Task',
    type: 'enterprise',
    address: 'https://eat-what-app.vercel.app/',
    github: 'https://github.com/creeep123/eat-what-app',
    techStack: ['react', 'nodejs'],
    intro: '',
    IMAGE:
      'https://gitee.com/yxon123/gitee-sources/raw/master//Images/image-20210714210012418.png',
  },
  {
    id: '004',
    NAME: 'Cyber Entrance',
    type: 'personal site',
    address: '/',
    github: 'https://github.com/creeep123/eat-what-app',
    techStack: [],
    intro: '',
    IMAGE:
      'https://gitee.com/yxon123/gitee-sources/raw/master//Images/image-20210714210012418.png',
  },
  {
    id: '005',
    NAME: 'iCrowd Task',
    type: 'ENTERPRISE',
    address: 'https://eat-what-app.vercel.app/',
    github: 'https://github.com/creeep123/eat-what-app',
    techStack: [],
    intro: '',
    IMAGE:
      'https://gitee.com/yxon123/gitee-sources/raw/master//Images/image-20210714210012418.png',
  },
];

const findProject = (name) => {
  const _projects = projects.filter((item) => item['NAME'] === name);
  return _projects[0];
};

module.exports = { projects, findProject };
