import React, {useState} from 'react';
import styled from "styled-components";

const StyledFormWrapper = styled.div`
  padding: 50px;
`

const StyledText = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
`

const StyledTextArea = styled.textarea`
  display: block;
  margin-bottom: 30px;
  padding: 20px;
  height: 200px;
  width: 100%;
`

const StyledInput = styled.input`
  display: block;
  margin-bottom: 20px;
  padding-left: 20px;
  height: 35px;
  width: 100%;
`

interface IFormState {
    name: string
    email: string
    comment: string
}

interface ICommentFormProps {
    callback: () => void
}

const CommentForm: React.FC<ICommentFormProps> = ({callback}) => {

    const [formState, setFormState] = useState<IFormState>({
        name: "",
        email: "",
        comment: ""
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const createDate = Date.now()
        const newComment = {
            id: Math.random() * 10,
            name: formState.name,
            email: formState.email,
            comment: formState.comment,
            createDate: createDate,
            likeCount: 0
        }
        event.preventDefault()
        callback()
        console.log(newComment);
        setFormState({name: "", email: "", comment: ""})
    }

    const handleChangeValue = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const fieldName = event.target.dataset.name
        fieldName && setFormState((prevState) => {
            return {...prevState, [fieldName]:event.target.value}
        })
    }

    return (
        <StyledFormWrapper>
            <StyledText>
                {"Написать комментарий"}
            </StyledText>
            <form onSubmit={handleSubmit}>
                <StyledInput type={"text"} required={true} value={formState.name} data-name={"name"}
                             placeholder={"Введите имя"}
                             onChange={handleChangeValue}/>
                <StyledInput type={"email"} required={true} value={formState.email} data-name={"email"}
                             placeholder={"Введите электронную почту"}
                             onChange={handleChangeValue}/>
                <StyledTextArea required={true} value={formState.comment} data-name={"comment"}
                                placeholder={"Введите комментарий"}
                                onChange={handleChangeValue}/>
                <button>{"Отправить"}</button>
            </form>
        </StyledFormWrapper>
    );
};

export default CommentForm;