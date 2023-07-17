import { Matchers, Pact } from '@pact-foundation/pact';
import BlogService from '../services/BlogService';
import BlogDTO from '../model/BlogDTO'

describe('Consumer Contract Test', () => {

    const blogService = new BlogService('http://localhost', global.port);
    describe('createBlog()', () => {
        beforeEach((done) => {
            /* const contentTypeJsonMatcher = Pact.Matchers.term({
                matcher: "application\\/json; *charset=utf-8",
                generate: "application/json; charset=utf-8"
            }); */

            global.provider.addInteraction({
                state: 'provider allows blog creation',
                uponReceiving: 'a POST to create a blog',
                withRequest: {
                    method: 'POST',
                    path: '/blogs',
                    headers: {
                        'Accept': 'application/json',
                        //'Content-Type': contentTypeJsonMatcher
                    },
                    body: new BlogDTO(null, 'Test title', 'Test content', ['automated', 'test'])
                },
                willRespondWith: {
                    status: 201,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:{
                        id: Matchers.like('1e8c53db-509a-478e-a1db-25c62f6fd930'),
                        name: 'Test title',
                        content: 'Test content',
                        tags: ['automated', 'test']
                    }
                }
            }).then(() => done());
        });

        it('sends a request according to contract', (done) => {
            console.log(blogService.baseUrl + ":" + blogService.port);
            blogService.createBlog(new BlogDTO(null, 'Test title', 'Test content', ['automated', 'test']))
            .then(response => {
                console.log("Requesting");
                const blog = response.data;
                expect(response.status).toEqual(201);
                //The other asserts
            })
            .then(() => {
                global.provider.verify()
                .then(() => done(), error => {
                    done.fail(error)
                })
            });
        });
    });
});
