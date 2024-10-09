import { CoreContent } from 'pliny/utils/contentlayer'
import { PostListWithTag } from '../components/PostListWithTag'
import { Blog } from '../types'

interface Props {
  posts: CoreContent<Blog>[]
  tagData: Record<string, number>
  title: string
}

export function BlogPage({ posts = [], tagData, title }: Props) {
  return <PostListWithTag posts={posts} tagData={tagData} title={title} />
}
