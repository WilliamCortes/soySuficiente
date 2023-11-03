export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
      }
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: number
          post_id: number | null
          profile_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: number
          post_id?: number | null
          profile_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: number
          post_id?: number | null
          profile_id?: string
        }
      }
      posts: {
        Row: {
          category_id: number | null
          content: string
          created_at: string | null
          id: number
          profile_id: string
          status: string
          title: string
        }
        Insert: {
          category_id?: number | null
          content: string
          created_at?: string | null
          id?: number
          profile_id: string
          status?: string
          title: string
        }
        Update: {
          category_id?: number | null
          content?: string
          created_at?: string | null
          id?: number
          profile_id?: string
          status?: string
          title?: string
        }
      }
      posts_tags: {
        Row: {
          created_at: string | null
          id: number
          id_post: number | null
          id_tag: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          id_post?: number | null
          id_tag?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          id_post?: number | null
          id_tag?: number | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      tags: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
