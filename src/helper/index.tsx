import axios from "axios";
import { useQuery, useMutation } from '@tanstack/react-query';

// Fetch all articles
const fetchArticles = () => {
  return (
    axios.get(`https://gamersguild-v1.herokuapp.com/api/v1/articles`)
  )
}

export const useArticlesQuery = () => {
  return useQuery(["articlesData"], () => fetchArticles())
}

// Create article
interface ArticleData {
  title: string;
  thumbnail: any;
  content: string;
  category: string;
  tags: string[];
}

// Get single article

const fetchArticle = (article_id:string | undefined) => {
  return (
    axios.get(`https://gamersguild-v1.herokuapp.com/api/v1/articles/${article_id}`)
  )
}

export const useArticleQuery = (article_id:string | undefined) => {
  console.log("soemthing work", article_id)
  return useQuery(["singleArticle", article_id], () => fetchArticle(article_id))
}

export const postArticle = (data:ArticleData|void, token:string) => {
  console.log("tk here", token)
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  return (
    axios.post(`https://gamersguild-v1.herokuapp.com/api/v1/articles`, data, config)
  )
}

// User Sign Up
interface SignUpData {
  fullname: string;
  email: string;
  username: string;
  password: string;
}

export const postSignUp = (data:SignUpData|void) => {
  return (
    axios.post(`https://gamersguild-v1.herokuapp.com/api/v1/users/signup`, data)
  )
}

// User login
interface LoginData {
  username: string;
  password: string;
}

export const postLogin = (data:LoginData|void) => {
  return (
    axios.post(`https://gamersguild-v1.herokuapp.com/api/v1/users/login`, data)
  )
}

// Get single user
const config = {
  headers: {
    "Authorization": `Token`
  }
}

const fetchUser = () => {
  return (
    axios.get(`https://gamersguild-v1.herokuapp.com/api/v1/users/me`, config)
  )
}

export const useUserQuery = () => {
  return useQuery(["userData"], () => fetchUser())
}

// Get all users

const fetchUsers = () => {
  return (
    axios.get(`https://gamersguild-v1.herokuapp.com/api/v1/users`)
  )
}

export const useUsersQuery = () => {
  return useQuery(["allUsersData"], () => fetchUsers())
}
