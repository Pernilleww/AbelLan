import useSWR from "swr";
import {Event} from "./Api"

const fetcher = (url:string) => fetch(url).then((res) => res.json());

export function useEvent(id: string){
    const { data, error } = useSWR<Event>(`http://localhost:8000/api/events/${id}`, fetcher)

    return {
        event: data,
        isLoading: !error && !data,
        isError: error,
    }
}