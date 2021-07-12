import { createStore } from 'redux'

const initialState = {
    players: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/212711263_154794683300226_5488607928232977052_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Mb936QXmo_AAX9vjyas&tn=XegcD2hJaD36qTbT&_nc_ht=scontent.fuio5-1.fna&oh=f08d3af5e575e1426215420e61856bc2&oe=60F13482"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/212711263_154794683300226_5488607928232977052_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Mb936QXmo_AAX9vjyas&tn=XegcD2hJaD36qTbT&_nc_ht=scontent.fuio5-1.fna&oh=f08d3af5e575e1426215420e61856bc2&oe=60F13482"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/213191825_874399350101831_7300388980111547420_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=s3EfkjcVfXAAX9HZayH&tn=XegcD2hJaD36qTbT&_nc_ht=scontent.fuio5-1.fna&oh=03f5de5624a72a9a5e3fb15e61f71fc3&oe=60F19C72"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/216800343_840858280191340_157473480482128923_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=CJ003vYwt4IAX8--v_K&_nc_ht=scontent.fuio5-1.fna&oh=15ef5b2a4098fceb717cd4be212d7cfd&oe=60F127F4"
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/216881155_510619670055473_4304068614561059339_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=4gixScR_aK8AX9EHjZv&_nc_oc=AQl-SJ_hr306ZyITfRpaK7Hq-KVkCpGuGIF7lGS17IUGwMNDTSzdB2p8qJVNLntwVa4&_nc_ht=scontent.fuio5-1.fna&oh=5400e2150a4be94127b377cab2f2a3cf&oe=60F1DC85"
        },
        {
            id: 11,
            nombre: "Ricardo Otero",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/217979295_547561580008529_670922744901444913_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=BW4ZtUNXr_cAX9dIqLK&_nc_ht=scontent.fuio5-1.fna&oh=951f64c340c87d04d46c5d098c77df6a&oe=60F1DCFD"
        },
        {
            id: 12,
            nombre: "Deivis Rivera",
            img: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/217979295_547561580008529_670922744901444913_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=BW4ZtUNXr_cAX9dIqLK&_nc_ht=scontent.fuio5-1.fna&oh=951f64c340c87d04d46c5d098c77df6a&oe=60F1DCFD"
        },
    ],
    titulares: [],
    suplentes: []
}



const reducerTrainner = (state = initialState, action) => {
    if (action.type === "ADD_PLAYER") {
        return {
            ...state,
            titulares: state.titulares.concat(action.play),
            players: state.players.filter(p => p.id !== action.play.id)
        }
    }
    if (action.type === "ADD_SUPLENT") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.play),
            players: state.players.filter(p => p.id !== action.play.id)
        }
    }

    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(p => p.id !== action.play.id),
            players: state.players.concat(action.play)
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(p => p.id !== action.play.id),
            players: state.players.concat(action.play)
        }
    }


    return state
}

export default createStore(reducerTrainner)

