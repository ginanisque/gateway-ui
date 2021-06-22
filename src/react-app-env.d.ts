/// <reference types="react-scripts" />

interface Metadata {
  path?: string
  size: number
  type: string
  name: string
}

type FilePath = File & { path?: string }