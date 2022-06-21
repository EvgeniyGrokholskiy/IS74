import styled from "styled-components";
import Avatar from "./img/smileyAvatar.png";
import React, {useEffect, useState} from "react";
import {ICommentItemProps} from "../../types/types";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const StyledWrapper = styled.div`
  border: 2px solid gray;
  padding: 10px;
  width: 100%;
`

const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledComment = styled.p`
  font-size: 1em;
  text-align: left;
`

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

const StyledClosedComment = styled.div`
  cursor: pointer;
`


const CommentItem: React.FC<ICommentItemProps> = ({commentItem, handleChangeLikeCount}) => {

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [passedTime, setPassedTime] = useState<string>("")

    const {id, name, createDate, comment, likeCount} = commentItem

    const getPassedTime = (nowDate: number, createData: number): string => {

        const minute = 60000
        const hour = 3600000
        const day = 86400000
        const difference = nowDate - createData

        if (difference < hour) {
            const result = Math.floor(difference / minute)
            return `${result} мин.`
        }
        if (difference < day) {
            const result = Math.floor(difference / hour)
            return `${result} ч.`
        }
        if (difference > day) {
            const result = Math.floor(difference / day)
            return `${result} д.`
        }
        return ""
    }
    useEffect(() => {

        setPassedTime(getPassedTime(Date.now(), createDate))

        const interval = setInterval(() => {
            setPassedTime(getPassedTime(Date.now(), createDate))
        }, 60000)

        return () => clearInterval(interval)

    }, [createDate])

    useEffect(() => {
        if (likeCount < -9) {
            setIsOpen(false)
        }
    }, [likeCount])


    return (
        <StyledWrapper>
            <StyledClosedComment style={{display: isOpen ? "none" : "block"}}
                 onClick={() => setIsOpen(true)}>{"Открыть комментарий"}
            </StyledClosedComment>
            <div style={{display: isOpen ? "block" : "none"}}>
                <StyledAvatarContainer>
                    <img src={Avatar} alt={"аватар"} height={50} width={50}/>
                    <span>{name}</span>
                    <span>{`Создан ${passedTime} назад.`}</span>
                </StyledAvatarContainer>
                <StyledComment>
                    {comment}
                </StyledComment>
                <StyledButtonContainer>
                    <span>{`Likes: ${likeCount}`}</span>
                    <StyledButton onClick={() => handleChangeLikeCount("plus", id)} data-method={"plus"}>
                        <ThumbUpIcon/>
                    </StyledButton>
                    <StyledButton onClick={() => handleChangeLikeCount("minus", id)} data-method={"minus"}>
                        <ThumbDownIcon/>
                    </StyledButton>
                </StyledButtonContainer>
            </div>
        </StyledWrapper>
    );
};

export default CommentItem;