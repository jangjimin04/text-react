import React from "react";

class Book extends React.Component{
    state = {
        title:'해리포터',
        author:'조앤K롤링',
        summary:'해리포터 이야기',
        genre:'판타지 소설',
        release:'2003년 9월 4일',
        ISNB:'12345'
    }
    render(){
        const {title, author, summary, genre, release, ISNB} = this.state
        return(
            <>
                <h1>도서 정보</h1>
                <h3>제목 - {title}</h3>
                <h3>저자 - {author}</h3>
                <h3>줄거리 - {summary}</h3>
                <h3>장르 - {genre}</h3>
                <h3>출판일 - {release}</h3>
                <h3>ISNB - {ISNB}</h3>
            </>
        )
    }
}

export default Book