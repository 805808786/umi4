import { request } from '@umijs/max';

// todo: params 类型应该在 namespace API 中声明
export async function getGridListPaging(data?: { id?: string | number; pageIndex?: number; pageSize?: number; }) {
  return request('/GridPortrait/GetGridListPaging', { method: 'POST', data });
}
