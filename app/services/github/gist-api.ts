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

export const GistService = {
    getByUsername,
    getById,
}