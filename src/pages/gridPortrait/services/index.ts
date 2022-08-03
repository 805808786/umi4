import { request } from '@umijs/max';

export async function loginByZZD(data: LoginByZZD) {
  return request('/User/LoginByFuli', { method: 'POST', data });
}

export async function getGridListPaging(data: GetGridListPaging) {
  return request('/GridPortrait/GetGridListPaging', { method: 'POST', data });
}
