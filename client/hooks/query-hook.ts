import { hideError, showError } from '../slice/errorSlice';
import { hideLoader, showLoader } from '../slice/loaderSlice';
import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';
import * as React from 'react';
import { useAppDispatch } from './redux';

export function useCustomQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>,
) {
  const dispatch = useAppDispatch();
  const {
    loading,
    error,
    data,
    previousData,
    networkStatus,
    observable,
    client,
    refetch
  } = useQuery<TData, TVariables>(query, options);

  React.useEffect(() => {
    if (loading) {
      dispatch(showLoader());
    } else {
      dispatch(hideLoader());
    }
  }, [loading]);

  React.useEffect(() => {
    if (error) {
      dispatch(showError(error));
    } else {
      dispatch(hideError());
    }
  }, [error]);

  return { data, previousData, networkStatus, observable, client,refetch };
}
