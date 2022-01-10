/*Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/

"use strict";
import { PostIt } from "./post-it";

let PostIt1 = new PostIt("orange", "idea1", "blue");
let PostIt2 = new PostIt("pink", "black", "Awesome");
let PostIt3 = new PostIt("yellow", "green", "SuperB");

console.log(PostIt1, PostIt2, PostIt3);
