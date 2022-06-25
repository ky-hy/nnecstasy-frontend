import router from 'next/router';
import HeaderComponent from './presenter';
/**
 * ヘッダーコンテナコンポーネント
 */
const Container = () => {
  return <HeaderComponent onclickHome={() => router.push('/')} />;
};

export default Container;
