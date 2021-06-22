# Gist Viewer API

A Github gist API wrapper

# Getting started
- Clone the repository
```
git clone git@github.com:kingofclarkston/gist-viewer.git
```
- From the project root:
```
docker-compose up
```

## Available Endpoints
- Use the included Postman collection, or the following curls:
#### Get all public gists for a user
```
curl --location --request GET 'localhost:4000/api/v1/gists/?userName=kingofclarkston'
```
#### Get a gist by id
```
curl --location --request GET 'localhost:4000/api/v1/gists/94899e42f7ac0caa4c02b4617499cfae'
```
#### Star a gist
```
curl --location --request PUT 'localhost:4000/api/v1/gists/94899e42f7ac0caa4c02b4617499cfae/star'
```
#### Un-star a gist
```
curl --location --request DELETE 'localhost:4000/api/v1/gists/94899e42f7ac0caa4c02b4617499cfae/star'
```
#### Get all starred public gists (requires authentication)
```
curl --location --request GET 'localhost:4000/api/v1/gists/starred'
```

### Some Notes:
- List all starred gists requires authentication
- Missing tests
