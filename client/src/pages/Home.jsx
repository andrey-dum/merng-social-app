import React, { useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition  } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import { FETCH_POSTS_QUERY } from '../util/graphql';
import { AuthContext } from '../context/auth'
import PostForm from '../components/PostForm'




export default function Home() {
    const { user } = useContext(AuthContext)
    const { 
        loading, 
        data, 
        // data: { getPosts: posts }, 
        error 
    } = useQuery(FETCH_POSTS_QUERY) 

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    return (
        <Grid columns={3} divided>
            <Grid.Row>
               <h1 className="page__title">Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                { user && (
                    <Grid.Column>
                        <PostForm />
                    </Grid.Column>
                ) }
               { loading ? (
                   <h1>Loading...</h1>
               ) : (
                <Transition.Group>
                    { data && data.getPosts.map(post => (
                        <Grid.Column key={post.id} style={{marginBottom: 25}}>
                            <PostCard post={post} />
                        </Grid.Column>
                    )) }
                </Transition.Group>
               ) }
            </Grid.Row>

        </Grid>
    )
}

// const FETCH_POST_QUERY = gql`
//     {
//         getPosts{
//             id 
//             body 
//             createdAt 
//             username 
//             likeCount
//             likes{
//                 username
//             }
//             commentCount
//             comments{
//                 id 
//                 username 
//                 createdAt 
//                 body
//             }
//         }
//     }
// `
