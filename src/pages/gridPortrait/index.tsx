import { useEffect, useState } from 'react';
import { useModel, useLocation, useParams, Link } from 'umi';
import { PullToRefresh, InfiniteScroll } from 'antd-mobile';
import NavBar from './components/NavBar';

export default () => {
  const { pathname } = useLocation();
  const params = useParams()['*'];
  const { name } = useModel('gridPortrait.index');
  const [hasMore, setHasMore] = useState(true);

  const onRefresh = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log('上拉刷新');
  };
  const loadMore = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    setHasMore(false);
    console.log('下拉加载更多');
  };

  useEffect(() => {
    console.log(pathname);
    console.log(params);
  }, [pathname]);

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <Link to={`${pathname}/a`}>go</Link>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </PullToRefresh>
  );
}
