import { httpClient } from "../config";
import { IIssue } from "./issue.interface";

const client = httpClient('https://cowderspictures.azurewebsites.net/api/')

export const IssueAPI = {
    get: async () => await (await client.get('issues')).data as IIssue[]
}