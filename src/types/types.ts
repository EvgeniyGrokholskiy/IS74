export interface IComment {
    id: number
    name: string
    email: string
    comment: string
    createDate: number
    likeCount: number
}

export interface IArticleProps {
    commentsArray: IComment[]
    handleAddComment: (newComment: IComment) => void
    handleChangeLikeCount: (method: string, commentId: number) => void
}

export interface IFormState {
    name: string
    email: string
    comment: string
}

export interface ICommentFormProps {
    handleAddComment: (newComment: IComment) => void
}

export interface ICommentItemProps {
    commentItem: IComment
    handleChangeLikeCount: (method: string, commentId: number) => void
}