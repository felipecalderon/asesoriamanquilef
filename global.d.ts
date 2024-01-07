type HeadersOption = {
    [key: string]: string
}

interface OptionsFetch  {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    headers: HeadersOption,
    body: string,
    cache?: RequestCache
};