// import { layout } from '@chakra-ui/styled-system';
import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { findProject } from '../../components/constant';

const Intro = () => {
  const router = useRouter();
  const { name } = router.query;
  debugger;
  const project = findProject(name);

  return (
    <Layout>
      <article className={utilStyles.article}>
        <h1 className={utilStyles.headingXl}>{name}</h1>
        <div className={utilStyles.lightText}>
          {/* <Date dateString={postData.date} /> */}
          2020 02 13
        </div>
        <div>{project.intro}</div>
      </article>
    </Layout>
  );
};

export default Intro;
