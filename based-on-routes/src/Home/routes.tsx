import { RouteObject } from 'react-router-dom'
import Entrypoint from './Entrypoint'

export const homeRoute: RouteObject = {
    Component: Entrypoint,
    path: '/',
    errorElement: <h1>error home!</h1>
}