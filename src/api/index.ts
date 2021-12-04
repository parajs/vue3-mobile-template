import useAxiosApi from '@/utils/useAxiosApi';
import useFetchApi from '../utils/useFetchApi';

/**
 * useFetchApi usage example
 * @returns Axios
 */
export function api_index_list(){
    return useFetchApi('subject/index/list',{method: 'GET'});
}

/**
 * useAxiosApi usage example
 * @returns UseAxiosReturn
 */
export function api_subindex_list(params: AnyObject){
    return useAxiosApi('subject/index/list',{method: 'GET',params});
}


