/*Create a BlogPost class that has
an authorName
a title
a text
a publicationDate*/
export class BlogPost {
  private authorName: string;
  private title: string;
  private text: string;
  private publicationDate: Date;

  constructor(authorName: string, title: string, text: string, publicationDate: Date) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}
