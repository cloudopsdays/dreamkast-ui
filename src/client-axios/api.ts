/* tslint:disable */
/* eslint-disable */
/**
 * Dreamkast API
 * This is a API definition of the Dreamakst. You can find a documentation of this API at http://api-docs.dev.cloudnativedays.jp/.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ChatMessage
 */
export interface ChatMessage {
    /**
     * 
     * @type {number}
     * @memberof ChatMessage
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ChatMessage
     */
    eventAbbr: string;
    /**
     * 
     * @type {number}
     * @memberof ChatMessage
     */
    roomId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChatMessage
     */
    roomType?: string;
    /**
     * 
     * @type {string}
     * @memberof ChatMessage
     */
    body: string;
    /**
     * 
     * @type {string}
     * @memberof ChatMessage
     */
    createdAt?: string;
}
/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {number}
     * @memberof Event
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    abbr: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    theme: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    about: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    privacy_policy: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    privacy_policy_for_speaker: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    copyright: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    coc: string;
}
/**
 * 
 * @export
 * @interface Sponsor
 */
export interface Sponsor {
    /**
     * 
     * @type {number}
     * @memberof Sponsor
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Sponsor
     */
    eventAbbr: string;
    /**
     * 
     * @type {string}
     * @memberof Sponsor
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Sponsor
     */
    abbr: string;
    /**
     * 
     * @type {string}
     * @memberof Sponsor
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof Sponsor
     */
    logo_url: string;
}
/**
 * 
 * @export
 * @interface Talk
 */
export interface Talk {
    /**
     * 
     * @type {number}
     * @memberof Talk
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Talk
     */
    trackId: number;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    videoPlatform?: string;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    videoId: string;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    _abstract: string;
    /**
     * array of speakers name
     * @type {Array<string>}
     * @memberof Talk
     */
    speakers: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Talk
     */
    dayId: number;
    /**
     * 
     * @type {boolean}
     * @memberof Talk
     */
    showOnTimetable: boolean;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    startTime: string;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    endTime: string;
    /**
     * 
     * @type {number}
     * @memberof Talk
     */
    talkDuration: number;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    talkDifficulty: string;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    talkCategory: string;
    /**
     * 
     * @type {boolean}
     * @memberof Talk
     */
    onAir?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Talk
     */
    documentUrl?: string;
}
/**
 * 
 * @export
 * @interface Track
 */
export interface Track {
    /**
     * 
     * @type {number}
     * @memberof Track
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    videoPlatform?: string;
    /**
     * 
     * @type {string}
     * @memberof Track
     */
    videoId?: string;
}

/**
 * ChatMessageApi - axios parameter creator
 * @export
 */
