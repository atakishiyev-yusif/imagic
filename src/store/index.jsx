import { create } from "zustand";

export const useStore = create((set) => ({
    posts: [],
    addPost: (id, text, description, username) => set((state) => ({
        posts: [...state.posts, { id, text, description, username }]
    })),
    removePost: (id) => set((state) => ({
        posts: state.posts.filter((post) => id!==post.id)
    })),

}))

useStore.subscribe(state => {
    localStorage.setItem('posts', JSON.stringify(state.posts))
})
