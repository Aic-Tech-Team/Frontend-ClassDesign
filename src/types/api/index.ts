export interface ApiWithPaginationResponse<T> {
  value: {
    data: T;
  };
}

export interface ApiResponse<T> {
  value: T;
}
