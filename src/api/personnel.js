// @flow
export default class Personnel{

    path(): string {
        return '/personnel';
    }

    create(request: Object): Object{
        return request.payload; 
    }

    read(request: Object): Object{
        console.log('Request::', request.params);
        return request.paramsArray;
    }

    update(): string {
        return '';
    }

    delete(request: Object): Object{
        return request.params; 
    }

}
