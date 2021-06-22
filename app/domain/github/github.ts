import { GistService } from '@app/services/github/gist-api';

const getGists = async (userName: string) => {
    return GistService.getByUsername(userName);
};

export default {
    getGists,
}