import { createBrowserRouter } from 'react-router-dom'
import App from '../components/App'
import Error404 from '../components/pages/Error404'
import { Children } from 'react'
import HomePage from '../components/pages/HomePage'
import Company from '../components/pages/Company'
import Services from '../components/pages/Services'
import TheProof from '../components/pages/TheProof'
import Careers from '../components/pages/Careers'
import Blog, { loaderBlog } from '../components/pages/Blog'
import Post, { loaderPost } from '../components/pages/Post'
import GetAnEstimate from '../components/pages/GetanEstimate'

const router =createBrowserRouter([

    {
        path:"/",
        element: <App />,
        errorElement: <Error404 />,
        Children:[
            {
                errorElement: <Error404 />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "/company",
                        element: <Company />,
                    },
                    {
                        path: "/services",
                        element: <Services />,
                    },
                    {
                        path: "/theProof",
                        element: <TheProof />,
                    },
                    {
                        path: "/careers",
                        element: <Careers />,
                    },
                    {
                        path: "/blog",
                        element: <Blog />,
                        loader: loaderBlog,
                    },
                    {
                        path: "/blog/:id",
                        element: <Post />,
                        loader: loaderPost,
                    },
                    {
                        path: "/getAnEstimate",
                        element: <GetAnEstimate />,
                    },
                ]
            }
        ]
    }

])
  

export default router
