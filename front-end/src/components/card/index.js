import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import useStyles from './style.js';
import perfilTeste from '../../assets/perfilTeste.png'
import './style.js'
import UseConsumirDados from '../../hooks/useConsumir';
import useRequisicoes from '../../hooks/useRequisicoes.js';
import ModalEditar from '../modalEditar/index.js';

export default function CardItem({ item }) {
    const { alert, setAlert, setEditando, setNome, setValor, setDescricao } = UseConsumirDados()
    const { removerProduto } = useRequisicoes()
    const { nome, valor } = item.produto

    const classes = useStyles();

    async function handleClickRemover(item) {
        if (window.confirm('Deseja excluir este produto permanentemente')) {
            await removerProduto(item)
            setAlert(!alert)
        } else {
            return
        }
    }



    async function handleClickEditar(item) {
        const { nome, valor, descricao } = item.produto
        setEditando(item)
        setNome(nome)
        setValor(valor)
        setDescricao(descricao)
    }
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.content}>
                <Typography className={classes.font} gutterBottom variant="h5" component="h2">
                    {nome}
                </Typography>

                <CardMedia
                    className={classes.media}
                    image={perfilTeste}
                    title="Contemplative Reptile"
                />
                <CardContent>

                    <Typography className={classes.font} variant="body2" color="textSecondary" component="p">
                        R$ {(valor / 100).toFixed(2).replace(".", ",")}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleClickEditar(item)} className={classes.button} size="large" color="primary">
                    <EditIcon />
                </Button>
                <Button onClick={() => handleClickRemover(item)} className={classes.button} size="large" color="primary">
                    <DeleteIcon />
                </Button>
            </CardActions>
        </Card>
    );
}
