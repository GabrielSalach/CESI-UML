class Post {
    id : BigInt;
    userId: string;
    content: string;
    createdAt: Date;
    user : User;
    tags : Array<Tag>;
}