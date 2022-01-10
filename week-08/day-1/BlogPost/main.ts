/*Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.
*/
"use strict";
import { BlogPost } from "./blog-post";

let BlogPost1 = new BlogPost(
  "John Doe",
  "Lorem Ipsum",
  "Lorem ipsum dolor sit amet.",
  new Date("2000-05-04.")
);

let BlogPost2 = new BlogPost(
  "Tim Urban",
  "Wait but why",
  "A popular long-form, stick-figure-illustrated blog about almost everything.",
  new Date("2010-10-10.")
);

let BlogPost3 = new BlogPost(
  "William Turton",
  "One Engineer Is Trying to Get IBM to Reckon With Trump",
  "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.",
  new Date("2017-03-28.")
);

console.log(BlogPost1, BlogPost2, BlogPost3);
