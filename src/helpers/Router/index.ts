import NextJSRouter from 'next/router';


export const shallowRoute = (route: string) => {
    NextJSRouter.push(route, undefined, {shallow: true});
}