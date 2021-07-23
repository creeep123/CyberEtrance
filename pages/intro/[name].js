// import { layout } from '@chakra-ui/styled-system';
import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { findProject, projects } from '../../components/constant';

const Intro = ({ project }) => {
  return (
    <Layout>
      <article className={utilStyles.article}>
        <h1 className={utilStyles.headingXl}>{project.name}</h1>
        <div className={utilStyles.lightText}>
          {/* <Date dateString={postData.date} /> */}
          2020 02 13
        </div>
        <div>{project.intro}</div>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  // 调用外部 API 获取博文列表
  const project = findProject(params.name);

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      project,
    },
  };
}

// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表

  // 据博文列表生成所有需要预渲染的路径
  const paths = projects.map((project) => ({
    params: { name: project.NAME },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default Intro;
