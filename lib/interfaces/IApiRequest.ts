export interface IApiRequest{
    url:string,
    method:'POST'|'GET'|'PUT'|'DELETE'
    body: string
}