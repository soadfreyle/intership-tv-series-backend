import express from 'express';
import indexRouter from './modules/core/routes/index.router';
import tvSeriesRouter from './modules/tv-series/routes/tv-series.router';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((rq, rs, next) => {
    rq.url = rq.url.replace('/intership/', '/');
    next();
});

app.use('/', indexRouter);
app.use('/V1/tv-series', tvSeriesRouter);

app.use((req, res) => {
    return res.status(404).json({message: `Route '${req.url}' not found`}).end();
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
