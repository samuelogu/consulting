import {Jumbotron} from "../layout/Jumbotron.tsx";
import {useEffect, useState} from "react";
import axios from "axios"

interface Posts {
    title: string;
    id: number;
    thumbnail: string;
}

export function Home() {

    const [posts, setPosts] = useState<Posts[]>([]);

    const getPosts = () => {
        return axios('https://jsonplaceholder.typicode.com/posts').then(res => {
            const data = res.data.slice(0, 10)
            getPhotos(data);
        });
    }

    const getPhotos = (posts: Posts[]) => {
        return axios('https://jsonplaceholder.typicode.com/photos').then(res => {
            let data = res.data;
            data = data.splice(0, 10);
            posts.map((_post, key) => {
                    posts[key].thumbnail = data[key].thumbnailUrl;
            })
            setPosts(posts)
        });
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Jumbotron title="Title of a longer featured blog post" text="Multiple lines of text that form the lede, informing new readers quickly
                        and efficiently about what’s most interesting in this post’s contents."/>

            <div className="row mb-2">
                {posts.map((post) => (
                    <div className="col-md-6" key={post.id}>
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">{post.title}</h3>
                                <div className="mb-1 text-body-secondary">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a
                                    natural lead-in to additional content.</p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={ post.thumbnail ? post.thumbnail : 'https://placehold.co/150' } alt="thumbnail"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}