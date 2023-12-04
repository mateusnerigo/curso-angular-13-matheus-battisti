export interface INavLinks {
    id?: string,
    route: string,
    text: string
}

export interface IMomentComment {
    text: string,
    username: string,
}

export interface IMoment {
    id?: number,
    title: string,
    description: string,
    image: string,
    created_at?: string,
    updated_at?: string,
    comments?: IMomentComment[]
}

export interface IComment {
    id?: string,
    text: string,
    username: string,
    momentId: number,
    created_at?: string,
    updated_at?: string,
}

export interface IResponse<T> {
    message?: string,
    data: T
}
