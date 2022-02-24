/*Reuse your BlogPost class
Create a Blog class which can:
store a list of BlogPosts
and has the following methods:
add(BlogPost) -> adds a BlogPost to the list
delete(int) -> deletes the BlogPost from the given index
update(int, BlogPost) -> replaces an item at the given index with a new BlogPost*/



import { BlogPost } from "../../../week-08/day-1/BlogPost/blog-post";

export class Blog {
    listOfBlogPosts: BlogPost [] = [];

add(BlogPost:BlogPost){
    this.listOfBlogPosts.push(BlogPost)
}

delete(index: number){
    if (index > this.listOfBlogPosts.length - 1) {
        throw new Error("Index is  bigger than the length of the array")
    }
    
    this.listOfBlogPosts.splice(index, 1);
}

update(index: number, BlogPostUpdate: BlogPost){
    if (index > this.listOfBlogPosts.length - 1) {
        throw new Error("Index is  bigger than the length of the array")
    }
    
    this.listOfBlogPosts[index] = BlogPostUpdate; 
    }
}

