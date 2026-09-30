export type VideoCategory = 'other'

export interface VideoItem {
  id: string
  title: string
  src: string
  type: 'video/mp4' | 'video/webm'
  category: VideoCategory
  tags?: string[]
  date?: string
}

export const videos: VideoItem[] = []
