import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
// const {navigate} from "umi"
import { useNavigate } from 'umi';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const navigate = useNavigate();
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <div onClick={() => navigate('/access')}>goTo table</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
