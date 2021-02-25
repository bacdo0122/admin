import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios';
const apiUrl = 'https://601bf31d1a9c22001705ffec.mockapi.io/example/project';

const httpClient = fetchUtils.fetchJson;

export default {

    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;



        if (Object.keys(params.filter).length == 0) {
            var query = {
                page,
                limit: perPage,
                sortBy: field,
                order: order.toLowerCase(),

            };
        }
        if (Object.keys(params.filter).length > 0 && Object.keys(params.filter) == 'q') {
            var query = {
                page,
                limit: perPage,
                sortBy: field,
                order: order.toLowerCase(),

            };

            query['search'] = Object.values(params.filter);

        }
        if (Object.keys(params.filter).length > 0 && Object.keys(params.filter) != 'q') {
            var query = Object.assign(Object.assign({}, fetchUtils.flattenObject(params.filter)), {
                page,
                limit: perPage,
                sortBy: field,
                order: order.toLowerCase(),

            });
        }

        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        console.log(httpClient(url));

        const totalUrl = `${apiUrl}/${resource}`
        const total = await httpClient(totalUrl)
        // phe oc cho  oc ok cchuautw  
        return httpClient(url).then(({ headers, json }) => {
            console.log(json);
            return ({
                data: json.data,
                total: total.json.total

            })



        });
    },

    getOne: (resource, params) => {
        console.log(resource, typeof (params.id));
        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
            console.log(json);
            return ({
                data: { ...params.data, id: json.id },
            })
        })
    },


    getMany: (resource, params) => {

        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        console.log('a');
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) => {

        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            console.log(json);
            return ({ data: json })
        })
    },



    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) => {

        return httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            console.log(parseInt(json.id));
            return ({
                data: { ...params.data, id: json.id },
            })
        })
    },

    delete: (resource, params) => (
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }))
    ),


    deleteMany: function (resource, params) {
        return Promise.all(params.ids.map(function (id) {
            return httpClient(apiUrl + "/" + resource + "/" + id, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'text/plain',
                }),
            });
        })).then(function (responses) {
            return ({
                data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                })
            });
        })
    }

};