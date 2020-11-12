import { useState, useEffect } from "react";
import Axios from "axios";


export const uesPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        Axios.get('/api/v1/posts').then(Response => {
            setPosts(Response.data);
            setIsLoading(false);
            if (Response.data.length === 0) {
                setIsEmpty(true);
            }
        }, () => {
            setIsLoading(false);
        });
    }, []);
    return { posts, setPosts, isLoading, setIsLoading, isEmpty, setIsEmpty }
};