export const ChatMessageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {string} roomId ID of chat room
         * @param {string} roomType Type of chat room
         * @param {string} [createdFrom] YYYY-MM-DDThh:mm:ss+TZD (use UTC)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ChatMessagesGet: async (eventAbbr: string, roomId: string, roomType: string, createdFrom?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventAbbr' is not null or undefined
            assertParamExists('apiV1ChatMessagesGet', 'eventAbbr', eventAbbr)
            // verify required parameter 'roomId' is not null or undefined
            assertParamExists('apiV1ChatMessagesGet', 'roomId', roomId)
            // verify required parameter 'roomType' is not null or undefined
            assertParamExists('apiV1ChatMessagesGet', 'roomType', roomType)
            const localVarPath = `/api/v1/chat_messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventAbbr !== undefined) {
                localVarQueryParameter['eventAbbr'] = eventAbbr;
            }

            if (roomId !== undefined) {
                localVarQueryParameter['roomId'] = roomId;
            }

            if (roomType !== undefined) {
                localVarQueryParameter['roomType'] = roomType;
            }

            if (createdFrom !== undefined) {
                localVarQueryParameter['createdFrom'] = (createdFrom as any instanceof Date) ?
                    (createdFrom as any).toISOString() :
                    createdFrom;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Post Chat Message
         * @param {ChatMessage} [chatMessage] chat message to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ChatMessagesPost: async (chatMessage?: ChatMessage, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/chat_messages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(chatMessage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChatMessageApi - functional programming interface
 * @export
 */
export const ChatMessageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChatMessageApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {string} roomId ID of chat room
         * @param {string} roomType Type of chat room
         * @param {string} [createdFrom] YYYY-MM-DDThh:mm:ss+TZD (use UTC)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ChatMessagesGet(eventAbbr: string, roomId: string, roomType: string, createdFrom?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ChatMessage>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ChatMessagesGet(eventAbbr, roomId, roomType, createdFrom, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Post Chat Message
         * @param {ChatMessage} [chatMessage] chat message to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1ChatMessagesPost(chatMessage?: ChatMessage, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ChatMessagesPost(chatMessage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChatMessageApi - factory interface
 * @export
 */
export const ChatMessageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChatMessageApiFp(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {string} roomId ID of chat room
         * @param {string} roomType Type of chat room
         * @param {string} [createdFrom] YYYY-MM-DDThh:mm:ss+TZD (use UTC)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ChatMessagesGet(eventAbbr: string, roomId: string, roomType: string, createdFrom?: string, options?: any): AxiosPromise<Array<ChatMessage>> {
            return localVarFp.apiV1ChatMessagesGet(eventAbbr, roomId, roomType, createdFrom, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Post Chat Message
         * @param {ChatMessage} [chatMessage] chat message to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ChatMessagesPost(chatMessage?: ChatMessage, options?: any): AxiosPromise<void> {
            return localVarFp.apiV1ChatMessagesPost(chatMessage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChatMessageApi - object-oriented interface
 * @export
 * @class ChatMessageApi
 * @extends {BaseAPI}
 */
export class ChatMessageApi extends BaseAPI {
    /**
     * 
     * @param {string} eventAbbr abbr of event (e.g. cndt2020)
     * @param {string} roomId ID of chat room
     * @param {string} roomType Type of chat room
     * @param {string} [createdFrom] YYYY-MM-DDThh:mm:ss+TZD (use UTC)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatMessageApi
     */
    public apiV1ChatMessagesGet(eventAbbr: string, roomId: string, roomType: string, createdFrom?: string, options?: any) {
        return ChatMessageApiFp(this.configuration).apiV1ChatMessagesGet(eventAbbr, roomId, roomType, createdFrom, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Post Chat Message
     * @param {ChatMessage} [chatMessage] chat message to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatMessageApi
     */
    public apiV1ChatMessagesPost(chatMessage?: ChatMessage, options?: any) {
        return ChatMessageApiFp(this.configuration).apiV1ChatMessagesPost(chatMessage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventAbbr ID of event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1EventsEventAbbrGet: async (eventAbbr: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventAbbr' is not null or undefined
            assertParamExists('apiV1EventsEventAbbrGet', 'eventAbbr', eventAbbr)
            const localVarPath = `/api/v1/events/{eventAbbr}`
                .replace(`{${"eventAbbr"}}`, encodeURIComponent(String(eventAbbr)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr ID of event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1EventsEventAbbrGet(eventAbbr: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1EventsEventAbbrGet(eventAbbr, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventApiFp(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr ID of event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1EventsEventAbbrGet(eventAbbr: string, options?: any): AxiosPromise<Event> {
            return localVarFp.apiV1EventsEventAbbrGet(eventAbbr, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventApi - object-oriented interface
 * @export
 * @class EventApi
 * @extends {BaseAPI}
 */
export class EventApi extends BaseAPI {
    /**
     * 
     * @param {string} eventAbbr ID of event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public apiV1EventsEventAbbrGet(eventAbbr: string, options?: any) {
        return EventApiFp(this.configuration).apiV1EventsEventAbbrGet(eventAbbr, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SponsorApi - axios parameter creator
 * @export
 */
export const SponsorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1SponsorsGet: async (eventAbbr: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventAbbr' is not null or undefined
            assertParamExists('apiV1SponsorsGet', 'eventAbbr', eventAbbr)
            const localVarPath = `/api/v1/sponsors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventAbbr !== undefined) {
                localVarQueryParameter['eventAbbr'] = eventAbbr;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SponsorApi - functional programming interface
 * @export
 */
export const SponsorApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SponsorApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1SponsorsGet(eventAbbr: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Sponsor>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1SponsorsGet(eventAbbr, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SponsorApi - factory interface
 * @export
 */
export const SponsorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SponsorApiFp(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1SponsorsGet(eventAbbr: string, options?: any): AxiosPromise<Array<Sponsor>> {
            return localVarFp.apiV1SponsorsGet(eventAbbr, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SponsorApi - object-oriented interface
 * @export
 * @class SponsorApi
 * @extends {BaseAPI}
 */
export class SponsorApi extends BaseAPI {
    /**
     * 
     * @param {string} eventAbbr abbr of event (e.g. cndt2020)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SponsorApi
     */
    public apiV1SponsorsGet(eventAbbr: string, options?: any) {
        return SponsorApiFp(this.configuration).apiV1SponsorsGet(eventAbbr, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TalkApi - axios parameter creator
 * @export
 */
export const TalkApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {string} [trackId] ID of track
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TalksGet: async (eventAbbr: string, trackId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventAbbr' is not null or undefined
            assertParamExists('apiV1TalksGet', 'eventAbbr', eventAbbr)
            const localVarPath = `/api/v1/talks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventAbbr !== undefined) {
                localVarQueryParameter['eventAbbr'] = eventAbbr;
            }

            if (trackId !== undefined) {
                localVarQueryParameter['trackId'] = trackId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} talkId ID of talk
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TalksTalkIdGet: async (talkId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'talkId' is not null or undefined
            assertParamExists('apiV1TalksTalkIdGet', 'talkId', talkId)
            const localVarPath = `/api/v1/talks/{talkId}`
                .replace(`{${"talkId"}}`, encodeURIComponent(String(talkId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TalkApi - functional programming interface
 * @export
 */
export const TalkApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TalkApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {string} [trackId] ID of track
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TalksGet(eventAbbr: string, trackId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Talk>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1TalksGet(eventAbbr, trackId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} talkId ID of talk
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TalksTalkIdGet(talkId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Talk>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1TalksTalkIdGet(talkId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TalkApi - factory interface
 * @export
 */
export const TalkApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TalkApiFp(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {string} [trackId] ID of track
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TalksGet(eventAbbr: string, trackId?: string, options?: any): AxiosPromise<Array<Talk>> {
            return localVarFp.apiV1TalksGet(eventAbbr, trackId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} talkId ID of talk
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TalksTalkIdGet(talkId: string, options?: any): AxiosPromise<Talk> {
            return localVarFp.apiV1TalksTalkIdGet(talkId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TalkApi - object-oriented interface
 * @export
 * @class TalkApi
 * @extends {BaseAPI}
 */
export class TalkApi extends BaseAPI {
    /**
     * 
     * @param {string} eventAbbr abbr of event (e.g. cndt2020)
     * @param {string} [trackId] ID of track
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TalkApi
     */
    public apiV1TalksGet(eventAbbr: string, trackId?: string, options?: any) {
        return TalkApiFp(this.configuration).apiV1TalksGet(eventAbbr, trackId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} talkId ID of talk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TalkApi
     */
    public apiV1TalksTalkIdGet(talkId: string, options?: any) {
        return TalkApiFp(this.configuration).apiV1TalksTalkIdGet(talkId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TrackApi - axios parameter creator
 * @export
 */
export const TrackApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TracksGet: async (eventAbbr: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventAbbr' is not null or undefined
            assertParamExists('apiV1TracksGet', 'eventAbbr', eventAbbr)
            const localVarPath = `/api/v1/tracks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventAbbr !== undefined) {
                localVarQueryParameter['eventAbbr'] = eventAbbr;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} trackId ID of track
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TracksTrackIdGet: async (trackId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackId' is not null or undefined
            assertParamExists('apiV1TracksTrackIdGet', 'trackId', trackId)
            const localVarPath = `/api/v1/tracks/{trackId}`
                .replace(`{${"trackId"}}`, encodeURIComponent(String(trackId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TrackApi - functional programming interface
 * @export
 */
export const TrackApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TrackApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TracksGet(eventAbbr: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Track>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1TracksGet(eventAbbr, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} trackId ID of track
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TracksTrackIdGet(trackId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Track>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1TracksTrackIdGet(trackId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TrackApi - factory interface
 * @export
 */
export const TrackApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TrackApiFp(configuration)
    return {
        /**
         * 
         * @param {string} eventAbbr abbr of event (e.g. cndt2020)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TracksGet(eventAbbr: string, options?: any): AxiosPromise<Array<Track>> {
            return localVarFp.apiV1TracksGet(eventAbbr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} trackId ID of track
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TracksTrackIdGet(trackId: string, options?: any): AxiosPromise<Track> {
            return localVarFp.apiV1TracksTrackIdGet(trackId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TrackApi - object-oriented interface
 * @export
 * @class TrackApi
 * @extends {BaseAPI}
 */
export class TrackApi extends BaseAPI {
    /**
     * 
     * @param {string} eventAbbr abbr of event (e.g. cndt2020)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackApi
     */
    public apiV1TracksGet(eventAbbr: string, options?: any) {
        return TrackApiFp(this.configuration).apiV1TracksGet(eventAbbr, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} trackId ID of track
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackApi
     */
    public apiV1TracksTrackIdGet(trackId: string, options?: any) {
        return TrackApiFp(this.configuration).apiV1TracksTrackIdGet(trackId, options).then((request) => request(this.axios, this.basePath));
    }
}


