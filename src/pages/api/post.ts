import supabase from "@/db/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function post(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    //TODO: Normalize catagory_id and profile_id
    case "GET": {
      const { postId, published, slug } = req.query;

      if (slug) {
        let { data: post, error } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug);
        return res.status(200).json(post?.[0]);
      }
      if (postId) {
        // get individual post
        const { data } = await supabase
          .from("post")
          .select("*")
          .eq("id", postId);

        return res.status(200).json({ ...data });
      }
      // get all posts
      //TODO: verify id is published
      const { data: posts, error } = await supabase.from("posts").select("*");
      res.status(200).json(posts);

      return;
    }

    case "POST": {
      // create post

      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            slug: req.body.slug,
            category_id: req.body.categoryId,
            profile_id: req.body.profileId,
            published: req.body.published,
            image: req.body.image,
            imgBlurHash:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==",
          },
        ])
        .select();
      data && res.status(200).json(data);
      error && res.status(200).json(error);
      // try {
      //   const { data } = await supabase.from("post").upsert({
      //     title: req.body.title,
      //     description: req.body.description,
      //     content: req.body.content,
      //     slug: req.body.slug,
      //     category_id: req.body.categoryId,
      //     profile_id: req.body.profileId,
      //     published: req.body.published,
      //     image: req.body.image,
      //     imgBlurHash:
      //       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==",
      //     // content: [
      //     //   {
      //     //     type: "paragraph",
      //     //     children: [{ text: `Write about your post` }],
      //     //   },
      //     // ],
      //   });

      //   res.status(200).json({ postId: data[0].id });
      //   return;
      // } catch (error) {
      //   res.json({ error });
      // }
    }

    case "DELETE": {
      // delete post
      const { postId } = req.query;
      await supabase.from("post").delete().match({ id: postId });

      res.status(200).end();
      return;
    }
    case "PUT": {
      // publish post, update post content, update post settings
      const {
        id,
        title,
        description,
        content,
        slug,
        image,
        imgBlurHash,
        published,
      } = req.body;

      const { data } = await supabase.from("post").upsert({
        title,
        description,
        content,
        slug,
        image,
        imgBlurHash,
        published,
        id,
      });

      res.status(200).json(data);
    }
    default:
      res.status(405).end();
      return;
  }
}
