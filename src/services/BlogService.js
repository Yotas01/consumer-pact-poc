import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

class BlogService {
    
    constructor(baseUrl, port){
        this.baseUrl = baseUrl;
        this.port = port;
    }

    createBlog(blog) {
        console.log(this.baseUrl + ":" + this.port);
        return axios.request({
            method: 'POST',
            url: 'blogs',
            baseUrl: `${this.baseUrl}:${this.port}`,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: blog
        }, adapter);
    }

    getBlogs(){
        return axios.request({
            method: 'GET',
            url: 'blogs',
            baseUrl: `${this.baseUrl}:${this.port}`,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }, adapter);
    }
}

export default BlogService;