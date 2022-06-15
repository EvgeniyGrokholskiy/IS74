import './App.css';
import React, {useState} from 'react';
import {IComment} from './types/types';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";


function App() {

    const [comments, setComments] = useState<IComment[]>([
        {
            id: 0,
            name: "Иван",
            email: "123456789@74.ru",
            comment: "Статья огонь, латынь-супер",
            createDate: 1,
            likeCount: 0
        },
        {
            id: 1,
            name: "Васья",
            email: "987654321@74.ru",
            comment: "Многа букаф не асилел",
            createDate: 100000000,
            likeCount: 0
        }
    ])

    const handleAddComment = (newComment: IComment) => {
        setComments((prevState) => {
            return prevState.concat([newComment])
        })
    }

    const handleChangeLikeCount = (method: "plus" | "minus", commentId: number) => {
        setComments(comments.map((item) => {
            if (item.id === commentId) {
                method === "plus" ? item.likeCount++ : item.likeCount--
                return item
            }
            return item
        }))
    }

    return (
        <div className="App">
            <Header/>
            <Article commentsArray={comments} handleAddComment={handleAddComment} handleChangeLikeCount={handleChangeLikeCount}/>
            <Footer/>
        </div>
    );
}

export default App;
