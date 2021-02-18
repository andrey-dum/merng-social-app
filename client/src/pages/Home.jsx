import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

const FETCH_POST_QUERY = gql`
    {
        getPosts{
            id 
            body 
            createdAt 
            username 
            likeCount
            likes{
                username
            }
            commentCount
            comments{
                id 
                username 
                createdAt 
                body
            }
        }
    }
`


export default function Home() {
    const { 
        loading, 
        data, 
        // data: { getPosts: posts }, 
        error 
    } = useQuery(FETCH_POST_QUERY) 

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    return (
        <Grid columns={3} divided>
            <Grid.Row>
               <h1 className="page__title">Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
               { loading ? (
                   <h1>Loading...</h1>
               ) : (
                data?.getPosts.map(post => (
                    <Grid.Column key={post.id} style={{marginBottom: 25}}>
                        <PostCard post={post} />
                    </Grid.Column>
                ))
               ) }
            </Grid.Row>

        </Grid>
    )
}


