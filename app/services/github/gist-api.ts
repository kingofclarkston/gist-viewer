import got from 'got';
import config from '@app/config';
import logger from "@app/lib/logger";

const { githubUrl } = config;

// @ts-ignore
const apiClient = got.extend({
    retry: 10,
    prefixUrl: String(githubUrl),
    headers: {
        'Accept': 'application/vnd.github.v3+json'
    },
    responseType: 'json',
    resolveBodyOnly: true,
    hooks: {},
});

const getByUsername = (userName: string) => {
    try {
        return apiClient
            .get(`users/${userName}/gists`, {
            })
            .json();
    } catch (e) {
        logger.error(`Failed to retrieve gists for user ${userName}`, { e });
        throw e;
    }
};

const getById = (id: string) => {
    try {
        return apiClient
            .get(`gists/${id}`, {
            })
            .json();
    } catch (e) {
        logger.error(`Failed to retrieve gist ${id}`, { e });
        throw e;
    }
};

/**
 * This one requires authentication
 */
const getStarred = () => {
    try {
        return apiClient
            .get(`gists/starred`, {
            })
            .json();
    } catch (e) {
        logger.error(`Failed to retrieve starred gists`, { e });
        throw e;
    }
};

const starGist = (id: string) => {
    try {
        return apiClient
            .put(`gists/${id}/star`, {
            })
            .json();
    } catch (e) {
        logger.error(`Failed to star gist ${id}`, { e });
        throw e;
    }
};

const unStarGist = (id: string) => {
    try {
        return apiClient
            .delete(`gists/${id}/star`, {
            })
            .json();
    } catch (e) {
        logger.error(`Failed to un-star gist ${id}`, { e });
        throw e;
    }
};

export const GistService = {
    getByUsername,
    getById,
    getStarred,
    starGist,
    unStarGist,
}