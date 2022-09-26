import './App.css';
import {IComment} from './types/types';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React, {useEffect, useState} from 'react';
import Article from "./components/article/Article";


const App: React.FC = () => {

    const [comments, setComments] = useState<IComment[]>([
        {
            id: 0,
            name: "Иван",
            email: "123456789@74.ru",
            comment: "Статья огонь, латынь-супер!",
            createDate: 1655296594000,
            likeCount: 0
        },
        {
            id: 1,
            name: "Васья",
            email: "987654321@74.ru",
            comment: "Многа букаф не асилел",
            createDate: 1655282194000,
            likeCount: 0
        }
    ])

    const handleAddComment = (newComment: IComment): void => {
        setComments((prevState) => {
            return prevState.concat([newComment])
        })
    }

    const handleChangeLikeCount = (method: string, commentId: number): void => {
        setComments(comments.map((item) => {
            if (item.id === commentId) {
                method === "plus" ? item.likeCount++ : item.likeCount--
                return item
            }
            return item
        }))
    }

    useEffect(() => {
        const appState = sessionStorage.getItem("appState")
        appState && setComments(JSON.parse(appState))
    }, [])

    useEffect(() => {
        sessionStorage.setItem("appState", JSON.stringify(comments))
    }, [comments])

    return (
        <div className="App">
            <Header/>
            <Article commentsArray={comments} handleAddComment={handleAddComment}
                     handleChangeLikeCount={handleChangeLikeCount}/>
            <Footer/>
        </div>
    );
}

export default App;
