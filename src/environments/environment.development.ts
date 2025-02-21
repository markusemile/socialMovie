export const environment = {
    devloppment:true,
    production: false,
    movieDb:{
        headers:{
            'Accept':'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzA0ZDQwNmM3MDUyMzNjOWI2OTI4NzhlZjc4OWEwZiIsIm5iZiI6MTU1MjgyODg2Mi44ODQsInN1YiI6IjVjOGU0OWJlYzNhMzY4NjExMTRiYTQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P5Z5CM4ZS_QSvQqrcBg8cOX7eZmYfiCpM67K2yyN_Hg'
        },
        apiKey:'3304d406c705233c9b692878ef789a0f',
        api:{
            popular:'https://api.themoviedb.org/3/movie/popular',
            search:'https://api.themoviedb.org/3/search/movie',
            detail:'https://api.themoviedb.org/3/movie/',
            credits:'https://api.themoviedb.org/3/movie/{:id}/credits',
            posterList:'https://media.themoviedb.org/t/p/w220_and_h330_face/',
            posterDetail:'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/',
            background:'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/',
            creditIntoDetail : 'https://media.themoviedb.org/t/p/w138_and_h175_face/',
            creditDetail : 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/',
        }
    }
};
