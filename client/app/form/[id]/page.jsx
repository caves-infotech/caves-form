// app/posts/[id]/page.js
"use client";
import { useParams } from 'next/navigation';

const Page = () => {
    const { id } = useParams(); // Access the dynamic route parameter

    return (
        <div>
            <h1>Post ID: {id}</h1>
            {/* You can fetch data using the id to display the post content */}
        </div>
    );
};

export default Page;
