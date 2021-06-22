import { GistService } from '@app/services/github/gist-api';

const getGists = async (userName: string) => {
    return GistService.getByUsername(userName);
};

const getGist = async (id: string) => {
    return GistService.getById(id);
};

const getStarred = async () => {
    return GistService.getStarred();
};

const starGist = async (id: string) => {
    return GistService.starGist(id);
};

const unStarGist = async (id: string) => {
    return GistService.unStarGist(id);
};

export default {
    getGists,
    getGist,
    getStarred,
    starGist,
    unStarGist,
}