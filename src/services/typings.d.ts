declare namespace API {
  interface GetList {
    pageIndex?: number;
    pageSize?: number;
  }
}

declare namespace RES {
  interface response {
    code: number;
    data: { [k: string]: any };
    msg: string;
    totalCount?: number;

    [k: string]: any;
  }
}
