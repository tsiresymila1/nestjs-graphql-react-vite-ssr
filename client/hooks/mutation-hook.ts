import { hideError, showError } from '../slice/errorSlice';
import { hideLoader, showLoader } from '../slice/loaderSlice';
import {
  ApolloCache,
  DefaultContext,
  DocumentNode,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
} from '@apollo/client';
import * as React from 'react';
import { useAppDispatch } from './redux';

export function useCustomMutation<
  TData = any,
  TVariables = OperationVariables,
  TContext = DefaultContext,
  TCache extends ApolloCache<any> = ApolloCache<any>,
>(
  mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<TData, TVariables, TContext>,
) :  MutationTuple<TData, TVariables, TContext, TCache>{
  const dispatch = useAppDispatch();
  const [mutate, { loading, error, data, client, reset, called }] = useMutation<
    TData,
    TVariables,
    TContext,
    TCache
  >(mutation, options);

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

  return [mutate, {loading, error, data, client, reset, called }];
}
