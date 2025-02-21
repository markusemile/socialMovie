export const environment = {
    devloppment:false,
    production: true,
    movieDb:{
        headers:{
            'Accept':'application/json',
            'Authorization':'Bearer {:token}'
        },
        api:{
            popular:'https://api.themoviedb.org/3/movie/popular',
            search:'https://api.themoviedb.org/3/search/movie',
            detail:'https://api.themoviedb.org/3/movie/{:id}',
            credits:'https://api.themoviedb.org/3/movie/{:id}/credits',
            posterList:'https://media.themoviedb.org/t/p/w220_and_h330_face/{:id}',
            posterDetail:'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/{:id}',
            background:'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/{:id}',
            creditIntoDetail : 'https://media.themoviedb.org/t/p/w138_and_h175_face/{:id}',
            creditDetail : 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/{:id}',
        }
    }
};
