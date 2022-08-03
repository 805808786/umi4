import { ErrorBlock } from 'antd-mobile';
import { Link } from 'umi';

export default () => (
  <ErrorBlock
    status='empty'
    title="对不起，您访问的页面不存在！"
    description={<Link to="/">返回首页</Link>}
  />
);
