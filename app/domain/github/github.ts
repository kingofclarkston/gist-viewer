import { GistService } from '@app/services/github/gist-api';

const getGists = async (userName: string) => {
    return GistService.getByUsername(userName);
};

const getGist = async (id: string) => {
    return GistService.getById(id);
};

export default {
    getGists,
    getGist,
}