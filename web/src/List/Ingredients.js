import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, ImageField } from 'react-admin';
import useStyles from "../hooks/useStyles";
import PostPagination from "../Pagination/PostPagination";

export const IngredientList = (props) => { 
    const classes = useStyles();
    return (
    <List {...props} title="Storage" >
        <Datagrid>
            <ImageField source="imgUrl" label="Image"  className={classes.imgContainer}/>
            <TextField source="name" label="Name" />
            <TextField source="quantity" label="Quantity"/>
            <EditButton basePath="./ingredients"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
)};