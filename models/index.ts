export enum TaskTypes {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
}
export interface DataI<T> {
    funcs: T[], //массив из функций-решений
    description: string, // описание задачи
    date: string,
    comments?: string,
    type: TaskTypes,
    learnThemes: string[], // темы, на которую задача
    url: string,
}