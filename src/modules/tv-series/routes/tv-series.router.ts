import { Router, Request, Response } from "express";

class TvSeriesRouter {
    
    public router: Router = Router();
    private series: any;

    constructor() {
        this.config();
        this.series = [
                {
                    "name": "The Walking Dead",
                    "genero": "Apocalipsis zombi",
                    "año": "2010",
                    "numeroTemporada": 11,
                    "protagonistas": ["Rick Grimes", "Negan", "Daryl Dixon", "Maggie Greene", "Carl Grimes", "Glenn Rhee", "Michonne"]
                },
                {
                    "name": "The Peaky Blinders",
                    "genero": "Ficcion historica",
                    "año": "2013",
                    "numeroTemporada": 6,
                    "protagonistas": ["Tommy Shelby", "Grace Burgess", "Arthur Shelby", "Alfie Solomons", "Polly Gray", "Jhon Shelby", "Billy Kimber"]
                },
                {
                    "name": "The Last Kingdom",
                    "genero": "Aventura",
                    "año": "2015",
                    "numeroTemporada": 4,
                    "protagonistas": ["Uhtred of Bebbanburg", "Skade", "Brida", "Finan", "Gisela", "Thyra", "Sihtric"]
                },
                {
                    "name": "Vikings",
                    "genero": "Guerra",
                    "año": "2013",
                    "numeroTemporada": 6,
                    "protagonistas": ["Ladgerda", "Floki", "Ragnar Lothbrok", "Bjórn", "Athelstan", "Rollo", "Torvi"]
                },
                {
                    "name": "Love, Dead & Robots",
                    "genero": "Animacion para adultos",
                    "año": "2019",
                    "numeroTemporada": 2,
                    "protagonistas": ["Sonnie", "K-VRC", "Computer Voice", "The Witness", "Kali", "Bob", "Jennifer"]
                },
                {
                    "name": "Barrenderos Espaciales",
                    "genero": "Ciencia Ficcion",
                    "año": "2021",
                    "numeroTemporada": 1,
                    "protagonistas": ["James Sullivan", "Bubs", "Tae-ho", "Captain Jang", "Karum", "Dorothy", "Tiger Park"]
                },
                {
                    "name": "Cowboy Bebop",
                    "genero": "Anime",
                    "año": "1998",
                    "numeroTemporada": 26,
                    "protagonistas": ["Faye Valentine", "Spike Spiegel", "Ed", "Vicious", "Jet Black", "Jobim", "Punch"]
                },
                {
                    "name": "Pose",
                    "genero": "Drama",
                    "año": "2018",
                    "numeroTemporada": 3,
                    "protagonistas": ["Pray Tell", "Angel Evangelista", "Candy", "Lulu", "Blanca Rodriguez", "Florida Ferocity", "Aphrodite Xtravaganza"]
                },
                {
                    "name": "Lucifer",
                    "genero": "television de fantasia",
                    "año": "2016",
                    "numeroTemporada": 6,
                    "protagonistas": ["Lucifer", "Mazikeen", "Amenadiel", "Chloe Decker", "Rory", "Dan", "Ella Lopez"]
                },
                {
                    "name": "Baki Hanna",
                    "genero": "Anime",
                    "año": "2005",
                    "numeroTemporada": 4,
                    "protagonistas": ["Baki Hanna", "Kaoru Hanayama", "Retsu Kaiou", "Gouki Shibukawa", "Yuujirou Hanma", "Hector Doyle", "Hector Doyle"]
                },
                {
                    "name": "Alguien tiene que morir",
                    "genero": "Thiller",
                    "año": "2020",
                    "numeroTemporada": 3,
                    "protagonistas": ["Gabino", "Cayetana", "Gregorio Falcon", "Amparo Falcon", "Belen Aldana", "Lazaro", "Mina"]
                },
                {
                    "name": "The Midnight Gospel",
                    "genero": "Surrealismo",
                    "año": "2020",
                    "numeroTemporada": 1,
                    "protagonistas": ["Clancy Gilroy", "Universe simulador", "Captain Bryce", "Trudy the Love Barba", "Darryl the Fish", "Annie Deer Dog", "daniel Hoops"]
                },
                {
                    "name": "Sex Education",
                    "genero": "Comedia Dramatica",
                    "año": "2019",
                    "numeroTemporada": 3,
                    "protagonistas": ["Ruby Matthews", "Otis Milburn", "Eric Effiong", "Isaac", "Adam Groff", "Ola Numan", "Dra. Jean F. Milburn"]
                },
                {
                    "name": "Sabrina",
                    "genero": "Fantasia Oscura",
                    "año": "2018",
                    "numeroTemporada": 3,
                    "protagonistas": ["Sabrina Spellman", "Prudence", "Harvy Kinkle", "Caliban", "Ambrose Spellman", "Zelda Spellman", "Theo Putman"]
                },
                {
                    "name": "Stranger Things",
                    "genero": "Terror",
                    "año": "2016",
                    "numeroTemporada": 3,
                    "protagonistas": ["Once", "Billy Hargrove", "El Monstruo", "Will Byers", "Steve Harrington", "Mike Wheeler", "Max"]
                },
                {
                    "name": "Final Space",
                    "genero": "Ciencia Ficcion Fantastica",
                    "año": "2018",
                    "numeroTemporada": 3,
                    "protagonistas": ["Avocato", "Mooncake", "Litte Cato", "Lord Commander", "Ash Graven", "Sheryl Goodspeed", "Invictus"]
                },
                {
                    "name": "You",
                    "genero": "Thiller Psicologico",
                    "año": "2018",
                    "numeroTemporada": 3,
                    "protagonistas": ["Joe Goldberg", "Love Quinn", "Delilah Alves", "Peach Salinger", "Forty Quinn", "Marienne Bellamy", "Candace Stone"]
                },
                {
                    "name": "The Witcher",
                    "genero": "Ficcion Aventuras",
                    "año": "2019",
                    "numeroTemporada": 2,
                    "protagonistas": ["Yennefer de Vengerberg", "Ciri", "Geralt de Rivia", "Triss Merigold", "Jaskier", "Fringilla Vigo", "Voleth Meir"]
                },
                {
                    "name": "Emily en Paris",
                    "genero": "Comedia Romantica",
                    "año": "2020",
                    "numeroTemporada": 2,
                    "protagonistas": ["Alfie", "Gabriel", "Pierre Cadault", "Sylvie", "Emily Cooper", "Mindy Chen", "Camille"]
                },
                {
                    "name": "How to get away with a murder",
                    "genero": "Misterio",
                    "año": "2014",
                    "numeroTemporada": 6,
                    "protagonistas": ["Annalise Keating", "Wes Gibbins", "Asher Millstone", "Gabriel Maddox", "Frank Delfino", "Laurel Castillo", "Connor Wal"]
                }
            ]
    }

    private config(): void {
        this.router.get('/all', (req: Request,res: Response) => {
            res.status(200);
            res.json(this.series);
         });
    } 

}


const tvSeriesRouter = new TvSeriesRouter();
export default tvSeriesRouter.router;