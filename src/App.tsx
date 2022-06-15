import './App.css';
import React, {useState} from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import {IComment} from './types/types';


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

    return (
        <div className="App">
            <Header/>
            <Article commentsArray={comments}/>
            <Footer/>
        </div>
    );
}

export default App;
