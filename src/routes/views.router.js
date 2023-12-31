import { Router } from "express";
import { userManagerClass } from "../dao/FS/UserManager.js";
import {productManagerClass} from "../dao/FS/productManager.js";

const router = Router()

router.get('/home',async (req,res) => {
    const products = await productManagerClass.getProducts();
    res.render('home',{products, style:'list.css'})
})

router.get('/realtimeproducts',(req,res) => {
    res.render('realtimeproducts')
})

router.get('/addproduct',async (req,res) => {
    res.render('addProduct',{style:'list.css'})
})

router.get('/chat',(req,res) => {
    res.render('chat')
})

router.get('/signup',(req,res) => {
    res.render('signup',{style: 'signup.css'})
})

router.get('/signupresponse/:idUser',async(req,res) => {
    const {idUser} = req.params
    const user = await userManagerClass.getUsersbyID(+idUser)
    // console.log({...user});
    res.render('signupresponse',{user, style:'signup.css'})
})

router.get('/allusers',async(req,res) => {
    const user = await userManagerClass.getUsers();
    res.render('allUsers',{user, style:'list.css'})
})

router.get('/',(req,res) => {
    res.render('websocket',{style:'list.css'})
})

export default router