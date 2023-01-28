import { getAllPostsIds, getPostData } from "../../components/posts";


const Post = ({postData}) => {

    console.log(postData)

    return ( 
        <>
        </>
    );
}
 
export default Post;

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    console.log(postData)

    //const postData = {id: 'Test'}
    //const test = typeof(postData)
    const test = params.id

    return {
      props: {
        test,
      },
    };
  }

export async function getStaticPaths () {
    const temp = getAllPostsIds();

    console.log(temp)

    return {paths: [
        { params: {id: '1'}},
        { params: {id: '2'}},
    ], fallback: false};
}