export interface TodoItem {
    id: number;
    title: string;
    isCompleted: boolean
}

export interface AsyncStateObject<T> {
    isLoading: boolean,
    data: T
}