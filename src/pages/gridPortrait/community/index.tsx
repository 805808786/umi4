import { useState } from 'react';
import { useParams, useRequest } from 'umi';
import { PullToRefresh, InfiniteScroll } from 'antd-mobile';
import * as services from '../services';

// todo: 抽成组件
const pageSize = 10;
export default () => {
  const { id } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [list, setList] = useState([]);
  const { run: runGridList } = useRequest(services.getGridListPaging, { manual: true });

  const getGridList = async (params: { pageIndex: number }) => {
    const { code, data = [] } = await runGridList({ ...params, pageSize });
    if (code === 2000) {
      setList(l => params.pageIndex === 1 ? data : [...l, data]);
    }
    setHasMore(data.length < pageSize);
  };

  const onRefresh = async () => {
    await getGridList({ pageIndex: 1 });
    setPageIndex(1);
  };

  const loadMore = async () => {
    await getGridList({ pageIndex: pageIndex + 1 });
    setPageIndex(index => ++index);
  };

  return (
    <PullToRefresh onRefresh={onRefresh}>
      社区
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </PullToRefresh>
  );
}
