import { TPosts } from "@/types";
import Api from "./core";

class Posts extends Api {
  async getAll() {
    return this.get<TPosts[]>("/post");
  }

  async getBySlug(slug: string) {
    return this.get<TPosts>(`/post?slug=${slug}`);
  }
}

const PostsRepository = new Posts();
export default PostsRepository;
