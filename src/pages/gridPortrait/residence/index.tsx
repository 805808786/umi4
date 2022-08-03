import { useEffect, useState } from 'react';
import { useParams } from 'umi';
import { PullToRefresh, InfiniteScroll } from 'antd-mobile';

export default () => {
  const { id } = useParams();
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
    console.log(id);
  }, [id]);

  return (
    <PullToRefresh onRefresh={onRefresh}>
      小区
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </PullToRefresh>
  );
}
