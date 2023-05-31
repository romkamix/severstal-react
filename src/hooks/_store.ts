import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { TRootState, TAppDispatch } from "../types";

type DispatchFunc = () => TAppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
