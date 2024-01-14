import { http, HttpResponse } from "msw";
import slideData from './slider.json';
import overviewData from './overview.json'

function githubApi(path){
    return `/${path}`
}
export const handlers = [
    http.get(githubApi('slides'), (req, res, ctx)=>{
        return HttpResponse.json(slideData)
    }),
    http.get(githubApi('overview-list'), (req, res, ctx)=>{
        return HttpResponse.json(overviewData)
    }),
  ]