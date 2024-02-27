import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
