import BlogList from "./BlogList";
import useFetch from "./useFetch"

const Home = () => {

    // const [name, setName] = useState('mario') // useState returns 2 things, the variable and then a function to set it
    // const [age, setAge] = useState(25)

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title='All Blogs'/>}
        </div>
    )
}
 
export default Home;